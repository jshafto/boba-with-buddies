

const getCities = async () => {
    const citiesObj = await fetch('/api/cities')
    const cities = await citiesObj.json()
    return cities
}

const createCityLi = async (city) => {
    const res = await fetch(`/api/cities/${city.id}`)
    const cityDetails = await res.json()
    return `
<button class="cityButton" id="${city.id}">
                    ${city.name}
                </button>`;
    }


const populateCities = async () => {
    const citiesDiv = document.querySelector('.cities')
    console.log(citiesDiv)
    const {cities} = await getCities()
    
    for(let city of cities){
        const cityLi = await createCityLi(city)
        citiesDiv.innerHTML += cityLi
    }
}

populateCities()

document.addEventListener('click', async (e) => {
    // 
    if (!e.target.classList.contains('cityButton')) return;
    const id = parseInt(e.target.id, 10)
    if(id){
        const res = await fetch(`/api/cities/${id}/events`)
        const { city } = await res.json()
        
        // console.log(city)
        const html = getEventsHTML(city)
        document
            .querySelector('.events')
            .innerHTML = html;   
    }
    // put these into the html
    // add event listeners to all the buttons that we created


})



function getEventsHTML(city){
    const {Events} = city
    const cityName = city.name
    const cityState = city.state
    // get the city name and state and add to top of container
    let html = `<div class="events__header"> Events in ${cityName}, ${cityState}</div>
    <div class="events__container">`
    Events.forEach((event) => {
        // console.log(event)
        const id = event.id
        const hostName = event.host.nickname
        const address = event.address
        const numAttendees = event.Users.length
        
        html += `<div class="events__item">
                    <div>Host: ${hostName}</div>
                    <div>Location: ${address}</div>
                    <div>Number of Attendees: ${numAttendees}</div>
        <a href='/boba-times/${id}'><button class="rsvpButton" id="rvspButton-${id}">Check it out!</button>
        </div></a>`
    })
    html += '</div>'

    return html;
    
}   
    
    
    
    
    
// //     return html
// // }
// `
//       <div class="event-container">
//           <div class="tweet">
//             <div class="event-header">
//               @${tweet.User.username} · ${timestamp}
//               <div class="dropdown-arrow">
//                 <i class="fas fa-chevron-circle-down"></i>
//               </div>
//               <div class="modal-background" style="display: none"></div>
//               <ul class="dropdown-menu" style="display: none">
//                 <li><button class="joinEvent">Count Me In</button></li>
//               </ul>
//             </div>
//             <div class="tweet-contents">
//               ${tweet.message}
//             </div>
//       </div>
//     `