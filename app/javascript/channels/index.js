// Load all the channels within this directory and all subdirectories.
// Channel files must be named *_channel.js.

const channels = require.context('.', true, /_channel\.js$/)
channels.keys().forEach(channels)

const API_KEY = '6f8998296dmsh8a7269c19e83760p1a8787jsncdaeb262681c'
const feet = document.getElementById('feet');
const inches = document.getElementById('inches');
const pounds = document.getElementById('pounds');
const height = feet*12+inches;
const result = document.getElementById('result');
const form = document.querySelector('simple_form_for');

const fetchBmi = () => {
fetch(`https://body-mass-index-bmi-calculator.p.rapidapi.com/imperial?weight=${pounds}&height=${height}&rapidapi-key=${API_KEY}`)
	.then(response => response.json())
	.then((data) => {
const value = (data.bmi);
result.insertAdjacentHTML('beforeend', `<h2>${Math.round(value)}</h2>`);
});
};

form.addEventListener('submit', (e) => {  
	e.preventDefault();  
	fetchBmi();
});

// https://body-mass-index-bmi-calculator.p.rapidapi.com/imperial?weight=${weight}&height=${height}&rapidapi-key=${API_KEY}
// https://body-mass-index-bmi-calculator.p.rapidapi.com/imperial?weight=150&height=68&rapidapi-key=6f8998296dmsh8a7269c19e83760p1a8787jsncdaeb262681c


// fetch("https://body-mass-index-bmi-calculator.p.rapidapi.com/imperial?weight=150&height=68&rapidapi-key=6f8998296dmsh8a7269c19e83760p1a8787jsncdaeb262681c", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "body-mass-index-bmi-calculator.p.rapidapi.com",
// 		"x-rapidapi-key": "6f8998296dmsh8a7269c19e83760p1a8787jsncdaeb262681c"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.error(err);
// });
