// https://www.codewars.com/kata/57ced2c1c6fdc22123000316/train/javascript
// решение Нали

function numObj(s){
  
    let arr = [];
    
    for (let el in s) {
      let obj = {};    
      obj[s[el]] = String.fromCharCode(s[el]);
      arr.push(obj);
    }
    return arr;
  }

  let s1 = [118,117,120];
 // console.log(numObj(s1)); //[ { '118': 'v' }, { '117': 'u' }, { '120': 'x' } ]

  let s2 = [101,121,110,113,113,103];
  console.log(numObj(s2)); // [{ '101': 'e' }, { '121': 'y' }, { '110': 'n' }, { '113': 'q' }, { '113': 'q' }, { '103': 'g' }]

