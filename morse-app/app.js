let code = require('./code');
const readline = require('readline');

console.log('\nMorse -- --- .-. ... . \n ');
console.log('Select your input method: message | letter | morse | guess \n');
console.log('message - convert a message to morse');
console.log('letter - get its morse symbol');
console.log('morse - get the corresponding letter');
console.log('guess - write the correct symbol');

var rl = readline.createInterface(process.stdin, process.stdout);

rl.on('line', (input) => {
  if(input=='message'){
    console.log('Type your message:')
    rl.on('line', (input) => {
     let morseResponse = [];

     for(let i of input){
      let letterUpperCase=i.toUpperCase();
      morseResponse.push(code[letterUpperCase]);
      console.log(letterUpperCase+'   '+code[letterUpperCase]);
     }

     let resp="";
     for(let c of morseResponse){
      resp=resp+"   "+c;
     }

     console.log(resp);
    });

  }
  else if(input=='letter'){
    console.log('Type a letter:')
    rl.on('line', (input) => {
      input=input.toUpperCase();
      console.log(input+'   '+code[input]);
    });
  }
  else if(input=='morse'){
    console.log('Type a morse symbol:')
    rl.on('line', (input) => {
      let k=Object.keys(code).find(key => code[key] === input);
      console.log(k);
    });
  }
  else if(input=='guess'){
    var keys = Object.keys(code);
    let randomKey = keys[ keys.length * Math.random() << 0];
    console.log(randomKey);
    rl.on('line', (input) => {
      input=input.toUpperCase();
      let userAnswer=Object.keys(code).find(key => code[key] === input);
      console.log('Your answer is:   '+input+'   '+userAnswer);
      let correctLetter = code[randomKey];
      console.log('The correct answer is:   '+correctLetter+' '+ randomKey);
    });

  }
});
