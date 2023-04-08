/* 
MySQL에서 위도와 경도 활용해 거리 계산하기
P1(a, b), P2(c, d) = (a-c)+(b-d)

ABS 절대값 함수
ROUND(숫자, 반올림할자릿수)

괄호... 잘보기
*/
SELECT ROUND(ABS(MIN(LAT_N)-MAX(LAT_N)) + ABS(MIN(LONG_W)-MAX(LONG_W)), 4)
FROM STATION