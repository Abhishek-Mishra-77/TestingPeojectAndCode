// async function weatherApi() {
// 	const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi';
// 	const options = {
// 		method: 'GET',
// 		headers: {
// 			'X-RapidAPI-Key': 'bd00fa80b8msh3771382c2c3c79ep1b3e74jsn63c6f7ae0a3c',
// 			'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
// 		}
// 	};

// 	try {
// 		const response = await fetch(url, options);
// 		const result = await response.text();

// 	} catch (error) {
// 		console.error(error);
// 	}
// }

// weatherApi()

// Getting Element by Id  

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

const rowLucknow = document.getElementById('row-lucknow');


var options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'bd00fa80b8msh3771382c2c3c79ep1b3e74jsn63c6f7ae0a3c',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

// const getWeather = (city) => {

// 	fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=` + city, options)
// 		.then(response => response.json())
// 		.then((response) => {
// 			// cloud_pct.innerHTML = response.cloud_pct

// 			cityName.innerHTML = city
// 			temp.innerHTML = response.temp
// 			temp2.innerHTML = response.temp
// 			feels_like.innerHTML = response.feels_like
// 			humidity.innerHTML = response.humidity
// 			humidity2.innerHTML = response.humidity
// 			min_temp.innerHTML = response.min_temp
// 			max_temp.innerHTML = response.max_temp
// 			wind_speed.innerHTML = response.wind_speed
// 			wind_degrees.innerHTML = response.wind_degrees
// 			wind_speed2.innerHTML = response.wind_speed
// 			sunrise.innerHTML = response.sunrise
// 			sunset.innerHTML = response.sunset
// 		})
// 		.catch(err => console.log(err))

// }

async function getRapidApiResponse(city) {
	try {
		const response = await fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
		console.log(response + city)
		return await response.json();
	}
	catch (error) {
		console.log(error)
		return {};
	}

}

async function getAndSetCityWather(element, cityName) {
	const data = await getRapidApiResponse(cityName);
	console.log(data);
	element.innerHTML = `
	<td>${cityName}</td>
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
	let bhadoiData = await getRapidApiResponse(city);
	cityName.innerHTML = city;
	temp.innerHTML = bhadoiData.temp;
	temp2.innerHTML = bhadoiData.temp;
	feels_like.innerHTML = bhadoiData.feels_like
	humidity.innerHTML = bhadoiData.humidity
	humidity2.innerHTML = bhadoiData.humidity
	min_temp.innerHTML = bhadoiData.min_temp
	max_temp.innerHTML = bhadoiData.max_temp
	console.log(bhadoiData.max_temp);
	wind_speed.innerHTML = bhadoiData.wind_speed
	wind_degrees.innerHTML = bhadoiData.wind_degrees
	wind_speed2.innerHTML = bhadoiData.wind_speed
	sunrise.innerHTML = bhadoiData.sunrise
	sunset.innerHTML = bhadoiData.sunset
};
getWeather("Bhadohi");




submit.addEventListener("click", (event) => {
	event.preventDefault();
	getWeather(city.value)
	console.log(city.value)
})

getAndSetCityWather(rowLucknow, "Lucknow");




