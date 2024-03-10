/* LESSON 3 - Programming Tasks */
/* Profile Object  */
let myProfile = {
    name: "Danny Manuel Rausseo Leon",
    placesLived: []
  };
  
  /* Photo with attributes */
  myProfile.photo = 'profile-Image.png';
  
  /* Favorite Foods List*/
  myProfile.favoriteFoods = ['Arepas', 'Empanadas', 'Hallacas', 'bollitos de Maiz tierno', 'Malta', 'Papelon con limon', 'Coca Cola', 'Pollo frito'];
  
  /* Hobbies List */
  myProfile.hobbies = ['Sing', 'Spend time with my Pet Luna', 'Watch movies with unexpected twist', 'Listen Music', 'spend time doing nothing'];
  
  /* Places Lived DataList */
  myProfile.placesLived.push(
    {
      place: 'São Paulo, Brazil',
      length: '6 years'
    }
  );
  
  /* DOM Manipulation - Output */
  document.querySelector('#name').textContent = myProfile.name;
  // Assign the value of the photo property as the src attribute of the HTML <img> with an ID of photo
  document.querySelector('#photo').setAttribute('src', myProfile.photo);
  
  // Assign the value of the name property as the alt attribute of the HTML <img> with an ID of photo
  document.querySelector('#photo').setAttribute('alt', myProfile.name);
  
  // Create list items for favorite foods
  myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
  });
  
  // Create list items for hobbies
  myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
  });
  
  // Create list items for places lived
  myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.textContent = place.place;
    let dd = document.createElement('dd');
    dd.textContent = place.length;
    let dl = document.querySelector('#places-lived');
    dl.appendChild(dt);
    dl.appendChild(dd);
  });
  