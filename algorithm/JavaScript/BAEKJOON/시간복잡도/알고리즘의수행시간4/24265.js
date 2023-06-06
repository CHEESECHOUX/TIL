/*
MenOfPassion(A[], n) {
    sum <- 0;
    for i <- 1 to n - 1
        for j <- i + 1 to n 
            sum <- sum + A[i] × A[j]; # 코드1
    return sum;
}

등차수열 공식 (n * (n - 1)) / 2
*/

const fs = require("fs");
let n = fs.readFileSync("input.txt").toString();
// "dev/stdin"

// 정답봄... 왜 등차수열 쓰는지 이해가 안 됨...
let answer = n * (n - 1) - (n * (n - 1)) / 2;
console.log(answer);
console.log(2);
