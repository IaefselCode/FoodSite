//const imagecheck = document.querySelector(".j");

//Card Adder
const file = document.querySelector("#food-picture");
const thename = document.querySelector("#food-name");
const cost = document.querySelector("#food-cost");
const mostpopular = document.querySelector(".mostpopular");
const submitpic = document.getElementById("submitpic");
const username = document.querySelector('#user-name');
const userpassword = document.querySelector('#user-password');
//also later the user-name and user-password will be added for security purpose.


submitpic.addEventListener('submit', (D) => {
	D.preventDefault();

	const costv = cost.value;

	if (costv < 15) {
		alert("The cost is too small");
		return;
	} else if (costv > 1000) {
		alert("The cost is too large");
		return;
	} else {
		//adding popular div
		const popular = document.createElement('div');
		popular.classList.add('popular');
		mostpopular.appendChild(popular);

		//adding popular1 div
		const popular1 = document.createElement('div');
		popular1.classList.add('popular1');
		popular.appendChild(popular1);

		//adding image
		const image = document.createElement('img');
		image.classList.add('j');
		image.src = URL.createObjectURL(file.files[0]);
		popular1.appendChild(image);

		//adding popular2 div
		const popular2 = document.createElement('div');
		popular2.classList.add('popular2');
		popular.appendChild(popular2);

		//adding palagraph 
		const name = document.createElement('p');
		name.classList.add('p1');
		name.innerHTML = thename.value;
		popular2.appendChild(name);

		//adding palagraph 2
		const chicken = document.createElement('p');
		chicken.classList.add('p2');
		chicken.innerHTML = "4 Paces chicken";
		const spicy = document.createElement('p');
		spicy.classList.add('p3');
		spicy.innerHTML = "Spicy sauce";

		popular2.appendChild(chicken);
		popular2.appendChild(spicy);


		const thecost = document.createElement('span');
		thecost.classList.add('span1');
		thecost.innerHTML = cost.value;


		const thesign = document.createElement('span');
		thesign.classList.add('span2');
		thesign.innerHTML = "$";

		popular2.appendChild(thecost);
		popular2.appendChild(thesign);


		const button1 = document.createElement('button');
		button1.classList.add('add');
		button1.innerHTML = "Add to Cart";
		popular2.appendChild(button1);


		var button2 = document.createElement('button');
		button2.classList.add('remove');
		button2.innerHTML = "Remove";
		popular2.appendChild(button2);

		button2.addEventListener('click', () => {
			mostpopular.removeChild(popular);
			//localStorage.removeItem('card');
			saveData();

		});
		saveData();

	}

	file.value = "";
	thename.value = "";
	cost.value = "";
	username.value = "";
	userpassword.value = "";
	//saveData();

});

//Saving to Local Storage
function saveData() {
	localStorage.setItem("card", mostpopular.innerHTML);
}
function showTask() {
	mostpopular.innerHTML = localStorage.getItem("card");
}
showTask();