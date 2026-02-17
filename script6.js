const arr1 = [1,2,3];
const arr2 = [...arr1]; //spread operator
console.log(arr2);


const a = [1,2,3];
const b = [4,5,6];

const c = [...a, ...b]; //spread operator
console.log(c);

const user = {name: "Ashish", age: 25};
const newUser = {...user, city: "New York"}; //spread operator
console.log(newUser);



//rest operator

const [first, ...rest] = [1,2,3,4,5]; //rest operator
console.log(first); 
console.log(rest);



const details = {age: 25, city: "New York", name: "Ashish"};
const {name, ...otherD} = details; //rest operator
console.log(name); 
console.log(otherD);
  

