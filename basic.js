
// const apikey = "32177d5919b7415a9fa111213240603";
// const apiurl = "http://api.weatherapi.com/v1/current.json?q={city}&aqi=no";

// const searchbox = document.querySelector(".search input");
// const searchbtn = document.querySelector(".search button");

// async function checkweather(city) {
//     try {
//         const response = await fetch(apiurl.replace("{city}", city) + `&key=${apikey}`);
//         const data = await response.json();

//         console.log(data);

//         document.querySelector(".city").innerHTML = data.location.name;
//         document.querySelector(".temp").innerHTML = data.current.temp_c + "°c";
//         document.querySelector(".humidity").innerHTML = data.current.humidity + "%";
//         document.querySelector(".wind").innerHTML = data.current.wind_kph + "Km/h";
//     } catch (error) {
//         console.error('Error fetching weather data:', error);
//     }
// }

// searchbtn.addEventListener("click", () => {
//     checkweather(searchbox.value);
// });



//                                 ^
//                                 |
//                                 |
//                                 |
//                                 |
//                                 |
//                                 |
// original code avobe ------------>









const apikey = "32177d5919b7415a9fa111213240603";
const apiurl = "http://api.weatherapi.com/v1/current.json?q={city}&aqi=no";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");

async function checkweather(city) {
    try {
        const response = await fetch(apiurl.replace("{city}", city) + `&key=${apikey}`);
        const data = await response.json();

        console.log(data);

        document.querySelector(".city").innerHTML = data.location.name;
        document.querySelector(".temp").innerHTML = data.current.temp_c + "°c";
        document.querySelector(".humidity").innerHTML = data.current.humidity + "%";
        document.querySelector(".wind").innerHTML = data.current.wind_kph + "Km/h";

        const weatherCondition = data.current.condition.text.toLowerCase();

        if (weatherCondition.includes("cloud")) {
            weathericon.src = "images/clouds.png";
        } else if (weatherCondition.includes("clear")) {
            weathericon.src = "images/clear.png";
        } else if (weatherCondition.includes("rain")) {
            weathericon.src = "images/rain.png";
        } else if (weatherCondition.includes("drizzle")) {
            weathericon.src = "images/drizzle.png";
        } else if (weatherCondition.includes("mist")) {
            weathericon.src = "images/mist.png";
        } else {
            // Handle other weather conditions
            console.log("Weather condition not supported:", weatherCondition);
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

searchbtn.addEventListener("click", () => {
    checkweather(searchbox.value);
});

























// const apikey = "32177d5919b7415a9fa111213240603";
// const apiurl = "http://api.weatherapi.com/v1/current.json?q=&aqi=no";

// const searchbox = document.querySelector(".search input");
// const searchbtn = document.querySelector(".search button");

// async function checkweather(city){
//     const response = await fetch(apiurl + city +`&key=${apikey}`);
//     const data = await response.json();

//     console.log(data);

//     document.querySelector(".city").innerHTML = data.location.name;
//     document.querySelector(".temp").innerHTML = data.current.temp_c+"°c";
//     document.querySelector(".humidity").innerHTML = data.current.humidity+"%";
//     document.querySelector(".wind").innerHTML = data.current.wind_kph+"Km/h";




// }
// searchbtn.addEventListener("click", () => {
//     checkweather(searchbox.value);
// })
// checkweather();


// const apikey = "32177d5919b7415a9fa111213240603";
// const apiurl = "http://api.weatherapi.com/v1/current.json?q={city}&aqi=no";

// const searchbox = document.querySelector(".search input");
// const searchbtn = document.querySelector(".search button");
// const weathericon  = document.querySelector(".wethericon");

// async function checkweather(city) {
//     try {
//         const response = await fetch(apiurl.replace("{city}", city) + `&key=${apikey}`);
//         const data = await response.json();

//         console.log(data);

//         document.querySelector(".city").innerHTML = data.location.name;
//         document.querySelector(".temp").innerHTML = data.current.temp_c + "°c";
//         document.querySelector(".humidity").innerHTML = data.current.humidity + "%";
//         document.querySelector(".wind").innerHTML = data.current.wind_kph + "Km/h";

//         if(data.weather[0].current == "Clouds"){
//             weathericon.src = "images/clouds.png"
//         }
//         else if(data.weather[0].current == "Clear"){
//             weathericon.src = "images/clear.png"
//         }
//         else if(data.weather[0].current == "Rain"){
//             weathericon.src = "images/rain.png"
//         }
//         else if(data.weather[0].current == "Drizzle"){
//             weathericon.src = "images/drizzle.png"
//         }
//         else if(data.weather[0].current == "Mist"){
//             weathericon.src = "images/mist.png"
//         }else{

//         }



//     } catch (error) {
//         console.error('Error fetching weather data:', error);
//     }
// }

// searchbtn.addEventListener("click", () => {
//     checkweather(searchbox.value);
// });




















// const apikey = "32177d5919b7415a9fa111213240603";
// const apiurl = "http://api.weatherapi.com/v1/current.json?&q=London&aqi=no";

// async function checkweather(){
//     const responce = await fetch(apiurl + `&appid = ${apikey}`);
//     var data = await responce.json();

//     console.log(data);
// }

// checkweather();
//------------------------------------------------------------------------------

// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '059282bf47msh23e9eadb8c26042p17482cjsn59ab3d052d04',
// 		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
//------------------------------------------------------------------------
