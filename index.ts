import restaurants from "./restaurants";

const dollarSigns ="$$";
const deliveryTimeMax = "90";
const maxDistance = 10;
let result;

const priceBracket: string = dollarSigns.length;

const filteredRestaurants = restaurants.filter(restaurant => {
    if (restaurant.priceBracket > priceBracket) {
        return false;
    }

    if (restaurant.deliveryTimeMinutes > deliveryTimeMax) {
        return false;
    }
})