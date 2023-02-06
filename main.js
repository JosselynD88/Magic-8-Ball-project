let userName ='Cleo';
const userQuestion = `Am i good at Makeup?`
let randomNumber = Math.floor(Math.random()* 8);
let eightBall = '';
userName ? console.log(`Hello, ${userName}`) : console.log('Hello!');
console.log(`${userName} asked: ${userQuestion}`);

switch (randomNumber){
    case 0:
        eightBall = 'It is Certain'
        break;
        case 1: 
        eightBall = 'It is decidly so'
        break;
        case 3:
        eightBall = 'Cannot predict now' 
        break;
        case 4: 
        eightBall = 'Do not count on it'
        break;
        case 5:
        eightBall = 'My sources say no'  
        break;
        case 6: 
        eightBall = 'Outlook not so good'  
        break;
        case 7:
        eightBall = 'Signs point to yes' 
        break;
}
console.log(`Magic Eightball: ${eightBall}`);
