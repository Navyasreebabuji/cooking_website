// Get form and recipe list elements
const recipeForm = document.getElementById('recipeForm');
const recipeList = document.getElementById('recipeList');

// Event listener for form submission
recipeForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Get the input values from the form
    const recipeName = document.getElementById('recipeName').value;
    const ingredients = document.getElementById('ingredients').value;
    const instructions = document.getElementById('instructions').value;

    // Create a recipe object
    const recipe = {
        name: recipeName,
        ingredients: ingredients,
        instructions: instructions
    };

    // Save the recipe to localStorage
    saveRecipe(recipe);

    // Display the submitted recipe
    displayRecipes();

    // Reset the form
    recipeForm.reset();
});

// Function to save a recipe in localStorage
function saveRecipe(recipe) {
    // Get existing recipes from localStorage or create an empty array if none exist
    const recipes = JSON.parse(localStorage.getItem('recipes')) || [];

    // Add the new recipe to the array
    recipes.push(recipe);

    // Save the updated array back to localStorage
    localStorage.setItem('recipes', JSON.stringify(recipes));
}

// Function to display all submitted recipes
function displayRecipes() {
    // Get the recipes from localStorage
    const recipes = JSON.parse(localStorage.getItem('recipes')) || [];

    // Clear the existing recipe list
    recipeList.innerHTML = '';

    // Loop through the recipes and display each one
    recipes.forEach((recipe, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <strong>${recipe.name}</strong><br>
            <em>Ingredients:</em> ${recipe.ingredients}<br>
            <em>Instructions:</em> ${recipe.instructions}<br>
            <button onclick="deleteRecipe(${index})">Delete</button>
        `;
        recipeList.appendChild(li);
    });
}

// Function to delete a recipe
function deleteRecipe(index) {
    // Get the recipes from localStorage
    const recipes = JSON.parse(localStorage.getItem('recipes'));

    // Remove the recipe at the given index
    recipes.splice(index, 1);

    // Save the updated array back to localStorage
    localStorage.setItem('recipes', JSON.stringify(recipes));

    // Re-display the updated list of recipes
    displayRecipes();
}

// Display recipes when the page loads
window.addEventListener('load', displayRecipes);
