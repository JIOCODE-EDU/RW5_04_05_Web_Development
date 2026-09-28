// const getLocation = () => {
//   navigator.geolocation.getCurrentPosition((pos) => {
//     const lat = pos.coords.latitude
//     const lon = pos.coords.longitude
    
//   })
// }

// getLocation()

const getWeather = async(lat , lon) => {
  let req = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=surat&appid=bd5e378503939ddaee76f12ad7a97608&units=metric`)

  let res = await req.json()

  console.log(res);

  showWeather(res)
}

getWeather()

const showWeather = (data) => {
  let temp = `
  <div>
    <h1>Weather Dashboard</h1>
    <p> ${data.name} , ${data.sys.country}</p>
    <div>
      <h2>${data.main.temp}</h2>
      <p>${data.weather[0].description}</p>
      <div>
        <span>${data.main.humidity}</span>
        <span>${data.wind.speed}</span>
      </div>
    </div>
  </div>
  
  `
  document.getElementById('container').innerHTML = temp
}

const getWeatherName = async(cityname) => {
  let req = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=bd5e378503939ddaee76f12ad7a97608&units=metric`)

  let res = await req.json()

  showWeather(res)
}



document.getElementById('search').addEventListener("keypress" , (e) => {
  if(e.key == "Enter"){
    let cityName = e.target.value
    console.log(cityName);
    getWeatherName(cityName)
  }
})

