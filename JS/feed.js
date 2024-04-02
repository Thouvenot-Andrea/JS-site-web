console.log("coucou")
// créer une fonction qui récupère le "container" et créer des "éléments"
function displayTodo(todo) {
    // Créer un conteneur pour chaque article
    const articleContainer = document.createElement('div');
    articleContainer.classList.add('article-container');

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

