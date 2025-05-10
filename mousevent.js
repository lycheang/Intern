//eventlistener: listen for specific events to create interactive web page 
//event: click,mourseover ,mouseout .addEventListener(event,callbacks)

const myboxs=document.getElementById('mybox');
const mybtn=document.getElementById('btn');

mybtn.addEventListener('click',event=> {
    myboxs.target.style.backgroundColor="tomato";
    myboxs.target.textContent="Onch😊";});

mybtn.addEventListener('mouseover',event=> {
    myboxs.targe3rem;le.backgroundColor="yellow";
    myboxs.target.textContent="Hovered😂";});

mybtn.addEventListener('mouseout',event=> {
    myboxs.target.style.backgroundColor="pink";
    myboxs.target.textContent="Hello😍";});
