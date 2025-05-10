//dom=document by element

//object that represents the page you see in the web browser
// and provides you with API to interact with it 
// web browser constructs the dom  when it load an html document
// and structure all the elements in a tree like represenatation 
// Js can access the dom dynamically
// change the content, structure and style of a web page


const usernames ="bunchheang";
const welcomemessage=document.getElementById("welcome"); //


welcomemessage.textContent += usernames=== ""?Guest :usernames; //