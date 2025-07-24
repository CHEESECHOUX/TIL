## 데이터베이스

<details>
    <summary><h3>인덱스</h3></summary>
    <p>
        인덱스 튜닝을 하는 이유는 <strong>애플리케이션에서 실행되는 쿼리 실행 속도를 향상</strong>하기 위함!<br>
        <br>
        <strong>쿼리 실행 속도가 느려지면 사용자 요청이 서버에 쌓이게 되어 처리 대기 시간이 증가</strong>한다.<br>
        그만큼 <strong>CPU와 메모리 오버헤드가 발생</strong>하고 이는 <strong>전체 서버의 성능 저하를 유발</strong>한다.<br>
        <br>
        오버헤드: 시스템이 어떤 작업을 처리할 때, 필수 작업 이외에 발생하는 추가적인 자원 소비<br>
    </p>
    <br><br>
    <ul>
        <li><strong>인덱스 생성</strong>
            <ul>
                <li>자주 검색되어야 하고 크기가 최소화되어야 하며, 카디널리티가 높아야 한다.</li>
                <li>분포도가 좋은(중복이 적은) 칼럼과 기본 키, 조인 조건 칼럼에 인덱스를 구성하는 것이 좋다.</li>
                <li>인덱스 역시 비용이므로 과도한 인덱스 생성이 꼭 좋은 것만은 아님을 인지해야 한다.</li>
            </ul>
            </li>
            <br><br>
            <li><strong>인덱스 생성이 필요한 칼럼의 조건</strong>
            <ul>
                <li>WHERE, JOIN, ORDER BY 등에 자주 사용되는 칼럼</li>
                <li>중복이 적고 고유값이 많은, 즉 카디널리티가 높은 칼럼</li>
                <li>데이터 타입 크기가 작을수록 유리 (디스크 I/O 효율 증가)</li>
                <li>기본 키나 외래 키 등 JOIN 조건에 자주 사용되는 칼럼</li>
                <li>단일 인덱스보다는 실제로 함께 사용되는 조건들을 고려한 복합 인덱스가 더 효과적</li>
            </ul>
            </li>
            <br><br>
            <li><strong>인덱스를 타지 않는 경우</strong>
                <ol>
                    <li>인덱스 칼럼에 함수나 연산이 적용된 경우
                        <pre><code>
            WHERE SUBSTRING(name, 1, 3) = 'Choi';
            WHERE column1 + 10 = 20;
            WHERE CONCAT(first_name, last_name) = 'JisooChoi';
                        </code></pre>
                    </li>
                <li>
                    부정형 비교(조건 거부) 사용 시
                    <pre><code>
            WHERE status != 'active';
            WHERE age > 30;
            WHERE id NOT IN (1, 2, 3);
                    </code></pre>
                </li>
                <li>
                    카디널리티가 낮거나 값 범위가 넓은 조건
                    <pre><code>
            WHERE gender = 'F';  -- 값이 2개뿐이면 인덱스 효율 낮음
                    </code></pre>
                </li>
                <li>
                LIKE 절에 와일드카드(%)가 앞에 있는 경우
                    <pre><code>
            WHERE name LIKE '%soo';  -- 인덱스 사용 불가
            WHERE name LIKE 'ji%';   -- 인덱스 사용 가능
                    </code></pre>
                </li>
                <li>
                    인덱스 칼럼에 형변환이 일어난 경우
                    <pre><code>
            WHERE user_id = '123';  -- user_id가 INT인데 문자열로 비교
                    </code></pre>
                </li>
            </ol>
        </li>
    </ul>
    <br><br>
    <p>
        <strong>- 인덱스 튜닝</strong>: 이미 잘 작성된 쿼리를 더 빠르게 실행시키기 위해 인덱스를 조정<br>
        <strong>- 쿼리 최적화</strong>: 쿼리 문장 자체를 바꾸거나, 필요하면 테이블 구조까지 변경하는 작업
    </p>
    <br>
    <p>
        DB 서버는 애플리케이션 서버보다 투입 비용이 훨씬 높기 때문에 확장이 쉽지 않다. 따라서 올바른 SQL 수행을 위한 튜닝이 반드시 선행되어야 한다.<br>
    </p>
    <br><br>
</details>
