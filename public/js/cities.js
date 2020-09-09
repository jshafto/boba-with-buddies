

const getCities = async () => {
    const citiesObj = await fetch('/api/cities')
    const cities = await citiesObj.json()
    return cities
}

const createCityLi = async (city) => {
    const res = await fetch(`/api/cities/${city.id}`)
    const cityDetails = await res.json()
    return `<button id="${city.id}">
                    <div class="TBD">
                    ${city.name}
                    </div>
                </button>`;
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