// variables
const generalBtn = document.getElementById('general');
const businessBtn = document.getElementById('business');
const sportsBtn = document.getElementById('sports');
const technologyBtn = document.getElementById('technology');
const entertainmentBtn = document.getElementById('entertainment');
const searchBtn = document.getElementById('searchBtn');
const newsQuery = document.getElementById('newsQuery');
const newsType = document.getElementById('newsType');
const newsdetails = document.getElementById('newsdetails');


// Array
var newDataArr = [];

//apis

const API_KEY = "783fbc48c6334623b72e26b46af4f95c";
const HEADLINES_NEWS = " https://newsapi.org/v2/top-headlines?country=in&apiKey=";
const GENERAL_NEWS = " https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=";
const BUSINESS_NEWS = " https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=";
const SPORTS_NEWS = " https://newsapi.org/v2/top-headlines?country=in&category=sport&apiKey=";
const ENTERTAINMENT_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=";
const TECHNOLOGY_NEWS = " https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=";
const SEARCH_NEWS = " https://newsapi.org/v2/everything?q=";


generalBtn.addEventListener('click', function () {
    fetchGeneralNews();
})
businessBtn.addEventListener('click', function () {
    fetchGBusinessNews();
})
sportsBtn.addEventListener('click', function () {
    fetchSportsNews();
})
technologyBtn.addEventListener('click', function () {
    fetchTechnologyNews();
})
entertainmentBtn.addEventListener('click', function () {
    fetchEntertainmentNews();
})

searchBtn.addEventListener('click', function () {
    fetchQueryNews();
})


const fetchGeneralNews = async () => {
    const response = await fetch(GENERAL_NEWS + API_KEY)
    console.log(await response.json());
    newDataArr = [];
    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        consolel.log(myJson);
        newDataArr = myJson;
    }
    else {
        // Print error message
        console.log(response.status, response.statusText);

    }

    displayNews();
}


const fetchGBusinessNews = async () => {
    const response = await fetch(BUSINESS_NEWS + API_KEY)
    newDataArr = [];
    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newDataArr = myJson;
    }
    else {
        // Print error message
        console.log(response.status, response.statusText);

    }

    displayNews();
}


const fetchSportsNews = async () => {
    const response = await fetch(SPORTS_NEWS + API_KEY)
    newDataArr = [];
    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newDataArr = myJson;
    }
    else {
        // Print error message
        console.log(response.status, response.statusText);

    }

    displayNews();
}

const fetchTechnologyNews = async () => {
    const response = await fetch(TECHNOLOGY_NEWS + API_KEY)
    newDataArr = [];
    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newDataArr = myJson;
    }
    else {
        // Print error message
        console.log(response.status, response.statusText);

    }

    displayNews();
}

const fetchEntertainmentNews = async () => {
    const response = await fetch(ENTERTAINMENT_NEWS + API_KEY)
    newDataArr = [];
    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newDataArr = myJson;
    }
    else {
        // Print error message
        console.log(response.status, response.statusText);

    }

    displayNews();
}

const fetchQueryNews = async () => {
    const response = await fetch(SEARCH_NEWS + newsQuery.value + "&apiKey=" + API_KEY)
    newDataArr = [];
    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newDataArr = myJson;
    }
    else {
        // Print error message
        console.log(response.status, response.statusText);
    }

    displayNews();
}