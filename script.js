let generatedNumbers = [];
const playerForm = document.getElementById('player-form');
const resultDiv = document.getElementById('result');
const clearButton = document.getElementById('clear-button');

playerForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const numPlayers = parseInt(document.getElementById('num-players').value);
    if (numPlayers < 1) {
        alert('Please enter a valid number of players (at least 1).');
        return;
    }
    if (generatedNumbers.length < numPlayers) {
        while (true) {
            const randomNumber = Math.floor(Math.random() * numPlayers) + 1;
            if (!generatedNumbers.includes(randomNumber)) {
                generatedNumbers.push(randomNumber);
                resultDiv.textContent += `${randomNumber} `;
                break;
            }
        }
    } else {
        alert('All numbers between 1 and ' + numPlayers + ' have been generated!');
    }
});
clearButton.addEventListener('click', () => {
    if (confirm('Are you sure you want to clear all generated numbers and the input field?')) {
        generatedNumbers = [];
        resultDiv.textContent = '';
        document.getElementById('num-players').value = '';
    }
});