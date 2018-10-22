const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(animal => animal === 'elephant');

const startsWithS = animals.findIndex(animal => animal[0] === 's');

console.log(foundAnimal);
console.log(startsWithS);

//I used the findIndex method to find the first index that meets the function requirments
