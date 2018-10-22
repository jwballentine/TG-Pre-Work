const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage = animals.map(animalsItem => animalsItem[0]);

console.log(secretMessage.join(''));
console.log(secretMessage);

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = bigNumbers.map(bigNumbersItem => bigNumbersItem / 100);

console.log(smallNumbers);

// I used the map method to alter the arrays and store the alteration in a new array
