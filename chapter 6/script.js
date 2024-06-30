 //Answer 1//

// document.write("<h3>Result:</h3><br>");
// let a = 10;
// document.write("The value of a is: " + a);
// document.write("<br>...................................<br><br>");

// document.write("The value of  ++a is: " + ++a);
// document.write("<br>Now the value of a is: " + a);
// document.write("<br><br><br>The value of  a++ is: " + a++);
// document.write("<br>Now the value of a is: " + a);
// document.write("<br><br><br>The value of --a is: " + --a);
// document.write("<br>Now the value of a is: " + a);
// document.write("<br><br><br>The value of a-- is: " + a--);
// document.write("<br>Now the value of a is: " + a);

 // Answer 2 //

let a = 2;
let b = 1;
let c = --a - b-- + ++b + b--;
document.write("a is 2 : " + "<br>");
document.write("b is : 1 " + "<br>");
document.write("result is : " + c );

 // Answer 3 //
 let name = prompt("What is your name ?");
let greet = prompt("Welcome to our website");
let input = parseInt(prompt("Enter Number"));
for(let i = 1; i <= 10; i++){
    console.log(input + " x " + i + " = " + input * i);
}
 
 // Answer 4 & 5 //

let new_num = parseInt(prompt("Enter Number"));
if (isNaN(new_num)){
    for(let i = 1; i <= 10; i++){
        console.log("5" + " x " + i + " = " + 5 * i);
    }
} else {
    for(let i = 1; i <= 10; i++){
        console.log(new_num + " x " + i + " = " + new_num * i);
    }
}

  // Answer 6 a,b,c,d,e //

 var marks1 = parseFloat(prompt("Enter marks obtained in subject 1:"));
    var marks2 = parseFloat(prompt("Enter marks obtained in subject 2:"));
    var marks3 = parseFloat(prompt("Enter marks obtained in subject 3:"));
    var totalMarks = parseFloat(prompt("Enter total marks:"));
  
    var obtainedMarks = marks1 + marks2 + marks3;
    var percentage = (obtainedMarks / (totalMarks * 3)) * 100;
  
    var grade, remarks;
  
    if (percentage >= 90) {
      grade = "A+";
      remarks = "Excellent";
    } else if (percentage >= 80) {
      grade = "A";
      remarks = "Very Good";
    } else if (percentage >= 70) {
      grade = "B";
      remarks = "Good";
    } else if (percentage >= 60) {
      grade = "C";
      remarks = "Average";
    } else if (percentage >= 50) {
      grade = "D";
      remarks = "Need to improve";
    } else {
      grade = "F";
      remarks = "Fail";
    }
  
    document.write("<h2>Result</h2>");
    document.write("Total Marks: " + totalMarks + "<br>");
    document.write("Marks Obtained: " + obtainedMarks + "<br>");
    document.write("Percentage: " + percentage.toFixed(2) + "%<br>");
    document.write("Grade: " + grade + "<br>");
    document.write("Remarks: " + remarks + "<br>");













