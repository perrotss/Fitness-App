

const bmiCall = () => {
	const apiKey = '6f8998296dmsh8a7269c19e83760p1a8787jsncdaeb262681c';
	const feet = document.querySelector('#feet').value;
	const inches = document.querySelector('#inches').value;
	const weight1 = document.querySelector('#weight').value;
	const form = document.querySelector('#submit');
	const result = document.getElementById('result');
	const weight = (+weight1);
	const height = (feet * 12 + +inches);
	fetch(`https://body-mass-index-bmi-calculator.p.rapidapi.com/imperial?weight=${weight}&height=${height}&rapidapi-key=${apiKey}`)
	.then(response => response.json())
	.then((data) => {
	result.innerHTML = "";
	const value = (data.bmi);
	result.insertAdjacentHTML('beforeend', `<h2>${Math.round(value)}</h2>`)
	console.log(data);
});
};

form.addEventListener('click', (event) => {
	event.preventDefault();
	bmiCall(result.value);
});

export { bmiCall };
