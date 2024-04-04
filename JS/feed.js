// PARTIE QUI AFFICHE LES POKÉMONS
function displayPokedex(pokedex) {
    //Créer un conteneur pour chaque article
    const articleContainer = document.createElement('div');
    articleContainer.classList.add('article-container');//créer un class article-container

    // Titre de l'article
    const name = document.createElement('h2');
    name.innerText = pokedex.name.fr;
    articleContainer.appendChild(name);

    // Contenu principal de l'article
    const category = document.createElement('p');
    category.innerText = pokedex.category;
    articleContainer.appendChild(category);


    const image = document.createElement('img');
    image.src = pokedex.sprites.regular;
    articleContainer.appendChild(image);

    // Ajouter le conteneur de l'article au conteneur principal
    const container = document.getElementById('container');
    container.appendChild(articleContainer);

    // Ligne de séparation en dehors du conteneur de l'article
    // const hr = document.createElement('hr');
    // container.appendChild(hr);
}

let nextTodoIndex = 1;
const maxPosts = 3;


function fetchPokemon() {
    const container = document.getElementById('container');
    // container.innerHTML = '';
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
    //window.onload est utilisée pour s'assurer que le contenu de la page HTML ainsi que le CSS sans ça rien s'affiche
    fetchPokemon();// appelle la fonction fetchPosts
    const refreshIcon = document.getElementById('refresh-icon');
    // récupère l'élément refresh-icon.
    refreshIcon.addEventListener('click', fetchPokemon);
    // si on appuie sur le bouton ça retourne dans la fonction
};

//BOUTON POUR LE MENU
document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menuButton");
    const submenu = document.querySelector(".submenu");

    menuButton.addEventListener("click", function () {
        submenu.classList.toggle("show");
    });
});


                                                    // FORMULAIRE

const send = async (event) => {
    event.preventDefault(); // empêche le rechargement de la page
    let name = document.getElementById("pokemonName").value;
    let category = document.getElementById("pokemonCategory").value;
    let url = document.getElementById("pokemonUrl").value;

    const pokedexData = {
        name: {fr: name},
        category: category,
        sprites: {regular: url}
    };
    displayPokedex(pokedexData);
    document.getElementById("form").reset();

};
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('submitButton').addEventListener('click', send);
});