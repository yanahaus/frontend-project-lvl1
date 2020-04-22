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
  const item = [15, 6, 7];
  for (let i = 0; i < item.length;) {
    let userAnswer = readlineSync.question(`Question: ${item[i]} \n`);
    if (isNumberEven(item[i]) === userAnswer) {
      console.log('Correct!');
      i += 1;
    } else console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${isNumberEven(item[i])}". Let's try again, ${userName}!`);
  }
  console.log(`Congratulations, ${userName}!`);
};

export default readlineSync;
