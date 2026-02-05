// const heading = document.getElementById("heading");
// console.log(heading);
// heading.innerHTML = "Hello World!";

// const paragraph = document.getElementsByClassName("paragraph");
// console.log(paragraph);
// paragraph[0].innerHTML = "This is a changed paragraph.";


// const heading  = document.getElementById("heading");
// console.log(heading);
// heading.style.color = "blue";
// heading.innerHTML="heading chnage ker de mene"


// const paragraph = document.getElementById("paragraph");
// paragraph.style.fontSize = "20px";
// paragraph.style.color = "green";
// paragraph.innerHTML="paragraph change ker de mene"

// const para =document.getElementsByClassName("para");
// para[0].style.fontSize="30px";
// para[0].style.color="red";
// para[0].innerHTML="testing class"


// const btn1 = document.getElementById("btn");
// btn1.addEventListener("click", () => {
//     alert("Button 1 clicked!");
// })




// const btn1 = document.getElementById("btn");

// btn1.addEventListener("click", () => {
//       alert("Button 1 clicked!");
// })



// const counter1 = document.getElementById("counter");
// const incrementBtn = document.getElementById("increment");
// const decrementBtn = document.getElementById("decrement");      
// const resetBtn = document.getElementById("reset");

// let count = 0;

// incrementBtn.addEventListener("click", () => {
//     count++; 
//     counter1.innerHTML = count;
// })

// decrementBtn.addEventListener("click", () => {
//     count--; 
//     counter1.innerHTML = count;
// })

// resetBtn.addEventListener("click", () => {
//     count = 0; 
//     counter1.innerHTML = count;
// })


const input = document.getElementById("todoinput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todolist");

addBtn.addEventListener("click", () => {
    const todotext = input.value;

    if (todotext === "") {
        alert("Please enter a todo item.");
        return;
    }

    const li = document.createElement("li");
    li.innerText = todotext;

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";

    deleteBtn.addEventListener("click", () => {
        li.remove();
    });

    li.appendChild(deleteBtn);
    todoList.appendChild(li);

    input.value = "";
});


