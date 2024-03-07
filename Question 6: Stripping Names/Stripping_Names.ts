//*program for, Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Use "\t" (tab) and "\n" (new line) at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after stripping the white spaces.//
//this saves the name variable as string//
let person_name :string = "   \n\t\t\tShazia Binte Abdus Sattar\t\t\t\n   ";   //person_name with whitespaces//
console.log("person_name with whitespace:" + person_name);              //Displaying persnon_name with whitespaces//
console.log("person_name after stripping whitespace:" + person_name.trim()); //Displaying person_name after stripping whitespaces//



