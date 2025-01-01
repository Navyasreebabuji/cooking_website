// Function to handle rating for multiple products
function setupRatingSystem() {
    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        const productId = product.getAttribute('data-product-id');
        const stars = product.querySelectorAll('.star');
        let userRating = 0;

        // Load saved rating for this product if available
        loadSavedRating(productId, stars);

        // Event listener for clicking stars for each product
        stars.forEach(star => {
            star.addEventListener('click', function () {
                // Get the rating from the clicked star
                userRating = this.getAttribute('data-value');

                // Highlight selected stars
                highlightStars(userRating, stars);

                // Save rating for the specific product
                saveRating(productId, userRating);
            });
        });
    });
}

// Function to highlight stars based on rating
function highlightStars(rating, stars) {
    stars.forEach(star => {
        if (star.getAttribute('data-value') <= rating) {
            star.style.color = 'gold';
        } else {
            star.style.color = 'gray';
        }
    });
}

// Function to save rating for a specific product
function saveRating(productId, rating) {
    // Store the rating in localStorage with the product ID as the key
    localStorage.setItem(`userRating_${productId}`, rating);
}

// Function to load saved rating for a specific product
function loadSavedRating(productId, stars) {
    const savedRating = localStorage.getItem(`userRating_${productId}`);
    if (savedRating) {
        highlightStars(savedRating, stars);
    }
}

// Initialize rating system for all products on page load
window.addEventListener('load', setupRatingSystem);

