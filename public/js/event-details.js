const getCookies = () => {
    const allCookies = document.cookie;
    const cookiePairs = allCookies.split("; ");
    return cookiePairs;
  };

  const getCookieValue = (name) => {
    const cookiePairs = getCookies();
    for (let i = 0; i < cookiePairs.length; i++) {
      const cookie = cookiePairs[i];
      let [key, value] = cookie.split("=");
      if (name === key) {
        return value;
      }
    }
    return null;
  };

const getToken = () => {

    return document.cookie.split("; ").find((cookie) => {
        const [key, value] = cookie.split("=");
        return key === "token";
    });
};

const getUser = () => {
    const token = getToken();
    if(!token) return;

    const payloadEncoded = token.split(".")[1];
    // atob function decodes base 64 encoded strings
    const payload = atob(payloadEncoded);

    const user = JSON.parse(payload);

    return user;
};


const getEvents = async () => {
    // this is a shit hack cause i couldn't get the regex to work. sue me.
    const id = parseInt(window.location.href.split('/').filter(item => item).reverse()[0]);

    const res = await fetch(`/api/events/${id}`);
    const data = await res.json();
    return {...data};
};

const populateEventsList = async () => {
    const eventsList = document.querySelector('.events-list');

    const  { event } = await getEvents();
    // console.log(event)
    const date = new Date(...event.date.split('T')[0].split('-').map(el=> parseInt(el)));
    const dateString = date.toDateString();
    const time = event.date.split('T')[1].split(':').slice(0, 2)
    time[0] = parseInt(time[0]);
    let timeEnd = ' AM'
    if (time[0]>=12) {
      time[0]-=12;
      timeEnd = ' PM'
    };
    const timeString = time.join(':')+ timeEnd;
    const hostName = event.host.nickname.toUpperCase();
    const url = window.location.href;
    const numAttendees = event.Users.length;

    const user = getUser();
    const userId = user ?  user.data.id : null;

    let buttonText;
    const attendees = event.Users.map(el =>el.Rsvp.userId);
    if (!attendees.includes(userId)) {
        buttonText = `<button class='event__button-big' id='${event.id}'>SIGN ME UP</button>`
    } else {
        buttonText = `<button class='event__button-big' id='${event.id}'>CANCEL MY RSVP</button>`
    }

    const eventLi = `
        <div class="rsvp-container">
            <div class="event-header">
            JOIN ${hostName} FOR BOBA
            <div class="event-image">
                <img src="/public/images/coffee_6.png">
            </div>
            </div>
            <div class="event-body">
                <p> &#128197: ${dateString}</p>
                <p> &#128337: ${timeString}</p>
                <p> &#128205: ${event.address}</p>
                <p> &#128506: ${event.City.name}</p>
                <p> &#128483: <a href="${url}">${url}</a></p>
            </div>
            <div class="event-footer">BOBA-BUDDIES CURRENTLY ATTENDING: ${numAttendees}</div>
        </div>
        <div>
            ${buttonText}
        </div>
    `;
    eventsList.innerHTML = eventLi;

}

populateEventsList();


document.addEventListener('click', async (e) => {
    if(e.target.classList.contains('event__button-big')){
        const eventId = e.target.id
        const user = getUser()
        if (!user) {
            window.location.href = '/signup'
            return;
        }
        const userId = user.data.id

        // determine if user is attending event
        const data = await fetch(`/api/events/${eventId}`);
        const {event} = await data.json();
        // console.log(event);
        const attendees = event.Users.map(el =>el.Rsvp.userId);

        // if not, rsvp them
        if (!attendees.includes(userId)) {
            const body = {eventId, userId}
            const newEvent = await fetch('/api/rsvps/', {
                method: "POST",
                body: JSON.stringify(body),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const data = await newEvent.json();
            if (!newEvent.ok) {
                const { message } = data;
                const errorsContainer = document.querySelector('#errors-container');
                // there isn't actually an errors container on this page,
                // so we may want to take this out
                // errorsContainer.innerHTML = message;
                return;
            }
            populateEventsList();
            return;
        } else {
            // unrsvp them
            const body = {eventId, userId}
            const res = await fetch('/api/rsvps/', {
                method: "DELETE",
                body: JSON.stringify(body),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            populateEventsList();
            return;
        }

    };

});
