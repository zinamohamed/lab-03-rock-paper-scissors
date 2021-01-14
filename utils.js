// create function that genorates computer throw // 
export function makeRPSThrow() {

    const randomNumber = Math.floor(Math.random() * 3);
   
    if (randomNumber === 1) {
        return 'rock';
    }
    else if (randomNumber === 2) {
        return 'paper';
    }
    else if (randomNumber === 3) {
        return 'scissors';
    }

}

export function didUserWin(throwOne, throwTwo) {
    if (throwOne === throwTwo) {
        return 'draw';
    }
    if (throwOne === 'rock' && throwTwo === 'paper') {
        return 'lose';
    }
    if (throwOne === 'paper' && throwTwo === 'scissors') {
        return 'lose';
    }
    if (throwOne === 'scissors' && throwTwo === 'rock') {
        return 'lose';
    }
    if (throwOne === 'rock' && throwTwo === 'scissors') {
        return 'win';
    }
    if (throwOne === 'paper' && throwTwo === 'rock') {
        return 'win';
    }
    if (throwOne === 'scissors' && throwTwo === 'paper') {
        return 'win';
    }
}