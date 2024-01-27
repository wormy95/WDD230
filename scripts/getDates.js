// getDates.js

// Get the current year
var currentYear = new Date().getFullYear();

// Update the content of the element with id "currentYear"
document.getElementById("currentYear").textContent = currentYear;

// Get the last modified date of the document
var lastModifiedDate = new Date(document.lastModified);

// Format the date as a string
var formattedDate = lastModifiedDate.toLocaleString();

// Update the content of the element with id "lastModified"
document.getElementById("lastModified").textContent = "Last Modified: " + formattedDate;

// Get the current date
var currentDate = new Date();

// Format the date as a string (you can customize the format as needed)
var formattedCurrentDate = currentDate.toDateString();

// Update the content of the element with id "currentDate"
document.getElementById("currentDate").textContent = "Current Date: " + formattedCurrentDate;

// Function to fetch weather data 
async function getWeather() {
    try {
        // Replace 'your_api_key' with an actual API key and 'city' with the desired location
        const response = await fetch(`curl --request GET --url 'https://api.tomorrow.io/v4/weather/forecast?location=42.3478,-71.0466&apikey=9ilhROOgc62ZxKlSrUhVahupeCf7sECf'`);
        const data = await response.json();
        const weatherDescription = data.weather[0].description;
        const temperature = data.main.temp;

        // Display the weather information
        document.getElementById("weather").textContent = `Current Weather: ${weatherDescription}, Temperature: ${temperature}°C`;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        document.getElementById("weather").textContent = 'Unable to fetch weather data';
    }
}

// Function to update and display the number of visits
function updateVisits() {
    let visits = localStorage.getItem('visits') || 0;
    visits++;
    localStorage.setItem('visits', visits);
    document.getElementById("visits").textContent = `Number of Visits: ${visits}`;
}

// Execute the functions when the script is loaded
getWeather();
updateVisits(); 
