// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
let number = 3;
function close(){
  return number;
}

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
num = 0;
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  num += 1;
  return num;
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2
counter();
console.log(counter());

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  counter = 0;
  countObject = {
    "add" : function increment(){
      counter += 1;
    },
    "subt" : function decrement(){
      counter -= 1;
    }
  }
};
