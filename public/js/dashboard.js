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
    html += `
    <div class="event-box">
      <div class="date-box">${dateString}</div>
      <div class="time-box">${timeString}</div>
      <div class="address-box">${event.address}</div>
      <div class="hostname-box">Hosted by: ${host}</div>
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
