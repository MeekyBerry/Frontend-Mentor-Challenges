const billInput = document.getElementById('bill');
const tipButtons = document.querySelectorAll('.percent');
const customButton = document.querySelector('.custom');
const customInput = document.createElement('input');
const peopleInput = document.getElementById('number');
const tipAmountSpan = document.getElementById('tip-amount');
const totalAmountSpan = document.getElementById('total');
const resetButton = document.getElementById('reset');

let billValue;
let person;
let customValue;
let tipPercent = 0;

let myArray = [5, 10, 15, 25, 50, 'Custom'];
let tipAmount = 0;

let error = true;
let inputPeople = false;

const calculateHandler = () => {
    if (inputPeople) {
        let amount = (billValue + tipAmount) / person;
        TOTAL_BILL.textContent = `${amount.toFixed(2)}`;
    }
};

BILL.addEventListener('change', () => {
    error = !error;
    billValue = +BILL.value;
    TIP_PERCENT.forEach((el, idx) => {
        let percent = myArray[idx];
        el.addEventListener('click', () => {
            if (idx === 5) {
                CUSTOM.innerHTML = `<input type="number" id="cst-input" class="percent cst" />`
                CUSTOM_INPUT.addEventListener('change', () => {
                    customValue = +CUSTOM_INPUT.value;
                    tipAmount = billValue * (customValue / 100);
                    TIP_AMOUNT.textContent = `${tipAmount.toFixed(2)}`;
                    calculateHandler();
                })
            } else {
                tipAmount = billValue * (percent / 100);
                TIP_AMOUNT.textContent = `${tipAmount.toFixed(2)}`;
                calculateHandler();
            }
        });
    });
});


PEOPLE.addEventListener('input', () => {
    inputPeople = !inputPeople;
    person = +PEOPLE.value;
    if (!error) {
        calculateHandler();
    }
});

CUSTOM_BUTTON.addEventListener('click', () => {
    CUSTOM.innerHTML = `<input type="number" id="cst-input" class="percent cst" />`
})

// CUSTOM_INPUT.addEventListener('focusout', () => {
//     if (CUSTOM_INPUT.value === '') {
//         CUSTOM_INPUT.style.display = 'none';
//         CUSTOM_BUTTON.style.display = 'block';
//     }
// });

RESET.addEventListener('click', () => {
    BILL.value = '';
    PEOPLE.value = '';
    TIP_AMOUNT.textContent = '0.00';
    TOTAL_BILL.textContent = '0.00';
    CUSTOM.innerHTML = `<button id="cst-btn" class="percent cst">Custom</button>`
    // customValue = 0;
});







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
