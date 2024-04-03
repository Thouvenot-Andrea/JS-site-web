// console.log("coucou")
// // créer une fonction qui récupère le "container" et créer des "éléments"
// function displayPosts(post) {
//     // Créer un conteneur pour chaque article
//     const articleContainer = document.createElement('div');
//     articleContainer.classList.add('article-container');//créer un class article-container
//
//     // Titre de l'article
//     const title = document.createElement('h2');
//     title.innerText = post.title;
//     articleContainer.appendChild(title);
//
//     // Contenu principal de l'article
//     const main = document.createElement('div');
//     main.innerText = post.body;
//     articleContainer.appendChild(main);
//
//     // Ajouter le conteneur de l'article au conteneur principal
//     const container = document.getElementById('container');
//     container.appendChild(articleContainer);
//
//     // Ligne de séparation en dehors du conteneur de l'article
//     const hr = document.createElement('hr');
//     container.appendChild(hr);
// }
//
// // créer une fonction qui récupère les produits de "url"
// let nextTodoIndex = 0;
//
// function fetchPosts() {
//     const container = document.getElementById('container');
//     container.innerHTML = '';
//     // Envoie une requête GET à l'URL spécifiée pour récupérer des articles (posts)
//     fetch('https://jsonplaceholder.typicode.com/posts')
//         // Une fois la réponse reçue, la transforme en format JSON
//         .then((response) => response.json())
//         // Une fois les données JSON obtenues, les traite dans la fonction fléchée suivante
//         .then((posts) => {
//             const maxPosts = 3;
//             for (let i = nextTodoIndex; i < nextTodoIndex + maxPosts; i++) {
//                 //La boucle s'exécutera tant que i est strictement inférieur à nextTodoIndex + maxTodos
//                 if (i >= posts.length) {
//                     break
//                 } else {
//                     const post = posts[i];
//                     displayPosts(post);
//                 }
//             }
//             nextTodoIndex += maxPosts;
//         });
// }
// // créer une fonction pour actualiser la page.
// window.onload = function () {
//     //window.onload est utilisée pour s'assurer que le contenu de la page HTML ainsi que le CSS sans ça rien s'affiche
//     fetchPosts();// appelle la fonction fetchPosts
//     const refreshIcon = document.getElementById('refresh-icon');
//     // récupère l'élément refresh-icon.
//     refreshIcon.addEventListener('click', fetchPosts);
//     // si on appuie sur le bouton ça retourne dans la fonction
// };

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


document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menuButton");
    const submenu = document.querySelector(".submenu");

    menuButton.addEventListener("click", function () {
        submenu.classList.toggle("show");
    });
});

