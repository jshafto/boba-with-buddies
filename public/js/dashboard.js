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

const populate = (events, container) => {
  let html = "";
  events.forEach(event => {
    const host = event.host.nickname;
    const date = new Date(...event.date.split('T')[0].split('-').map(el=> parseInt(el)));
    const dateString = date.toDateString();
    const time = event.date.split('T')[1].split(':').slice(0, 2)
    time[0] = parseInt(time[0]);
    let timeEnd= ' AM'
    if (time[0]>=12) {
      time[0]-=12;
      timeEnd = ' PM'
    };
    const user = getUser()
    const userId = user.data.id
    const timeString = time.join(':')+ timeEnd;
    
    if (userId !== event.host.id) {
      html += `
      <div class="event-box">
        <div class="date-box">${dateString}</div>
        <div class="time-box">${timeString}</div>
        <div class="address-box">${event.address}</div>
        <div class="hostname-box">Hosted by: ${host}</div>
        <div>
          <button class='event__button' id='${event.id}'>CANCEL MY RSVP</button>
        </div>
      </div>
      `
      return;
    }
    html += `
    <div class="event-box">
      <div class="date-box">${dateString}</div>
      <div class="time-box">${timeString}</div>
      <div class="address-box">${event.address}</div>
      <div class="hostname-box">Hosted by: ${host}</div>
      <div>
        <button class='hostEvent__button' id='${event.id}'>CANCEL MY EVENT!</button>
      </div>
    </div>
    `
  })
  container.innerHTML = html;
}

const populateContainers = async () => {
  if (getCookieValue('token')) {
    const userId = getUser().data.id;
    const joinedContainer = document.querySelector('.event-container-joined');
    const hostedContainer = document.querySelector('.event-container-hosted');

    let res = await fetch(`/api/users/${userId}/events`);
    const joinedEvents = await res.json();
    if (joinedEvents.length) {
      populate(joinedEvents, joinedContainer);
    } else {
      document.querySelector('.headline-joined')
        .innerHTML = "You have no boba times coming up! Let's change that."
    }

    res = await fetch(`/api/users/${userId}/hosted`);
    const hostedEvents = await res.json();
    if (hostedEvents.length) {
      populate(hostedEvents, hostedContainer);
    } else {
      document.querySelector('.headline-hosted')
        .innerHTML = "You're not hosting any boba times! Let's change that."
    }





  } else {
    window.location.href = '/signup';
  }

}

populateContainers();

//TODO WIP


//cancel rsvp
document.addEventListener('click', async (e) => {
  if (e.target.classList.contains('event__button')) {
    const eventId = e.target.id
    const user = getUser()
    if (!user) {
      window.location.href = '/signup'
      return;
    }
    const userId = user.data.id
    const body = { eventId, userId }
    const res = await fetch('/api/rsvps/', {
      method: "DELETE",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json"
      }
    });
    window.location.href = '/dashboard'
}})

//cancel event
document.addEventListener('click', async (e) => {
  if (e.target.classList.contains('hostEvent__button')) {
    const eventId = e.target.id
    const user = getUser()
    if (!user) {
      window.location.href = '/signup'
      return;
    }

    const res = await fetch(`/api/events/${eventId}`, {
      method: "DELETE"
    });
    window.location.href = '/dashboard'
}})