const API_KEY =  `a3bdfbcb9dced1e7f11369177ef52a3b`;
const searchTemperature= () => {
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data));
    
}
const setinnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}
const displayTemperature = temperature => {
    setinnerText('city', temperature.name);
    setinnerText('temperature', temperature.main.temp);
    setinnerText('feel', temperature.main.feels_like);
    setinnerText('condition', temperature.weather[0].main);
 //set url
    const url = ` http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;

    const imgicon = document.getElementById('weather-icon');
    imgicon.setAttribute('src', url);
    console.log(temperature);
}
 