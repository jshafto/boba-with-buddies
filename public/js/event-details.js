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

    const payloadEncoded = token.split(".")[1];
    // atob function decodes base 64 encoded strings
    const payload = atob(payloadEncoded);

    const user = JSON.parse(payload);

    return user;
};


const getEvents = async () => {
    const id = parseInt(document.querySelector(".whichevent").id, 10);

    const res = await fetch(`/api/events/${id}`);
    const data = await res.json();
    return data;
};

const populateEventsList = async () => {
    const eventsList = document.querySelector('.events-list');

    const  { event } = await getEvents();
    // console.log(event)
    const date = new Date(...event.date.split('T')[0].split('-').map(el=> parseInt(el)));
    const dateString = date.toDateString();
    const time = event.date.split('T')[1].split(':').map(el=> parseInt(el)).slice(0, 2)
    if (time[0]>12) time[0]-=12;
    const timeString = time.join(':');
    const hostName = event.host.nickname.toUpperCase();
    const url = window.location.href;
    const numAttendees = event.Users.length;

    const eventLi = `
        <div class="rsvp-container">
            <div class="event-header">
                <div class="event-image">
                    <img src="/public/images/coffee_6.png">
                </div>
                <button class='event__button' id='${event.id}'>JOIN ${hostName} FOR BOBA</button>
            </div>
            <div class="event-body">
                <p> &#128197: ${dateString}</p>
                <p> &#128337: ${timeString}</p>
                <p> &#128205: ${event.address}</p>
                <p> &#128506: ${event.City.name}</p>
                <p> &#128483: <a href="${url}">${url}</a></p>
            </div>
            <div class"event-footer">
                BOBA-BUDDIES CURRENTLY ATTENDING: ${numAttendees}
            </div>
        </div>
    `;
    eventsList.innerHTML = eventLi;

}

populateEventsList();


document.addEventListener('click', async (e) => {
    if(e.target.classList.contains('event__button')){
        const eventId = e.target.id
        const userId = getUser().data.id
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
            errorsContainer.innerHTML = message;
            return;
        }
        console.log(newEvent)
        window.location.href = '/boba-times';
        return;
    };
    window.location.href = '/signup'
});