const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
     console.log('The value of accumulator: ', accumulator);
     console.log('The value of the currentValue: ', currentValue);
     return accumulator + currentValue;}, 10);

console.log(newSum);

// I used the reduce method to sum all of the elements in the array
