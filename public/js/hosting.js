// add this option into dropdown along with cities
// option(value="") --Please choose an option--

const populateCitiesDropdown = async () => {
  const citiesDropdown = document.getElementById('cities-dropdown');

  const res = await fetch(`/api/cities`);
  const {cities} = await res.json();

  let html = `<option value="">--Please choose an option--</option>`

  cities.forEach(city => {
    html += `<option value="${city.id}">${city.name}, ${city.state}</option>`
  })

  citiesDropdown.innerHTML = html;

  const datefix = document.getElementById('date');
  datefix.value = new Date().toISOString().split('T')[0];

  const timefix = document.getElementById('time');
  timefix.value = new Date().toISOString().split('T')[1].slice(0,5);


}
populateCitiesDropdown();



const form = document.querySelector('#hosting-form');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const time = formData.get('time');
  const date = formData.get('date');
  const address = formData.get('address');
  const userId = formData.get('userId');
  const cityId = formData.get('cities');
  const timestamp = `${date} ${time}`;


  const _csrf = formData.get('_csrf');

  const body = {
    date: timestamp,
    address,
    hostId: userId,
    cityId,
    // _csrf // add csurfprotection to route on the other end maybe?
  };


  const res = await fetch('/api/events', {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json"
      }
    });
  const data = await res.json();
  if (!res.ok) {
      const { message } = data;
      const errorsContainer = document.querySelector('#errors-container');
      errorsContainer.innerHTML = message;
      return;
  }
  // redirect to newly created event
  window.location.href = `/boba-times/${data.newEvent.id}`;



});
