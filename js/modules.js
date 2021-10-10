import { cardDeck } from "./main.js";

const cardTemplate = ({ id, shipName, tonnage, capacity, image }) => `
<div id="item-${id}" class="card">
<img class="card-img-top" src="../src/${image}" alt="Card image cap" />
<div class="card-body">
<h5 class="card-title">${shipName}</h5>
<p class="card-text">
Tonnage: ${tonnage} GRT<br>
Capacity: ${capacity} passangers
</p>
</div>
<div class="card-footer">
<small class="text-muted">
<button class="btn btn-outline-info px-4 py-0">Edit</button>
<button class="btn btn-outline-danger px-3 py-0">Delete</button>
</small>
</div>
</div>
`;

const addItemToPage = ({ id, shipName, tonnage, capacity, image }) => {
    cardDeck.insertAdjacentHTML(
        "afterbegin",
        cardTemplate({ id, shipName, tonnage, capacity, image })
    );
};

const renderItemsDOM = (array) => {
    cardDeck.innerHTML = "";
    for (const item of array) {
        addItemToPage(item);
    }
};

const calculateTotal = (array, key) => {
    const total = array.reduce((acc, item) => acc + key(item), 0);
    return total;
}

export { addItemToPage, renderItemsDOM, calculateTotal };