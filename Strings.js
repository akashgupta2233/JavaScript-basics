// --1 String Interpolation(Template Literal)

let x = "Ram";
let name = "Jai,Shri Ram";
let text = `A Village in west bengal has named therir every male born child as ${x}, ${name}!`;
console.log(text);

// String Methods
//A.
let Name="Harry";
x.toUpperCase();
x.toLowerCase();
x.concat(name);

//Removes white spaces in a string.
let newname=name.trim()
//does not change original string , replaces all occurances.
let newname1=name.replace("Ram","Krishna");
//slices from 2 to 4 , 4 is not included (rr)
let newname=Name.slice(2,4);
// 2 to end (rry)
let newname=Name.slice(2);

//Escape Sequence Characters
\n  "Newline"
\t  = "Tab"
\r = "Carriage return"
