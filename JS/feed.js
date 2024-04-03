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

// Ajouter un écouteur d'événements sur le bouton "Formulaire"




                                                //FORMULAIRE DYNAMIQUE

document.addEventListener("DOMContentLoaded", function () {
    // DOMContentLoaded est un événement spécifique qui se déclenche lorsque le document HTML a été complètement chargé et analysé dans le navigateur.
    const existingPokemonNames = new Set();
    // est une ligne de code qui crée une sorte de liste spéciale pour stocker les noms des Pokémon que j'ai créé


                                    // Fonction pour vérifier et ajouter le Pokémon
    function addPokemon(event) {
        // Appelle cette fonction à chaque fois que je crée un pokémon

        event.preventDefault();
        // Permet à la fonction addPokemon de prendre le contrôle pour éviter de rechargé la page entière



                                            // Récupérer les données du formulaire
        const formData = new FormData(event.target);
        // Créer un nouvel objet FormData, quand on soumet le formulaire. C'est une sorte de conteneur qui contient toutes les données du formulaire

        const name = formData.get('pokemonName');
        // extrait la valeur saisi dans le champ de formulaire Nom du Pokémon et la stocke dans une variable name

        const category = formData.get('pokemonCategory');
        // extrait la valeur saisi dans le champ de formulaire Catégorie et la stocke dans une variable category

        const imageUrl = formData.get('pokemonImage');
        // extrait la valeur saisi dans le champ de formulaire URL de l'image et la stocke dans une variable imageUrl


        if (existingPokemonNames.has(name)) {
            // Vérifie si le nom du pokémon rentre existe déja dans la liste existingPokemonNames

            alert('Ce Pokémon existe déjà dans le feed. Veuillez choisir un autre nom.');
            //  si c'est le cas ça afficher un message d'erreur

            return;
            //on sort de la fonction pour éviter d'ajouter le Pokémon
        }

                                        // Créer un objet représentant le Pokémon
        const newPokemon = {
            //créer un nouvel object qui représentera les informations sur le nouveau Pokemon qu'on va ajouter à la liste.

            name: {fr: name},
            // définit la propriété name dans l'objet newPokemon le fr est la clé pour dire que le nom est en français

            category: category,
            // définit la propriété category dans l'objet newPokemon

            sprites: {regular: imageUrl}
            // définit la propriété sprites dans l'objet newPokemon qui a pour propriété regular

        };


        existingPokemonNames.add(name);
        // Ajouter le nom du Pokémon dans la liste.

        displayPokedex(newPokemon);
        // Ajouter le Pokémon en appelant la fonction displayPokedex

        event.target.reset();
        // Réinitialiser le formulaire

        alert('Le Pokémon a été ajouté avec succès !');
        // Afficher un message de confirmation

        // Afficher les données dans la console pour vérification
        console.log('Nom du Pokémon:', name);
        console.log('Catégorie:', category);
        console.log('URL de l\'image:', imageUrl);
    }

    document.getElementById('addPokemonForm').addEventListener('submit', addPokemon);
    //écoute le formulaire addPokemonForm, lorsque le bouton ajouter est clicker ça créer un nouveau pokémon

});
