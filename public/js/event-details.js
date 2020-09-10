const getEvents = async () => {
    const res = await fetch('/api/events');
    const data = await res.json();
    return data;
};

const populateEventsList = async () => {
    const eventsList = document.querySelector('.events-list')

    const { events } = await getEvents();
    for(let event of events ) {
        const eventLi = `
            <li>
                <div class="event">
                    <div class="event-header">
                        <div class="event-image">
                            <img src="public/js/tab-content-1.png">
                        </div>
                        Boba With host ${event.hostId}
                    </div>
                    <div class="event-body">
                        <p> When: ${event.date}</p>
                        <p> Where: ${event.address}</p>
                    </div>
                </div>

        `;
        eventsList.innerHTML += eventLi
    }
}

populateEventsList();
