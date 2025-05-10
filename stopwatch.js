const display = document.getElementById('display');
let timer=null;
let elapsettime=0;
let startime=0;
let isRunning=false;
function start(){
    if(!isRunning){
        starttime=Date.now()-elapsettime;
        timer=setInterval(update,10)
        isRunning=true;

    }
    console.log(starttime);
}
function stop(){
    if(isRunning){
        clearInterval(timer);
       elapsettime=Date.now()-starttime;
       isRunning=false;
    }
}
function cancel(){
clearInterval(timer);
startime=0;
elapsettime=0;
isRunning=false;
display.textContent='00:00:00:00';

}
function update(){
    const currentTime=Date.now();
    elapsettime=currentTime-starttime;
    let hours=Math.floor(elapsettime/(1000*60*60));
    let minutes=Math.floor(elapsettime/(1000*60)%60);
    let seconds=Math.floor(elapsettime/1000)%60;
    let milliseconds=Math.floor(elapsettime%1000/10)
    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');
    milliseconds=String(milliseconds).padStart(2, '0');
    display.textContent=`${hours} ${minutes} ${seconds} ${milliseconds}`;
}