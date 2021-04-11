var message:string = "hello"
var firstname:string = "Si Lam"
var score1:number = 50;
var score2:number = 49;

var global_num = 12
class Numbers {
    num_val = 13;
    static sval = 10;

    storeNum(): void {
        var local_nu = 14;
    }
}

class Greetings {
    greet(): void {
        console.log("Hello world");
    }

    sayHello(): string {
        return "Hellow Say"
    }
}


function test_param(n1: number, s1:string)
{
    console.log(n1)
    console.log(s1)

}

function disp_details(id: number, name: string, mail?:string)
{
    if ( mail != undefined)
    {
        console.log("email = " + mail)
    }
}

function addNumbers(...nums: number[])
{
    var i;
    var sum:number = 0;
    for (i=0; i< nums.length; i++)
    {
        sum = sum + nums[i];
    }

    console.log("sum = " + sum);

}


function factorial(number){
    if ( number <= 0)
        return 1
    else{
        return number * factorial(number-1)
    }
}

console.log("Factorial " + factorial(5));


var foo = (x:number) => {
    return (10 + x)
}

console.log("Lamda " + foo(10))

var func = (x) => 
{
    if ( typeof x == "number")
    console.log(x + " is number")
    else if ( typeof x == "string")
        console.log(x + " is string")
}

func(12)

// function constrcutor

var  myFunc = new Function("a", "b", "return a+b");
var x = myFunc(2,4);
console.log("Function constructor " + x)

addNumbers(1,2,3);

test_param(123, "This is a string")
disp_details(12, "Si", "silam@hotmail.com")
console.log("Global Num " + global_num);
console.log(Numbers.sval) ;

var o1 = new Numbers();
console.log(o1.num_val)





// type assertion => at compile time
// not type casting => at run time
var str1 = '1'
var str2:number = <number> <any> str1
console.log(typeof(str1))

// inferred type

var num1 = 2; // number
//num1 = "12" // num1 is a number exception

console.log(num1)
///////////////
//score1 = "Si Lam" //Type 'string' is not assignable to type 'number'.
console.log("Sum " + (score1 + score2))
console.log(message)
var obj = new Greetings()
obj.greet()
var msg = obj.sayHello();
console.log(msg)



// NUMBER

function employee(id, name)
{
    this.id = id;
    this.name = name
}

var emp = new employee(123, "si Lam")

employee.prototype.email = "silam@hotmail.com"

console.log("ID " + emp.id)
console.log("Name " +  emp.name)
console.log("email " + emp.email)


// array

var alphas: string[];
alphas = ["1", "2"]

// array destrucuring

var [z,y] = alphas
console.log(z);
console.log(y);


// tuples
var mytuple = [10, "Hello" , " World", "ts"]

console.log("Item before PUSH " + mytuple)

mytuple.push(12)

console.log("After push "+ mytuple)


// union 

var arr: number[] | string[]
var i: number
arr = [1,2,3]

for (i = 0; i < arr.length; i++)
{
    console.log(arr[i])
}

arr = ["saiogn", "newyord", "pune"]

for ( i = 0; i < arr.length; i++)
{
    console.log(arr[i])

}


/// inteface

interface IPerson {
    firstName: string,
    lastName: string,
    syaHi: ()=>string
}

var customer: IPerson = {
    firstName: "Tome",
    lastName: "Hanks",

    syaHi: (): string => {return "Hi There"}
}

console.log("Name " + customer.firstName)
console.log("last name " + customer.lastName)
console.log("say " + customer.syaHi())


////////


interface RunOptions {
    program: string;
    commandline: string[] | string | (()=>string)
}

var options: RunOptions = {
    program: "Test",
    commandline: ["hello","world"]
}

console.log(options.commandline[1])


options = {program: "tests", commandline: function() {return "**Hello"}}

var fn = options.commandline;
//console.log(fn())

interface ages {
    [index: string] : number
}

var agelist: ages;
//agelist["John"] = 15;
//agelist[2] = 34;

interface IParent1 {
    v1:number
}

interface IParent2 {
    v2: number
}

interface Child extends IParent1, IParent2 {

}

var obj1: Child = {v1: 12, v2: 22}

console.log(" v1 " + obj1.v1)
console.log("v2 " + obj1.v2)



// classes

class Car {
    engine: string;

    constructor (engine: string) {
        this.engine = engine;
    }

    disp(): void {
        console.log("Engine is " + this.engine)
    }
}

var obj4 = new Car("Engine 1");

obj4.disp();



class Shape {
    Area: number;

    constructor(a: number){
        this.Area = a
    }
}



// class inherienca and method override

class PrinterClass  {
    doPrint(): void {
        console.log("Print Parent")
    }
}

class StringPrinter extends PrinterClass {
    doPrint() : void {
        super.doPrint()
        console.log("String Printer")
    }
}


var obj10 = new StringPrinter();

obj10.doPrint();



class Circle extends Shape {
    disp(): void {
        console.log("Area is " + this.Area)
    }
}

var obj5 = new Circle(333)

obj5.disp()


/////////



/// static

class StaticMem {
    static num: number;
    static disp(): void {
        
        console.log("The value of num is " + StaticMem.num)}
}

StaticMem.num = 12;
StaticMem.disp();


// implement
interface ILoan{
    interest: number
}

class AgriLoan implements ILoan{
    interest: number
    rebate: number
    constructor(interest: number, rebate: number)
     {
        this.interest = interest
        this.rebate = rebate
     }
}


var person = {
    firstName: "Si",
    lastName: "Lam",
    sayHello: function() { // type template

    }
}

person.sayHello = function() {
    console.log("Hello")
}

var invokeperson = function (obj) {
    console.log("First name " + obj.firstName)
    console.log("Last Name " + obj.lastName )
}
invokeperson(person)


namespace SomeNameSpace {
    export interface ISomeInterfacename {}
    export interface SomeClassName {}

}
