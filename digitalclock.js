//digital clock program

function updateClock(){
    const now=new Date();
    let h=now.getHours();
    const ampm=h>=12?'PM':'AM';
    h=h%12||12;
    h=h.toString().padStart(2, '0');
    const m=now.getMinutes().toString().padStart(2, '0');
    const s=now.getSeconds().toString().padStart(2, '0');
    const timeString=`${h}:${m}:${s} ${ampm}`;
    document.getElementById('clock').innerText=timeString;

}

updateClock();
setTimeout(updateClock,1000);