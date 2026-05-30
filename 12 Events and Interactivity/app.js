// // 1. Onclick Property
// const button = document.getElementById("myButton");
// button.onclick = function () {
//   alert("Button clicked");
//   button.innerText = "Button was clicked";
// };

// const imgElement = document.getElementById("myImage");
// imgElement.onclick = function () {
//   //   alert("img clicked");
//   console.log(imgElement.src);

//   if (imgElement.src.includes("dog.jpg")) {
//     imgElement.src = "cat.jpg";
//   } else {
//     imgElement.src = "dog.jpg";
//   }
// };

// // 2. More on Events
// const button = document.getElementById("myButton");
// const box = document.getElementById("myBox");
// const image = document.getElementById("myImage");
// const paragraph = document.getElementById("myParagraph");

// // Mouse Events
// button.onclick = () => alert("Button clicked!");
// button.onmousedown = () => console.log("Mouse button down on button");
// button.onmouseup = () => console.log("Mouse button released");
// image.ondblclick = () => console.log("Image double-clicked");
// box.onmouseenter = () => (box.style.backgroundColor = "lightblue");
// box.onmouseleave = () => (box.style.backgroundColor = "white");
// box.onmousemove = (e) =>
//   console.log(`Mouse moved to ${e.offsetX}, ${e.offsetY}`);
// paragraph.oncontextmenu = () => alert("Right-clicked!");

// // Keyboard & Input Events
// input.onchange = () => console.log("Input changed:", input.value);
// textField.oninput = () => (charCount.innerText = textField.value.length);
// password.onfocus = () => (password.style.borderColor = "green");
// email.onblur = () => (email.style.borderColor = "red");
// document.onkeydown = (e) => console.log("Key down:", e.key);
// document.onkeyup = (e) => console.log("Key up:", e.key);

// // Form Events
// form.onsubmit = (e) => {
//   e.preventDefault();
// };
// checkbox.onclick = () => console.log("Checkbox checked:", checkbox.checked);
// radioButton.onchange = () => console.log("Radio selected:", radioButton.value);

// // Browser / Window Events
// window.onload = () => console.log("Page fully loaded");
// window.onresize = () => console.log("Window resized");
// window.onscroll = () => (header.style.opacity = "0.5");

// // Clipboard Events
// textField.oncopy = () => console.log("Content copied");
// textField.oncut = () => console.log("Content cut");
// textField.onpaste = () => console.log("Content pasted");

// // Drag and Drop Events
// draggableElement.ondragstart = () => console.log("Drag started");
// draggableElement.ondragend = () => console.log("Drag ended");
// dropZone.ondragover = (e) => {
//   e.preventDefault();
// };
// dropZone.ondrop = (e) => {
//   e.preventDefault;
// };

// // Animation Events
// animatedElement.onanimationstart = () => console.log("Animation started");
// animatedElement.onanimationend = () => console.log("Animation ended");
// animatedElement.onanimationiteration = () => console.log("Animation repeated");

// // 3. AddEventListener Method
// const button = document.getElementById("myButton");
// button.addEventListener("click", function () {
//   alert("Button clicked");
// });

// const imgElement = document.getElementById("myImage");
// imgElement.addEventListener("mouseenter", () => {
//   imgElement.src = "cat.jpg";
// });
// imgElement.addEventListener("mouseleave", () => {
//   imgElement.src = "dog.jpg";
// });

// // 4. The Event Object
// const btn1 = document.querySelector("#btn_1");
// const btn2 = document.querySelector("#btn_2");
// const btn3 = document.querySelector("#btn_3");

// btn1.addEventListener("click", clickHandler);
// btn2.addEventListener("click", clickHandler);
// btn3.addEventListener("click", clickHandler);

// function clickHandler(e) {
//   console.log(e.target);
// }

// // 5. This and Event Handler
// const div = document.getElementById("parent");
// div.addEventListener("click", function (e) {
//   console.log(this);
//   console.log(e.target);
// });
