const BILL = document.querySelector('.bill-input');
const TIP_PERCENT = document.querySelectorAll('.percent');
const PEOPLE = document.querySelector('.number-input');
const TOTAL_BILL = document.getElementById('total');
const TIP_AMOUNT = document.getElementById('tip-amount');
const CUSTOM = document.querySelector('.custom');
const CUSTOM_BUTTON = document.getElementById('cst-btn')
const CUSTOM_INPUT = document.getElementById('cst-input')
const RESET = document.getElementById('reset');

let billValue;
let person;
let customValue;
let custom = 0;

let myArray = [5, 10, 15, 25, 50, custom];
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
    billValue = parseFloat(BILL.value);
    // billValue = +BILL.value;
    // TIP_PERCENT.forEach((el, idx) => {
    //     let percent = myArray[idx];
    //     el.addEventListener('click', () => {
    //         if (CUSTOM.firstElementChild === CUSTOM_INPUT && idx === 5) {
    //             CUSTOM_INPUT.addEventListener('change', () => {
    //                 customValue = +CUSTOM_INPUT.value;
    //                 tipAmount = CUSTOM_INPUT.value * (+percent / 100);
    //                 TIP_AMOUNT.textContent = `${tipAmount.toFixed(2)}`;
    //                 calculateHandler();
    //             })
    //         }
    //         tipAmount = BILL.value * (+percent / 100);
    //         TIP_AMOUNT.textContent = `${tipAmount}`;
    //         calculateHandler();
    //     });
    // });
});

TIP_PERCENT.addEventListener('click', (e) => {
    let target = e.target;
    if (target.classList.contains('percent')) {
      let percent = parseFloat(target.textContent);
      if (isNaN(percent)) {
        percent = customValue;
      } else {
        customValue = 0;
      }
      tipAmount = billValue * (percent / 100);
      TIP_AMOUNT.textContent = `${tipAmount.toFixed(2)}`;
      updateBillAmount();
    }
  });


PEOPLE.addEventListener('input', () => {
    inputPeople = !inputPeople;
    person = +PEOPLE.value;
    if (!error) {
        calculateHandler();
    }
});

CUSTOM.addEventListener('click', () => {
    if (CUSTOM.firstElementChild === CUSTOM_BUTTON) {
        CUSTOM.innerHTML = `<input type="number" id="cst-input" class="percent cst" />`
    }
})

RESET.addEventListener('click', () => {
    BILL.value = '';
    PEOPLE.value = '';
    TIP_AMOUNT.textContent = '0.00';
    TOTAL_BILL.textContent = '0.00';
});
