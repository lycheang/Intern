//eventlistener: function for specific event to create interactive web pages event keydown keyup 
//document.addEventListener(event,callback);
const mybox = document.getElementById("mybox");
const movement = 50;
let x = 0;
let y = 0;

document.addEventListener("keydown", event => {
    if (event.key.startsWith("Arrow")) {
        event.preventDefault();
        switch (event.key) {
            case "ArrowUp":
                y -= movement;
                break;
            case "ArrowDown":
                y += movement;
                break;
            case "ArrowLeft":
                x -= movement;
                break;
            case "ArrowRight":
                x += movement;
                break;
        }
        mybox.style.transform = `translate(${x}px, ${y}px)`;
    }
});

// document.addEventListener('keydown', (event) => {
//     myboxs.textContent = "Changed";
//     myboxs.style.backgroundColor = "orange";
// });
// document.addEventListener('keyup', (event) => {
//    myboxs.textContent = "Changed UP";
//    myboxs.style.backgroundColor = "yellow";
// });

