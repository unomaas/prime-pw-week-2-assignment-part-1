// REQUIRED FEATURES:
// 1 - Create a variable called `firstName` and assign it the value of your first name
let firstName = "Ryan";

// 2 - Create a second variable called `lastName` and assign it the value of your last name
let lastName = "Maas";

// 3 - Create a third variable called `fullName`, assign it the value of your first and last name (remember, you already have variables for this, can you use those?)
let fullName = firstName + " " + lastName;

// 4 - Console log the value of `fullName`
console.log(fullName);

// 5 - Create a variable called `luckyNumber` and assign it the value of your lucky number.
let luckyNumber = 8;

// 6 - Console log this sentence, adding in the variables you created above: 'My name is (full name), and I think (lucky number) is a winner!'. Refer back to the videos if you need help with this one.
console.log("My name is " + fullName + ", and I think " + luckyNumber + " is a winner!  Done via Concatenation.")
// Or if you want to do it with Interpolation instead of Concatenation, for readability purposes:
console.log(`My name is ${fullName}, and I think ${luckyNumber} is a winner!  Done via Interpolation.`)

// 7 - Create a variable named `adventurous` and set it to a boolean value (true or false)
let adventurous = true;

// 8 - Create a variable named `food`, and set its value to a string of your favorite food
let food = "Penne Rosa with Feta and Grilled Chicken from Noodles & Co.";

// 9 - Create a variable called `pets` and set it to the value of the number of pets you have
let pets = 0;

// 10 - Create a variable called `friendsPets` and assign it the value of the number of pets your friend has
let friendsPets = 3;

// 11 - Add two pets to your `pets` variable
pets += 2;

// 12 - Create a constant variable called `allowedPets` and set it to a number value of your choice
const allowedPets = 1000

// 13 - Create a conditional: if adventurous is true, console log "Adventures are great!", if it's not true, console log "How about we stay home?"
if (adventurous = true) {
  console.log("Adventures are great!");
} else {
  console.log("How about we stay home?");
}

// 14 - Create a compound conditional: if luckyNumber is 2 and adventurous is true, console log "Roll the dice!"
if ((luckyNumber === 2) && (adventurous === true)) {
  console.log("Roll the dice!");
} else { // I just wanted to add something to happen, since my lucky number is not 2. :)
  console.log("No luck today, try again tomorrow!");
}

// 15 - Write a conditional that console logs "I can have more pets!" if the value of `pets` is less than the value of `allowedPets`,console logs "I have enough pets" if the value of `pets` is equal to the value of `allowedPets`, and console logs "Oh no, I have too many pets!" if the value of `pets` is greater than the value of `allowedPets`.
if (pets < allowedPets) {
  console.log("I can have more pets!");
} else if (pets == allowedPets) {
  console.log("I have enough pets. :("); // This is never true. :)
} else if (pets > allowedPets) {
  console.log("Oh no, I have too many pets!"); // Also never true. :)
}

// STRETCH GOALS:

// 16 - Make a variable called `mostPets` and a conditional that correctly checks the `pets` and `friendsPets` variables, and assigns the highest value to `mostPets`. There's several possibilities -- be sure to think through all the scenarios. console.log `mostPets` after the conditional has run.
let mostPets = 0;
if (pets < friendsPets) {
  console.log("The most pets between us is my friend's pets at " + (mostPets + friendsPets) + " total.  Done via If/Else.");
} else if (friendsPets < pets) {
  console.log("The most pets between us is my pets at " + (mostPets + pets) + " total.  Done via If/Else.");
} else if (friendsPets === pets) {
  console.log("We have the same number of pets between us, at " + ((friendsPets + pets) / 2) + " pets per group, so " + (friendsPets + pets) + " pets total.  Done via If/Else.");
} // I added some String concatenation to make sure the right variable is being logged to the console, and make it easier to understand the statement in general.

// 17 - Rewrite question 16 with a `switch` statement. You'll need to do research!
switch (true) {
  case (friendsPets > pets):
    console.log("The most pets between us is my friend's pets at " + (mostPets + friendsPets) + " total.  Done via Switch.");
    break;
  case (friendsPets < pets):
    console.log("The most pets between us is my pets at " + (mostPets + pets) + " total.  Done via Switch.");
    break;
  case (friendsPets === pets):
    console.log("We have the same number of pets between us, at " + ((friendsPets + pets) / 2) + " pets per group, so " + (friendsPets + pets) + " pets total.  Done via Switch.")
  default:
    console.log("Unexpected error, better check my code block.");
    break;
} // Same thing, added some String concatenation to be able to check the logic.

// 18 -- Rewrite question 13 with a `ternary` operator. You'll need to do research!
console.log(adventurous ? "Adventures are great!" : "How about we stay home?");
