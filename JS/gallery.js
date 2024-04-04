
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

