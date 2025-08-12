# 데이터베이스

<br>

## 데이터베이스 개선

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
            WHERE SUBSTRING(name, 1, 4) = 'Choi';
            WHERE column1 + 10 = 20;
            WHERE CONCAT(first_name, last_name) = 'JisooChoi';
                        </code></pre>
                    </li>
                <li>
                    부정형 비교(조건 거부) 사용 시<br>
                    (긍정형 비교는 인덱스를 타지만 데이터 분포에 따라 효과가 거의 없을 수 있다.)
                    <pre><code>
            WHERE status != 'active';
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
        * 커넥션 풀(Connection Pool): <strong>DB 연결을 미리 만들어두고 재사용</strong>함으로써 성능을 높이는 방식<br>
        * 커넥션 풀 사이즈: <strong>동시에 몇 개의 DB 연결</strong>을 허용할 것인지 설정<br>
        <br><br>
        데이터베이스 커넥션 풀 사이즈는 <strong>애플리케이션의 성능, 데이터베이스의 자원, 그리고 실제 트래픽 패턴</strong>을 고려해서 설정 해야한다.<br>
        잘못 설정된 커넥션 수는 <strong>응답 지연, 리소스 낭비, 시스템 과부하</strong>로 이어질 수 있다.<br><br>
        * 데이터베이스 자원: CPU 성능 + 메모리 + 디스크I/O(데이터를 읽고 쓰는 속도) + 네트워크 대역폭(DB와 애플리케이션 서버 간 데이터 전송 속도) + DB 엔진 설정(동시 연결 수와 버퍼 크기 제한)<br>
        <br>
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
                <li>DB 서버의 max_connections 값 (DB 서버가 동시에 처리할 수 있는 최대 클라이언트 연결 수)</li>
                <li>DB 서버의 CPU, 메모리 등 리소스 여유</li>
                <li>슬로우 쿼리 발생 여부 (느린 쿼리는 커넥션을 오래 붙잡아두기 때문)</li>
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
                <li><strong>1. 커넥션 풀 부족</strong> → 대기 시간 증가</li>
                <li><strong>2. 슬로우 쿼리</strong> → 커넥션 점유 시간 증가 →  풀 고갈</li>
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

<br>

## 대용량 테이블의 처리 기법

<details>
    <summary><h3>Write, Read 분리와 복제</h3></summary>
    <h3>리플리케이션(Replication)의 목적</h3>
    <ol>
        <li>
        <strong>가용성과 안정성 확보</strong><br>
        데이터를 실시간 또는 거의 실시간으로 다른 DB에 복제
        </li>
        <li>
        <strong>백업 및 복구 대비</strong><br>
        장애 시 슬레이브를 마스터로 전환 가능 (High Availability)
        </li>
        <li>
        <strong>대용량 처리 효율성</strong><br>
        - 데이터 분석, 큐 전송 등 비즈니스 트랜잭션과 분리된 작업을 슬레이브에서 수행해 마스터 부하 방지<br>
        - 복잡한 조인이나 대용량 데이터 조회 시 슬레이브에서 처리해 마스터 부하 방지
        </li>
    </ol>
    <br>
    <h3>마스터와 슬레이브의 사양 차이를 최소화해야 하는 이유</h3>
    <ol>
    <li>
        <strong>복제 지연</strong><br>
        슬레이브가 마스터의 변경 내용을 제시간에 반영하지 못해 실시간 데이터 일관성에 문제가 생김.
    </li>
    <br>
    <li>
        <strong>버퍼 오버플로우(DB 서버 메모리 버퍼)</strong><br>
        슬레이브의 처리 속도가 느려 복제 로그가 버퍼에 과도하게 쌓이고 넘칠 수 있음.
        <ul>
        <li><strong>로그 손실</strong>: 버퍼가 가득 차면 이후 로그가 누락</li>
        <li><strong>복제 중단</strong>: 복제 프로세스가 멈추거나 오류 발생</li>
        <li><strong>서비스 영향</strong>: 슬레이브를 참조하는 시스템에서 오래된 데이터가 조회될 수 있음.</li>
        </ul>
    </li>
    <br>
    <li>
        <strong>복제 전환(Failover) 시 문제 발생</strong><br>
        마스터에 장애가 발생해 슬레이브를 새 마스터로 승격할 때, 슬레이브의 사양이 낮으면 다음과 같은 문제가 발생.
        <ul>
        <li><strong>DB 연결 실패</strong>: 새 마스터가 요청을 감당하지 못해 접속 불가</li>
        <li><strong>과부하로 인한 성능 저하</strong>: 처리 능력 부족으로 시스템 전체 성능 저하</li>
        <li><strong>데이터 유실 / 중복 처리</strong>: 복제 지연 상태에서 전환되면 트랜잭션 누락 또는 중복 발생</li>
        <li><strong>트랜잭션 누락</strong>: 전환 직전 처리 중이던 트랜잭션이 손실될 가능성</li>
        </ul>
    </li>
    </ol>
    <br>
</details>

<details>
    <summary><h3>파티셔닝</h3></summary>
    <p><strong>하나의 테이블을 논리적으로 여러 파티션으로 나눠 데이터를 저장하는 방식.</strong></p>
    <ul>
        <li><strong>불필요한 파티션은 스캔하지 않아도 됨</strong> → <strong>쿼리 속도 향상</strong></li>
        <li>데이터 용량이 커도 <strong>인덱스 성능 유지</strong></li>
        <li><strong>백업</strong>(중요한 데이터를 안전하게 복사해서 보관), <strong>유지보수, 데이터 삭제</strong> 등 관리 편의성 향상</li>
    </ul>
    <br>
    <h3>언제 사용?</h3>
    <strong>슬로우 쿼리 해소, 데이터 보관 관리, 아카이빙 용이성</strong> 등이 목적<br><br>
    <ul>
        <li>데이터가 시간이 지남에 따라 <strong>지속적으로 증가</strong>하는 경우</li>
        <li>특정 테이블에 <strong>SELECT, INSERT, UPDATE가 매우 빈번하게 발생</strong>하는 경우 (데이터를 나눠서 성능과 관리 효율 높이기 위해)</li>
        <li><strong>인덱스 크기 증가에 따른 성능 저하</strong>를 완화하고자 할 때</li>
    </ul>
    <br>
    <h3>파티셔닝은 실제로 테이블을 나누는 건가?</h3>
    <ul>
        <li>논리적으로는 하나의 테이블로 간주되지만, 물리적으로는 내부적으로 여러 파티션(파일 단위)으로 저장됨.</li>
        <li><strong>사용자(개발자)는 하나의 테이블처럼 쿼리</strong>하지만, DBMS가 조건에 따라 특정 파티션만 조회 (<strong>Database 입장에서 데이터 파일은 나눠져 있음.</strong>)</li>
    </ul>
    <br>
    <h3>파티셔닝 전략</h3>
    <ol>
        <li><strong>수평 파티셔닝</strong><br>
        → 데이터 행(row)을 기준으로 나눔 (<strong>날짜, 범위, 특정 컬럼 값</strong> 기준)</li><br>
        <li><strong>수직 파티셔닝</strong><br>
        → 데이터 열(column)을 기준으로 나눔 (자주 사용하는 <strong>칼럼</strong>만 별도 분리)</li>
    </ol>
    <br>
    <h3>파티셔닝 기준 예시</h3>
    <ul>
        <li><strong>범위 기반 파티셔닝 (Range Partitioning)</strong><br>
            - <strong>시간 순으로 쌓이는 데이터</strong> (로그, 거래내역, 주문 등)<br>
            - <strong>특정 기간 단위 (년/월/일)</strong>로 데이터 삭제, 백업, 보관이 필요한 경우<br>
            - 오래된 데이터는 거의 조회를 안 하고, <strong>최신 데이터만 자주 조회</strong>하는 경우<br>
            ex) created_at 날짜가 2023, 2024, 2025년별로 분할<br>
        </li><br>
        <li><strong>해시 기반 파티셔닝 (Hash Partitioning)</strong><br>
            - 데이터에 <strong>균등한 분산</strong>이 필요한 경우<br>
            - <strong>특정 컬럼 값으로 필터링이 다양하게</strong> 들어오는 경우<br>
            - 시간 순/범위 보다 <strong>랜덤 접근</strong>이 많을 때<br>
            - 쿼리 대상이 특정 파티션으로 편중되는 걸 방지하고 싶은 경우<br>
            <br>
            MySQL 내부 해시 함수를 적용해서 n개로 쪼개달라고 하면 n개의 파티션으로 균등하게 분산 저장함 → DB가 알아서 해시를 적용하고 분배함<br>
            ex) 회원 데이터 user_id % N 으로 분할 →  데이터 CRUD 시 특정 파티션에만 몰리지 않음
        </li><br>
        <li><strong>리스트 기반 파티셔닝 (List Partitioning)</strong><br>
            - 데이터가 <strong>명확한 카테고리 값</strong>으로 나눠질 때<br>
            - 범위가 아니라 <strong>불연속적 구간</strong>으로 구분되는 경우<br>
            ex) 지역별(서울, 부산, 대구)로 분할 / 상품 카테고리별(전자제품, 의류, 식품 등) / 국가별 판매 데이터(국가 코드에 따라 데이터 저장소 최적화)
        </li><br>
        <li><strong>혼합 파티셔닝 (Composite)</strong><br>
            - <strong>대용량 + 다차원 조건</strong>을 함께 고려해야 할 때<br>
            - 1차 기준은 범위(ex: 날짜), 2차 기준은 해시나 리스트<br>
            - 단일 파티셔닝으로는 데이터 분포 불균형이 심한 경우<br>
            <br>
            * <strong>거래 로그 테이블 예시</strong><br>
            1차 created_at 연 단위 분할<br>
            2차 user_id 해시 분할 → 특정 기간 내에서도 균등 분배<br>
            <br>
            * <strong>지역 + 기간 데이터 예시</strong><br>
            1차 국가 코드 리스트<br>
            2차 해당 국가 내에서 월 단위 범위 분할<br>
        </li>
    </ul>
</details>

<details>
    <summary><h3>샤딩</h3></summary>
    <p>
        <strong>데이터를 여러 개의 데이터베이스에 분산 저장</strong>하는 방식<br>
        DBMS가 기본적으로 제공하는 기능이 아니고, 애플리케이션 레벨에서 직접 구현해야 한다.<br>
    </p>
    <br>
    <h3>샤딩 vs 파티셔닝</h3>
    <ul>
        <li><strong>파티셔닝</strong>: <strong>하나의 DB 내에서 테이블을</strong> <strong>논리적으로 분리</strong></li>
        <li><strong>샤딩</strong>: <strong>서로 다른 물리 DB에 테이블 데이터를 분산 저장</strong></li>
    </ul>
    <ul>
        급성장하는 서비스는 수천만 ~ 수억 row 단위의 데이터가 빠르게 축적된다.<br>
        아무리 <strong>쿼리 튜닝이나 인덱스를 최적화해도 물리적인 데이터 양이 지나치게 크면 성능 문제는 불가피</strong>하다.<br><br>
        <strong>파티셔닝만으로는 한계가 있는 상황에서 샤딩이 필요</strong><br>
    </ul>
    <br>
    <p><strong>샤딩 예시)</strong></p>
    <ul>
    <li><strong>회원 테이블</strong><br>
        대부분 단건 조회 위주이고, <strong>일정 수준까지는 쿼리 튜닝으로 충분히 커버 가능</strong>하다.<br>
        그러나 <strong>회원 수가 수천만 이상으로 증가</strong>하거나, 로그인/권한 등 유저 기반 <strong>요청이 집중될 경우, 부하 분산을 위해 모듈러 샤딩을 적용</strong>하기도 한다.<br>
    </li>
    <br>
    <li><strong>주문/환불/배송 등 거래성 데이터</strong><br>
        <strong>주문에 비례해서 쌓이는</strong> 배송 정보, 내 구매 내역 등은 <strong>데이터 사이즈만큼 지속적으로 select, insert, update가 발생</strong>한다.<br>
        ⇒ 데이터 양과 트래픽이 함께 늘어나 슬로우 쿼리, 장애 가능성 증가. 샤딩을 해줘야 함.
    </li>
    </ul>
    <br>
    <h3>샤딩의 종류</h3>
    <p>
    대부분의 경우 샤딩 키(PK, user_id 등)를 기준으로,<br>
    <strong>해시 기반(=모듈러 샤딩)</strong> 또는 <strong>범위 기반(=레인지 샤딩)</strong> 방식 중 <strong>하나를 선택</strong>해 데이터를 분산 저장한다.
    </p>
    <h4>1. 모듈러 샤딩</h4>
    <ul>
        키 값에 모듈러 연산(key % N)을 적용해 데이터를 균등하게 분산<br>
        ex) user_id % 3 → DB0, DB1, DB2에 분산 저장<br>
        <br>
        <li><strong>데이터가 균등하게 분산되지만, 범위 조회는 약함</strong></li>
        <li>회원, 로그인 히스토리, 유저별 설정 값 등 단건 조회가 많은 데이터</li>
    </ul>
    <br>
    <strong>장점</strong>
    <ul>
        <li>특정 유저에만 집중된 요청이 많을 때 유리</li>
        <li><strong>범위 조회보단 PK 기반 단건 조회 성능이 좋음</strong></li>
        <li>⇒ user_id별로 조회하기 때문에 user_id % N으로 균등하게 쪼개기만 해도 충분히 효율적</li>
    </ul>
    <br>
    <strong>단점</strong>
    <ul>
        <li>범위 조회 시 <strong>모든 DB에 병렬로 쿼리</strong>해야 하므로 성능 저하 가능</li>
        <li>샤드 수가 바뀌면 전체 분산이 깨짐<br> (= 데이터를 전부 다시 마이그레이션 해야 함. 서비스 중단 없이 확장하기 어려움.)</li>
    </ul>
    <br>
    <h4>2. 레인지 샤딩</h4>
    <ul>
        key의 값 범위에 따라 분할 저장<br>
        ex) order_id 1~1,000,000 → DB A, 1,000,001~2,000,000 → DB B<br>
        <br>
        <li>주문, 결제, 배송, 로그 등 <strong>시간순으로 쌓이는 데이터</strong></li>
    </ul>
    <br>
    <strong>장점</strong>
    <ul>
        <li>범위 조회 성능이 뛰어남</li>
        <li>구조 변경이 비교적 유연함 (새 범위만 정의하면 됨)</li>
        <li>시간 순 정렬/필터가 편리</li>
    </ul>
    <strong>단점</strong>
    <ul>
        <li>마지막 DB에만 쓰기 쏠림 발생 가능</li>
        <li>특정 범위에 데이터가 몰릴 경우, 불균형이 생기고 특정 DB만 과부하될 수 있음</li>
        <li>새로운 범위를 위한 샤드 추가/관리가 필요</li>
    </ul>
    <br>
    * 추가) 일관된 해싱 기반 샤딩<br><br>
    <details>
        <summary><strong>왜 주문 같은 데이터는 레인지 샤딩을 많이 쓸까?</strong></summary>
        <ol>
        <li><strong>범위 조회가 많기 때문</strong><br>
            order_id나 created_at으로 범위 조회가 자주 발생<br>
            모듈러 샤딩이면 이걸 모든 DB에 동시에 쿼리해야 함 → 병렬 쿼리, 성능 저하
        </li>
        <li><strong>시간순 정렬이 중요</strong><br>
            최신 주문보기, 주문 순 정렬<br>
            레인지 샤딩은 시간 순서에 따라 자연스럽게 분리되어 관리/정렬이 편리함
        </li>
        <li><strong>계속 쌓이면서 갱신이 적은 데이터</strong><br>
            주문 데이터는 한 번 INSERT 되고 거의 안 바뀜<br>
            데이터 쏠림 문제는 읽기 부하가 아닌, 쓰기 부하 관점에서만 고려하면 됨
        </li>
        </ol>
    </details>
    <br>
    <h3>샤딩 적용 절차</h3>
    <ol>
        <li><strong>샤딩 키 선정 및 설계</strong><br>
            - 테이블을 분석하고 샤딩 기준(키)을 설정
        </li><br>
        <li><strong>데이터 마이그레이션</strong><br>
            - 기존 데이터를 샤딩 구조에 맞춰 샤드 DB로 이관
        </li><br>
        <li><strong>이중 저장 단계</strong><br>
            - 일정 기간 동안 기존 DB + 샤딩 DB에 함께 저장하면서 이중 운영<br>
            - 애플리케이션 레벨에서 분산 저장/조회 로직을 구현
        </li><br>
        <li><strong>샤딩 안정화 후 전환 완료</strong><br>
            - 시스템이 안정화되면 기존 DB 저장 로직 제거<br>
            - 샤딩 DB만 운영
        </li>
    </ol>
</details>

<br>

## ✔️ Tech-Interview

<details>
    <summary><strong> 계정은 총 50만개가 생성되어 있습니다.<br>
        유저 500명이 동시에 로그인을 시도 한다면, 1~50만까지 루프가 500번 실행될까요?
    </strong></summary>
    <br>
    <ul>
        <li>로그인 과정에서는 <code>WHERE account_key = user_id</code> 같은 <strong>인덱스 포인트 룩업(B+Tree)</strong>으로 해당 계정을 바로 조회합니다.</li>
        <li>500번 전부 실행되는 것이 아니라, <strong>DB 커넥션 풀 크기</strong>만큼 <strong>동시에 연결</strong>됩니다. <strong>나머지 요청은 대기열에서 순차적으로 처리</strong>됩니다.</li>
    </ul>
    <p>500명이 동시에 로그인해도, 각 요청은 <strong>인덱스 조회 1회(+세션 upsert 1회)</strong>로 처리되며, <strong>DB는 풀 크기에 맞춰 동시 처리</strong>합니다.</p>
</details>
