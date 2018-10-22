const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below

const smallNumbers = randomNumbers.filter(numbers => numbers < 250);

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];


// Call .filter() on favoriteWords below

const longFavoriteWords = favoriteWords.filter(word => word.length > 7);

console.log(smallNumbers);
console.log(longFavoriteWords);

// I used the filter method to check if each element passed a test, and added the element to a new array if it passed
