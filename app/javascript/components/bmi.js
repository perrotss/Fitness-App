const apiKey = '6f8998296dmsh8a7269c19e83760p1a8787jsncdaeb262681c';
const feet = document.getElementById('feet');
const inches = document.getElementById('inches');
const weight = document.getElementById('weight');
const height = feet*12+inches;



const bmiCall = () => {
	fetch(`https://body-mass-index-bmi-calculator.p.rapidapi.com/imperial?weight=${weight}&height=${height}68&rapidapi-key=${apiKey}`)
	.then(response => response.json())
	.then(data => console.log(data))
.catch(err => console.error(err));
};


const form = document.querySelector('form');
const result = document.getElementById('result');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  bmiCall(result.value);
});

export { bmiCall };
