

const getCities = async () => {
    const citiesObj = await fetch('/api/cities')
    const cities = await citiesObj.json()
    return cities
}

const createCityLi = async (city) => {
    const res = await fetch(`/api/cities/${city.id}`)
    const cityDetails = await res.json()
    return `<li>
                <a href="/boba-times/${city.id}" id='${city.id}'>
                    ${city.name}
                </a>
            </li>`;
    }


const populateCities = async () => {
    const citiesDiv = document.getElementById('cities')
    
    const {cities} = await getCities()
    
    for(let city of cities){
        const cityLi = await createCityLi(city)
        citiesDiv.innerHTML += cityLi
    }
}

populateCities()

document.addEventListener('click', async (e) => {
    const id = parseInt(e.target.id, 10)
    if(id){
        const res = await fetch(`/api/cities/${id}/events`)
        const events = await res.json()
        console.log(events)
        document.getElementById('events')   
    }
})

