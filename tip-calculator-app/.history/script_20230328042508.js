// 1. Get the bill amount from the input field
const billInput = document.getElementById('bill');
// 2. Get the tip percentage from the Button array
const tipButtons = document.querySelectorAll('.percent');
// 2.1. The percentage array contains a Custom button which toggles to input field when clicked
const customButton = document.querySelector('.custom');
// 2.2. Get the custom percentage from the input field
const customInput = document.createElement('input');
// Add style class to created customInput element
customInput.classList.add('custom-input');
// 3. Get the number of people from the input field
const peopleInput = document.getElementById('people')
// 4. Calculate the tip amount per person;
const tipAmountSpan = document.getElementById('tip-amount');
// 5. Calculate the total cost per person
const totalAmountSpan = document.getElementById('total-amount');
// 6. Display the tip amount per person
const resetButton = document.getElementById('reset');


let bill = 0;
let tipPercentage = 0;
let customPercentage = 0;
let people = 0;

let inputPeople = false;
let error = true;

// add input validation for bill and people fields
billInput.addEventListener('input', () => {
    bill = Number(billInput.value);
    calculateTip();
});

peopleInput.addEventListener('input', () => {
// add condition to check if people input is zero and set the border line to red and display "can't be zero" text on top of the border if true
    if (peopleInput.value === '0') {
        peopleInput.classList.add('error');
        peopleInput.value = '';
    }
    people = Number(peopleInput.value);
    calculateTip();

});

// add event listeners for tip buttons
tipButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('custom')) {
            customInput.type = 'number';
            customInput.min = 1;
            customInput.value = '';
            customInput.classList.add('custom-input');
            button.parentNode.replaceChild(customInput, button);
            customInput.focus();
        } else {
            tipPercentage = Number(button.textContent.replace('%', ''));
            calculateTip();
        }
    });
});

// add event listener for custom input
customInput.addEventListener('input', () => {
    customPercentage = Number(customInput.value);
    calculateTip();
});

// add event listener for reset button
resetButton.addEventListener('click', () => {
    billInput.value = '';
    peopleInput.value = '';
    tipAmountSpan.textContent = '0.00';
    totalAmountSpan.textContent = '0.00';
    bill = 0;
    tipPercentage = 0;
    customPercentage = 0
    people = 0;
    customInput.parentNode.replaceChild(customButton, customInput);
});

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
    }
};







// const BILL = document.querySelector('.bill-input');
// const TIP_PERCENT = document.querySelectorAll('.percent');
// const PEOPLE = document.querySelector('.number-input');
// const TOTAL_BILL = document.getElementById('total');
// const TIP_AMOUNT = document.getElementById('tip-amount');
// const CUSTOM = document.querySelector('.custom');
// const CUSTOM_BUTTON = document.getElementById('cst-btn')
// const CUSTOM_INPUT = document.getElementById('cst-input')
// const RESET = document.getElementById('reset');

// let billValue;
// let person;
// let customValue;
// let custom = 0;

// let myArray = [5, 10, 15, 25, 50, custom];
// let tipAmount = 0;

// let error = true;
// let inputPeople = false;

// const calculateHandler = () => {
//     if (inputPeople) {
//         let amount = (billValue + tipAmount) / person;
//         TOTAL_BILL.textContent = `${amount.toFixed(2)}`;
//     }
// };

// BILL.addEventListener('change', () => {
//     error = !error;
//     billValue = parseFloat(BILL.value);
//     TIP_PERCENT.forEach((el, idx) => {
//         let percent = myArray[idx];
//         el.addEventListener('click', (e) => {
//             let target = e.target;
//             if (target.classList.contains('percent')) {
//                 let percent = parseFloat(target.textContent);
//                 if (isNaN(percent)) {
//                     percent = customValue;
//                 } else {
//                     customValue = 0;
//                 }
//                 // if (CUSTOM.firstElementChild === CUSTOM_INPUT && idx === 5) {
//                 //     CUSTOM_INPUT.addEventListener('change', () => {
//                 //         customValue = parseFloat(CUSTOM_INPUT.value);
//                 //         tipAmount = CUSTOM_INPUT.value * (percent / 100);
//                 //         TIP_AMOUNT.textContent = `${tipAmount.toFixed(2)}`;
//                 //         calculateHandler();
//                 //     })
//                 // }
//                 tipAmount = billValue * (percent / 100);
//                 TIP_AMOUNT.textContent = `${tipAmount.toFixed(2)}`;
//                 calculateHandler();
//             }
//         });
//     });
// });


//     // billValue = +BILL.value;
//     // TIP_PERCENT.forEach((el, idx) => {
//     //     let percent = myArray[idx];
//     //     el.addEventListener('click', () => {
//     //         if (CUSTOM.firstElementChild === CUSTOM_INPUT && idx === 5) {
//     //             CUSTOM_INPUT.addEventListener('change', () => {
//     //                 customValue = +CUSTOM_INPUT.value;
//     //                 tipAmount = CUSTOM_INPUT.value * (+percent / 100);
//     //                 TIP_AMOUNT.textContent = `${tipAmount.toFixed(2)}`;
//     //                 calculateHandler();
//     //             })
//     //         }
//     //         tipAmount = BILL.value * (+percent / 100);
//     //         TIP_AMOUNT.textContent = `${tipAmount}`;
//     //         calculateHandler();
//     //     });
//     // });

// // TIP_PERCENT.addEventListener('click', (e) => {
// //     let target = e.target;
// //     if (target.classList.contains('percent')) {
// //       let percent = parseFloat(target.textContent);
// //       if (isNaN(percent)) {
// //         percent = customValue;
// //       } else {
// //         customValue = 0;
// //       }
// //       tipAmount = billValue * (percent / 100);
// //       TIP_AMOUNT.textContent = `${tipAmount.toFixed(2)}`;
// //       calculateHandler();
// //     }
// //   });


// PEOPLE.addEventListener('input', () => {
//     // inputPeople = !inputPeople;
//     // person = +PEOPLE.value;
//     // if (!error) {
//     //     calculateHandler();
//     // }
//  inputPeople = true;
//   person = parseFloat(PEOPLE.value);
//   if (!error && person > 0) {
//     calculateHandler();
//   } else {
//     TOTAL_BILL.textContent = '0.00';
//   }
// });

// CUSTOM.addEventListener('click', () => {
//     // if (CUSTOM.firstElementChild === CUSTOM_BUTTON) {
//     //     CUSTOM.innerHTML = `<input type="number" id="cst-input" class="percent cst" />`
//     // }
//     if (CUSTOM.firstElementChild === CUSTOM_BUTTON) {
//         // CUSTOM.innerHTML = `<input type="number" id="cst-input" class="percent cst" />`
//         CUSTOM.innerHTML = `<input type="number" class="percent cst" />`;
//         CUSTOM_INPUT.addEventListener('change', () => {
//           customValue = parseFloat(CUSTOM_INPUT.value);
//           TIP_PERCENT.lastElementChild.textContent = `${customValue}%`;
//           tipAmount = billValue * (customValue / 100);
//           TIP_AMOUNT.textContent = `${tipAmount.toFixed(2)}`;
//           calculateHandler();

//         });
//       }
// })

// RESET.addEventListener('click', () => {
//     // BILL.value = '';
//     // PEOPLE.value = '';
//     // TIP_AMOUNT.textContent = '0.00';
//     // TOTAL_BILL.textContent = '0.00';
//     CUSTOM.innerHTML = `<button id="cst-btn" class="percent cst">Custom</button>`;
//     BILL.value = '';
//     PEOPLE.value = '';
//     TIP_AMOUNT.textContent = '0.00';
//     TOTAL_BILL.textContent = '0.00';
//     inputPeople = false;
//     customValue = 0;
//     tipAmount = 0;
// });
