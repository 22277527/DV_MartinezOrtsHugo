console.log("Hola mundo")

let numbers2 = new Set([1, 2, 3, 3, 4, 4, 5]);
console.log("Set of unique numbers:", numbers2);

// Add and remove elements
numbers2.add(6);
numbers2.delete(3);
console.log("After modifications:", numbers2);


let text = "Hola mundo2"
function countCharacters(text){
    
     return text.length;
}
console.log(countCharacters(text))

let student = {
    name: "John",
    age: 20,
    major: "Computer Science"
};

// Write your code here:
student.age = 22;
student.course = "Data Visualization";
console.log("Student after:", student);

// Write your code here:
let array = [10, 20, 30, 40, 50];
function squareNumbers(array){
    return array.map(num => num ** 2);
}
console.log(squareNumbers(array));

// Write your code here:
let cor = new Set([1, 2, 2, 3, 4, 4, 5]);
console.log("Set of unique numbers:", cor);

// Add and remove elements
cor.add(6);
cor.delete(2);
console.log("After modifications:", cor);


let arr = [10, 20, 30, 40, 50]
function mean(arr) {
    return arr.reduce((a, b) => a + b, 0) / arr.length;
}

function standardDeviation(arr) {
    let m = mean(arr);
    let variance = arr.map(x => (x - m) ** 2);
    return Math.sqrt(mean(variance));
}

module.exports = { mean, standardDeviation };
console.log(arr)
console.log(mean(arr));
console.log(standardDeviation(arr));

