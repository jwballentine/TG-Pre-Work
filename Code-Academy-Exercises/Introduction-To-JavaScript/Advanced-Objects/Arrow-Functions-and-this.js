const robot = {
  energyLevel: 100,
  checkEnergy(){
    console.log(`Energy is currently at ${this.energyLevel}%.`)
  }
}

robot.checkEnergy();

//I change the arrow function to a function expression because arrow functions don't work with this keyword
