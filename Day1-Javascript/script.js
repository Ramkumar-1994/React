// ES6-ECMASCRIPT

// Javascript Evolution

// Mocha-Livescript-Javascript

// ECMA-European Computer Manufacturer Association

// Features Involved in ES6=>Arrow function,let,const,template literals

// Conditional Operators /Ternary Operator

console.log('Hello')

'4'===4?console.log('True'):console.log('False')

let data=true?'yes':'No'

console.log(data)

let isEqual='EMC'=='emc'?'Both are Equal':'Not Equal'

console.log(isEqual)

let raining=false

let isRaining=raining?'Take an Umbrella':'Sun Day'

console.log(isRaining)


// Array-is a also like variable with collection of element (more data)

let a=[10,20,30,40]

console.log(a[2])

console.log(a.length)

let val=a.pop()

console.log(val)

console.log(a.indexOf(20))

// Objects in Javascript

var person={
  name:'John',
  age:14,
  mark:78
}

var person1={
  name:'Mike',
  age:15,
  mark:88
}

console.log(person.name)

// Array of Objects

const students=[
  {
    name:'John',
    age:14,
    mark:78
  },

  {
    name:'Mike',
    age:15,
    mark:88
  }
]

console.log(students[1].name)

students[1].name='Prakash';

console.log(students);

// Arrow Function

let msg=()=>
  {
    console.log('Hello Welcome to React');
  }

msg();

// Template Literals

let name='Harry';
let age=24

console.log(`I am ${name} and my age is ${age}`);

// Destructing Assignment

let prices=[20,30,40]

let icecream=prices[0];
let chocolate=prices[1];
let popcorn=prices[2];

let [icecream1, ,chocolate1]=prices
console.log(icecream1,chocolate1)

// Spread and Rest Operator

function add(a,b,...c)
{
  console.log(a+b)
  console.log(c)
}

add(10,20,6,4,34,48)

// Spread Operator

let num=[1,2,3,4]

let num2=[...num]

num.push(5)

console.log(num)

console.log(num2)

// Default Parameters

function add(a=5,b=10)
{
  console.log(a+b)
}

add(1,5)

// Callback function-A function passed to another function as a argument 

function cutCake(cb)
{
  cb()
  console.log('Cake has been cutted')
}

function bringKnife()
{
  console.log('Knife is here')
}

cutCake(bringKnife)

function Chutney(cb)
{
  cb()
  console.log('Tomato chutney is made')
}

function shopTomato()
{
  console.log(`Going to Shop and Brought tomato`)
}

Chutney(shopTomato)

// Promises

var amazon=new Promise(
  function (resolve,reject)
  {
    let delivery=false
    if(delivery==true)
      {
        resolve('Order Delivered')
      }
    else
    {
      reject('order Failed')
    }
  }
)

amazon.then(
  function()
  {
    console.log('I will Pay')
  }
).catch(
  function()
  {
    console.log('Refund will be done in couple of days')
  }
)







