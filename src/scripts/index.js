import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import dataRestaurants from "../DATA.json"

const burger_bar = document.querySelector(".burger_bar");
const drop_nav = document.querySelector(".drop_nav");
burger_bar.addEventListener("click", () => {
  drop_nav.classList.toggle("show");
});

const restaurants = document.querySelector(".restaurants");
dataRestaurants.restaurants.forEach((restaurant) => {
    restaurants.innerHTML += `
        <div class="restaurant">
            <div class="thumbnail">
                <div class="place">
                    Kota ${restaurant.city}
                </div>
                <img class="image" src="${restaurant.pictureId}" alt="${restaurant.name}">
            </div>
            <div class="content">
                <h4>Rating ${restaurant.rating}</h4>
                <h5>${restaurant.name}</h5>
                <p>${restaurant.description}</p>
            </div>
        </div>
    `;
})
