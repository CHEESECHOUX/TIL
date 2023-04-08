/*
MySQL 왜 와이 안 되냐 모르겠슴
*/
SELECT CONCAT(name, '(', SUBSTRING(occupation, 1, 1), ')')
FROM OCCUPATIONS
ORDER BY name;

SELECT CONCAT('There are a total of ', COUNT(occupation), ' ', LOWER(occupation), 's.')
FROM OCCUPATIONS
GROUP BY occupation
ORDER BY COUNT(occupation), occupation