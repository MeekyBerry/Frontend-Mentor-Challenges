const bill = document.querySelector('.bill-input').value;
const tipPercent = document.querySelectorAll('.percent');
const numberOfPeople = document.querySelector('.number-input').value;
const tipAmount = document.getElementById('tip-amount')
const totalBill = document.getElementById('total')

const resetButton = document.getElementById('button');

function calculate() {
    if (bill === "" || tip == 0) {
        alert("Please enter values");
        return;
    }  
    //Calculate Tip When Click On Tip Percentage Button
    tipPercent.forEach((select) => {
        select.addEventListener('click', (e) => {
            let tipvalue = e.target.innerHTML;
            tipvalue = tipvalue.substr(0, tipvalue.length - 1);

        })
        let totalBill = (bill * tipvalue) / numberOfPeople;
        totalBill = Math.round(totalBill * 100) / 100;
        totalBill = totalBill.toFixed(2);

        document.getElementById('total').innerHTML = totalBill;
    })
}

document.getElementById('button').onclick = function() {
    calculate()
}


//Reset 
// resetButton.addEventListener("click", reset);
// function reset() {
//     bill.innerHTML = "0.00";
//     number.innerHTML = "0.00";
//     tipAmount.value = "0.00";
//     totalBill.value = "0.00";
// }
