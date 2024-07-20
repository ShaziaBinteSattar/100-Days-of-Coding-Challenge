//Q6:Program for, Stripping Names: Store a person’s name, and include some whitespace characters at the 
//beginning and end of the name. Use "\t" (tab) and "\n" (new line) at least once.
// Print the name once, so the whitespace around the name is displayed. 
//Then print the name after stripping the white spaces.//

//this saves the name variable as string//
//person_name with whitespaces//
let person_name :string = "   \n\t\t\tShazia Binte Abdus Sattar\t\t\t\n   "; 

 //Displaying persnon_name with whitespaces//
console.log("person_name with whitespace:" + person_name);  

//Displaying person_name after stripping whitespaces//
console.log("person_name after stripping whitespace:" + person_name.trim()); 



