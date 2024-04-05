
// PARTIE QUI AFFICHE LES POKÉMONS
function displayPokedex(pokedex) {
    //Créer un conteneur pour chaque article
    const articleContainer = document.createElement('div');



    const galleryContainer = document.querySelector('.gallery-container');


    const image = new Image();
    image.src = pokedex.sprites.regular;
    galleryContainer.appendChild(image);

    image.classList.add('article-container');//créer un class article-container
    image.style.maxWidth = '300px';
    // Ajouter le conteneur de l'article au conteneur principal
    const container = document.getElementById('container');
    container.appendChild(articleContainer);

}

let nextTodoIndex = 1;
const maxPosts =10;


function fetchPokemon() {
    const container = document.getElementById('container');
    fetch('https://tyradex.vercel.app/api/v1/pokemon')
        .then((response) => {
            return response.json()
        })
        .then(
            (pokemons) => {
                for (let i = 0; i < maxPosts && pokemons.length; i++) {
                    //La boucle s'exécutera tant que i est strictement inférieur à nextTodoIndex + maxTodos et que là longueur de pokemon
                    displayPokedex(pokemons[i + nextTodoIndex]);
                }
                nextTodoIndex += maxPosts;
            });
}

window.onload = function () {
    fetchPokemon();// appelle la fonction fetchPosts
    const refreshIcon = document.getElementById('refresh-icon');
    refreshIcon.addEventListener('click', fetchPokemon);
};

//BOUTON POUR LE MENU
document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menuButton");
    const submenu = document.querySelector(".submenu");

    menuButton.addEventListener("click", function () {
        submenu.classList.toggle("show");
    });
});


// bouton de colonne et mosaïque

document.addEventListener("DOMContentLoaded", function() {
    const mosaicBtn = document.getElementById("mosaic-btn");
    const columnBtn = document.getElementById("column-btn");
    const galleryContainer = document.querySelector(".gallery-container");

    mosaicBtn.addEventListener("click", function() {
        galleryContainer.classList.remove("column");
        galleryContainer.classList.add("mosaic");
    });

    columnBtn.addEventListener("click", function() {
        galleryContainer.classList.remove("mosaic");
        galleryContainer.classList.add("column");
    });
});


                                    // bouton pour ajouter une image

let imageCounter = 0;

document.addEventListener("DOMContentLoaded", function () {
    const validation = document.getElementById("submitButton");

    validation.addEventListener("click", function () {
        const url = document.getElementById("url_input").value;
        if (url) {
            const newImage = document.createElement("img");
            newImage.src = url;
            newImage.style.width = "300px";
            newImage.classList.add('article-container');
            newImage.classList.add(`image-${imageCounter}`); // Ajouter une classe unique
            imageCounter++; // Incrémenter le compteur
            const imageContainer = document.getElementById("imageContainer");
            imageContainer.appendChild(newImage)
        }
        document.getElementById("url_input").value = "";
    });


})
const addButton = document.getElementById('adding_img');
const urlDiv = document.querySelector('.url');
const submitButton = document.getElementById('submitButton');

// Cacher le champ URL et le bouton "Envoyer" initialement
urlDiv.style.display = 'none';


// Écouter le clic sur le bouton "+"
addButton.addEventListener('click', function() {
    // Vérifier si le champ URL est actuellement affiché ou caché
    if (urlDiv.style.display === 'block') {
        // Si le champ URL est affiché, le cacher
        urlDiv.style.display = 'none';
    } else {
        // Sinon, l'afficher
        urlDiv.style.display = 'block';
    }
});


// Pour cacher quand on appuie sur le bouton valider"
submitButton.addEventListener('click', function() {
    // Cacher le champ URL et le bouton "Envoyer"
    urlDiv.style.display = 'none';
});






                                        //  bouton "Supprimer l'image"

const deleteImageButton = document.getElementById('deleteImageButton');

// Ajout d'un gestionnaire d'événements pour le clic sur le bouton "Supprimer l'image"
deleteImageButton.addEventListener('click', function() {
    // Récupérer l'URL de l'image saisie par l'utilisateur
    const imageUrlInput = document.getElementById('imageUrl');
    const imageUrl = imageUrlInput.value;

    // Sélectionner l'image avec l'URL spécifiée et la supprimer
    const imageToDelete = document.querySelector(`img[src="${imageUrl}"]`);
    if (imageToDelete) {
        imageToDelete.parentNode.removeChild(imageToDelete);
    }
});

const deleteButton = document.getElementById('delete_img');
const deleteImageSection = document.querySelector('.delete-image-section');

// Cacher le champ URL et le bouton "Supprimer l'image" initialement
deleteImageSection.style.display = 'none';


// Écouter le clic sur le bouton "-"
deleteButton.addEventListener('click', function() {
    // Vérifier si la section de suppression d'image est actuellement affichée ou cachée
    if (deleteImageSection.style.display === 'block') {
        // Si la section est affichée, la cacher
        deleteImageSection.style.display = 'none';
    } else {
        // Sinon, l'afficher
        deleteImageSection.style.display = 'block';
    }
});

