let temp = document.getElementById('temp');
let temp2 = document.getElementById('temp2');
let feels_like = document.getElementById('feels_like');
let humidity = document.getElementById('humidity');
let humidity2 = document.getElementById('humidity2');
let min_temp = document.getElementById('min_temp');
let max_temp = document.getElementById('max_temp');
let wind_speed = document.getElementById('wind_speed');
let wind_degrees = document.getElementById('wind_degrees');
let wind_speed2 = document.getElementById('wind_speed2');
let sunrise = document.getElementById('sunrise');
let sunset = document.getElementById('sunset');
let cityName = document.getElementById('cityName')



const rowIndia = document.getElementById('row-india');
const rowAmerica = document.getElementById('row-america');
const rowLucknow = document.getElementById('row-lucknow');
const rowDelhi = document.getElementById('row-delhi');
const rowBhadohi = document.getElementById('row-bhadohi');
const rowVaranasi = document.getElementById('row-varanasi');
const rowAgra = document.getElementById('row-agra');

var data;


var options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'bd00fa80b8msh3771382c2c3c79ep1b3e74jsn63c6f7ae0a3c',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};



async function getRapidApiResponse(city) {
	try {
		const response = await fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
		if (response.ok) {
			const data = await response.json();
			data.city_name = city;
			return data;
		}
		alert("Please Enter Correct City Name");
		return data;
	} catch (error) {
		return data;
	}
}

async function getAndSetCityWather(element, cityName) {
	const data = await getRapidApiResponse(cityName);
	element.innerHTML = `
	<td>${data.city_name}</td>
	<td>${data.cloud_pct}</td>
	<td>${data.temp}</td>
	<td>${data.feels_like}</td>
	<td>${data.humidity}</td>
	<td>${data.min_temp}</td>
	<td>${data.max_temp}</td>
	<td>${data.wind_speed}</td>
	<td>${data.wind_degrees}</td>
	<td>${data.sunrise}</td>
	<td>${data.sunset}</td>
	`
}



// UttarPradesh

const getWeather = async (city) => {
	let bhadohiData = await getRapidApiResponse(city);
	data = bhadohiData;
	cityName.innerHTML = bhadohiData.city_name;
	temp.innerHTML = bhadohiData.temp;
	temp2.innerHTML = bhadohiData.temp;
	feels_like.innerHTML = bhadohiData.feels_like
	humidity.innerHTML = bhadohiData.humidity
	humidity2.innerHTML = bhadohiData.humidity
	min_temp.innerHTML = bhadohiData.min_temp
	max_temp.innerHTML = bhadohiData.max_temp
	wind_speed.innerHTML = bhadohiData.wind_speed
	wind_degrees.innerHTML = bhadohiData.wind_degrees
	wind_speed2.innerHTML = bhadohiData.wind_speed
	sunrise.innerHTML = bhadohiData.sunrise
	sunset.innerHTML = bhadohiData.sunset
};
getWeather("Bhadohi");





submit.addEventListener("click", (event) => {
	event.preventDefault();
	getWeather(city.value)
})

getAndSetCityWather(rowIndia, "India");
getAndSetCityWather(rowLucknow, "Lucknow");
getAndSetCityWather(rowBhadohi, "Bhadohi");
getAndSetCityWather(rowAmerica, "America");
getAndSetCityWather(rowDelhi, "Delhi");
getAndSetCityWather(rowVaranasi, "varanasi");
getAndSetCityWather(rowAgra, "Agra");



// Background color for the switch button
var darkModeSwitch = document.getElementById('darkModeSwitch');
document.addEventListener('DOMContentLoaded', function () {
	darkModeSwitch.addEventListener('change', function () {
		if (darkModeSwitch.checked) {
			enableDarkMode();
		} else {
			disableDarkMode();
		}
	});
});



function enableDarkMode() {
	document.body.style.background = '#042743';


}

function disableDarkMode() {
	document.body.style.background = 'grey'
}













