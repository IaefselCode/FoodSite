const file = document.getElementById('jpg image');
const foodtype = document.getElementById('foodtype');
const FirstName = document.getElementById('FirstName');
const LastName = document.getElementById('LastName');
const EmailAddress = document.getElementById('EmailAddress');
const Password = document.getElementById('Password');
const Tel = document.getElementById('Tel');
const Country = document.getElementById('Country');
const State = document.getElementById('State');
const City = document.getElementById('City');
const HomeAddress = document.getElementById('HomeAddress');
const Remove = document.getElementById('Remove');

const submit = document.getElementById('submit');

const personal = document.getElementById('personal');
//const personal = document.querySelector('.personal');

//The Outputs
const image = document.querySelector('.img');
const p1 = document.querySelector('#p1');
const p2 = document.querySelector('#p2');
const p3 = document.querySelector('#p3');
const p4 = document.querySelector('#p4');
const p5 = document.querySelector('#p5');
const p6 = document.querySelector('#p6');
const p7 = document.querySelector('#p7');
const p8 = document.querySelector('#p8');

//Working
submit.addEventListener('click', (d) => {
    d.preventDefault();

    if (!file.value || !foodtype.value || !FirstName.value || !LastName.value || !EmailAddress.value || !Tel.value || !Country.value || !City.value || !State.value || !HomeAddress.value) {

        alert('Please Fill The Whole Form');
        return;
    } else {

        if (isNaN(Tel.value)) {
            alert('Please input Correct Phone Number');
            return false;
        } else {
            image.src = URL.createObjectURL(file.files[0]);
            p1.innerHTML = foodtype.value;
            p2.innerHTML = FirstName.value + " " + LastName.value;
            p3.innerHTML = EmailAddress.value;
            p4.innerHTML = Tel.value;
            p5.innerHTML = Country.value;
            p6.innerHTML = City.value;
            p7.innerHTML = State.value;
            p8.innerHTML = HomeAddress.value;

            console.log('You Have Saved Your Info to The Browsers Local Storage');
            alert('Request is sent successfully');
            saveData();
        }

    }

    foodtype.value = "";
    FirstName.value = "";
    LastName.value = "";
    EmailAddress.value = "";
    Tel.value = "";
    Country.value = "";
    City.value = "";
    State.value = "";
    HomeAddress.value = "";
    Password.value = "";
    file.value = "";

});

//Saving to Local Storage
function saveData() {
    localStorage.setItem("p1", p1.innerHTML);
    localStorage.setItem("p2", p2.innerHTML);
    localStorage.setItem("p3", p3.innerHTML);
    localStorage.setItem("p4", p4.innerHTML);
    localStorage.setItem("p5", p5.innerHTML);
    localStorage.setItem("p6", p6.innerHTML);
    localStorage.setItem("p7", p7.innerHTML);
    localStorage.setItem("p8", p8.innerHTML);
}
function showTask() {
    p1.innerHTML = localStorage.getItem("p1");
    p2.innerHTML = localStorage.getItem("p2");
    p3.innerHTML = localStorage.getItem("p3");
    p4.innerHTML = localStorage.getItem("p4");
    p5.innerHTML = localStorage.getItem("p5");
    p6.innerHTML = localStorage.getItem("p6");
    p7.innerHTML = localStorage.getItem("p7");
    p8.innerHTML = localStorage.getItem("p8");
}
showTask();

Remove.addEventListener('click', () => {
    if (p1.innerHTML = localStorage.getItem("p1")) {

        if (confirm('Are You Sure You want to Remove Receit')) {

            localStorage.removeItem("p1");
            localStorage.removeItem("p2");
            localStorage.removeItem("p3");
            localStorage.removeItem("p4");
            localStorage.removeItem("p5");
            localStorage.removeItem("p6");
            localStorage.removeItem("p7");
            localStorage.removeItem("p8");

            p1.innerHTML = "";
            p2.innerHTML = "";
            p3.innerHTML = "";
            p4.innerHTML = "";
            p5.innerHTML = "";
            p6.innerHTML = "";
            p7.innerHTML = "";
            p8.innerHTML = "";
            image.src = "";
console.log('You Have Removed Your Info from The Browsers Local Storage');
        } else {
            return;
        }
    } else {
        alert('There is no Info to Remove');
        return;
    }
});