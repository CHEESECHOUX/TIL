// 큐
// 나름 애써봄... 몰겠다
function solution2(progresses, speeds) {
  let count = 0;
  for(let i = 0; i < speeds.length; i++) {
    progresses = parseInt(progresses) + parseInt(speeds)
    console.log(progresses[i])
    console.log(speeds[i])
    if (progresses[i] >= 100 && progresses[i+1] >= 100) count += 1;
  }
  return count; // count 도 안 나옴 뭐냐..
}




// 정답
function solution(progresses, speeds) {
  let answer = [];
  let days = 1; // 배포일
  let cnt = 0;  // 오늘 배포되는 기능의 수
  let progress = 0; // 현재 기능의 작업 진도

  while(progresses[0]) {
    progress = progresses[0] + (speeds[0] * days); // 첫 번째 기능 작업 진도
    if (progress >= 100) { // 첫 번째 기능 배포완료
      cnt ++;
      progresses.shift(); // 배포 완료된 작업 제거
      speeds.shift();     // 배포 완료된 작업 속도 제거
    } else {
      if (cnt > 0) { 
        answer.push(cnt); // 배포 완료된 기능이 있는 경우, answer에 푸시
      } days++; cnt = 0;  // 다음날 배포 완료된 기능 개수 초기화
    }
  }
  answer.push(cnt); // 모든 작업이 다 배포되면, 마지막으로 카운트된 배포 완료 기능 개수 푸시
  return answer;
}


// 로직은 비슷한데 조금 더 깔끔하게
function solution(progresses, speeds) {
  let answer = [];

  while(speeds.length > 0) {
    // 개발
    for (let i in speeds) {
      if (progresses[i] < 100) {
        progresses[i] += speeds[i];
      }
    }
    // 배포
    let deployCount = 0;
    while (progresses[0] >= 100) {
      progresses.shift();
      speeds.shift();
      deployCount ++;
    }
    if (deployCount > 0) {
      answer.push(deployCount);
    }
  }

  return answer;
}


console.log(solution([93, 30, 55], [1, 30, 5]))