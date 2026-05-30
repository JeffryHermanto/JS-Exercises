// 1. Modify the DOM
// console.log(document); // Menampilkan struktur dokumen HTML
// console.dir(document); // Menampilkan objek HTMLDocument beserta seluruh properti dan metodenya
// document.body.innerHTML = "<h1>Hello World</h1>";
// document.body.innerHTML = document.body.innerHTML + "<button>Click me</button>";
// console.log(document.body.style);
// document.body.style.color = "blue";
// document.body.style.backgroundColor = "lightblue";

// 2. Select HTML Elements
// console.log(document.getElementById("myHeading"));
// document.getElementById("myHeading").innerText = "Hello";
// document.getElementById("myHeading").textContent = "Hello";
// document.getElementById("myHeading").innerHTML = "Hello";
// document.getElementById("myHeading").style.backgroundColor = "yellow";
// const myHeading = document.getElementById("myHeading");
// myHeading.innerText = "Huhuhu";
// myHeading.style.backgroundColor = "red";
// const myButton = document.getElementById("myButton");
// myButton.style.color = "green";
// const myHeading = document.querySelector("h1#myHeading");
// console.log(myHeading);

// 3. Select Multiple Elements
// const shopItems = document.querySelectorAll("ul > li");
// const shopItems = Array.from(document.getElementsByTagName("li"));
// console.log(shopItems);
// console.log(shopItems[0]);
// shopItems.forEach((item) => {
//   item.style.background = "green";
//   item.style.margin = "5px 0";
// });
// document.querySelectorAll(".box p"); // Returns a NodeList (supports forEach)
// document.getElementsByTagName("li"); // Returns an HTMLCollection (no forEach unless converted)
// document.getElementsByClassName("highlight"); // Returns an HTMLCollection (no forEach unless converted)

// 4. Working with Attributes
// const imgElement = document.getElementById("myImage");
// let idAttr = imgElement.getAttribute("id");
// let srcAttr = imgElement.getAttribute("src");
// console.log(idAttr);
// console.log(srcAttr);
// imgElement.setAttribute("width", "300");
// imgElement.width = "200";
// imgElement.src = "dog.jpg";

// 5. Classes and ClassList
// const h1 = document.querySelector("h1");
// const p = document.querySelector("p");
// p.setAttribute("class", "blue");
// p.className = "green";
// console.log(h1.classList);
// h1.classList.add("blue");
// h1.classList.add("green");
// h1.classList.remove("center");
// h1.classList.remove("blue");
// h1.classList.toggle("blue");
// h1.classList.toggle("blue");
