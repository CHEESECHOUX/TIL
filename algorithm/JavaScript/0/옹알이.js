// 10초 초과
function solution(babbling) {
  const can = ['aya','ye','woo','ma'];
  let count = 0;
  
  for(let i = 0; i < babbling.length; i++){
    let word = babbling[i];
      
    for(let j = 0; j < can.length; j++){
      if(word.includes(can[j].repeat(2))){
        break;
      }
      word = word.split(can[j]).join(" ");
    }
    if(word.split(" ").join("").length === 0){
      count += 1;
    }
  }
  return count;
}


//
function solution(babbling) {
  let babblingArr = ["aya", "ye", "woo", "ma"];
  let word = "";
  let count = 0;

  for(let i = 0; i < babbling.length; i++) {
    word = babbling[i].toString();

    for(let j = 0; j < babblingArr.length; j++) {
      word = word.replaceAll(babblingArr[j], ' ');    
    }

    if( word.trim().length == 0) {
      answer++;
    }
  }
  return count;
}