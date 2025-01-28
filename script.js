// Cette fonction s'exécute lorsque le DOM est entièrement chargé
document.addEventListener('DOMContentLoaded', (event) => {
    // Récupère les éléments HTML nécessaires
    const dropdown = document.getElementById('categoriesDropdown');
    const factButton = document.getElementById('factButton');

    // Fait une requête à l'API pour obtenir les catégories de blagues
    fetch('https://api.chucknorris.io/jokes/categories')
        .then(response => response.json()) // Convertit la réponse en JSON
        .then(categories => {
            console.log('Categories:', categories); // Affiche les catégories dans la console pour le débogage
            // Pour chaque catégorie, crée une option dans le menu déroulant
            categories.forEach(category => {
                const option = document.createElement('option'); // Crée un nouvel élément option
                option.value = category; // Définit la valeur de l'option
                option.text = category.charAt(0).toUpperCase() + category.slice(1); // Met en majuscule la première lettre
                dropdown.appendChild(option); // Ajoute l'option au menu déroulant
            });

            // Ajoute un gestionnaire d'événements au bouton pour obtenir une nouvelle blague
            factButton.addEventListener('click', getFact);
        })
        .catch(error => console.error('Erreur:', error)); // Affiche les erreurs dans la console
});

// Fonction pour obtenir une blague aléatoire, avec ou sans catégorie
function getFact() {
    // Récupère la catégorie sélectionnée dans le menu déroulant
    const category = document.getElementById('categoriesDropdown').value;
    // Crée l'URL en fonction de la catégorie sélectionnée ou d'une blague aléatoire
    const url = category ? `https://api.chucknorris.io/jokes/random?category=${category}` : 'https://api.chucknorris.io/jokes/random';
    
    // Fait une requête à l'API pour obtenir une blague aléatoire
    fetch(url)
        .then(response => response.json()) // Convertit la réponse en JSON
        .then(data => {
            console.log('Fact:', data); // Affiche la blague dans la console pour le débogage
            // Affiche la blague dans l'élément fact-container
            const factContainer = document.getElementById('fact-container');
            factContainer.innerHTML = data.value;
        })
        .catch(error => console.error('Erreur:', error)); // Affiche les erreurs dans la console
}

// document.addEventListener('DOMContentLoaded', (event) => { ... }); : 
// Cette ligne de code garantit que le JavaScript s'exécute uniquement après que le Document Object Model (DOM) est entièrement chargé. Cela permet de s'assurer que tous les éléments HTML sont accessibles pour le script.

// const dropdown = document.getElementById('categoriesDropdown'); : 
// Récupère l'élément du menu déroulant par son identifiant.

// const factButton = document.getElementById('factButton'); : 
// Récupère le bouton par son identifiant.

// fetch('https://api.chucknorris.io/jokes/categories') : 
// Fait une requête à l'API pour obtenir les catégories de blagues Chuck Norris.

// .then(response => response.json()) : 
// Convertit la réponse de l'API en format JSON pour pouvoir la manipuler facilement.

// .then(categories => { ... }); : 
// Cette section traite les catégories reçues de l'API et les ajoute au menu déroulant.

// categories.forEach(category => { ... }); : 
// Pour chaque catégorie, crée et ajoute une option au menu déroulant.

// factButton.addEventListener('click', getFact); : 
// Ajoute un événement au clic sur le bouton pour appeler la fonction getFact.

// function getFact() { ... } : 
// Cette fonction fait une requête à l'API pour obtenir une blague en fonction de la catégorie sélectionnée et l'affiche dans l'élément fact-container.