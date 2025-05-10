//dom navigation :the process of navigation through the structure of html document using JS



//firstelement child
//.lastelement child
//nextelement child
//previous elementsibling 
//parent elements
//children
//---first element selected
// const firstelement=document.getElementById("fruit");
// const firstchild=element.firstelementChild

// firstchild.style.backgroundColor="yellow";
//--first child selected
// const ulele=document.querySelectorAll("ul");

// ulele.forEach(uleles=>{
//     const firstchild= uleles.firstElementChild;
//     firstchild.style.backgroundColor="yellow";
// })
//--last element selected
// const element=document.getElementById("fruit");
// const lastchild=element.lastElementChild;
// lastchild.style.backgroundColor="red";
//--last child selected
// const ulele=document.querySelectorAll("ul");

// ulele.forEach(uleles=>{
//     const lastchild= uleles.lastElementChild;
//     lastchild.style.backgroundColor="red";
// })
//--previous elementsilbing

// const element=document.getElementById("beets");
// const prevsibling=element.previousElementSibling;
// prevsibling.style.backgroundColor="red"; 


//--parent element

// const element=document.getElementById("salad");

// const parent=element.parentElement;
// const parentElement=element.parentElement;
// parent.style.backgroundColor="yellow";


//--children element


const element =document.getElementById("noveg");
const child=element.children;   
console.log(child);
Array.from(child).forEach(childs=>{
    childs.style.backgroundColor="Red";
})