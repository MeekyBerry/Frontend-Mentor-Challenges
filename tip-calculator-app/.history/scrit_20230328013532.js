// JAVASCRIPT CODE FOR TIP CALCULATOR FUNCTIONALITY with Custom button in the percent array?
// - Calculate the correct tip and total cost of the bill per person
// - Display the tip and total cost of the bill per person

// 1. Get the bill amount from the input field
// 2. Get the tip percentage from the Button array
// 2.1. The percentage array contains a Custom button which toggles to input field when clicked
// 2.2. Get the custom percentage from the input field
// 3. Get the number of people from the input field
// 4. Calculate the tip amount per person
// 5. Calculate the total cost per person
// 6. Display the tip amount per person
// 7. Display the total cost per person
// 8. Set a Reset button

// // 1. Get the bill amount from the input field
// const billAmount = document.querySelector('.bill-input');
// // 2. Get the tip percentage from the Button array
// const tipPercentage = document.querySelectorAll('.percent');
// // 2.1. The percentage array contains a Custom button which toggles to input field when clicked
// const custom = document.querySelector('.custom');
// // 2.2. Get the custom percentage from the input field
// const customInput = document.getElementById('cst-input');
// // 3. Get the number of people from the input field
// const numberOfPeople = document.querySelector('.number-input');
// // 4. Calculate the tip amount per person
// const tipAmount = document.getElementById('tip-amount');
// // 5. Calculate the total cost per person
// const totalCost = document.getElementById('total');
// // 6. Display the tip amount per person
// // 7. Display the total cost per person
// // 8. Set a Reset button
// const reset = document.getElementById('reset');

let billValue;
let person;
let customValue;
let customPercent = 0;

let myArray = [5, 10, 15, 25, 50, customPercent];
let tip = 0;

let error = true;
let inputPeople = false;

const calculateHandler = () => {
    if (inputPeople) {
        let amount = (billValue + tip) / person;
        totalCost.textContent = `${amount.toFixed(2)}`;
    }
}

billAmount.addEventListener('change', () => {
    error = !error;
    billValue = +billAmount.value;
    tipPercentage.forEach((el, idx) => {
        let percent = myArray[idx];
        el.addEventListener('click', () => {
            if (custom.firstElementChild === customInput && idx === 5) {
                customInput.addEventListener('change', () => {
                    customValue = +customInput.value;
                    tip = customInput.value * (+percent / 100);
                    tipAmount.textContent = `${tip.toFixed(2)}`;
                    calculateHandler();
                })
            }
            tip = billAmount.value * (+percent / 100);
            tipAmount.textContent = `${tip}`;
            calculateHandler();
        });
    });
}

numberOfPeople.addEventListener('input', () => {
    inputPeople = !inputPeople;
    person = +numberOfPeople.value;
    if (!error) {
        calculateHandler();
    }
});

reset.addEventListener('click', () => {
    billAmount.value = '';
    numberOfPeople.value = '';
    customInput.value = '';
    tipAmount.textContent = '0.00';
    totalCost.textContent = '0.00';
});

custom.addEventListener('click', () => {
    custom.firstElementChild.classList.toggle('hidden');
    custom.lastElementChild.classList.toggle('hidden');
});


