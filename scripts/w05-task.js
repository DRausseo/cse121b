/* W05: Programming Tasks */

/* Declare and initialize global variables */

const templesElement = document.querySelector('#temples');
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    templesElement.innerHTML = ''; // Limpiar cualquier contenido previo

    temples.forEach(templo => {
        // Crear un elemento <article> para representar el templo
        const article = document.createElement('article');

        // Crear un elemento <h3> para el nombre del templo
        const h3 = document.createElement('h3');
        h3.textContent = templo.templeName;

        // Crear un elemento <img> para la imagen del templo
        const img = document.createElement('img');
        img.src = templo.imageUrl;
        img.alt = templo.location;

        // Agregar los elementos al <article>
        article.appendChild(h3);
        article.appendChild(img);

        // Agregar el <article> al elemento contenedor
        templesElement.appendChild(article);
    });
};

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    try {
        const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
        templeList = await response.json();
        displayTemples(templeList); // Llama a la función para mostrar los templos
    } catch (error) {
        console.error("Error al obtener la lista de templos:", error);
    }
};

/* reset Function */
const reset = () => {
    templesElement.innerHTML = '';
};

/* filterTemples Function */
const filterTemples = (temples) => {
    reset();

    const filter = document.querySelector("#filtered").value;

    switch (filter) {
        case "utah":
            displayTemples(temples.filter(templo => templo.location.includes("Utah")));
            break;
        case "notutah":
            displayTemples(temples.filter(templo => !templo.location.includes("Utah")));
            break;
        case "older":
            displayTemples(temples.filter(templo => new Date(templo.dedicationDate) < new Date(1950, 0, 1)));
            break;
        case "all":
        default:
            displayTemples(temples);
            break;
    }
};

getTemples();

/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => { filterTemples(templeList) });


