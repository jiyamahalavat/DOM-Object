const myDiv = document.getElementById("myDiv");
const myBtn = document.getElementById("myBtn");

const heading = document.createElement("h1");
heading.textContent = "Welcome to DOM homework";
heading.classList.add("highlight")
heading.style.backgroundColor = "yellow";
myDiv.appendChild(heading);

const para = document.createElement("p");
para.textContent = "This is your first DOM homework assignment";
myDiv.appendChild(para);

const list = document.createElement("ul");
const item1 = document.createElement("li");
const item2 = document.createElement("li");
const item3 = document.createElement("li");

item1.textContent = "web-115";
item2.textContent = "4th period";
item3.textContent = "teacher: mr. justice";

list.appendChild(item1);
list.appendChild(item2);
list.appendChild(item3);
myDiv.appendChild(list);

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
} //this function I had to look up online, I didn't know how to generate random colors

myBtn.addEventListener("click", function() {
    const newItem = document.createElement("li");
    const i = list.childElementCount + 1;
    newItem.textContent = "New list item " + i;
    newItem.style.color = getRandomColor();
    list.appendChild(newItem);
});

myDiv.addEventListener("click", function() {
    const randomColor = getRandomColor();      
    heading.style.backgroundColor = randomColor;
});
