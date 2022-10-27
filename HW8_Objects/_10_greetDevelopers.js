//https://www.codewars.com/kata/58279e13c983ca4a2a00002a/train/javascript

function greetDevelopers(list) {
  let arr = [];
  for (i = 0; i < list.length; i++) {
    let obj = list[i];
    obj['greeting'] = `Hi ${obj.firstName}, what do you like the most about ${obj.language}?`;
    arr.push(obj);
  }
  return arr;
}