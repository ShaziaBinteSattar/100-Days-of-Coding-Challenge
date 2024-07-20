"use strict";
//Q3: Names_cases; store a person's name in avariable, and teh print that person's name in lower case, upper case and title case"//node_modules
//this saves the name variable as string//
let personName = "Shazia Binte Abdus Sattar";
//This shows the print output// in //lower case//
console.log("Lowercase :" + personName.toLowerCase());
//This shows the print output// in //Upper case//
console.log("Uppercase :" + personName.toUpperCase());
//This shows the print output// in //Title case//
console.log("Titlecase :" + personName.replace(/\b\w/g, c => c.toUpperCase()));
