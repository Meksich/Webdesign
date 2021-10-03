import { cardDeck, ships } from "./main.js";
import { validateEdit } from "./validation.js";

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
<small class="text-muted">
<button id="edit-button-${id}" class="edit-button btn btn-outline-info px-4 py-0">Edit</button>
<button id="delete-button-${id}" class="delete-button btn btn-outline-danger px-3 py-0">Delete</button>
</small>
</div>
`;

const modalEditWindow = document.getElementById("edit-window");
const inputEditName = document.getElementById("edit-name-input");
const inputEditTonnage = document.getElementById("edit-tonnage-input");
const inputEditCapacity = document.getElementById("edit-capacity-input");
let choosenShip = 0;

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
    renderEditButtons();
};

const calculateTotal = (array, key) => {
    const total = array.reduce((acc, item) => acc + key(item), 0);
    return total;
}

const getInputValues = (dropdown, name, tonnage, capacity, dropdownId) => {
    var newCardImage = "";
    let selectValue = dropdown.options[$(`#${dropdownId}`).data('ddslick').selectedIndex].value;
    switch (selectValue) {
        case "VENATOR":
            newCardImage = "Venator-class-Star-Ship.jpg";
            break;
        case "SUBMARINE":
            newCardImage = "Cosacks_submarine.jpg";
            break;
        case "EVERGREEN":
            newCardImage = "Evergreen.jpg";
            break;
        case "REDANIA":
            newCardImage = "Redanian-oxenfurt-tretogor.jpg";
            break;
        case "TITANIC":
            newCardImage = "Titanic.jpg";
            break;
        case "GUNSHIP":
            newCardImage = "Republic-gunship.jpg";
            break;
    }
    return {
        id: 0,
        shipName: name.value,
        tonnage: parseInt(tonnage.value),
        capacity: parseInt(capacity.value),
        image: newCardImage,
    }
}

const clearInputs = (name, tonnage, capacity) => {
    name.value = "";
    tonnage.value = "";
    capacity.value = "";
}

const renderEditButtons = () => {
    for (let ship of ships) {
        let editButton = document.getElementById(`edit-button-${ship.id}`)
        editButton.addEventListener("click", () => {
            modalEditWindow.style.display = "block";
            choosenShip = ship.id;
            inputEditName.value = ship.shipName;
            inputEditCapacity.value = ship.capacity;
            inputEditTonnage.value = ship.tonnage;
            validateEdit();
        });
    }
}

export { addItemToPage, renderItemsDOM, calculateTotal, getInputValues, clearInputs, choosenShip };