// const btn = document.getElementById("btn");
// const userList = document.getElementById("userList");

// btn.addEventListener("click", () => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response => response.json())
//     .then(payload => {
//         userList.innerHTML = "";
//         payload.forEach(user => {
//             const li = document.createElement("li");
//             li.innerHTML = `<strong>${user.name}</strong>`;
//             userList.appendChild(li);
//         })
//     })
// })


const btn = document.getElementById("btn");
const userList = document.getElementById("userList"); 

btn.addEventListener("click", ()=> {
fetch("https://jsonplaceholder.typicode.com/users")
.then(Response => Response.json())
.then(payload => {
    userList.innerHTML = "";
    payload.forEach(user => {
        const li = document.createElement("li");
        li.innerHTML = `${user.username} - ${user.email}`;
        userList.appendChild(li);
    })
 })
})


