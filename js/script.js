// showNotification
const showNotification = (msg, type) => {
    let bgColor;
    switch (type) {
        case "success":
            bgColor = "linear-gradient(to right, #1D976C, #93F9B9)";
            break;
        case "error":
            bgColor = "linear-gradient(to right, #93291e, #ed213a)";
            break;
        default:
            break;
    }

    // Toastify
    Toastify({
        text: msg,
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top",
        position: "left",
        stopOnFocus: true,
        style: {
            background: bgColor,
        },
        onClick: function () { }
    }).showToast();
};

let originalStr = "I love my country Pakistan <br> I love my city Faisalabad <br> I love my Homeland";

// Convert to Lowercase
const lowerCase = () => {
    let lower_case = originalStr.toLowerCase();
    document.getElementById("output").innerHTML = lower_case;
};

// Convert to Uppercase
const upperCase = () => {
    let upper_case = originalStr.toUpperCase();
    document.getElementById("output").innerHTML = upper_case;
};

// Convert to Capitalize
const capitalize = () => {
    let capitalized = `<span class="text-capitalize"> ${originalStr} </span>`;
    document.getElementById("output").innerHTML = capitalized;
};

// Clear Output
const clearOutput = () => {
    document.getElementById("output").innerHTML = "";
};

// Better Formatting
const betterFormatting = () => {
    let text = document.getElementById("input-field").value;
    if (text.length < 3) {
        showNotification("First write some text in input field!", "error");
        return;
    }
    let textFirstLetter = text.charAt(0).toUpperCase();
    let textAllLetters = text.slice(1).toLowerCase();
    let betterFormatting = `${textFirstLetter}${textAllLetters}`;
    document.getElementById("output").innerHTML = betterFormatting;
};

// Clear Input
const clearInput = () => {
    document.getElementById("input-field").value = "";
};

let cities = ["Quetta", "Lahore", "Multan", "Karachi", "Peshawer", "Hyderabad", "Rawalpindi"];

// Print All Cities
const printCities = () => {
    let output = "";
    for (let i = 0; i < cities.length; i++) {
        output += `${i + 1}) ${cities[i]} <br>`;
    }
    document.getElementById("output").innerHTML = output;
};

// Add City in the List
const addCity = () => {
    let city = document.getElementById("input-field").value;
    if (!city) {
        showNotification("Write city name you want to add", "error");
        return;
    }

    let newCityFirstLetter = city.charAt(0).toUpperCase();
    let newCityAllLetters = city.slice(1).toLowerCase();
    let newCityInCapitalize = `${newCityFirstLetter}${newCityAllLetters}`;

    let isCityFound = false;
    for (let i = 0; i < cities.length; i++) {
        if (newCityInCapitalize === cities[i]) {
            isCityFound = true;
            document.getElementById("output").innerHTML = `<span class='text-danger'>&quot;${newCityInCapitalize}&quot;</span> is already in the cities list`;
            return;
        }
    }

    cities.push(newCityInCapitalize);
    showNotification("New city has been added successfully", "success");
    printCities();
};

// Check City in List
const checkCity = () => {
    let checkCity = document.getElementById("input-field").value;
    if (!checkCity) {
        showNotification("Please enter city name correctly", "error");
        return;
    }

    let checkCityFirstLetter = checkCity.charAt(0).toUpperCase();
    let checkCityAllLetters = checkCity.slice(1).toLowerCase();
    let checkCityInCapitalize = `${checkCityFirstLetter}${checkCityAllLetters}`;
    let isCheckCityFound = false;
    for (let i = 0; i < cities.length; i++) {
        if (checkCityInCapitalize === cities[i]) {
            isCheckCityFound = true;
            document.getElementById("output").innerHTML = `<span class='text-success fw-bold'>&quot;${checkCityInCapitalize}&quot;</span> is already in cities list`;
            return;
        }
    }

    document.getElementById("output").innerHTML = `Sorry, We couldn't find your city <span class='text-danger fw-bold'>${checkCityInCapitalize}</span> in the list`;
};

// Find word in text
const findWord = () => {
    let word = document.getElementById("input-field").value;
    if (!word) {
        showNotification("Please enter word correctly", "error");
        return;
    }

    word = word.toLowerCase();
    let newOriginalString = originalStr.toLowerCase();
    let findWord = newOriginalString.indexOf(word);

    if (findWord !== -1) {
        document.getElementById("output").innerHTML = `The word you entered is found at index: ${findWord}`;
    } else {
        document.getElementById("output").innerHTML = `The word you entered is not found in the text`;
    }
};

// Replace word
const replaceWord = () => {
    let currentWord = document.getElementById("input-field").value;
    if (!currentWord) {
        showNotification("Please enter a word correctly", "error");
        return;
    }

    let newWord = prompt("Please enter the new word");
    if (!newWord) {
        showNotification("Please enter a new word correctly", "error");
        return;
    }

    currentWord = currentWord.toLowerCase();
    newWord = newWord.toLowerCase();

    let newOriginalString = originalStr.toLowerCase();
    currentWord = new RegExp(currentWord, "g");

    let replaceWord = newOriginalString.replace(currentWord, newWord);
    document.getElementById("output").innerHTML = replaceWord;
};
