const restaurants = [
    "VB Steakhouse",
    "Chicken N Pickle",
    "The Shack At Joe Pool Restaurant",
    "Cotton Patch Cafe",
];

function getRandomRestaurant() {
    const randomIndex = Math.floor(Math.random() * restaurants.length);
    return restaurants[randomIndex];
}

document.getElementById("random-restaurant").addEventListener("click", function() {
    const recommendationContainer = document.getElementById("recommendation-container");
    const randomRestaurant = getRandomRestaurant();
    recommendationContainer.textContent = "You should try: " + randomRestaurant;
});
