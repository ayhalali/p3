const updateTemperature = async (event) => {
    document.querySelector('#myresult').innerHTML = ''
    const url = 'https://api.openweathermap.org/data/2.5/weather?id=5056172&appid=4dfba111c295835b6ae0ea745b1fd689'
    const response = await fetch(url)
    const obj = await response.json()
    const temp = `Temperature ` + Math.round(obj['main']['temp'] - 273.15) + ` ℃`;
    const humid = `<br>Humidity ` + obj['main']['humidity']  + `%`;
    const maxtemp = `<br>High Temperature ` + Math.round(obj['main']['temp_max'] - 273.15)  + ` ℃`;
    const mintemp = `<br>Low Temperature ` + Math.round(obj['main']['temp_min'] - 273.15)  + ` ℃`;
    document.querySelector('#myresult').innerHTML = temp + humid + maxtemp + mintemp
  }

  document.addEventListener('click', event => {
    if (event.target && event.target.id === 'get-temp') { updateTemperature(event) }
  });
  