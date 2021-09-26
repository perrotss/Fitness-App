const apiKey = '6f8998296dmsh8a7269c19e83760p1a8787jsncdaeb262681c';

const bmiCall = () => {
	console.log("hellos")
	fetch(`https://body-mass-index-bmi-calculator.p.rapidapi.com/imperial?weight=150&height=68&rapidapi-key=${apiKey}`)
	.then(response => response.json())
	.then(data => console.log(data))
.catch(err => console.error(err));
};

export { bmiCall };


// let bmi = {
	// API_KEY: '6f8998296dmsh8a7269c19e83760p1a8787jsncdaeb262681c'
// 	fetchBMI: function (height, weight) {
// 		fetch(
// 			"https://body-mass-index-bmi-calculator.p.rapidapi.com/imperial?weight=" +
// 			weight +
// 			"&height=" +
// 			height +
// 			"&height=" +
// 			this.API_KEY
// 		)
//     .then((response) => response.json())
//     .then((data) => this.displayBMI(data));
//   },
// 	displayBMI: function(data) {
// 		const { weight } = body.weight;
// 		const { height } = body.height;
// 		document.querySelector(".")
// 	}
// }
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
