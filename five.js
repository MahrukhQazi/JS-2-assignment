//q-1
var a = 3;
var b = 5;
var sum = a + b;
document.write("Sum of " + a + " and " + b + " is " + sum+ "<br><br><br>");

//2
var c = 3;
var d = 5;

// Addition
var sum = c + d;
document.write("Sum of " + c + " and " + d + " is " + sum + "<br>");

// Subtraction
var subtract = c - d;
document.write("Subtraction of " + c + " and " + d + " is " + subtract + "<br>");

// Multiplication
var multiply = c * d;
document.write("Multiplication of " + c + " and " + d + " is " + multiply + "<br>");

// Division
var divide = c / d;
document.write("Division of " + c + " and " + d + " is " + divide + "<br>");

// Modulus
var modulus = c % d;
document.write("Modulus of " + c + " and " + d + " is " + modulus + "<br><br><br>");

//3
// a
var g;

// b
document.write("Value after variable declaration is: " + g + "<br><br>");

// c
g = 5;

// d. Show initial value
document.write("Initial value: " + g + "<br><br>");

// e
g++;

// f. Show value after increment
document.write("Value after increment is: " + g + "<br><br>");

// g
g = g + 7;

// h. Show value after addition
document.write("Value after addition is: " + g + "<br><br>");

// i
g--;

// j
document.write("Value after decrement is: " + g + "<br><br>");

// k
var remainder = g % 3;

// l
document.write("The remainder is: " + remainder + "<br><br><br>");

//4
var ticketPrice = 600; 
var numberOfTickets = 5; 
var totalCost = ticketPrice * numberOfTickets; 

document.write("Total cost to buy " + numberOfTickets + " tickets to a movie is " + totalCost + " PKR" + "<br><br><br>");

//5
var number = 2; 

document.write("<h4>Table of " + number + "</h4>");

document.write(number + " x 1 = " + (number * 1) + "<br>");
document.write(number + " x 2 = " + (number * 2) + "<br>");
document.write(number + " x 3 = " + (number * 3) + "<br>");
document.write(number + " x 4 = " + (number * 4) + "<br>");
document.write(number + " x 5 = " + (number * 5) + "<br>");
document.write(number + " x 6 = " + (number * 6) + "<br>");
document.write(number + " x 7 = " + (number * 7) + "<br>");
document.write(number + " x 8 = " + (number * 8) + "<br>");
document.write(number + " x 9 = " + (number * 9) + "<br>");
document.write(number + " x 10 = " + (number * 10) + "<br><br><br>");

//6
// a. 
var celsius = 25;

// b
var fahrenheit = (celsius * 9 / 5) + 32;

document.write(celsius + "°C is " + fahrenheit + "°F<br>");

// c
var fahrenheit2 = 70;

// d
var celsius2 = (fahrenheit2 - 32) * 5 / 9;
document.write(fahrenheit2 + "°F is " + celsius2.toFixed(2) + "°C<br><br>");

//7-question
document.write("<h2>Shopping Cart</h2>");

// a. Price of item 1
var priceItem1 = 650;

// b. Price of item 2
var priceItem2 = 100;

// c. Ordered quantity of item 1
var quantityItem1 = 3;

// d. Ordered quantity of item 2
var quantityItem2 = 7;

// e. Shipping charges
var shippingCharges = 100;

// Calculate total cost
var totalCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;

// Display result
document.write("Price of item 1 is " + priceItem1 + "<br>");
document.write("Quantity of item 1 is " + quantityItem1 + "<br>");
document.write("Price of item 2 is " + priceItem2 + "<br>");
document.write("Quantity of item 2 is " + quantityItem2 + "<br>");
document.write("Shipping Charges " + shippingCharges + "<br><br>");
document.write("Total cost of your order is " + totalCost + " PKR<br><br>");

//8
document.write("<h2>Marks Sheet</h2>");

// a
var totalMarks = 980;
var marksObtained = 804;

// b
var percentage = (marksObtained / totalMarks) * 100;

// c
document.write("Total Marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + marksObtained + "<br>");
document.write("Percentage: " + percentage.toFixed(2) + "%<br>");

//9
document.write("<h2>Currency in PKR</h2>");
var usd = 10;
var riyal = 25;
var totalPKR = (usd * 104.80) + (riyal * 28);
document.write("Total currency in PKR: " + totalPKR);

//10
document.write("<h2>Arithmetic Operations</h2>");
var k = 5;
var result = ((k + 5) * 10) / 2;
document.write("Result after arithmetic operations is: " + result);

//11
document.write("<h2>The Age Calculator</h2>");

// a
var currentYear = 2016;

// b
var birthYear = 1992;

// c
var age = currentYear - birthYear;

document.write("Current Year: " + currentYear + "<br>");
document.write("Birth Year: " + birthYear + "<br>");
document.write("Your Age is: " + age);

//12
document.write("<h2>The Geometrizer</h2>");

// a. 
var radius = 20;

var pi = 3.142;

// b.
var circumference = 2 * pi * radius;

// c.
var area = pi * radius * radius;
document.write("Radius of a circle: " + radius + "<br>");
document.write("The circumference is: " + circumference + "<br>");
document.write("The area is: " + area);

//13
document.write("<h2>The Lifetime Supply Calculator</h2>");

// a
var favoriteSnack = "Chocolate Chip";

// b.
var currentAge = 15;

// c
var maxAge = 65;

// d
var amountPerDay = 3;

// e
var totalSnacks = (maxAge - currentAge) * 365 * amountPerDay;

document.write("Favourite Snack: " + favoriteSnack + "<br>");
document.write("Current Age: " + currentAge + "<br>");
document.write("Estimated Maximum Age: " + maxAge + "<br>");
document.write("Amount of snacks per day: " + amountPerDay + "<br>");
document.write("You will need " + totalSnacks + " " + favoriteSnack + "s to last you until the ripe old age of " + maxAge + ".");
