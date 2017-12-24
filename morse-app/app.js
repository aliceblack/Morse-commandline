let code = require('./code');
const readline = require('readline');

console.log('Morse -- --- .-. ... .');
console.log('Select your input method: message | letter | morse');

var rl = readline.createInterface(process.stdin, process.stdout);

rl.on('line', (input) => {
  if(input=='message'){
    console.log('Type your message:')
    rl.on('line', (input) => {
     let morseResponse = [];
     counter=0;

     for(let i of input){
      let r=i.toUpperCase();
      morseResponse.push(code[r]);
      console.log(r+'   '+code[r]);
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
});
