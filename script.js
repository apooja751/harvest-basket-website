
// Harvest Basket - Website Interactions

// Display a welcome message when the website loads
document.addEventListener("DOMContentLoaded", () => {
    console.log("Welcome to Harvest Basket!");
});

// Smooth navigation for all internal links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (event) {
        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            event.preventDefault();
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Product card interaction
const productCards = document.querySelectorAll(".product-card");

productCards.forEach(card => {
    card.addEventListener("click", () => {
        const productName = card.querySelector("h3").textContent;
        alert(`You selected: ${productName}\nThank you for visiting Harvest Basket!`);
    });
});

// Contact button interaction
const contactButton = document.querySelector(".contact .primary-button");

contactButton.addEventListener("click", () => {
    console.log("Contact option selected.");
});
