//1
var a = 10;

document.write("<h3>Result:</h3>");
document.write("The value of a is: " + a + "<br><br>");

document.write("The value of ++a is: " + (++a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of a++ is: " + (a++) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of --a is: " + (--a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of a-- is: " + (a--) + "<br>");
document.write("Now the value of a is: " + a + "<br><br><br>");

//2
var a = 2, b = 1;

document.write("Initial values:<br>");
document.write("a = " + a + ", b = " + b + "<br><br>");

// Step 1: --a
document.write("--a;<br>");
document.write("a becomes: " + (--a) + "<br>");
document.write("Now a = " + a + ", b = " + b + "<br><br>");

a = 2; b = 1;

// Step 2: --a - --b
document.write("--a - --b;<br>");
document.write("Result = " + ((--a) - (--b)) + "<br>");
document.write("Now a = " + a + ", b = " + b + "<br><br>");
a = 2; b = 1;

// Step 3: --a - --b + ++b
document.write("--a - --b + ++b;<br>");
document.write("Result = " + ((--a) - (--b) + (++b)) + "<br>");
document.write("Now a = " + a + ", b = " + b + "<br><br>");
a = 2; b = 1;

// Step 4: --a - --b + ++b + b--
var result = --a - --b + ++b + b--;
document.write("--a - --b + ++b + b--;<br>");
document.write("Result = " + result + "<br>");
document.write("Now a = " + a + ", b = " + b + "<br><br>");

document.write("<b>Final Answer is here:</b><br>");
document.write("a = " + a + "<br>");
document.write("b = " + b + "<br>");
document.write("result = " + result + "<br><br><br>");

//3
var name = prompt("Enter your name:");
alert("Hey! " + name + "Welcome Guys");

//4 not mention in class document

//5
var number = prompt("Enter a number for the multiplication table:");

if (number === "" || number === null) {
  number = 5;
}

document.write("<h3>Multiplication Table of " + number + "</h3>");

for (var i = 1; i <= 10; i++) {
  document.write(number + " x " + i + " = " + (number * i) + "<br><br><br>");
}

//6
// a
var subject1 = "English";
var subject2 = "Math";
var subject3 = "Urdu";

// b
var totalMarksEach = 100;

// c & d
var marks1 = 54;
var marks2 = 54;
var marks3 = 48;

// e
var totalMarks = totalMarksEach * 3;
var obtainedMarks = marks1 + marks2 + marks3;
var percentage = (obtainedMarks / totalMarks) * 100;

document.write("<table border='1' cellspacing='0' cellpadding='5'>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");

document.write("<tr><td>" + subject1 + "</td><td>" + totalMarksEach + "</td><td>" + marks1 + "</td><td>" + ((marks1 / totalMarksEach) * 100).toFixed(0) + "%</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>" + totalMarksEach + "</td><td>" + marks2 + "</td><td>" + ((marks2 / totalMarksEach) * 100).toFixed(0) + "%</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + totalMarksEach + "</td><td>" + marks3 + "</td><td>" + ((marks3 / totalMarksEach) * 100).toFixed(0) + "%</td></tr>");

document.write("<tr><th>Total</th><th>" + totalMarks + "</th><th>" + obtainedMarks + "</th><th>" + percentage.toFixed(0) + "%</th></tr>");
document.write("</table>");
