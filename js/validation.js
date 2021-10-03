const inputEditName = document.getElementById("edit-name-input");
const inputEditNameError = document.getElementById("edit-name-input-error");
const inputEditTonnage = document.getElementById("edit-tonnage-input");
const inputEditTonnageError = document.getElementById("edit-tonnage-input-error");
const inputEditCapacity = document.getElementById("edit-capacity-input");
const inputEditCapacityError = document.getElementById("edit-capacity-input-error");

const inputName = document.getElementById("create-name-input");
const inputNameError = document.getElementById("create-name-input-error");
const inputTonnage = document.getElementById("create-tonnage-input");
const inputTonnageError = document.getElementById("create-tonnage-input-error");
const inputCapacity = document.getElementById("create-capacity-input");
const inputCapacityError = document.getElementById("create-capacity-input-error");

const invalidSymbols = ["№", "<", ">", "/", "|", "\\", "#", "!", "~", "&", "$", "@", ";", ".", "?", "%", "*", "₴", "`"];

const validateInputInt = (integer) => {
    if (integer.charAt(0) == "0")
        return 1;
    for (var i = 0; i < integer.length; i++) {
        if (integer.charAt(i) < "0" || integer.charAt(i) > "9") {
            return 0;
        }
    }
    return 2;
}

const validateInputString = (string) => {
    return !invalidSymbols.some((symbol) => string.includes(symbol));
};

const validateEdit = () => {
    let validated = true;
    if (inputEditName.value === "") {
        inputEditNameError.textContent = "*field must not be empty";
        inputEditNameError.display = "block";
        validated = false;
    } else if (!validateInputString(inputEditName.value)) {
        console.log("Hello");
        inputEditNameError.textContent = "*restricted symbols";
        inputEditNameError.display = "block";
        validated = false;
    } else {
        inputEditNameError.textContent = "";
        inputEditNameError.display = "none";
    }

    if (inputEditTonnage.value === "") {
        inputEditTonnageError.textContent = "*field must not be empty";
        inputEditTonnageError.display = "block";
        validated = false;
    } else {
        switch (validateInputInt(inputEditTonnage.value)) {
            case 0:
                inputEditTonnageError.textContent = "*not an integer";
                inputEditTonnageError.display = "block";
                validated = false;
                break;
            case 1:
                inputEditTonnageError.textContent = "*first digit cannot be 0";
                inputEditTonnageError.display = "block";
                validated = false;
                break;
            case 2:
                inputEditTonnageError.textContent = "";
                inputEditTonnageError.display = "none";
                break;
        }
    }

    if (inputEditCapacity.value === "") {
        inputEditCapacityError.textContent = "*field must not be empty";
        inputEditCapacityError.display = "block";
        validated = false;
    } else {
        switch (validateInputInt(inputEditCapacity.value)) {
            case 0:
                inputEditCapacityError.textContent = "*not an integer";
                inputEditCapacityError.display = "block";
                validated = false;
                break;
            case 1:
                inputEditCapacityError.textContent = "*first digit cannot be 0";
                inputEditCapacityError.display = "block";
                validated = false;
                break;
            case 2:
                inputEditCapacityError.textContent = "";
                inputEditCapacityError.display = "none";
                break;
        }
    }
return validated;
}

const validateCreate = () => {
    let validated = true;
    if (inputName.value === "") {
        inputNameError.textContent = "*field must not be empty";
        inputNameError.display = "block";
        validated = false;
    } else if (!validateInputString(inputName.value)) {
        console.log("Hello");
        inputNameError.textContent = "*restricted symbols";
        inputNameError.display = "block";
        validated = false;
    } else {
        inputNameError.textContent = "";
        inputNameError.display = "none";
    }

    if (inputTonnage.value === "") {
        inputTonnageError.textContent = "*field must not be empty";
        inputTonnageError.display = "block";
        validated = false;
    } else {
        switch (validateInputInt(inputTonnage.value)) {
            case 0:
                inputTonnageError.textContent = "*not an integer";
                inputTonnageError.display = "block";
                validated = false;
                break;
            case 1:
                inputTonnageError.textContent = "*first digit cannot be 0";
                inputTonnageError.display = "block";
                validated = false;
                break;
            case 2:
                inputTonnageError.textContent = "";
                inputTonnageError.display = "none";
                break;
        }
    }

    if (inputCapacity.value === "") {
        inputCapacityError.textContent = "*field must not be empty";
        inputCapacityError.display = "block";
        validated = false;
    } else {
        switch (validateInputInt(inputCapacity.value)) {
            case 0:
                inputCapacityError.textContent = "*not an integer";
                inputCapacityError.display = "block";
                validated = false;
                break;
            case 1:
                inputCapacityError.textContent = "*first digit cannot be 0";
                inputCapacityError.display = "block";
                validated = false;
                break;
            case 2:
                inputCapacityError.textContent = "";
                inputCapacityError.display = "none";
                break;
        }
    }
return validated;
}

export { validateEdit, validateCreate}