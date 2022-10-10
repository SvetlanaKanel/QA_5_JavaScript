//=========== calculator ===============
let num1 = Number(prompt("Enter first number"));
//let num1 = 2;

let num2 = +(prompt("Enter second number"));
// let num2 = 3;

//let operator = prompt("Enter operator: +, -, *, /");
let operator = "+";

switch (operator) {
  case ("+"):
    let sum = num1 + num2;
    console.log(`Sum ${num1} + ${num2} = ${sum}`);
    console.log(sum);
    document.write(`Sum ${num1} + ${num2} = ${sum}`);
    break;
  case ("-"):
    let diff = num1 - num2;
    console.log(`Differense ${num1} - $(num2} = ${diff}`);
    break;
  case ("*"):
    let mult = num1 * num2;
    console.log(`Multyplication ${num1} + ${num2} = ${mult}`);
    break;
  case (operator == "/"):
    if (num2 != 0) {
      let dev = num1 / num2;
      console.log(`Devision ${num1} / ${num2} = ${dev}`);
    } else {
      "Please, enter the other num2. Devision on 'zero' is prohibited."
    }    
}

//=========== recipt of coffee with nested if
let coffee;
let coffee_1 = "Espresso";
let coffee_2 = "Americano";
let coffee_3 = "Capuchino";
let milk;
let usualMilk = "milk";
let almondMilk = "almond milk";
let oatMilk = "oat milk";
let size;
let size_1 = "small";
let size_2 = "medium";
let size_3 = "big";

coffee = coffee_3;
size = size_1;


console.log(`Recipe of ${coffee}` +  "<br>" + "<br>");

let step1 = "Take 40 ml of water";
let step2 = "Take 10 mg of coffee";
let step3 = "Put coffee to the coffee machine and push the button";
let step4 = "Add 120 ml of boiling water";
let step5 = "Take 100 ml of milk, hot and whip it";
let step5_1 = "Take 100 ml if almond milk, hot and whip it";
let step5_2 = "Take 100 ml if oat milk, hot and whip it";
let step6 = "Put whippet milk into espresso";
let step7 = `Your ${coffee} ${size} is done!`;

let espressoRecipe = step1 + "<br>" + step2 + "<br>" + step3;

if (coffee == coffee_1) {
  
  document.write(espressoRecipe + step7)
} else if (coffee == coffee_2) {

  document.write(espressoRecipe + "<br>" + step4 + "<br>" + step7);  
} else {
    if (milk == usualMilk) {
        document.write(espressoRecipe + "<br>" + step4 + "<br>" + step5 + "<br>" 
        + step6 + "<br>" + step7 + "<br>");
    } else if (milk == almondMilk) {
        document.write(espressoRecipe + "<br>" + step4 + "<br>" + step5_1 + "<br>" 
        + step6 + "<br>" + step7 + "<br>");
    } else if (milk == oatMilk) {
        document.write(espressoRecipe + "<br>" + step4 + "<br>" + step5_2 + "<br>" 
        + step6 + "<br>" + step7 + "<br>");
    } 
}

let price;

if (size == size_1) {
  price = 5;
} else if (size == size_2) {
  price = 5.5;
} else {
  price = 6;
}

document.write(`Total price is $${price}`);


