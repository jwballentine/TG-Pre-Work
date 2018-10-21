const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
};

const addTwo = num => num + 2;

const timeFuncRuntime = funcParameter => {
  let t1 = Date.now();
  funcParameter();
  let t2 = Date.now();
  return t2 - t1;
};

// Write your code below
let time2p2 = timeFuncRuntime(checkThatTwoPlusTwoEqualsFourAMillionTimes);

const checkConsistentOutput = (funcParameter, value) => {
  let f1 = funcParameter(value);
  let f2 = funcParameter(value);

  if(f1 === f2){
    return f1;
  } else {
    return 'This function returned inconsistent results';
  }
}

checkConsistentOutput(addTwo, 6);

//I created a function that took 2 arguments, a function and a value, and preformed a calculation on them
