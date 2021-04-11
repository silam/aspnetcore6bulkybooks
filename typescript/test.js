var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var message = "hello";
var firstname = "Si Lam";
var score1 = 50;
var score2 = 49;
var global_num = 12;
var Numbers = /** @class */ (function () {
    function Numbers() {
        this.num_val = 13;
    }
    Numbers.prototype.storeNum = function () {
        var local_nu = 14;
    };
    Numbers.sval = 10;
    return Numbers;
}());
var Greetings = /** @class */ (function () {
    function Greetings() {
    }
    Greetings.prototype.greet = function () {
        console.log("Hello world");
    };
    Greetings.prototype.sayHello = function () {
        return "Hellow Say";
    };
    return Greetings;
}());
function test_param(n1, s1) {
    console.log(n1);
    console.log(s1);
}
function disp_details(id, name, mail) {
    if (mail != undefined) {
        console.log("email = " + mail);
    }
}
function addNumbers() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var i;
    var sum = 0;
    for (i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }
    console.log("sum = " + sum);
}
function factorial(number) {
    if (number <= 0)
        return 1;
    else {
        return number * factorial(number - 1);
    }
}
console.log("Factorial " + factorial(5));
var foo = function (x) {
    return (10 + x);
};
console.log("Lamda " + foo(10));
var func = function (x) {
    if (typeof x == "number")
        console.log(x + " is number");
    else if (typeof x == "string")
        console.log(x + " is string");
};
func(12);
// function constrcutor
var myFunc = new Function("a", "b", "return a+b");
var x = myFunc(2, 4);
console.log("Function constructor " + x);
addNumbers(1, 2, 3);
test_param(123, "This is a string");
disp_details(12, "Si", "silam@hotmail.com");
console.log("Global Num " + global_num);
console.log(Numbers.sval);
var o1 = new Numbers();
console.log(o1.num_val);
// type assertion => at compile time
// not type casting => at run time
var str1 = '1';
var str2 = str1;
console.log(typeof (str1));
// inferred type
var num1 = 2; // number
//num1 = "12" // num1 is a number exception
console.log(num1);
///////////////
//score1 = "Si Lam" //Type 'string' is not assignable to type 'number'.
console.log("Sum " + (score1 + score2));
console.log(message);
var obj = new Greetings();
obj.greet();
var msg = obj.sayHello();
console.log(msg);
// NUMBER
function employee(id, name) {
    this.id = id;
    this.name = name;
}
var emp = new employee(123, "si Lam");
employee.prototype.email = "silam@hotmail.com";
console.log("ID " + emp.id);
console.log("Name " + emp.name);
console.log("email " + emp.email);
// array
var alphas;
alphas = ["1", "2"];
// array destrucuring
var z = alphas[0], y = alphas[1];
console.log(z);
console.log(y);
// tuples
var mytuple = [10, "Hello", " World", "ts"];
console.log("Item before PUSH " + mytuple);
mytuple.push(12);
console.log("After push " + mytuple);
// union 
var arr;
var i;
arr = [1, 2, 3];
for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
arr = ["saiogn", "newyord", "pune"];
for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
var customer = {
    firstName: "Tome",
    lastName: "Hanks",
    syaHi: function () { return "Hi There"; }
};
console.log("Name " + customer.firstName);
console.log("last name " + customer.lastName);
console.log("say " + customer.syaHi());
var options = {
    program: "Test",
    commandline: ["hello", "world"]
};
console.log(options.commandline[1]);
options = { program: "tests", commandline: function () { return "**Hello"; } };
var fn = options.commandline;
var agelist;
var obj1 = { v1: 12, v2: 22 };
console.log(" v1 " + obj1.v1);
console.log("v2 " + obj1.v2);
// classes
var Car = /** @class */ (function () {
    function Car(engine) {
        this.engine = engine;
    }
    Car.prototype.disp = function () {
        console.log("Engine is " + this.engine);
    };
    return Car;
}());
var obj4 = new Car("Engine 1");
obj4.disp();
var Shape = /** @class */ (function () {
    function Shape(a) {
        this.Area = a;
    }
    return Shape;
}());
// class inherienca and method override
var PrinterClass = /** @class */ (function () {
    function PrinterClass() {
    }
    PrinterClass.prototype.doPrint = function () {
        console.log("Print Parent");
    };
    return PrinterClass;
}());
var StringPrinter = /** @class */ (function (_super) {
    __extends(StringPrinter, _super);
    function StringPrinter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StringPrinter.prototype.doPrint = function () {
        _super.prototype.doPrint.call(this);
        console.log("String Printer");
    };
    return StringPrinter;
}(PrinterClass));
var obj10 = new StringPrinter();
obj10.doPrint();
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Circle.prototype.disp = function () {
        console.log("Area is " + this.Area);
    };
    return Circle;
}(Shape));
var obj5 = new Circle(333);
obj5.disp();
/////////
/// static
var StaticMem = /** @class */ (function () {
    function StaticMem() {
    }
    StaticMem.disp = function () {
        console.log("The value of num is " + StaticMem.num);
    };
    return StaticMem;
}());
StaticMem.num = 12;
StaticMem.disp();
var AgriLoan = /** @class */ (function () {
    function AgriLoan(interest, rebate) {
        this.interest = interest;
        this.rebate = rebate;
    }
    return AgriLoan;
}());
var person = {
    firstName: "Si",
    lastName: "Lam",
    sayHello: function () {
    }
};
person.sayHello = function () {
    console.log("Hello");
};
var invokeperson = function (obj) {
    console.log("First name " + obj.firstName);
    console.log("Last Name " + obj.lastName);
};
invokeperson(person);
