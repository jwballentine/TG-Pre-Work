const robot = {
  model : '1E78V2',
  energyLevel : 100,
  provideInfo() {
  return `I am ${this.model} and my current energy level is ${this.energyLevel}`;
}
};

console.log(robot.provideInfo());

// I created a object with a method that accessed the objects properties with the this keyword
