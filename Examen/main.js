// Write your code here:
console.log("hola")

let number = 5
function isEven(number){
    if (number % 2 == 1){
        console.log("Is Even");
    }else{
        console.log("Is Odd");
    }
}
console.log(isEven(number));

let values = [5, 10, 15, 20, 25];

values.unshift(99);
values.pop();
console.log("final array:", values)


function reverseString(text){
    return text.split("").reverse().join("");
}
console.log(reverseString("Hello"));

let product = {
    name: "Laptop",
    price: 900,
    brand: "TechCo"
};

// Write your code here:

product.price = 750;
product.stock = true;
console.log("Product after", product);

// Write your code here:
function findMax(numbers){
    return Math.max(...numbers);
}
console.log(findMax([3,18,84,75,4]));

let products = new Map();
products.set("Monitor",300);
products.set("Keyboard",50);
products.set("Mouse",25);

console.log("Keyboard price:", products.get("Keyboard"));
products.delete("Mouse");
console.log("After deleting:", products);

// Write your code here:
function normalize(data){
    let min = Math.min(...data);
    let max = Math.max(...data);
    return data.map(x => (x - min)/(max - min));
}
module.exports = normalize;

let data3 = [25, 50 , 75, 100];
console.log("Normalized data:", normalize(data3));

const { format, addDays } = require("date-fns");

// Write your code here:
let date = new Date();
console.log("Today:", format(date, "yyyy-MM-dd"));
console.log("In 30 days:", format(addDays(date,30), "yyyy-MM-dd"));

const plotly = require("ijavascript-plotly");




class Stack {
    constructor() {
        this.elements = [];
    }
    push(element){
        this.elements.push(element);
    }

    pop(){
        return this.elements.pop();
    }
    peek(){
        return this.elements[this.elements.lenght - 1];
    }
    isEmpty(){
        return this.elements.lenght === 0;

    }
}

let stack = new Stack();
stack.push(10);
stack.push(30);
stack.push(40);
console.log("Top element:", stack.peek());
console.log("Popped:", stack.pop());
console.log("Empty:", stack.isEmpty());