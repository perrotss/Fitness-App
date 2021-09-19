// Load all the channels within this directory and all subdirectories.
// Channel files must be named *_channel.js.

const channels = require.context('.', true, /_channel\.js$/)
channels.keys().forEach(channels)

fetch("https://body-mass-index-bmi-calculator.p.rapidapi.com/imperial?weight=150&height=68&rapidapi-key=6f8998296dmsh8a7269c19e83760p1a8787jsncdaeb262681c", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "body-mass-index-bmi-calculator.p.rapidapi.com",
		"x-rapidapi-key": "6f8998296dmsh8a7269c19e83760p1a8787jsncdaeb262681c"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});
