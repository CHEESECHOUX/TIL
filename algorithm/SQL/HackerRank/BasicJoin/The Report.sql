/*
1.STUDENT 테이블 marks 점수를 통해, GRADE 테이블에 나와있는 범위대로 grade 구하기
2.grade가 8미만이면 이름을 NULL로 출력
3.ORDER BY grade 내림차순, name 오름차순, marks 오름차순
*/

SELECT IF(B.grade >= 8, A.name, NULL), B.grade, A.marks
FROM STUDENTS A
    INNER JOIN GRADES B
    ON A.marks BETWEEN B.min_mark AND B.max_mark
ORDER BY B.grade DESC, A.name, A.marks