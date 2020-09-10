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
                        ${event.hostId} + ${event.address}
                    </div>
                </div>

        `;
        eventsList.innerHTML += eventLi
    }
}

populateEventsList();
