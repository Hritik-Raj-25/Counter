const addButton = document.getElementById('counterAdd')
const subButton = document.getElementById('counterSub');
const counterDisplay = document.getElementById('counterDisplay');

let total = 0;
const limit = 20;

const updateCounterDisplay = function() {
    if (total > limit) {
        total = limit;
    }

    if (total < 0) {
        total = 0;
    }

    counterDisplay.textContent = total;
    document.body.style.setProperty('background-color', `rgb(${(total / limit) * 255}, 64, 0)`)
};

addButton.addEventListener('click', () => {
    total += 1;
    updateCounterDisplay();
});

subButton.addEventListener('click', () => {
    total -=1;
    updateCounterDisplay();
});

updateCounterDisplay();