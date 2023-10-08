const userInputString = prompt(
    "Please enter some froyo flavors separated by commas.",
    " vanilla, vanilla, vanilla, strawberry, coffee, coffee"
  );

//need to change prompt into from a string of string to a readable string??
const stringArray = userInputString.split(",");

//using foreach() to go through every array string and count repeats
  const counts = [];
  stringArray.forEach(element => {
    counts[element] = (counts[element] || 0) + 1;
  });
  
 // print as table   
  console.table(counts)