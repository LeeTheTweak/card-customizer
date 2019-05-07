// Getting the card
const card = document.getElementsByClassName("card")[0];
const cardTitleEl = document.getElementsByClassName("cardTitle")[0];
const cardDescriptionEl = document.querySelector(".cardDescription p");
// Getting Inputs
const borderInput = document.getElementById("borderInput");
const backgroundInput = document.getElementById("backgroundInput");
const cardTitleInput = document.getElementById("cardTitleInput");
const cardTitleColorInput = document.getElementById("title");
const descriptionInput = document.getElementById("cardDescription");

/** Getting the buttons */
const buttons = document.querySelectorAll("#inputWrapper button");
const borderButton = document.querySelectorAll("button")[0];
const bgButton = document.querySelectorAll("button")[1];
const titleButtons = document.querySelectorAll("button")[2];
const titleColorButton = document.querySelectorAll("button")[3];
const descriptionButton = document.querySelectorAll("button")[4];

// Defaults
card.style.borderColor = " ";
card.style.backgroundColor = " ";
cardTitleColorInput.style.color = " ";

let buttonDefaultBackgroundColor = "#79BAE6";
let buttonDefaultTextColor = "white";
let buttonHoverBackgroundColor = "#FFC300";
let buttonHoverTextColor = "black";
let cursorHover = "pointer";

for(let i = 0; i < buttons.length; i += 1) {
    buttons[i].style.color = buttonDefaultTextColor;
    buttons[i].style.backgroundColor = buttonDefaultBackgroundColor;
}

// Highlight buttons on mouseover
inputWrapper.addEventListener("mouseover", (e) => {
    if(e.target.tagName === "BUTTON") {
        e.target.style.backgroundColor = buttonHoverBackgroundColor;
        e.target.style.color = buttonHoverTextColor;
        e.target.style.cursor = cursorHover;
    }
});
inputWrapper.addEventListener("mouseout", (e) => {
    if(e.target.tagName === "BUTTON") {
        e.target.style.backgroundColor = buttonDefaultBackgroundColor;
        e.target.style.color = buttonDefaultTextColor;
        e.target.style.cursor = cursorHover;
    }
});

/** If user inputs a value and presses button,
 * get the input's value and display value to 
 * card.
 */

const borderChanger = () => {
    card.style.borderColor = borderInput.value;
}
borderButton.addEventListener("click", borderChanger, false);

const backgroundChanger = () => {
    card.style.backgroundColor = backgroundInput.value;
}
bgButton.addEventListener("click", backgroundChanger, false);

const showTitle = () => {
    cardTitleEl.textContent = cardTitleInput.value;
}
titleButtons.addEventListener("click", showTitle, false);

const changeTitleColor = () => {
    cardTitleEl.style.color = cardTitleColorInput.value;
}
titleColorButton.addEventListener("click", changeTitleColor, false);

const addDescription = () => {
    cardDescriptionEl.textContent = descriptionInput.value;
}
descriptionButton.addEventListener("click", addDescription, false);