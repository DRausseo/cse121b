/* W02-Task - Profile Home Page */
document.querySelector('h1').textContent = '¡Wellcome to my page!';
/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = 'Danny Manuel Rausseo Leon'; // This is my full name
const currentYear = new Date().getFullYear();
const profilePicture = 'images/profile-image.png'; // It's Me!

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name'); 
const foodElement = document.getElementById('food'); 
const yearElement = document.querySelector('#year');


/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
const profileImage = document.querySelector('#profile-image');
profileImage.setAttribute('src', profilePicture);
profileImage.setAttribute('alt', `Profile image of ${fullName}`);


/* Step 5 - Array */
const favoriteFoods = ['Arepas', 'Hallacas', 'Pan de Jamon', 'Coca Cola', 'Papelon con limon', 'Tajadas de Platano frito', 'Pollo frito', 'Chicha de arroz'];

const foodItems = favoriteFoods.map(food => `<li>${food}</li>`).join('');
const foodList = document.getElementById('foodList');
foodList.innerHTML = foodItems;

