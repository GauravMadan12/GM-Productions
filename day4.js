/*
//~~~~~~~~~~~~~~~~~~~~~~ we use tsc filename.ts to execute this file~~~~~~~~~~~~~
//this .ts file is used to detect only errors in code and displays nothing else.
function greater(person:string)
{
    return "Hello," + person
}

//let user = 123
let user = "Gaurav"
console.log(greater(user))

//
function namesplit(name:string)
{
      
    let splitName = name.split('@')
    console.log(splitName[0][0].toUpperCase())
}

namesplit('gaurav@madan')

//tuples
let x : [number,string]
//x = ["Gaurav",10]     //this will show error
x = [10,"Gaurav"]
*/
//Regular Expressions
var emailexp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
function valid(email) {
    return emailexp.test(email);
}
console.log(valid("gmadna046@gmail.com"));
