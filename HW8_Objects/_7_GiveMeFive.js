//https://www.codewars.com/kata/5722b3f0bd5583cf44001000/train/javascript

function giveMeFive(obj){
    let arr = [];
    for (var key in obj) {
      if (key.length == 5) {
        arr.push(key);
      }
      if (obj[key].length == 5) {
        arr.push(obj[key]);
      }
    }
    return arr;    
  };

  const obj1 = {Our:"earth",is:"a",beautyful:"world"};
  console.log(giveMeFive(obj1)); // [ 'earth', 'world' ]

  const obj2 = {Ihave:"enough", money:"to",buy:"a",car:"model"};
  console.log(giveMeFive(obj2)); // [ 'Ihave', 'money', 'model' ]

  const obj3 = {Pears:"than",apple:"sweet"};
  console.log(giveMeFive(obj3)); // [ 'Pears', 'apple', 'sweet' ]