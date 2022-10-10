console.log("Правая ёлочка\n");
let hight = 5;
for (let i = 1; i <= hight; i++) {
    let str = "";
    for (let j = 1; j < i + 1; j++) {
        str += '*';        
    }
    console.log(str);
}
//////////////////////////////////

console.log("----------- Task #2 --Ёлочка\n-------------");
let height = 5;
for (let i = 0; i < height; i++) {
    let str = "";

    for (let space = 0; space < height - 1 - i; space++) {
        str += " ";
    }

    for (let star = 0; star < i + 1; star++) {
        str += '*';
    }

    for (let rStar = 0; rStar < i; rStar++) {
        str += '*';
    }
    console.log(str);
}

// Решение Стена
console.log("----------- Task #2_2 --Ёлочка Стена\n-------------");
let row = 5;
let str = "";

for (let i = 0; i < row; i++) {
    for (let j = i; j < row - 1; j++) {
        str += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        str += "*";
    } 
    str += "\n";
}
console.log(str);

console.log("----------- Task #1 --Ромб-------------");
/*
         1
        121
       12321
      1234321
     123454321
    12345654321
   1234567654321
  123456787654321
 12345678987654321
1234567890987654321
 12345678987654321
  123456787654321
   1234567654321
    12345654321
     123454321
      1234321
       12321
        121
         1
*/
row = 10;
let strRombUp = "";
for (let i = 1; i <= row; i++) {    
    strRombUp += " ".repeat(row - i);    
    for (let j = 1; j < i + 1; j++) {
        strRombUp += j % 10;  // отсекаем десятки
    }        
    for (let j = i - 1; j >= 1; j--) {
        strRombUp += j;
    } 
    strRombUp += '\n';           
}    
console.log(strRombUp);

let strRombDown = "";
for (let i = 1; i < row; i++) {   
    for (let j = 1; j < i + 1; j++) {
        strRombDown += " ";
    }
    for (let j = 1; j <= row - i; j++) { 
        strRombDown += j % 10;
    } 
    for (let j = row - 1 - i; j > 0; j--) {
        strRombDown += j % 10;
    }
    strRombDown += '\n';
}
console.log(strRombDown);
// почему-то получается с пробелом

// решене Стена
console.log("----------- Task #1_2 --Ромб Стена-------------");

row = 10;
str = "";
//top
for (let i = 1; i <= row; i++) {    
    str += " ".repeat(row - i);    
    for (let j = 1; j < i + 1; j++) {
        str += j % 10;  // отсекаем десятки
    }        
    for (let j = i - 1; j >= 1; j--) {
        str += j % 10;
    } 
    str += '\n';           
} 
// bottom
for (let i = row; i >= 1; i--) {    
    str += " ".repeat(row - i);    
    for (let j = 1; j < i + 1; j++) {
        str += j % 10;  // отсекаем десятки
    }        
    for (let j = i - 1; j >= 1; j--) {
        str += j % 10;
    } 
    str += '\n';           
} 
console.log(str);



console.log("----------- Task #3 --Пирамида-------------");
    
/*
1
2 6
3 7 10
4 8 11 13 
5 9 12 14 15
*/

// решение Стена
row = 5;
str = "";
for (let i = 1; i <= row; i++){
    let num = i;
    for (let j = 1; j <= i; j++) {
      str += num + " ";
      num = num + (row - j); // num = 2 -> 6;      
    }
    str += "\n";
}
console.log(str);

// мои попытки решить задачу
// let num = 5;
// let str = '';
// for (let i = 1; i <= num; i++) {    
//     str = i + " ";
//     for (let j = num + 1; j <= i; j++) {
//         str += num + 1 + " ";
//     }    
    
//     console.log(str);
    
// }




// 1 
// 2 6 
// 3 7 10 
// 4 8 11 13 
// 5 9 12 14 15




