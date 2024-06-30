 // Answer 1 //

 let city  = prompt("Enter your city?");
if(city === "karachi"){
    console.log("Welcome to  city of lights");
}
else{
    console.log("You are not part of city of lights");
}

 // Answer 2 //

let gender = prompt("Enter your gender");
if (gender === "female") {
    console.log("Good morning ma'am");    
}
else if(gender === "male"){
    console.log("Good morning Sir");

}

 // Answer 3 //

 let signal = prompt("Enter signal color");
if(signal === "red"){
    console.log("Must stop");
}
else if(signal === "yellow"){
    console.log("Ready to move");
}

else if(signal === "green"){
console.log("Move now");
}
else{
    console.log("This is not part of signal color");
}

 // Answer 4 //

 let fuel = prompt("Enter how much is your fuel in your car?");
// Take input from the user
// let fuel = +prompt("Enter the remaining fuel in your car (in litres):");

// // Check if the fuel is less than 0.25 litres
// if (fuel < 0.25) {
//     console.log("Please refill the fuel in your car");
// }

 // Answer  5 //

var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}

if (true) {
    alert("True");
}
if (false) {
    alert("False");
}

if ("car" < "cat") {
    alert("car is smaller than cat");
}

 // Answer 6 //

let subject1 = prompt("Enter Subject 1 Name:");
    let subject2 = prompt("Enter Subject 2 Name:");
    let subject3 = prompt("Enter Subject 3 Name:");
    let totalMarks = 100;

    let obtainedMarks1 = parseInt(prompt("Enter Obtained Marks for Subject 1:"));
    let obtainedMarks2 = parseInt(prompt("Enter Obtained Marks for Subject 2:"));
    let obtainedMarks3 = parseInt(prompt("Enter Obtained Marks for Subject 3:"));

    // Calculate the total marks and percentage
    let totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
    let percentage = (totalObtainedMarks / (totalMarks * 3)) * 100;

    document.write("<h2>Result</h2>");
    document.write("<table>");
    document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
    document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks1 + "</td></tr>");
    document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks2 + "</td></tr>");
    document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks3 + "</td></tr>");
    document.write("<tr><th>Total</th><th>" + (totalMarks * 3) + "</th><th>" + totalObtainedMarks + "</th></tr>");
    document.write("<tr><th colspan='3'>Percentage: " + percentage + "%</th></tr>");
    document.write("</table>");

  // Answer 7 //

  let secretNumber = 4;
    let userGuess = +prompt("Guess the secret number");
          if (userGuess === secretNumber) {
              console.log("Bingo! Correct answer.");
          } else if (userGuess + 1 === secretNumber || userGuess - 1 === secretNumber) {
              console.log("Close enough to the correct answer.");
          } else {
              console.log("Wrong guess. Try again!");
          }

  // Answer 8 //

// Prompt user to input a number
        let userInput = prompt("Enter a number to check if it is divisible by 3:");

        // Convert the input to an integer
        let number = parseInt(userInput, 10);

        // Check if the number is divisible by 3
        if (number % 3 === 0) {
            console.log("The number " + number + " is divisible by 3.");
        } else {
            console.log("The number " + number + " is not divisible by 3.");
        }

  // Answer 9 //

//   Get input from the user
//   let userInput = prompt("Enter a number:");
  
//   Check if the input is a valid number
//   if (!isNaN(userInput) && userInput.trim() !== "") {
//       userInput = Number(userInput);
//       if (userInput % 2 === 0) {
//           console.log(The number ${userInput} is even.);
//       } else {
//           console.log(The number ${userInput} is odd.);
//       }
//   } else {
//       console.log("Please enter a valid number.");
//   }

// Answer 10 //

let T = prompt("Enter your current place summer temperature");
if(T >= 40){
    console.log("It is too hot outside.");
}
else if(T >= 30){
    console.log("The Weather today is Normal.");
}
else if (T >= 20){
    console.log("Today’s Weather is cool.");
}
else if (T >= 10){
    console.log("OMG! Today’s weather is so Cool.")
}

 // Answer 11 //

//  Get input from the user
let firstNumber = prompt("Enter the first number:");
let secondNumber = prompt("Enter the second number:");
let operation = prompt("Enter the operation (+, -, *, /, %):");

// Convert input strings to numbers
firstNumber = Number(firstNumber);
secondNumber = Number(secondNumber);

 // Answer 11 //

// Check if inputs are valid numbers
if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
    let result;

    // Perform the operation based on user input
    if (operation === "+") {
        result = firstNumber + secondNumber;
    } else if (operation === "-") {
        result = firstNumber - secondNumber;
    } else if (operation === "*") {
        result = firstNumber * secondNumber;
    } else if (operation === "/") {
        if (secondNumber !== 0) {
            result = firstNumber / secondNumber;
        } else {
            result = "Error: Division by zero is not allowed.";
        }
    } else if (operation === "%") {
        if (secondNumber !== 0) {
            result = firstNumber % secondNumber;
        } else {
            result = "Error: Division by zero is not allowed.";
        }
    } else {
        result = "Error: Invalid operation.";
    }

    // Display the result to the user
    alert(result);
} else {
    alert("Please enter valid numbers.");
}



















