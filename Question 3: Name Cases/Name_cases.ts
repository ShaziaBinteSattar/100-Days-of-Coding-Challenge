//Names_cases; store a person's name in avariable, and teh print that person's name in lower case, upper case and title case"//node_modules
//this saves the name variable as string//
let personName: string = "Shazia Binte Abdus Sattar";
//This shows the print output//
console.log("Lowercase :" + personName.toLowerCase()); //lower case//

console.log("Uppercase :" + personName.toUpperCase()); //Upper case//

console.log("Titlecase :" + personName.replace(/\b\w/g, c => c. toUpperCase())); //Title case//


