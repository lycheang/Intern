//example
//step 1 create a element

// const newh1=document.createElement("h1");
 const newlistitems=document.createElement("li");
     
//step 2 add attributes properties
// newh1.textContent ="I love cambodia";
// newh1.id="newh1";
// newh1.style.color = "red";
// newh1.style.textAlign = "center";
newlistitems.textContent = "coconut";
newlistitems.id="coconut";
newlistitems.style.fontWeight = "bold";
newlistitems.style.backgroundColor = "red";
newlistitems.style.fontSize="20px";
//step 3 append element to dom
// document.getElementById("fruits").prepend(newlistitems);
// document.getElementById("fruits").append(newlistitems);
// const orange=document.getElementById("orange");
// document.getElementById("fruits").insertBefore(newlink,)

const listitems=document.querySelectorAll("#fruits li");
document.getElementById("fruits").insertBefore(newlistitems,listitems)
// document.body.append(newh1);
// document.body.prepend(newh1);
// document.getElementById("box1").append(newh1);
// document.getElementById("box1").prepend(newh1);

// const box2=document.getElementById("box2");
// document.body.insertBefore(newh1,box2);

// remove html element


