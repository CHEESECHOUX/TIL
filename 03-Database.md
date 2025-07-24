# 데이터베이스

<br>

## ✔️ 데이터베이스 개선

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

<details>
    <summary><h3>실행 계획 분석</h3></summary>
    <p>일반 SELECT 쿼리 앞에 <code>EXPLAIN</code>을 추가해주면 된다.</p>
    <ul>
        <h3>[주요 항목]</h3>
            <ul>
                <li>select_type: SELECT 문 유형 (SIMPLE, SUBQUERY, UNION 등)</li>
                <li>type: 테이블에서 데이터를 읽는 방식 (좋을수록 빠름)</li>
                <li>possible_keys: 옵티마이저가 사용할 수 있는 인덱스 후보 목록</li>
                <li>key: 실제로 사용된 인덱스</li>
                <li>key_len: 사용된 인덱스의 크기 (바이트)</li>
                <li>ref: 조인할 때 어떤 컬럼이나 상수를 기준으로 연결하는지</li>
                <li>rows: 이 쿼리에서 읽을 것으로 예상되는 행 수</li>
                <li>filtered: 조건에 의해 걸러질 것으로 예상되는 비율(%)</li>
                <li>extra: 실행 방식에 대한 추가 정보 (Using temporary, Using filesort 등)</li>
            </ul>
        <br><br>
        <li><strong>select_type: 쿼리 안에 서브쿼리, UNION 등이 어떻게 구성되어 있는지 보여줌</strong>
             <ul>
                <li>복잡한 쿼리 구조(서브쿼리, UNION 등)는 성능 저하의 원인이 될 수 있음</li>
                <li>특히 DEPENDENT SUBQUERY, DEPENDENT UNION 같은 항목이 보이면 성능 병목 가능성 있음</li>
            </ul>
        </li>
        <br>
        <li><strong>⭐️ type: 테이블에 어떻게 접근하는지, 실제로 데이터를 어떻게 읽고 있는지를 보여주는 항목</strong><br>
            <ul>
                <li>type이 좋을 수록 쿼리가 빠르고 효율적</li>
                <li>ALL이나 index는 풀 테이블 스캔에 가까워 성능 이슈 가능성이 높다.</li>
            </ul>
        </li>
        <br><br>
        <li><strong>UNION</strong><br>
            UNION은 여러 SELECT 결과를 하나로 합치는 기능.<br>
            결과에서 중복된 행은 제거된다. => 이 과정에서 정렬(SORT)과 비교 연산이 필요해 성능 부담이 크다.<br>
            <br>
            DEPENDENT UNION, UNION RESULT는 성능에 안 좋다.<br>
            <br><br>
            <strong>UNION 개선하기</strong>
            <ul>
                <li>1. UNION은 UNION ALL로 바꾸기<br>
                    UNION ALL은 중복 제거를 하지 않아, 정렬 비용이 없다.<br>단, 정말 중복 허용해도 되는지를 잘 확인해야 한다.
                </li>
                <li>2. 서브쿼리를 최적화해서 결과 집합 크기 줄이기<br>
                    ex) WHERE 조건을 더 정교하게 걸어서 불필요한 row를 줄이기
                </li>
                <li>3. UNION 대신 JOIN 사용을 고려하기<br>
                    - JOIN이 더 효율적일 수 있음<br>
                    - 두 SELECT가 같은 조건이나 키를 기준으로 묶을 수 있는 구조라면 JOIN이 더 나음
                </li>
            </ul>
        </li>
        <br>
        <li><strong>성능이 좋은 실행 계획 기준</strong>
            <ul>
                <li>select_type: SIMPLE, PRIMARY, DERIVED</li>
                <li>type: system, const, eq_ref</li>
                <li>extra: Using index</li>
                <br>
            </ul>
             나머지 값들은 성능 저하 가능성이 있으므로 튜닝 대상 후보로 보고 속도 측정을 해보아야 한다.
            <br><br>
        </li>
    </ul>
    <br>
    <p>
        DB 서버는 애플리케이션 서버보다 투입 비용이 훨씬 높기 때문에 확장이 쉽지 않다. 따라서 올바른 SQL 수행을 위한 튜닝이 반드시 선행되어야 한다.<br>
    </p>
    <p><strong>* 옵티마이저</strong>: 데이터베이스가 쿼리를 가장 빠르게 실행할 수 있도록 실행 계획을 자동으로 결정하는 엔진<br>
        <strong>* 풀텍스트 인덱스</strong>: 문자열을 대상으로 검색어 포함 여부, 유사도, 키워드 검색 등을 지원하는 특수 인덱스<br>
        <strong>* 인덱스 튜닝</strong>: 이미 잘 작성된 쿼리를 더 빠르게 실행시키기 위해 인덱스를 조정<br>
        <strong>* 쿼리 최적화</strong>: 쿼리 문장 자체를 바꾸거나, 필요하면 테이블 구조까지 변경하는 작업
    </p>
    <br><br>
</details>

<details>
    <summary><h3>커넥션 풀</h3></summary>
    <p>
        데이터베이스 커넥션 풀 사이즈는 <strong>애플리케이션의 성능, 데이터베이스의 자원, 그리고 실제 트래픽 패턴</strong>을 고려해서 설정 해야한다.<br>
        잘못 설정된 커넥션 수는 <strong>응답 지연, 리소스 낭비, 시스템 과부하</strong>로 이어질 수 있다.<br>
        <br>
        - 커넥션 풀(Connection Pool): DB 연결을 미리 만들어두고 재사용함으로써 성능을 높이는 방식<br>
        - 커넥션 풀 사이즈: <strong>동시에 몇 개의 DB 연결</strong>을 허용할 것인지 설정<br>
    </p>
    <br>
    <h3>커넥션 풀 사이즈 설정 기준</h3>
    <code>최대 커넥션 수 = 애플리케이션 서버 수 × 서버당 커넥션 수<br></code>
    <ul>
        <br>
        <li><strong>고려 요소</strong>
             <ul>
                <li>초당 요청 쿼리 수 (QPS: Queries Per Second)</li>
                <li>요청당 평균 쿼리 처리 시간</li>
                <li>최대 피크 시간대의 요청량</li>
                <li>DB 서버의 max_connections 값</li>
                <li>DB 서버의 CPU, 메모리 등 리소스 여유</li>
                <li>슬로우 쿼리 발생 여부</li>
            </ul>
        </li>
        <br>
        예: QPS가 100이고, 쿼리당 평균 처리 시간이 100ms라면,<br>
        동시에 활성화되는 커넥션은 약 10개 필요하다.<br>
        → 안전하게 2배인 20개 정도로 설정 후 테스트<br>
        <br>
    </ul>
    <h3>병목과 튜닝 전략</h3>
    <ul>
        <li><strong>성능 병목 원인</strong><br>
            <ul>
                <li>1. 커넥션 풀 부족 → 대기 시간 증가</li>
                <li>2. 슬로우 쿼리 → 커넥션 점유 시간 증가 →  풀 고갈</li>
            </ul>
        </li>
        <li><strong>해결 전략</strong><br>
            <ul>
                <li>쿼리 튜닝: 슬로우 쿼리 제거 → 커넥션 점유 시간 단축</li>
                <li>풀 사이즈 조정: 점진적으로 늘리며 모니터링</li>
                <li>성능 테스트 반복: 실제 트래픽 시뮬레이션 후 적정값 도출</li>
                <li>최대 허용 커넥션 수 고려: DB가 감당 가능한 범위 내에서 설정</li>
            </ul>
        </li>
        <br><br>
    </ul>
    <h3>실무 예시</h3>
    <ul>
        <li>WAS(Web Application Server) 서버 3대</li>
        <li>초당 150 쿼리 발생</li>
        <li>쿼리당 평균 처리 시간 50ms</li>
        <br>
        <code>1000ms / 50ms = 20</code><br>
        → 한 커넥션은 초당 최대 20개의 쿼리 처리 가능 (1초 = 1000ms)<br>
        <code>150 / 20 = 7.5</code><br>
        → 초당 150 쿼리 처리하려면 7.5개 커넥션이 필요함<br>
        <br>
        최소 8개의 커넥션이 있어야 함<br>
        여유 고려해 서버당 커넥션 풀 사이즈를 20 ~ 30개 설정<br>
        <br>
        <li>
            왜 20 ~ 30개로 설정할까?
            <ul>
                <strong>1. 트래픽은 늘 평균이 아니라 피크를 기준으로 튜닝해야 하기 때문</strong><br>
                → 순간 150개가 아니라 200개, 300개까지 치솟을 수도 있음<br><br>
                <strong>2. 슬로우 쿼리나 일시적인 병목 상황이 있을 수 있기 때문</strong><br>
                → 어떤 쿼리는 50ms보다 오래 걸릴 수 있음. 그동안 커넥션은 반납되지 않고 점유된 채 대기함<br><br>
                <strong>3. 비즈니스 로직 중간에 커넥션을 오래 점유하는 경우 대비</strong><br>
                → 트랜잭션 처리, 외부 API 연동 등<br><br>
                <strong>4. 3대 WAS로 분산되어 있기 때문에 개별 서버당 충분한 커넥션 확보 필요</strong><br>
                → 전체적으로는 20개면 충분할 수 있어도, 일부 WAS에 트래픽이 쏠리면 서버 1대당 커넥션 수가 부족할 수 있음<br><br>
                <strong>5. 풀은 부족하면 병목, 많아도 리소스 낭비는 거의 없음</strong><br>
                → 커넥션 풀을 20개로 설정했다고 해서 항상 20개가 활성화되는 것이 아님. 대부분 idle 상태에 있음<br>
                → 풀 사이즈 = 최대 허용치. 리소스 낭비 없음<br>
            </ul>
        </li>
    </ul>

</details>

<details>
    <summary><h3>중복 쿼리 개선</h3></summary>
    <p>
        <strong>DB 접근 횟수를 줄이고, 인덱스를 활용해 응답 시간을 개선</strong>하는 것이 애플리케이션 성능 최적화의 가장 효과적인 방법<br>
    </p>
    <br>
    <ul>
        <li><strong>1. DB 접근 최소화</strong><br>
            <ul>
                <li>쿼리 호출 횟수를 줄이는 것이 가장 우선</li>
                <li>자주 사용하는 데이터를 캐싱하거나, <strong>한 번에 묶어서 조회하는 방식 고려해보기</strong></li>
            </ul>
        </li>
        <br>
        <li><strong>2. 로직으로 처리 가능한 것은 로직에서 처리</strong><br>
            <ul>
                <li>쿼리로 모든 걸 처리하지 말고, <strong>DB에서 가져온 데이터를 애플리케이션 로직에서 가공</strong><br></li>
                <li>ex) 필터링, 정렬, 집계 등을 로직 레벨에서 처리</li>
            </ul>
        </li>
        <br>
        <li><strong>3. 복잡한 조인은 애플리케이션에서 코드로 분리</strong><br>
            <ul>
                <li>조인 depth가 깊고 쿼리가 복잡하면 성능 저하 가능</li>
                <li>해결 방법<br>
                - 주요 테이블에서 데이터를 먼저 조회<br>
                - 해당 결과의 키(id 등)를 기준으로 다른 테이블을 개별 조회<br>
                - <strong>애플리케이션 레벨에서 코드로 결과 조합</strong> => merge(여러 데이터 소스를 하나로 합치기), filter, join(공통 키로 데이터를 연결) 수행<br>
                </li>
            </ul>
        </li>
        <br>
        <li><strong>4. 3번은 MSA에서도 유용한 전략</strong><br>
            <ul>
                <li><strong>MSA 환경에서는 서비스마다 DB를 분리해두는 경우가 많아, 복잡한 조인을 SQL에서 직접 수행하기 어렵다.</strong><br>
                이럴 경우, 각 서비스에서 데이터를 API로 조회하고, <strong>애플리케이션 또는 API Gateway에서 데이터를 조합</strong>해 응답을 구성하는 방식이 자주 사용된다.
                </li>
                <br>
            </ul>
        </li>
        <br><br>
    </ul>

</details>
