// closure= a function defined inside of another function the inner function acess to the variables 
//and scope of the outer function 
//Allow for private variables and state maintenances 
//Used requently in JS framework : React Vue Angular

// function outer(){
//     let message="hello"
//     function inner(){
//         console.log(message)
//     }
//     inner();
// }

// outer();
// let count=0;
// function increment(){
  
//     count++;
//     console.log(`Count increased ${count}`)
// }
// increment();
// increment();

// function createCounter(){
//     let count =0;
//     function increment(){
//         count++;
//         console.log(`Count incresed to ${count}`);
//     }
//     function getCount(){
//         return count;
//     }

//     return {increment, getCount}
// }

// const counter=createCounter();

// counter.increment();
// counter.increment();
// counter.increment();


// console.log(`The current count is ${counter.getCount()}`)

function createGame(){
let score=0;
function increasedScore(points){
    score +=points;
    console.log(`+${points}pts`)
}
function decreasedPoint(points){
    score-=points;
    console.log(`-${points}pts`)
}
function getScore(){
    return score;
}

return {increasedScore,decreasedPoint,getScore}
}
const game=createGame();


game.increasedScore(5);

game.decreasedPoint(5);

console.log(`The final score is ${game.getScore()}pts`)


