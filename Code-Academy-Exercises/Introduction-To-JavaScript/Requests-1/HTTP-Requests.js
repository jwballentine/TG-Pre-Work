console.log('First message!');
setTimeout(() => {
   console.log('This message will always run last...');
}, 0);
console.log('Second message!');
// I changed the timeout to 0 and the output didn't change
