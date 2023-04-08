/*
INNER JOIN 여러개 푸는 문제
아후 문제 이해하는 시간이 더 걸렸다


SELECT
1.두 번 이상의 도전에서 만점을 획득한 hacker_id, name

ORDER BY
2.해커가 만점을 획득한 challenge 횟수에 따라 내림차순  total number of challenges 
3.만점받은 둘 이상의 해커 challenge 횟수가 동일할 경우 hacker_id 오름차순

일단 만점 받은 해커를 찾고
두 번 이상 만점 받은 해커 찾기
*/

-- 에러
SELECT A.hacker_id, D.name
FROM SUBMISSIONS A
    INNER JOIN CHALLENGES B ON A.challenge_id = B.challenge_id
    INNER JOIN DIFFICULTY C ON B.difficulty_level = C.difficulty_level
    INNER JOIN HACKERS D ON A.hacker_id = D.hacker_id
-- 만점 받은 해커
WHERE A.score = C.score
-- 만점 둘 이상
GROUP BY A.hacker_id, D.name
ORDER BY COUNT(B.challenge_id) DESC, A.hacker_id


-- 만점 둘 이상일 경우 안 했음. 추가해주기
SELECT A.hacker_id, D.name
FROM SUBMISSIONS A
    INNER JOIN CHALLENGES B ON A.challenge_id = B.challenge_id
    INNER JOIN DIFFICULTY C ON B.difficulty_level = C.difficulty_level
    INNER JOIN HACKERS D ON A.hacker_id = D.hacker_id
WHERE A.score = C.score
GROUP BY A.hacker_id, D.name
HAVING COUNT(B.challenge_id) >= 2
ORDER BY COUNT(B.challenge_id) DESC, A.hacker_id