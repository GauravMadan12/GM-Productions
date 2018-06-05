/*
console.log('Hello World')

// Number
var abc = 123
console.log(typeof abc)

// String 
var abc = "gaurav"
console.log(typeof abc)

//Boolean
var abc = true
console.log(typeof abc)

//without var 
const bcd = 123     //doubt cleared
var bcd = 34         
console.log(typeof bcd)

// array
abc = [123,'some string',{name:'Car'}]
console.log(typeof abc)

// Scope of var.
var gvar = 123
console.log(gvar)

function func()
{
    console.log(gvar)
    var lvar = 23
    console.log(lvar)
}

//calling local var outside func
console.log(lvar)          // it will display error
func()

//Data types-> Boolean,Null,Undefined,Number,String,Object

//Literals

//Hoisiting
console.log(gvar)       // var declared is out of reach as it is declared later
var gvar = 123
console.log(gvar)

//for loop using let keyword
let i = 0               //** difference bw var and let 
for(i=0;i<=5;i++)
{
    console.log("Hello")
}

//Functions
function sum(a,b)
{
    return a*b
}

var d = sum(4,5)
console.log(d)
console.log(sum("gaurav","madan"))
console.log(sum("gaurav",2)) // return NaN 

// Function Expression
//~~(Anonymous Function)
var square = function(num){ return num * num }
var x = square(4)
console.log(x)
console.log(typeof square)

var square = function sqr(num){ return num * num }
var x = square(4)
console.log(sqr(4))     // will show reference error

//iquee
var square = function sqr(num){ return num * num }(20)
console.log(square)

//Recursion
function demo() //Js always stops the infinite loop itself
{
    demo()
}

demo()

//Nested function and Closure
function add(a,b)
{
    function sqr(x)         // firstly 2 will be x and then 3
    {
        return x * x
    }
    return sqr(a) + sqr(b)  // 4 + 9 
}

console.log(add(2,3))
*/