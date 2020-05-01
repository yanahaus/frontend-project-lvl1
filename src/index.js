import readlineSync from 'readline-sync';

const userName = readlineSync.question('May I have your name?\n');

export const welcome = () => {
  console.log('Welcome to the Brain Games!');
  console.log(userName);
  console.log(`Hello, ${userName}!`);
};

export const gameBrain = () => {

  const isNumberEven = (num) => {
    if (num % 2 === 0) {
      return 'yes';
    } else return 'no';
  };
  
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
    for (let i = 0; i < 3;) {
    const randomNumber = Math.floor(Math.random() * 101);
    let userAnswer = readlineSync.question(`Question: ${randomNumber} \nYour answer: `);
    if (isNumberEven(randomNumber) === userAnswer) {
      console.log('Correct!');
      i += 1;
    } else console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${isNumberEven(randomNumber)}".\nLet's try again, ${userName}!`);
  }
  console.log(`Congratulations, ${userName}!`);
};

export const gameCalc = () => {
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3;) {
    const randomNumber1 = Math.floor(Math.random() * 101);
    const randomNumber2 = Math.floor(Math.random() * 101);
    сonst arr = ['+', '-', '*'];
    const randomOperator = arr[Math.floor(Math.random()*arr.length)];
    console.log(randomOperator);
    let userAnswer = readlineSync.question(`Question: ${randomNumber1} + ${randomNumber2} \n`);
      if (Number(userAnswer) === (randomNumber1 + randomNumber2)) {
        console.log('Correct!');
      i += 1;
    } else console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${randomNumber1 + randomNumber2}".\nLet's try again, ${userName}!`);
  }
  console.log(`Congratulations, ${userName}!`);
};
 
export default readlineSync;
