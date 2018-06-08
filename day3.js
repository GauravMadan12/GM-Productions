// Function Prototyping
function car(make,model,year)
{
    this.make = make
    this.model = model
    this.year = year
    this.color = 'Black'        //overriding will occur
    this.getmake = function()   // assigning a function to a variable
                    {
                        return this.make
                    }
}

var kenscar = new car('Nissan','302x',1992)
var zenscar = new car('Honda','301x',2012)
/*
console.log(kenscar)
console.log(Object.keys(kenscar))
console.log(zenscar)

//Adding a property (we can override values of properties)
kenscar.color = "White"


// calling the function assigned to var
console.log(kenscar.getmake())

//Setting value
kenscar.make = 'Maruti'
console.log(kenscar.getmake())

//deleting property
delete kenscar.color
console.log(kenscar)       //color property will be deleted for this object only
console.log(Object.keys(kenscar))
console.log(zenscar)

//comparing values
if(1 == '1')    //char match
{
    console.log("true")
}
else
{
    console.log("false")
}

if(1 === '1')    //char match and type match
{
    console.log("true")
}
else
{
    console.log("false")
}

var fruit = {name:"Apple"}
var fruitbear = {name:"Apple"}
console.log(fruit== fruitbear)       //return false as both are diff objects
var fruitbear = fruit
console.log(fruit === fruitbear)    //both are of same type
console.log(fruit == fruitbear)     //both are pointing to same object

//Getter and Setter
var o = {
    a: 7,
    get b()
    {
        return this.a + 1
    },
    set c(x){
        this.a = x / 2
    }
}

console.log(o.a)
console.log(o.b)
o.c = 50
console.log(o.a)

//Array
var abc = [1,2,3,4,5,12.8,"Gaurav","Madan",{name:"Dhruv"},[8]]
console.log(abc)
console.log(abc[5])
abc[5] = "Value changed"
console.log(abc[5])
//creating keys
abc["new"] = "String"
abc[4.1] = "keyvaluepair"
console.log(abc)
console.log(abc.length)     //array length will remain same
*/
//for each
var abc = [1,2,3,4,5,12.8,"Gaurav","Madan",{name:"Dhruv"},[8]]
/*
abc.forEach(function(item,index,array)
{
    console.log("item: "+ item + "   `Index: " +  index)    
});

//Operations on Array
var xyz = ["New","Array"]
console.log(xyz.concat(abc))        //concat op'n

//Arrow function
function add(a,b)
{
    return a+b
}

var sum = (a,b) => { return a+b }
console.log(sum(1,3))

//Find operation execution
function a(b){
    b()
}

var b = function()
        {
            console.log("Inside B")
        }
a(b)
*/
// Filter operation
var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']
var exp = /pr/
var fill = words.filter(word => word.match(exp)) // regular expression
//var fill = words.filter(word => word.length > 6)
console.log(fill)