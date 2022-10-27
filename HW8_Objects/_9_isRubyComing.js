//https://www.codewars.com/kata/5827acd5f524dd029d0005a4/train/javascript

function isRubyComing(list) {
  
    for (let i = 0; i < list.length; i++) {
      let el = list[i];
      if (el.language == "Ruby") {
        return true;
      }    
    }
    return false;
  }