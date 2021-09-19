import { renderItemsDOM, calculateTotal } from "./modules.js";

const cardDeck = document.getElementById("card-deck");
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const sortCheckbox = document.getElementById("sort");
const countBtn = document.getElementById("count");
const countResults = document.getElementById("count_results");
const countTotal = document.getElementById("count_total");

let ships = [
    {
        id: 1,
        shipName: "Venator Star Ship",
        tonnage: parseInt("8000000"),
        capacity: parseInt("7400"),
        image: "Venator-class-Star-Ship.jpg",
    },
    {
        id: 2,
        shipName: "Cosacks Submarine",
        tonnage: parseInt("0"),
        capacity: parseInt("5"),
        image: "Cosacks_submarine.jpg",
    },
    {
        id: 3,
        shipName: "Republic Gunship(LAAT)",
        tonnage: parseInt("30"),
        capacity: parseInt("30"),
        image: "Republic-gunship.jpg",
    },
    {
        id: 4,
        shipName: "Evergreen",
        tonnage: parseInt("100000"),
        capacity: parseInt("120"),
        image: "Evergreen.jpg",
    },
    {
        id: 5,
        shipName: "Titanic",
        tonnage: parseInt("46,328"),
        capacity: parseInt("3320"),
        image: "Titanic.jpg",
    },
    {
        id: 6,
        shipName: "Oxenfurt-Tretogor",
        tonnage: parseInt("1258"),
        capacity: parseInt("82"),
        image: "Redanian-oxenfurt-tretogor.jpg",
    },
];
let shipsSorted = [];

searchButton.addEventListener("click", (event) => {
    event.preventDefault();
    let shipsFound = ships.filter(
        (ship) => ship.shipName.search(searchInput.value) !== -1);
    renderItemsDOM(shipsFound);
});

sortCheckbox.addEventListener("change", () => {
    let shipsSorted = Array.from(ships);
    if (sortCheckbox.checked) {
        shipsSorted.sort(
            (first, second) => first.tonnage - second.tonnage
        );
    }
    renderItemsDOM(shipsSorted);
});

countBtn.addEventListener("click", () => {
    countResults.classList.remove("hidden");
    const totalPrice = calculateTotal(ships, (ship) => ship.capacity);
    countTotal.innerHTML = totalPrice;
});

renderItemsDOM(ships);

export default ships;
export { cardDeck };