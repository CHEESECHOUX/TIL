function solution(common) {
  if ((common[2]-common[1]) === (common[1]-common[0])){
      return common.pop() + common[1]-common[0]
  } else {
      return common.pop() * common[1]/common[0]
  }
}
// n번째 공차 수열 값 = 초항 + (위치 - 1) * 공차
// n번째 공비 수열 값 = 초항 * 위치 * 공비