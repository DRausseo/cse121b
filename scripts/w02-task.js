/* W02-Task - Profile Home Page */
document.querySelector('h1').textContent = '¡Welcome to my page!';

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

/* Step 6 - Adding Another Favorite Food */
const newFavoriteFood = 'Tequeños'; // Declare and instantiate a new favorite food
favoriteFoods.push(newFavoriteFood); // Add the new favorite food to the array
const updatedFoodItems = favoriteFoods.map(food => `<li>${food}</li>`).join('');
foodList.innerHTML = updatedFoodItems; // Render the updated list of favorite foods

/* Step 7 - Deleting First Element of the Array */
favoriteFoods.shift(); // Remove the first element from the array
const updatedFoodItemsAfterDeletion = favoriteFoods.map(food => `<li>${food}</li>`).join('');
foodList.innerHTML = updatedFoodItemsAfterDeletion; // Render the updated list after deletion
