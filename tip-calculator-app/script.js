const BILL = document.querySelector('.bill-input');
const TIP_PERCENT = document.querySelectorAll('.percent');
const PEOPLE = document.querySelector('.number-input');
const TOTAL_BILL = document.getElementById('total')
const TIP_AMOUNT = document.getElementById('tip-amount')

let billValue;
let person;

let myArray = [5, 10, 15, 25, 50];
let tipAmount = 0;

const calculateHandler = () => {
    let amount = (billValue + tipAmount)/person;
    TOTAL_BILL.textContent = `${amount.toFixed(2)}`;
}

BILL.addEventListener('change', () => {
    billValue = +BILL.value
    // console.log(billValue)
    TIP_PERCENT.forEach((el, idx) => {
        let percent = myArray[idx];
        el.addEventListener('click', () => {
            tipAmount = BILL.value * (percent / 100);
            TIP_AMOUNT.textContent = `${tipAmount}`;
            calculateHandler();
        })
    })
})

PEOPLE.addEventListener('input', () => {
    person = +PEOPLE.value
    // console.log(person)
    calculateHandler();
})



