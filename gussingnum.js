//guessing number game
const minNum = 50;
const maxNum = 100;
const answer=Math.floor(Math.random() * (maxNum - minNum+1))+minNum;

// console.log(answer);

let attempt = 0;
let guess;
let running = true;
while(running ==true){
    guess=window.prompt(`Enter a number between ${minNum} and ${maxNum}`);
    guess=Number(guess);
    if(isNaN(guess)){
        window.alert("Not a number");
        
    }
    else if(guess<minNum||guess>maxNum){
        window.alert("Out of range");
    }
    else{
        attempt++;
        if(guess<answer){
            window.alert("Higher");
        }
        else if(guess>answer){
            window.alert("Lower");
        }
        else{
            window.alert(`Correct! It took you ${attempt} attempts`);
            running = false;
        }
    }
    running = false;

}