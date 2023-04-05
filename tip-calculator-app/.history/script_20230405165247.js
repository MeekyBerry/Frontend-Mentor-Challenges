// 1. Get the bill amount from the input field
const billInput = document.getElementById("bill");
// 2. Get the tip percentage from the Button array
const tipButtons = document.querySelectorAll(".percent");
// 2.1. The percentage array contains a Custom button which toggles to input field when clicked
const customButton = document.querySelector(".custom");
// 2.2. Get the custom percentage from the input field
const customInput = document.createElement("input");
// Add style class to created customInput element
// customInput.classList.add('custom-input');
// 3. Get the number of people from the input field
const peopleInput = document.getElementById("people");
// 4. Calculate the tip amount per person;
const tipAmountSpan = document.getElementById("tip-amount");
// 5. Calculate the total cost per person
const totalAmountSpan = document.getElementById("total-amount");
// 6. Display the tip amount per person
const resetButton = document.getElementById("reset");
const validatePeople = document.getElementById("validate");

let bill = 0;
let tipPercentage = 0;
let customPercentage = 0;
let people = 0;

let inputPeople = false;
let error = true;

// calculate tip and total amount
const calculateTip = () => {
  if (people > 0) {
    inputPeople = true;
    let tip = (bill * (tipPercentage + customPercentage)) / 100;
    let total = bill + tip;
    let tipPerPerson = tip / people;
    let totalPerPerson = total / people;
    tipAmountSpan.textContent = `${tipPerPerson.toFixed(2)}`;
    totalAmountSpan.textContent = `${totalPerPerson.toFixed(2)}`;
    disableReset();
  }
};

// add event listener for bill input
billInput.addEventListener("input", () => {
  bill = Number(billInput.value);
  calculateTip();
  disableReset();
});

// add event listener for people input
peopleInput.addEventListener("input", () => {
  if (peopleInput.value <= "0") {
    validatePeople.style.display = "block";
    peopleInput.style.outlineColor = "red";
  } else {
    validatePeople.style.display = "none";
    peopleInput.style.outlineColor = "hsl(172, 67%, 45%)";
    people = Number(peopleInput.value);
    calculateTip();
    disableReset();
  }
  // people = Number(peopleInput.value);
  // calculateTip();
  // disableReset();
});

// add event listeners for tip buttons
tipButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.classList.contains("custom")) {
      customInput.type = "number";
      customInput.value = "";
      customInput.classList.add("custom-input");
      if (button.parentNode) {
        button.parentNode.replaceChild(customInput, button);
        customInput.focus();
      }
    } else {
      tipPercentage = Number(button.textContent.replace("%", ""));
      calculateTip();
    }
  });
});

// add event listener for custom input
customInput.addEventListener("input", () => {
  customPercentage = Number(customInput.value);
  calculateTip();
});

// add event listener for reset button
resetButton.addEventListener("click", () => {
  billInput.value = "";
  peopleInput.value = "";
  tipAmountSpan.textContent = "0.00";
  totalAmountSpan.textContent = "0.00";
  bill = 0;
  tipPercentage = 0;
  customPercentage = 0;
  people = 0;
  if (customInput.parentNode) {
    customInput.parentNode.replaceChild(customButton, customInput);
  }
  resetButton.disabled = true;
  resetButton.style.backgroundColor = "hsl(186, 14%, 43%)";
  validatePeople.style.display = "none";
});

// disable reset button
const disableReset = () => {
  if (billInput.value.trim() === "" && peopleInput.value.trim() === "") {
    resetButton.disabled = true;
    resetButton.style.backgroundColor = "hsl(186, 14%, 43%)";
  } else {
    resetButton.disabled = false;
    resetButton.style.backgroundColor = "hsl(172, 67%, 45%)";
  }
};
