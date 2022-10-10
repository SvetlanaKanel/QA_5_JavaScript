// Task #1

function getRecipe(typeOfCoffe) {
    switch (typeOfCoffe) {
        case "espresso":
            return espressoRecipe;
        case ("americano"):
            return americanoRecipe;
        case "capuchino":
            return capuchinoRecipe;
    }
}

function getPrice(size) {
    if (size == "Small") {
        return price;
    } else if (size == "Medium") {
        return price * 1.1;
    } else {
        return price * 1.15;
    }
}
let espresso = "Espresso";
let americano = "Americano";
let capuchino = "Capuchino";
let milk;

let step1 = "Take 40 ml of water";
let step2 = "Take 10 mg of coffee";
let step3 = "Put coffee to the coffee machine and push the button";
let step4 = "Add 120 ml of boiling water";
let step5 = "Take 100 ml of milk, hot and whip it";
let step5_1 = "Take 100 ml if almond milk, hot and whip it";
let step5_2 = "Take 100 ml if oat milk, hot and whip it";
let step6 = "Put whippet milk into espresso";

let espressoRecipe = "Take 40 ml of water\n" +
    "Take 10 mg of coffee\n" +
    "Put coffee to the coffee machine and push the button\n";

let price = 5;
console.log("Espresso recipe: " + getRecipe(espresso));
console.log(getPrice('medium'));



// step1 + "<br>" + step2 + "<br>" + step3;
// let americanoRecipe = espressoRecipe + "\n" + step4;
// let capuchinoRecipe = americanoRecipe + "<br>" + step5 + "<br>" + step6; 

// let arrayCoffee = ["Espresso", "Americano", "Capuchino"];
// let arrayRecipe = [espressoRecipe, americanoRecipe, capuchinoRecipe];
// let arraySize = ["Small", "Medium", "Large"];

// for (let i = 0; i < 3; i++) {
//     console.log(arrayCoffee[i]);
//     console.log(arrayRecipe[i]);  
//     console.log();   
// }

// let price = 5;
// for (let i = 0; i < 3; i++) {
//     console.log(arraySize[i]);
//     console.log("Price = " + price);
//     price += 0.5;
// }

// Task #3
function greet(name) {

    return "Hello, " + name + ", have a nice day!";
}

console.log(greet("Svetlana"));

// task # 2

function calc(a, b, operator) {
    switch (operator) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            if (b != 0) {
                return a / b;
            } else {
                "на 0 делить нельзя"
            }
    }
}
console.log(calc(2, 5, "+"))

function isPrime(num) {
    if (num > 1) {
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                return false;
            }
        }
        return true;
    }
    return false;
}

console.log(isPrime(5));
console.log(isPrime(-1));
console.log(isPrime(3));
console.log(isPrime(0));

function countPrimes(arr) {
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        if (isPrime(arr[i])) {
            counter++;
        }
    }
    return counter;
}

let arr = [-5, 1, 2, 5, 7, 6, 9];
console.log(countPrimes(arr));


/////////////////////////////
// Stan
function calculator(num1, num2, callback) {
    return callback(num1, num2);
}

let add = function (num1, num2) {
    return num1 + num2;
}


const sub = function (num1, num2) {
    return num1 - num2;
}

console.log(calculator(2, 6, (num1, num2) => num1 - num2));
