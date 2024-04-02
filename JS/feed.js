console.log("coucou")
// créer une fonction qui récupère le "container" et créer des "éléments"
function displayTodo(todo) {
    // Créer un conteneur pour chaque article
    const articleContainer = document.createElement('div');
    articleContainer.classList.add('article-container');//créer un class article-container

    // Titre de l'article
    const title = document.createElement('h2');
    title.innerText = todo.title;
    articleContainer.appendChild(title);

    // Contenu principal de l'article
    const main = document.createElement('div');
    main.innerText = todo.body;
    articleContainer.appendChild(main);

    // Ajouter le conteneur de l'article au conteneur principal
    const container = document.getElementById('container');
    container.appendChild(articleContainer);

    // Ligne de séparation en dehors du conteneur de l'article
    const hr = document.createElement('hr');
    container.appendChild(hr);
}

// créer une fonction qui récupère les produits de "url"
let nextTodoIndex = 0;

function fetchPosts() {
    const container = document.getElementById('container');
    container.innerHTML = '';
    // Envoie une requête GET à l'URL spécifiée pour récupérer des articles (posts)
    fetch('https://jsonplaceholder.typicode.com/posts')
        // Une fois la réponse reçue, la transforme en format JSON
        .then((response) => response.json())
        // Une fois les données JSON obtenues, les traite dans la fonction fléchée suivante
        .then((todos) => {
            const maxPosts = 3;
            for (let i = nextTodoIndex; i < nextTodoIndex + maxPosts; i++) {
                //La boucle s'exécutera tant que i est strictement inférieur à nextTodoIndex + maxTodos
                if (i >= todos.length) {
                    break
                } else {
                    const todo = todos[i];
                    displayTodo(todo);
                }
            }
            nextTodoIndex += maxPosts;
        });
}
// créer une fonction pour actualiser la page.
window.onload = function () {
    fetchPosts();
    const refreshIcon = document.getElementById('refresh-icon');
    refreshIcon.addEventListener('click', fetchPosts);
};


