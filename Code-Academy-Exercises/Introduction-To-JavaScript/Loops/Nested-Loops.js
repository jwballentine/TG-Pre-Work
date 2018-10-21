// Write your code below

let bobsFollowers = ['Jamie', 'Billy', 'Joel', 'Carl'];

let tinasFollowers = ['Jamie', 'Carl', 'Rachel'];

let mutualFollowers = [];

for(let i = 0; i < bobsFollowers.length; i++){
  for(let j = 0; j < tinasFollowers.length; j++){
    if(bobsFollowers[i] === tinasFollowers[j]){
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
  console.log(i + ' ' + mutualFollowers);
};
//I created a nested for loop to compare two arrays
