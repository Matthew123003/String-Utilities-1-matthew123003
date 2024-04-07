/*
Complete the function so that it returns the length of the 
string given
*/
function stringLength(string){return string.length;}

/*
Complete the function so that it returns the very last 
character within the string given
*/
function stringCharAt(string){return string.charAt(string.length-1);}

/*
Complete the function, using the substring method,  that returns the first six letters
of a given string only.
*/
function stringSubString(string){return string.substring(0,6);}

/*
Complete the function, using the indexOf method, that returns
the first instance of a given string's desired word
*/
function stringIndexOf(string, desiredWord){return string.indexOf(desiredWord);}

/*
Complete the function, using the lastIndexOf method, that returns the last instance of a given string's desired word
*/
function stringLastIndexOf(string, desiredWord){return string.lastIndexOf(desiredWord);}

/*
Complete the function , by using the split method on the given string.  Your pattern should be a simple " " space character.  Return the result of using the split method on the given string.  
*/
function stringSplit(string){return string.split(" ");}

/*
Complete the function, by using the toUppercase or toLowerCase depending on the following scenario: 

If the string provided is less than or equal to 7 characters in length use toUppercase on the string provided and return it.

If the string provided is greater than 7 characters in length use toLowerCase on the string provided and return it. 
*/
function stringToUppercaseOrLowerCase(string){
  if (string.length <= 7){return string.toUpperCase();}
  if (string.length > 7){return string.toLowerCase();}
 
}
module.exports = {stringLength,stringCharAt,stringSubString,stringIndexOf,stringLastIndexOf,stringSplit,stringToUppercaseOrLowerCase}