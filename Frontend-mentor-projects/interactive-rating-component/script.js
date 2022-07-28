const BUTTON = document.getElementById('btn');
const CONTAINER_BOX = document.querySelector('.container');
const SECOND_CONTAINER_BOX = document.querySelector('.second-container');
const NUMBERS = document.querySelectorAll('.number');
const CONFIRMATION_MSG = document.querySelector('.confirmation-message');
let error = true;


const NumberSelected = () => {
    NUMBERS.forEach((selected, index) => {
        selected.addEventListener('click', (e) => {
            error = false;
            CONFIRMATION_MSG.textContent = `You selected ${index + 1} out of 5`;
            for (let i = 0; i <= index; i++) {
                NUMBERS[i].style.backgroundColor = 'hsl(0, 0%, 100%)';
            }
            for (let j = index + 1; j < NUMBERS.length; j++) {
                NUMBERS[j].style.backgroundColor = 'hsl(215deg 20% 19%)';
            }
        })
    })
}

NumberSelected();


BUTTON.addEventListener('click', () => {
    if (error === true) {
        return;
    }
    CONTAINER_BOX.classList.toggle('hidden')
    SECOND_CONTAINER_BOX.classList.toggle('hidden')
});


// NUMBERS.forEach((selected, index) => {
//     selected.addEventListener('click', (e) => {
//         BUTTON.addEventListener('click', (e) => {
//             CONTAINER_BOX.classList.toggle('hidden')
//             SECOND_CONTAINER_BOX.classList.toggle('hidden')
//         })
//     })
// });