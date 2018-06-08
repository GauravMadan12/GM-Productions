/*
var strvar = 'Some String'
console.log(typeof strvar )
console.log(strvar.length)
var newStr = new String('ABC')
console.log(typeof newStr)
console.log(newStr.length)

// accessing arrays 0th element
console.log(strvar[0])

//function concatenate
function add(a,b)
{
    return a + b
}

console.log(add("Gaurav","madan"))

//
function str(param1,param2)
{
    if((typeof param1 == typeof param2) && (typeof param2 == 'string'))
    {
        return param1 + param2
    }
    else
    {   
        return false
        //console.log("Type mismatch")  we never write console in function
    }
}

//console.log(str('gaurav','madan'))
console.log(str('Gaurav',12))

//Split function
function namesplit(name)
{
    //let splitName = name.split('@')
    //console.log(splitName)
    console.log(name.split('@'))
}

namesplit('gaurav@madan')

//converting string's first char to upper case 
function namesplit(name)
{
      
    let splitName = name.split('@') 
    console.log(splitName[0][0].toUpperCase())
}

namesplit('gaurav@madan')

//Numbers
var a = '123'
console.log(Number.parseFloat(a))

//Random numbers
for(var i=0;i<=10;i++)
{
    console.log(Number.parseInt(Math.random()*1000)) 
}

//Object
var car = new Object()
car.name = 'Cruze'
car.engine = 'Diesel'
car.year = '2017'
console.log(car)

//forin loop
for(abc in car)
{
    console.log(abc + ' -> '+ car[abc])
}

console.log(Object.keys(car))
console.log(Object.getOwnPropertyNames(car))

// other method of creating Object
var car = {
    name : 'Honda',
    engine : 'Petrol',
    year : '2018'
}

console.log(car)
*/