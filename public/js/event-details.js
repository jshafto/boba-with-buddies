const getEvents = async () => {
    const id = parseInt(document.querySelector(".whichevent").id, 10);

    const res = await fetch(`/api/events/${id}`);
    const data = await res.json();
    return data;
};

const populateEventsList = async () => {
    const eventsList = document.querySelector('.events-list');

    const  { event } = await getEvents();
    console.log(event)
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
                    <img src="/public/js/coffee_6.png">
                </div>
                JOIN ${hostName} FOR BOBA
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
