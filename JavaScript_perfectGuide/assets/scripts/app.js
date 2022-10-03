const defaultResult = 0;
let currentResult = defaultResult;

function add() {
  currentResult = currentResult + parseInt(userInput.value);
  outputResult(currentResult, '');
}

addBtn.addEventListener('click', add); // 브라우저에게 주소에 해당하는 함수의 이름을 알려주고
                                       // 버튼이 클릭되었을 때 함수를 호출하도록함