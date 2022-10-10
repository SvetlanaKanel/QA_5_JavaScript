// --------#1 coffee with for_loop ----------

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

let espressoRecipe = step1 + "<br>" + step2 + "<br>" + step3;
let americanoRecipe = espressoRecipe + "\n" + step4;
let capuchinoRecipe = americanoRecipe + "<br>" + step5 + "<br>" + step6; 

let arrayCoffee = ["Espresso", "Americano", "Capuchino"];
let arrayRecipe = [espressoRecipe, americanoRecipe, capuchinoRecipe];
let arraySize = ["Small", "Medium", "Large"];

for (let i = 0; i < 3; i++) {
    console.log(arrayCoffee[i]);
    console.log(arrayRecipe[i]);  
    console.log();   
}

let price = 5;
for (let i = 0; i < 3; i++) {
    console.log(arraySize[i]);
    console.log("Price = " + price);
    price += 0.5;
}

// ------------- #2 --------------
// При помощи цикла for выведите чётные числа от 2 до 10
console.log("Четные числа от 1 до 10:")
for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}

console.log("Четные числа от 1 до 10 (вариант 2):")
for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

// --------------- #3 -------------------
/* Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.
Другими словами, n > 1 – простое, если при его 
делении на любое число кроме 1 и n есть остаток.
Например, 5 это простое число, оно не может быть разделено без остатка на 2, 3 и 4.
Напишите код, который выводит все простые числа из интервала от 2 до n.
Для n = 10 результат должен быть 2,3,5,7.
*/

/* let n = 10;
let index = 0;
let number = 2;
let arrayOfPrimeNumbers = [2];
while (number <= n) {
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            break;
        } else {
            arrayOfPrimeNumbers[index] = number;
            index++;
            number++;
        }
    }
}*/
//console.log(arrayOfPrimeNumbers);
//console.log();

/*
Имеется зашифрованное предложение 
“Ybrobrubr brabrrbrebr brtbrhbrebr brbbrebrsbrtbr brQbrAbr brebrvbrebrrbr”
мы знаем, что оно означает “You are the best QA ever”.
Нам нужно придумать программу дешифратор.
*/

let str = "Ybrobrubr brabrrbrebr brtbrhbrebr brbbrebrsbrtbr brQbrAbr brebrvbrebrrbr"; 
let newStr = "";
index = 0;
for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === 'b' && str.charAt(i + 1) === 'r') {
        continue;
    } else if (str.charAt(i) == 'r' && str.charAt(i - 1) === 'b') {
        continue
    } else {
        newStr += str[i];
        index++;
    }
}
console.log(newStr);

// #5
/* Придумайте свой собственный шифр, а также программу, 
которая будет шифровать и затем дешифровщик к нему
*/
let message = "We are the champions, my friends!";
let newMessage1 = "";
let newMessage2 = "";
//let j = message.length - 1;
for (let i = 0; i < message.length; i++) {
    if (i % 2 == 0) {
        newMessage1 += message.charAt(i);
    } else {
        newMessage2 += message.charAt(i);
    }
}
let newMessage = newMessage1 + newMessage2;
console.log(newMessage);

let oldMessage1 = "";
let oldMessage2 = "";
//let oldMessage = oldMessage1 + oldMessage2;

for (let i = 0; i < newMessage.length; i++) {
  if (i % 2 == 0) {
    newMessage1 += newMessage[i];
  } else {
    oldMessage2 += newMessage[i];
  }
}
let oldMessage = oldMessage1 + oldMessage2;
console.log(oldMessage);
// #6
/*У вас есть массив со скобками, предположим 
[ ‘(‘, ‘)’, ‘(‘, ‘)’, ‘)’] количество элементов и последовательность может быть разной.
Нужно выяснить, у каждой ли скобки есть соответствующая пара (открывающая и закрывающая).
*/

