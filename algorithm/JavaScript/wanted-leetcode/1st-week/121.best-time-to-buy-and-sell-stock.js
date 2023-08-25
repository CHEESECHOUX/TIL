/*
// 접근 
1. 일단 배열의 요소에서 가장 작은 수 인덱스를 찾고
2. 그 인덱스 이후로 가장 큰 수를 찾는다. 
3. 최대이익 구하기
*/

// 첫 번째 코드
let maxProfit = function (prices) {
  // 최소값의 인덱스 구하기
  const minPrice = Math.min(...prices);
  const minPriceIndex = prices.indexOf(minPrice);

  // 최소값 이후로 배열 자르기
  const slicePrices = prices.slice(minPriceIndex + 1);

  // 자른 배열에서 최대값 인덱스 찾기
  const sliceMax = Math.max(...slicePrices);
  const sliceMaxPriceIndex = slicePrices.indexOf(sliceMax);

  // 전체 배열에서 최대값 인덱스
  const maxIndex = sliceMaxPriceIndex + minPriceIndex + 1;

  const result = prices[maxIndex] - prices[minPriceIndex];

  return result;
};

/*
prices = [2,4,1]인 경우에 
원하는 출력값은 2인데 0으로 출력되는 에러가 발생했다.
*/

/*
// 두 번째 코드 - 시간 초과
하나씩 다 계산해보고 제일 큰 이익 얻는 값 찾기

시간복잡도 - O(n^2)
*/

let maxProfit2 = function (prices) {
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    const slicePrices = prices.slice(i + 1);

    // 자른 배열에서 최대값 찾기
    if (slicePrices.length > 0) {
      const sliceMax = Math.max(...slicePrices);

      // 이익 계산
      const profit = sliceMax - prices[i];
      if (profit > maxProfit) {
        maxProfit = profit;
      }
    }
  }

  return maxProfit;
};

/*
// 모르겠어서... 다른 사람이 푼거 봤다...
두 포인터 left, right를 사용해 가능한 최대 이익을 계산한다.

두 포인터를 사용하는 문제에 취약한 것 같다... 어려워...
*/
const maxProfit3 = (prices) => {
  let left = 0; // 매수 (구매 가격)
  let right = 1; // 매도 (판매 가격)
  let max_profit = 0;

  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      // 판매 가격이 구매 가격보다 클 경우
      let profit = prices[right] - prices[left]; // 이익을 계산

      max_profit = Math.max(max_profit, profit);
    } else {
      left = right; // 판매 가격이 구매 가격보다 크지 않으면 left를 right 위치로 이동
    }
    right++;
  }
  return max_profit;
};

console.log(maxProfit3([7, 1, 5, 3, 6, 4]));
