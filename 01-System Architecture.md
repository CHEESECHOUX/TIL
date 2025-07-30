# 시스템 아키텍처

<details>
    <summary><h3>3계층 구조 (3-Tier Architecture)</h3></summary>
    <ul>
        <li><strong>3계층 구조란?</strong></li>
        플랫폼을 세 가지 계층으로 나누어 논리적 또는 물리적으로 분리하여 구축 및 운영하는 아키텍처
        <br><br>
        예를 들어 웹 서비스를 운영할 때, 서버 한 대에 모든 기능을 통합하는 대신<br> 
        <strong>프레젠테이션 계층, 애플리케이션 계층, 데이터 계층</strong><br>
        으로 분리해 각각 독립적으로 관리한다.
        <br><br>
        3계층 외에도 2계층, 4계층 등 다양한 구조로 나눌 수 있으며, 이를 <strong>다층 구조(Multi-tier Architecture)</strong>라고 한다.
        <br><br>
        <li><strong>프레젠테이션 계층</strong></li>
        사용자와 직접 상호작용하는 계층. UI와 사용자 요청 전달 및 결과 표시<br>
        ex) React, HTML/CSS, Android 앱
        <li><strong>애플리케이션 계층</strong></li>
        비즈니스 로직 처리, 사용자 요청을 처리, DB와 연동
        ex) Python, Node.js, Java 서버
        <li><strong>데이터 계층</strong></li>
        데이터 저장, 조회, 수정 등의 기능을 담당<br>
        ex) MySQL, PostgreSQL, MongoDB

<br><br>

<li>
    <em>※ 추가) 2-tier, n-tier 구조와의 차이</em>
</li>

    </ul>

</details>

<details>
    <summary><h3>로드 밸런싱</h3></summary>
    <br>
    <h3>로드 밸런싱이란?</h3>
    <p>
        서버의 트래픽을 적절히 분산해 <strong>성능, 가용성, 안정성</strong>을 향상시키는 방법<br>
        단순히 서버를 늘리거나 튜닝하는 것만으로는 비용 최적화에 한계가 있기 때문에, 로드 밸런싱이 중요함!<br>
    </p>
    <br>
    <h3>계층에 따른 분류 (OSI 기준)</h3>
    <h4>🔹 L4 로드 밸런서 (전송 계층)</h4>
    <ul>
        <li>TCP/UDP 기반의 <strong>IP 주소 + 포트 번호</strong>로 트래픽을 분산</li>
        <li>속도가 빠르고 단순한 방식</li>
    </ul>
    <br>
    <h4>🔹 L7 로드 밸런서 (애플리케이션 계층)</h4>
    <ul>
        <li><strong>HTTP 헤더, URL, 쿠키, 세션</strong> 등의 정보를 기반으로 분산</li>
        <li>요청 내용을 분석하여 세밀하게 라우팅 가능</li>
        <li>복잡한 웹 애플리케이션에 적합</li>
    </ul>
    <br>
    <p>
        💡 대기업, 금융권은 비용보다 무중단 서비스, 보안, 성능을 더 중요하게 생각해서 고가의 하드웨어 로드 밸런서를 적극 활용함.
    </p>
    <br>
    <h3>부하 분산 알고리즘</h3>
    <h4>1. Round Robin (라운드 로빈)</h4>
    <ul>
        <li>서버에 순서대로 요청을 분산</li>
        <li>모든 서버의 성능이 같고, 요청의 처리량도 비슷할 때 잘 작동함.</li>
        <li><strong>한계:</strong>모든 요청이 동일한 처리량을 갖고 있지 않음.<br>
        단순히 순서대로 분산하면 무거운 요청이 몰린 서버는 과부하가 되고, 다른 서버는 한가해짐 (= 비효율적으로 자원 사용)<br>
        무거운 요청이 걸린 서버는 처리가 느려, 다음 요청도 밀리게 되고 사용자는 응답이 느려졌다고 느낌. </li><br>
    </ul>
    <h4>2. Weighted Round Robin (가중 라운드 로빈)</h4>
    <ul>
        <li>각 서버의 성능이 다를 때 성능 좋은 서버에 더 많은 요청 할당</li><br>
    </ul>
    <h4>3. Dynamic Weighted Round Robin (다이나믹 가중 라운드 로빈)</h4>
    <ul>
        <li>서버 응답 시간, 지연 시간 등을 기준으로 <strong>실시간 가중치 조정</strong></li><br>
    </ul>
    <h4>4. Least Connection (최소 연결 수 기반)</h4>
    <ul>
        <li>현재 연결된 클라이언트 수가 가장 적은 서버에 요청 분산</li>
        <li>요청 처리 시간이 다양한 환경에 효율적</li><br>
    </ul>
    <h4>5. Least Response Time (최소 응답 시간 기반)</h4>
    <ul>
        <li>응답 시간이 가장 빠른 서버로 요청을 분산</li><br>
    </ul>
    <h4>6. IP Hash (IP 해시 기반)</h4>
    <ul>
        <li>클라이언트 IP를 해싱해 항상 같은 서버로 요청을 보냄</li>
        <li>세션 유지를 위해 사용 (ex. 로그인 유지, 장바구니 등)</li>
        <li>세션 고정(sticky session)이 필요한 서비스에서 사용</li><br>
    </ul>
    <br><br>
    <h3>실무에서 자주 쓰이는 알고리즘</h3>
    <table border="1" cellpadding="5" cellspacing="0">
        <thead>
        <tr>
            <th>상황</th>
            <th>자주 쓰는 알고리즘</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>서버 성능/요청 무게가 비슷함</td>
            <td>Round Robin + Health Check</td>
        </tr>
        <tr>
            <td>요청 처리 시간이 다양함</td>
            <td>Least Connection</td>
        </tr>
        <tr>
            <td>서버 성능이 다름</td>
            <td>Weighted Round Robin</td>
        </tr>
        <tr>
            <td>응답 속도 기준</td>
            <td>Least Response Time</td>
        </tr>
        <tr>
            <td>세션 유지가 필요</td>
            <td>IP Hash</td>
        </tr>
        <tr>
            <td>API 경로에 따라 분기</td>
            <td>L7 Path 기반 분산</td>
        </tr>
        </tbody>
    </table>

</details>

<details>
    <summary><h3>수평 확장, 수직 확장</h3></summary>
    <h3>1. 수평 확장 (Scale Out)</h3>
    <strong>서버 대수를 늘려 트래픽을 분산 처리</strong><br><br>
    <ul>
    <li><strong>적용 상황:</strong> 이벤트 등으로 <u>트래픽이 일시적으로 급증</u>할 때</li>
    <li><strong>운영 방식:</strong> 한계치 트래픽 규모 예측 → 서버 추가 → 로드 밸런서로 분산 처리</li>
    <li><strong>장점:</strong> <u>가용성 향상</u>, 트래픽에 탄력적으로 대응 가능</li>
    <li><strong>단점:</strong>
        <ul>
        <li>세션 관리, 데이터 정합성 유지가 복잡</li>
        <li>서버 수 증가로 인한 <u>운영/관리 비용(인적 자원, 시스템 자원) 증가</u></li>
        </ul>
        <br>
        + 추가) 분산 환경에서 세션 관리, 데이터 정합성 관리 어떻게 하는지 
    </li>
    </ul>
    <br>
    <h3>2. 수직 확장 (Scale Up)</h3>
    <strong>기존 서버의 사양을 업그레이드 (CPU, 메모리 확장 or 고성능 서버 교체)</strong><br><br>
    <ul>
    <li><strong>적용 상황:</strong>
        <ul>
        <li><u>단일 트랜잭션 비즈니스 로직</u>이 매우 복잡하거나</li>
        <li><u>대량 데이터 처리가 필요하고, 통계와 집계, 배치</u>등의 처리 주 업무인 서버</li>
        </ul>
    </li>
    <li><strong>판단 기준:</strong> CPU, 메모리 사용률이 <u>60% 를 초과</u>해 지속적으로 증가할 때</li>
    <li><strong>장점:</strong> 분산 시스템보다 <u>관리 용이</u></li>
    <li><strong>단점:</strong>
        <ul>
        <li>서버 교체 시 <u>다운타임 발생</u> 가능</li>
        <li><u>확장 한계</u> 존재 (하드웨어 물리적 한계)</li>
        </ul>
    </li>
    </ul>
</details>

<details>
    <summary><h3>API 설계 기본 원칙</h3></summary>
    <code>Q. API를 설계할 때 필요한 기본 원칙들과 지원자가 API를 작성할 때 가장 중요하게 생각하는 요소에 대해서 설명해주세요.</code>
    <br><br>
    <h3>RESTful 기본 개념</h3>
    <ul>
        <li>리소스를 <strong>URI</strong>로 표현</li>
        <li><strong>HTTP 메서드</strong>로 <strong>자원에 대한 행위를 요청</strong> (GET, POST, PUT, DELETE 등)</li>
        <li><strong>JSON 포맷</strong>으로 요청/응답 본문 처리</li>
    </ul>
    <br>
    <h3>RESTful API 설계 규칙</h3>
    <ul>
        <li>
        <strong>1. URL 규칙</strong><br>슬래시(/)로 계층 표현, 마지막 슬래시 생략<br>
        </li><br>
        <li>
        <strong>2. 대시(-) 사용</strong><br>언더바(_) 대신 대시(-) 사용<br>
        </li><br>
        <li><strong>3. 소문자 사용</strong><br>URI는 항상 소문자 → 일관성, 단순함 지향</li><br>
        <li>
        <strong>4. 단순한 구조로 작성</strong><br>하나의 리소스에는 단수/복수 URL만 허용<br>
        구조가 일관되면 HTTP 메서드 설계를 올바르게 하기 쉬워지고, 그 결과로 멱등성도 자연스럽게 확보가 됨<br>
        예: <code>/orders</code>, <code>/orders/1</code><br>
        <br>
        <strong>* 멱등성: 같은 요청을 여러 번 보내더라도 결과가 변하지 않는 성질</strong><br>
        - GET, PUT(전체 덮어쓰기라서 결과가 항상 그대로), DELETE → 멱등성 있음<br>
        - POST(요청 할 때마다 새로운 데이터 생김), PATCH(부분 수정으로 데이터 누적이 가능해 매번 결과 달라질 수 있음) → 멱등성 없음<br>
        </li><br><br>
        <li>
        <strong>5. URL에 HTTP 메서드 노출하지 않기</strong><br>
        예: <code>/getUser</code> X
        </li><br>
        <li>
        <strong>6. URI depth 제한</strong><br>가급적 얕게 구성, 최대 4단계 권장<br>
        예: <code>/shops/1/orders/2/items</code> (지양)
        </li><br>
        <li>
        <strong>7. 의미에 맞는 HTTP 상태 코드 사용</strong>
        <ul>
            <li>200 OK, 201 Created, 204 No Content</li>
            <li>400 Bad Request, 401 Unauthorized, 404 Not Found 등</li>
        </ul>
        </li><br>
        <li>
        <strong>8. API 버전 명시</strong><br>
        예: <code>/v1/orders</code>
        </li><br>
        <li>
        <strong>9. 리소스에 대한 정렬, 필드에 대한 필터, 페이징은 쿼리 파라미터 사용</strong>
        <ul>
            <li>정렬: <code>?sort=created_at</code></li>
            <li>필터: <code>?status=active</code></li>
            <li>페이징: <code>?page=2&amp;limit=10</code></li>
        </ul>
        </li><br>
        <li>
        <strong>10. 문서화</strong><br>API 명세서 제공 (Swagger, Postman 등)<br>
        → 기획자나 현업도 쉽게 테스트 가능해야 함
        </li>
    </ul>
    <br>
    API는 일관성, 명확성, 단순성을 기반으로 설계해야 하며, 팀 전체가 쉽게 이해하고 테스트할 수 있도록 문서화와 표준화가 중요하다.
    <br>
    + 추가) RESTful 기반 설계 외에 어떤 API 설계 방법? 요즘 RESTful API를 많이 사용하는 이유

</details>

<details>
    <summary><h3>배포 시스템(CI/CD)</h3></summary>
    <h4>✔️ 배포 시스템이 왜 필요할까?</h4>
    <ul>
    <li>개발한 코드를 서버에 반영해 실제 서비스에 적용해야 되니까</li>
    </ul>
    <br>
    <h2>배포 목표(= 배포 시스템의 기능적 요구사항)</h2>
    <ul>
    <li><strong>서비스 중단 없이</strong> 배포하고, 문제가 생기면 <strong>빠르게 롤백</strong>하거나 트래픽을 전환할 수 있어야 함</li>
    <li><strong>배포 중 에러나 장애를 자동 감지</strong>하고 확인할 수 있어야 함
        <ul>
        <li>예: Health check 기능을 통해 각 인스턴스의 Endpoint 상태나 시스템 리소스(CPU, Memory 등)를 실시간으로 확인</li>
        </ul>
    </li>
    <li><strong>로그 및 시스템 상태를 모니터링</strong>할 수 있어야 함
        <ul>
        <li>예: 메트릭 수집 및 로그 분석 도구(Grafana, ELK 등)와 연동해 지표 및 에러 상황을 추적</li>
        </ul>
    </li>
    <li><strong>협업이 원활하고 실수를 줄일 수 있도록 자동화</strong>되어야 함
        <ul>
        <li>예: 배포 준비, 설정 변경 자동화</li>
        <li>배포 Lock/Unlock 기능으로 실수 방지</li>
        <li>Slack·카카오톡 등으로 실시간 알림 연동</li>
        </ul>
    </li>
    <li><strong>배포 이력 기록</strong>이 남아 있어야 함
        <ul>
        <li>누가, 언제, 어떤 코드를 배포했는지 확인</li>
        <li>문제가 생겼을 때 <strong>원인을 빠르게 추적</strong> 가능</li>
        <li>예: 배포 시간, 버전 정보, 담당자 기록 자동 저장</li>
        </ul>
    </li>
    <li><strong>버전 관리가 체계적이어야 함</strong>
        <ul>
        <li>예: [업무티켓명-번호]-모듈명-[yyyyMMddHHmmss] 형식의 자동 빌드 버전 생성</li>
        </ul>
    </li>
    <li><strong>배포 상태를 실시간으로 파악할 수 있어야 함</strong>
        <ul>
        <li>예: Dev / Stage / Production 단계별 상태를 시각적으로 보여주는 Progress Viewer</li>
        </ul>
    </li>
    </ul>
    <br>
    <h2>CI/CD란?</h2>
    <p><h3>CI 단계</h3>코드 테스트 + 빌드 (예: 도커 이미지 생성)<br>
    <h3>CD 단계</h3>배포 전략 실행 (롤링, 블루/그린, 카나리 등)</p><br>
    <h3>🔹 CI (Continuous Integration 지속적 통합)</h3>
    <ul>
    <li>개발자의 코드를 공통 브랜치에 자주 병합</li>
    <li>자동 빌드 / 테스트 / 코드 품질 검증을 수행해, 통합 시 오류를 조기에 발견하고 빠르게 배포할 수 있도록 하는 프로세스</li>
    </ul>
    <br>
    <h3>🔹 CD (Continuous Delivery/Deployment 지속적 배포)</h3>
    <ul>
    <li>테스트 통과된 빌드 결과물을 자동으로 운영환경까지 배포하는 것</li>
    <li>Delivery: 스테이징까지 자동화 (운영은 수동)</li>
    <li>Deployment: 운영까지 자동화</li>
    </ul>
    <br>
    <h2>배포 전략</h2>
    ✔️ <strong>롤링, 블루/그린, 카나리 배포는 모두 무중단 배포를 전제</strong>로 하기 때문에, <strong>최소 2개 이상의 인스턴스</strong>가 필요함<br>
    ✔️ 롤링 배포는 스타트업이나 중소기업에서, 블루/그린, 카나리 배포는 대형 시스템이나 클라우드 환경에서 더 선호된다.<br>
    <br><br>
    <h3>1. 롤링 배포</h3>
    <ul>
    <li><strong>여러 서버(인스턴스) 중에서 하나씩 순차적으로 새 버전으로 교체</strong></li>
    <li>각 인스턴스는 트래픽을 잠시 차단 → 업데이트 진행 → 완료되면 서비스에 연결</li>
    <li>이 과정을 반복하면서, <strong>모든 서버에 새 버전을 점진적으로 배포</strong></li>
    </ul><br>
    <strong>장점</strong>
    <ul>
    <li>추가 서버 비용 없음<br>(= 기존에 운영 중인 인스턴스를 하나씩 업데이트하면서 순차적으로 배포하므로, 배포를 위해 인스턴스를 추가로 띄울 필요가 없음)</li>
    <li>관리 간편</li>
    </ul>
    <strong>단점</strong>
    <ul>
    <li>배포 시점에 인스턴스마다 서로 다른 버전일 수 있어, <strong>사용자에게 어떤 버전이 보일지 알 수 없음.</strong></li>
    <li>서버 수가 많을 경우 시간 오래 걸림</li>
    <br>
    <li>롤링 배포는 배포 컴포넌트들이 시간이 지날수록 무거워지고 서비스 트래픽에 영향을 많이 받게 된다.<br>
        일반적인 방식이지만 좋은 방식의 배포는 아니다.<br>
        → 이 단점을 상쇄하기 위해 배포 소스의 규모를 작게 나누는 MSA로 진행하거나, 트래픽이 몰리지 않는 시간대에 배포하는 방법으로 해결<br>
    </li>
    </ul>
    <br>
    <h3>2. 블루/그린 배포</h3>
    <ul>
    <li><strong>구버전(Blue)과 신버전(Green) 인스턴스를 병렬 운영</strong></li>
    <li>LB를 통해 트래픽을 신버전(Green)으로 전환</li>
    </ul><br>
    <strong>장점</strong>
    <ul>
    <li>문제가 있을 경우 <strong>롤백이 빠르다.</strong> (LB만 원위치)</li>
    <li>운영 환경에 영향 없이 배포 가능</li>
    </ul>
    <strong>단점</strong>
    <ul>
    <li><strong>시스템 자원이 2배 필요</strong><br> (EC2 인스턴스는 반드시 2배가 되어야 하고, RDS는 공유 여부에 따라 달라짐)</li>
    <li>새 배포 버전이 나갈 때 반드시 <strong>QA를 꼼꼼히 점검</strong>해 버그나 장애 유발 가능성을 낮춰야 한다.<br>
        → 그린에 문제가 있으면 모든 사용자에게 장애가 발생하기 때문
    </li>
    </ul>
    <br>
    <h3>3. 카나리 배포</h3>
    <ul>
    <li><strong>일부 사용자에게만 신규 버전을 배포</strong>한 뒤 <strong>점진적 확대</strong></li>
    <li>오래 전 광부들이 가스에 민감한 카나리아 새를 탄광에 풀어 미리 가스 누출 위험을 감지한데서 유래 되었다.</li>
    </ul><br>
    <strong>장점</strong>
    <ul>
    <li>문제 발생 시 영향 최소화 (블루/그린보다 안전)</li>
    <li><strong>A/B 테스트 가능</strong></li>
    </ul>
    <strong>단점</strong>
    <ul>
    <li><strong>트래픽 분산 전략이 복잡함</strong><br>기존 버전과 새 버전을 동시에 운영하면서, 일부 사용자만 정해진 비율로 새 버전으로 보내야 함.</li>
    <li><strong>사용자 구분 로직이 필요함</strong><br>누가 새 버전을 쓸지 정해야 하고, 코드나 인프라에서 사용자 조건에 따른 분기처리나 경우에 따라 DB나 로직 설계도 함께 고려해야 함.</li>
    </ul>
    <br>
    <h2>배포 시스템 시나리오 예시</h2>
    <ol>
    <li>새로운 버전 변경 커밋 → 리뷰 및 머지 → 배포 내용 공유</li>
    <li>새로운 버전 빌드 수행 및 다른 사람이 실수로 배포 버튼을 누르지 못하게 배포 잠금(Lock)</li>
    <li>카나리 방식으로 일부 배포 및 테스트</li>
    <li>문제 없으면 전체 배포 진행
        <ul>
        <li>배포 이력 기록 (배포 시간, 배포한 사람)</li>
        <li>기존 연결 정리 및 새 인스턴스 전환</li>
        <li>롤백을 위해 재빌드하는 방식은 지양</li>
        </ul>
    </li>
    <li>배포 완료 알림 전송 (= 자동으로 배포 성공/실패 공유)</li>
    <li>자동으로 배포 히스토리 기록, 릴리즈 태그 생성, 이슈가 있을 경우 로그와 함께 파악할 수 있도록 대시보드 지원</li>
    <li>전체 모니터링 후 배포 프로세스 종료</li>
    </ol>
    <br>
</details>

<br><br>

# ✔️ Tech-Interview

<details>
    <summary><h3>웹 환경 아키텍처</h3></summary>
    <ul>
        <li>
            <p><strong>Q1. 다양한 클라이언트 디바이스(웹, 모바일, 태블릿)에서 서버를 호출할 때, 일반적인 3-Tier 환경에서 동작하는 전반적인 프로세스를 설명해주세요.</strong></p>
            <p>A. 
                사용자는 프레젠테이션 계층(웹 브라우저, 모바일 앱 등)을 통해 요청을 보냅니다. 이 요청은 애플리케이션 계층(Web 서버, API 서버 등)으로 전달되어 비즈니스 로직이 처리되고, 필요한 경우 데이터 계층(DB 서버)에서 데이터를 읽거나 저장합니다. <br>
                처리된 결과는 다시 애플리케이션 계층을 통해 프레젠테이션 계층으로 전달되어 사용자에게 응답됩니다.
                <br><br>
                + DNS, L7의 역할, LB 등의 역할 추가
                + 방화벽, CDN, DB의 리플리케이션 정도 설명 추가
            </p>
        </li>
        <br>
        <li>
        <p><strong>Q2. 그 중 특정 디바이스 혹은 메뉴의 트래픽이 월등히 높아 서버에 부하가 많이 걸릴 경우, 아키텍처를 어떻게 구성 또는 변경해야 할까요?</strong></p>
        <p>질문의 의도: 점진적인 구조적 개선을 고민해보았는지, 데이터 및 트래픽의 부하 분산에 대해서 알고 있는지 물어보기 위함</p>
        <p>A. 병목 지점을 파악해서 서버를 늘리거나 DB의 수행 속도를 개선해야 한다. 정도의 답변은 아쉬움.
        </p>
        </li>
    </ul>

</details>

<br>

## 분산 시스템

<details>
    <summary><h3>비동기 메시지 처리(Message Queue)</h3></summary>
    <blockquote>
        <strong>Q.</strong> 온라인 사이트에서 특정 상품의 구매 이력이 있는 회원에게 간단한 설문을 요청한 후, 제출하면 자동으로 1만원 상당의 스타벅스 기프티콘을 주는 이벤트를 한다고 가정한다. 
        하루 동안 진행되고 판매사와 계약 관계 등을 고려해 정시에 오픈 후 목표한 기프티콘이 소진되면 이벤트를 종료한다고 할 때 어떤 방식의 아키텍처를 고려해야 할까?
    </blockquote>
    <br>
    <p><strong>→ 당일 이벤트이기 때문에 몇 분 이내에 접속이 폭주할 것!</strong></p>
    <br>
    <h3>1. 트래픽 처리</h3>
    <strong>문제점</strong>
    <ul>
        <li>구매/설문 페이지에 급격한 접속 증가</li>
        <li>기프티콘 전송 로직의 병목 가능성</li>
        <li>회원 정보 조회 부하로 전체 로그인/회원가입까지 영향</li>
    </ul>
    <br>
    <strong>해결 방안</strong>
    <ol>
        <li><strong>비동기 처리 구조 도입</strong><br>
            - HTTP 200 응답만 빠르게 반환(응모 성공 메시지)<br>
            - 설문/응모 데이터는 MQ에 저장하고 별도 처리</li><br>
        <li><strong>이벤트 응답 전용 테이블 분리</strong><br>
            - 응모 데이터(회원 ID, 설문 결과, 응모 시간 등 이벤트 참여 데이터)만 저장해 DB I/O 최소화<br>
            (= 다른 테이블에는 접근하거나 영향을 주지 않도록)
        </li><br>
        <li><strong>트랜잭션 분리</strong><br>
            - MQ를 통해 회원 인증 / 재고 차감 / 기프티콘 전송을 분리 처리</li><br>
    </ol>
    <h3>2. 재고 관리</h3>
    <strong>문제점</strong>
    <ul>
        <li>RDB에서 UPDATE로 수량 차감 시 동시성 병목</li>
        <li>재고 수량 처리 중 데이터 정합성 오류 위험</li>
    </ul>
    <br>
    <strong>해결 방안</strong>
    <h4>Redis 기반 재고 관리</h4>
    <ul>
        <li><strong>레디스는 싱글 스레드 기반</strong>으로 여러 클라이언트 요청을 동시에 처리하지 않고, <strong>하나의 스레드로 순차적으로 처리</strong>한다.</li>
        <li>decr 같은 원자 연산 사용<br>
            (= 동시성 문제 없이 수량을 안전하게 줄이기 위해 사용하는 명령)</li>
        <li>Pub/Sub or 메시지 큐로 이벤트 브로드캐스팅 가능</li>
        <li>TTL 설정으로 이벤트 자동 종료 가능</li>
    </ul>
    <br>
    <ul>
        <li><strong>Redis는 인메모리 기반</strong>으로 <strong>데이터 유실 가능성</strong>이 있다.<br>이를 보완하려면 <strong>클러스터 구성, 백업 정책(AOF/RDB 설정), 디스크 저장 MQ 사용</strong>(RabbitMQ, Kafka는 자체적으로 디스크에 저장)</li>
        <br>
        <li><strong>총 재고 수/지급 수량은 RDBMS에 별도 기록</strong></li>
        <li>안전 재고 확보(ex: 총 100개 중 10개는 오차방지용)</li>
    </ul>
    <br>
    * 이벤트 브로드캐스팅: 시스템에서 어떤 이벤트가 발생했을 때, 여러 컴포넌트(또는 서비스)에게 동시에 그 이벤트를 알려주는 방식.<br>
    설문 제출 후 재고 수량 감소, 응모 DB 기록, 기프티콘 발송 작업이 동시에 필요할 때 <strong>"설문 제출 완료"라는 이벤트를 브로드캐스팅</strong>하면 각각의 처리 담당 서비스가 해당 이벤트를 구독하고 자기 역할을 수행할 수 있음.<br>
    <br><br>
    <h3>3. 메시지 큐(MQ) 도입 이유</h3>
    <p>MQ(Message Queue): 시스템끼리 데이터를 주고받을 때, 바로 처리하지 않고 중간에서 메시지를 안전하게 저장하고 전달해주는 중간 관리자</p>
    <br>
    <strong>구성 요소</strong><br>
    - Producer: 메시지를 보내는 쪽 (ex: 주문 생성 서비스)<br>
    - Queue(MQ): 메시지를 줄 세워 보관하는 공간<br>
    - Consumer: 메시지를 받아서 처리하는 쪽(ex: 결제 처리 서비스)<br>
    <br>
    <strong>왜 필요한가?</strong><br>
    1. 비동기 처리<br>
    Producer가 메시지를 보내고 기다리지 않고 다른 작업을 할 수 있음<br>
    <br>
    2. 시스템 간 결합도 낮춤<br>
    Producer와 Consumer가 직접 연결되지 않아도 됨<br>
    <br>
    3. 트래픽 폭주에 견딜 수 있음<br>
    Queue에 일단 쌓아두고, Consumer가 하나씩 처리<br>
    <br>
    * MQ가 없으면?<br>
    - 모든 처리를 API 서버가 동기적으로 처리 → 응답 지연 / 타임아웃 / 서버 다운<br>
    - 기프티콘 중복 지급 가능성이 높아짐<br>
    - 트래픽에 따라 DB나 외부 API 폭주로 실패할 가능성이 높아짐<br>
    <br>
    <br>
    <p><strong>전체 구조는 비동기 시스템이고, 그 안에서 분산 전송으로 성능을 높임.</strong></p>
    <br>
    <h3>MQ 처리 흐름 예시</h3>
    <ol>
        <li>Producer가 MQ에 메시지를 보냄 → 즉시 반환됨(비동기)</li>
        <li>MQ는 해당 메시지를 큐에 쌓음</li>
        <li>Consumer A, B, C 중 하나가 메시지를 꺼내 처리 → 동시에 여러 Consumer가 처리 (분산)</li>
    </ol>
    <br>
    <h3>설문 이벤트 처리 흐름 예시</h3>
    <ol>
        <li>클라이언트가 설문 제출</li>
        <li>응답 200 반환 + 메시지 큐에 응모 데이터 적재</li>
        <li>Consumer가 큐의 메시지를 꺼내 다음 작업 처리
        <ul>
            <li>Reids 재고 차감</li>
            <li>전화번호 조회(리플리케이션 DB 활용)</li>
            <li>기프티콘 발송(SMS/알림톡)</li>
        </ul>
        </li>
    </ol>
    <br>
    <h3>메시지 큐를 이용한 비동기 처리의 특징</h3>
    <ul>
        <li>비동기성: 클라이언트 응답과 백엔드 처리를 분리<br>(= 비동기 메시지를 사용해 다른 응용프로그램 사이에 데이터를 송수신)</li>
        <li>확장성: Consumer 인스턴스 수평 확장 가능<br>(= Consumer 인스턴스 여러 개 띄우기), 시스템을 기능 단위로 분리하고 독립적으로 확장할 수 있어, 모듈 구성과 유지보수가 용이함.</li>
        <li>신뢰성: 실패 시 재처리, 디스크 기반 저장</li>
        <li>관심사의 분리: 각 역할을 독립 모듈로 관리 가능</li>
        <li>트래픽 완화: 처리 속도와 관계없이 요청을 큐에 누적</li>
    </ul>
    <br>
    <br>
    <h2>🚨 비동기 메시지 처리 문제점</h2>
    <h3>1. 메시지 유실 위험</h3>
    <ul>
        <li>메시지가 큐에 들어가기 전에 서버가 죽으면 데이터 손실</li>
        <li>MQ 자체에 장애가 났을때, 영속성 설정이 없으면 메시지 사라질 수 있음</li>
    </ul>
    <br>
    <p><strong>해결 방법</strong></p>
    <ol>
        <li>Persistent 설정
        <ul>
            <li>메시지를 디스크에 저장(persistent) 하겠다고 설정</li>
        </ul>
        </li>
        <li>Acknowledgement(Ack)
        <ul>
            <li>Consumer가 메시지를 정상적으로 처리했다는 응답을 MQ에 보내야 메시지가 삭제됨</li>
            <li>Ack 응답이 없으면 MQ는 처리 안 되었다고 생각하고 다시 전송</li>
        </ul>
        </li>
        <li>디스크 저장 기반 MQ 사용
        <ul>
            <li>Redis 같은 인메모리 큐는 메시지를 메모리에만 저장하므로 유실 위험이 큼.</li>
            <li>Kafka, RabbitMQ는 메시지를 디스크에 저장하는 기능이 기본으로 있음</li>
            <li>=&gt; 장애가 나더라도 하드 디스크에 남아 있는 메시지를 다시 꺼내서 처리 가능</li>
        </ul>
        </li>
    </ol>
    <br>
    <h3>2. 중복 처리(Duplication)</h3>
    <ul>
        <li>메시지를 한 번 처리했는데, Consumer가 ack 응답을 못 보냈을 경우 → MQ는 다시 전송</li>
        <li>그 결과 같은 작업이 두 번 실행될 수 있음</li>
    </ul>
    <p><strong>해결 방법</strong></p>
    Idempotent 처리(중복을 허용하지 않는 로직) 설계<br>
    <ul></ul>
        <li>메시지마다 message_id 또는 uuid 부여</li>
        <li>DB나 Redis에 message_id 처리 여부 기록</li>
        <li>같은 ID가 이미 처리된 경우 무시</li>
    </ul>
    <br>
    <h3>3. 처리 순서 보장 어려움</h3>
    <ul>
        <li>MQ는 메시지를 빠르게 처리하기 위해 여러 Consumer에게 메시지를 분산 전송</li>
        <li>이때 네트워크 지연, 처리 속도 차이로 인해 메시지가 도착하거나 처리되는 순서가 달라질 수 있음</li>
    </ul>
    <p><strong>해결 방법</strong></p>
    <ol>
        <li>Kafka 파티션 단위 처리
        <ul>
            <li>메시지를 보낼 때 특정 기준으로(ex: user_id, order_id) 같은 파티션으로 보내도록 설정</li>
            <li>동일한 사용자, 주문 ID 별로 순서가 보장된 채 처리됨</li>
            <li>Kafka는 메시지를 토픽(topic) 안의 여러 파티션에 나눠 저장함.</li>
            <li>같은 파티션 안에서는 메시지 순서가 보장됨(FIFO)</li>
            <li>메시지 순서를 보장하고 싶은 기준(ex: 사용자, 주문 등) 단위로 컨트롤 가능</li>
        </ul>
        </li>
        <li>큐를 분리해서 순서 보장
        <ul>
            <li>순서가 중요한 작업과 그렇지 않은 작업을 나눠서 처리</li>
            <li>=&gt; 순서가 중요한 메시지만 따로 큐를 만들어서 순차 처리</li>
            <li>순서 보장 + 중요하지 않은 작업은 병렬로 빠르게 처리 가능</li>
            <li>또는 고객/주문 단위로 개별 큐를 운용</li>
        </ul>
        </li>
    </ol>
    <br>
    <h3>4. 오류 추적 및 디버깅 어려움</h3>
    <ul>
        <li>처리 흐름이 비동기 + 분산되어 있어 문제 발생 시 흐름 추적 어려움</li>
        <li>Producer(메시지를 만드는 쪽 ex: 사용자의 설문 응답을 MQ에 넣는 서버), MQ(메시지를 받아 저장하고 전달하는 중간 시스템), Consumer(메시지를 받아서 실제 처리 담당 ex: 재고 차감, 기프티콘 발송 등)가 각각 로그를 남기므로 디버깅 어려움</li>
    </ul>
    <p><strong>해결 방법</strong></p>
    <ol>
        <li>추적 ID(Correlation ID)
        <ul>
            <li>하나의 요청 흐름을 추적할 수 있도록 공통된 ID를 부여</li>
        </ul>
        </li>
        <li>분산 트레이싱 도구(Jaeger, Zipkin 등)
        <ul>
            <li>요청 흐름이 여러 시스템을 거칠 때, 그 경로를 시각적으로 추적할 수 있는 트레이싱 시스템</li>
        </ul>
        </li>
    </ol>
    <br>
    <h3>5. 복잡도 증가</h3>
    <ul>
        <li>큐 설정, 메시지 포맷, 에러 처리 로직 등 시스템이 복잡해짐</li>
        <li>운영자가 큐를 실수로 삭제하거나, 메세지의 구조를 Producer와 Consumer가 제대로 맞추지 않으면 문제가 생기고, 장애가 더 커질 수 있음</li>
    </ul>
    <p><strong>해결 방법</strong></p>
    <ul>
        <li>1. 표준화된 메시지 스키마 정의 및 검증(ex: JSON Schema, Avro 등)</li>
        <li>2. 큐 운영 모니터링 시스템 구축(ex: RabbitMQ UI, Kafka Manager, Grafana 등)</li>
    </ul>
    <br>
    <h3>6. 트랜잭션 일관성 어려움</h3>
    <ul>
        <li>DB 저장과 MQ 전송을 한 번에 묶는 분산 트랜잭션이 어려움</li>
        <li>둘 중 하나만 성공하면 데이터 정합성 깨짐</li>
    </ul>
    <p><strong>해결 방법: Outbox 패턴, 이중확인 로직, 보상 트랜잭션</strong></p>
    <br>
    <h4>1. Outbox 패턴</h4>
    DB에 메시지를 같이 저장하고, 나중에 큐로 전송하는 방식<br><br>
    <ul>
        <li>트랜잭션 안에서 응답 데이터 저장, Outbox 테이블에 메시지도 함께 저장</li>
        <li>별도 프로세스(이벤트 퍼블리셔)가 Outbox 테이블을 읽어서 MQ로 전송</li>
        <li>전송 완료된 메시지는 Outbox에서 삭제하거나 상태 변경</li>
        <br>
        <li>장점: DB 저장과 메시지 저장이 하나의 트랜잭션으로 묶임 → 정합성 보장 + 유실 방지</li>
    </ul>
    <br>
    <h4>2. 이중확인 로직</h4>
    DB 저장과 MQ 전송이 따로라면, 한 쪽이 실패했을 때 다시 확인해서 재처리<br><br>
    <ul>
        <li>DB 저장 성공 & MQ 전송 실패: 배치나 백그라운드 워커가 미전송 데이터 재전송</li>
        <li>DB 저장 실패 & MQ 전송 성공: 메시지에 포함된 ID로 DB 저장 여부 재확인 → 실패 시 롤백 또는 보상</li>
    </ul>
    <br>
    <h4>3. 보상 트랜잭션</h4>
    <ul>
        <li>한 쪽만 성공해서 정합성이 깨졌다면, 후속 작업으로 실패 이전 상태로 되돌리자</li>
        <li>ex) 상품 주문 메시지는 전송 되었지만 결제 실패 등의 이유로 DB 저장 실패 시, 이미 감소된 재고를 다시 복원</li>
    </ul>
    <br>
    <details>
    <summary><h3>AMQP (Advanced Message Queuing Protocol)</h3></summary>
    <p><strong>서로 다른 시스템 간 메시지를 주고받기 위한 메시징 프로토콜 표준</strong><br>
    HTTP가 웹 통신의 표준이라면, AMQP는 MQ 통신의 표준</p>
    <br>
    * 이름에 Advanced가 붙은 이유는?<br>
    기존에는 MQ 시스템이 회사마다 제각각이었는데,<br>
    AMQP는 누구나 사용할 수 있는 공개된 메시징 규칙을 만들고, 고급 기능까지 표준으로 정의했기 때문에<br>
    <br>
    <h3>AMQP의 특징</h3>
    <ol>
        <li><strong>브로커/클라이언트 간 일관된 동작</strong><br>
        메시지를 송신(Producer)하거나 수신(Consumer)하는 방식을 표준화<br>
        어떤 AMQP 브로커를 사용하든 동일한 방식으로 통신 가능<br>
        - 브로커: 메시지 큐 시스템 (ex: RabbitMQ, ActiveMQ)<br>
        - 클라이언트: AMQP를 사용하는 어플리케이션 또는 시스템<br><br>
        </li>
        <li><strong>네트워크 명령어 표준화</strong><br>
        메시지 송수신 시 사용하는 명령어와 데이터(패킷) 구조를 사전에 정의<br>
        브로커와 클라이언트 간의 정확한 메시지 해석 보장<br><br>
        </li>
        <li><strong>언어 독립성</strong><br>
        AMQP는 네트워크 프로토콜이므로 특정 언어에 종속되지 않음<br>
        어떤 언어로도 AMQP 클라이언트를 구현할 수 있고 호환성 확보<br>
        </li>
    </ol>
    <br>
    <h3>🐰 RabbitMQ가 가장 널리 사용되는 이유</h3>
    <strong>1. 가볍고 설치/운영이 쉽다.</strong><br>
    설치와 설정이 간단하고, 운영도 직관적이어서 초보자도 빠르게 사용할 수 있다.<br><br>
    <strong>2. 기능이 풍부하면서도 유연하다.</strong><br>
    다양한 Exchange 타입(Direct, Fanout, Topic, Headers)을 지원해 라우팅 유연성이 높다.<br>
    또한 메시지 우선순위, 지연 큐(Delay Queue), TTL, Dead Letter Queue 등 고급 기능도 제공한다.<br><br>
    <strong>3. 클러스터링과 플러그인 지원 (확장성과 실무 유연성)</strong><br>
    - 고가용성을 위한 클러스터 구성이 가능해 장애에 대비할 수 있다.<br>
    - Prometheus, MQTT, STOMP, Shovel 등 다양한 플러그인을 통해 모니터링, 외부 시스템 연동, 프로토콜 확장 등이 가능하다.<br><br>
    엄청난 처리량(= 단위 시간당 수십만~수백만 메시지 처리)이나 실시간 분석이 필요한 경우가 아니라,<br>
    서비스 간 메시지 전달, 알림, 이벤트 처리, 작업 분산이 목적이라면 RabbitMQ는 쉽고 빠르고 충분한 선택<br><br>
    ✔ 일반적인 서비스의 비동기 처리 (작업 분산, 알림, 이벤트 전달) → <strong>RabbitMQ</strong><br>
    ✔ 실시간 로그 수집, 이벤트 스트리밍, 대용량 분석 처리 → <strong>Kafka</strong><br>
    <br>
    <h3>AMQP 라우팅 모델 구성 요소</h3>
    <table border="1" cellspacing="0" cellpadding="5">
        <thead>
        <tr>
            <th>구성 요소</th>
            <th>설명</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td><strong>Exchange</strong></td>
            <td>Publisher로부터 메시지를 받아 어떤 Queue로 보낼지 결정하는 라우터</td>
        </tr>
        <tr>
            <td><strong>Queue</strong></td>
            <td>실제 메시지를 저장하고 Consumer가 수신하는 메시지 저장소</td>
        </tr>
        <tr>
            <td><strong>Binding</strong></td>
            <td>Exchange와 Queue 사이의 연결 관계를 정의하는 라우팅 규칙</td>
        </tr>
        </tbody>
    </table>
    <p>※ 라우팅 키: 메시지를 보낼 때 Publisher가 메시지 헤더에 포함시켜 보내는 문자열<br>
    이 문자열을 기반으로 Exchange가 메시지를 어떤 Queue로 보낼지 판단함.<br>
    라우팅 키는 Exchange 타입에 따라 다르게 쓰임!<br><br>
    - Routing Key = 발신 주소<br>
    - Binding Key = 수신 조건</p>
    <br>
    <h3>AMQP의 Exchange 종류</h3>
    <table border="1" cellspacing="0" cellpadding="5">
        <thead>
        <tr>
            <th>종류</th>
            <th>설명</th>
            <th>라우팅 방식</th>
            <th>사용 예시</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td><strong>Direct</strong></td>
            <td>Routing key가 정확히 일치하는 Queue로 전달</td>
            <td>routing key == binding key</td>
            <td>주문 상태 알림, 특정 사용자 메시지</td>
        </tr>
        <tr>
            <td><strong>Fanout</strong></td>
            <td>연결된 모든 Queue로 메시지를 전달 (브로드캐스트)</td>
            <td>Routing key 무시</td>
            <td>공지사항, 로그 브로드캐스트</td>
        </tr>
        <tr>
            <td><strong>Topic</strong></td>
            <td>패턴 기반 라우팅 ('.' 구분자 사용, * / # 와일드카드)</td>
            <td>유연한 다중 대상 매칭<br>
            하나의 Queue가 여러 그룹을 유연하게 수신 가능 (카테고리 단위로 받을 수 있음)</td>
            <td>뉴스 주제, 구독 기반 피드</td>
        </tr>
        <tr>
            <td><strong>Headers</strong></td>
            <td>메시지 헤더의 key-value 조건으로 라우팅
            </td>
            <td>복잡한 조건 기반<br>(라우팅 키로는 부족하고, 조건이 더 복잡할 때)</td>
            <td>메타데이터 기반 필터링 필요 시</td>
        </tr>
        </tbody>
    </table>
    </details>

</details>

<br>

## 배포 시스템

<details>
    <summary><h3>CI/CD</h3></summary>
    <details>
        <summary><strong> CI/CD가 가져야 할 특징과 기능에 대해서 설명해주세요.<br> 본인이 전사에서 사용할 공통 CI/CD 솔루션을 만든다고 가정했을 때 어떤 기능을 넣어야 할지 각 프로세스 단위로 설명해주실 수 있을까요?</strong></summary>
        <br>
        <h3>CI/CD란?</h3>
        <ul>
            <li><strong>CI (지속적 통합)</strong>: 개발자의 코드를 메인 브랜치에 병합하고, 자동 빌드 및 테스트 실행</li>
            <li><strong>CD (지속적 배포)</strong>: 테스트 통과 후 운영 환경까지 자동 배포 (Delivery/Deployment)</li>
        </ul>
        <br>
        <h3>CI/CD 각 프로세스 단위 기능</h3>
        <h4>🔸 코드 병합 및 빌드</h4>
        <ul>
        <li>Git 기반 버전 관리</li>
        <li>커밋/머지 시 자동 빌드 트리거</li>
        <li>도커 이미지 생성</li>
        <li>빌드 버전 명명 규칙 자동화 (예: [티켓명]-[모듈명]-[yyyyMMddHHmmss])</li>
        </ul>
        <h4>🔸 테스트 자동화</h4>
        <ul>
        <li>유닛 테스트 / 통합 테스트 자동 실행</li>
        <li>테스트 실패 시 병합 차단 또는 알림</li>
        <li>결과 리포트 생성</li>
        </ul>
        <h4>🔸 배포 자동화</h4>
        <ul>
        <li>롤링 / 블루그린 / 카나리 등 다양한 배포 전략 지원</li>
        <li>환경별 배포 단계 (Dev → Stage → Prod)</li>
        <li>배포 Progress Viewer</li>
        <li>배포 Lock / Unlock 기능</li>
        </ul>
        <h4>🔸 롤백 지원</h4>
        <ul>
        <li>재빌드 없이 이전 버전으로 즉시 전환</li>
        <li>버전별 트래픽 라우팅 제어</li>
        <li>장애 발생 시 자동 Rollback 옵션</li>
        </ul>
        <h4>🔸 모니터링</h4>
        <ul>
        <li>Endpoint 헬스 체크</li>
        <li>시스템 리소스(CPU, Memory, Disk) 모니터링</li>
        <li>전체 로그 수집 및 지표 통합</li>
        <li>대시보드에서 상태 시각화</li>
        </ul>
        <h4>🔸 히스토리 기록</h4>
        <ul>
        <li>배포자 / 시간 / 버전 정보 자동 저장</li>
        <li>릴리즈 버전 태그 자동 생성</li>
        <li>변경 이력 추적 가능</li>
        </ul>
        <h4>🔸 알림</h4>
        <ul>
        <li>배포 시작/종료/결과 Slack·카카오톡·이메일 자동 발송</li>
        <li>알림을 통한 배포 상황 실시간 공유</li>
        </ul>
        <h4>🔸 중앙 관제 연동</h4>
        <ul>
        <li>배포 결과를 API 또는 로그 형태로 중앙 시스템에 기록</li>
        <li>장애 발생 시 중앙 관제 시스템에서 추적 가능</li>
        </ul>
        <h4>🔸 통계 및 시각화</h4>
        <ul>
        <li>전체 배포 현황 대시보드</li>
        <li>로그 뷰어</li>
        <li>메트릭 기반 시각화 그래프 제공</li>
        </ul>
    </details>
    <br>
    <details>
        <summary><strong>Q2. 애플리케이션의 다운타임을 최소화하기 위한 기본적인 배포 방식을 설명해주세요.</strong></summary>
        <br>
        * 다운타임: 사용자나 외부 시스템이 서비스에 접근할 수 없는 시간<br>
        <br>
        다운타임을 최소화 하려면 무중단 배포 전략이 필요함!<br>
        A. 롤링, 블루/그린, 카나리 배포에 대해 설명
    </details>
    <br>
    <details>
        <summary><strong>Q3. 서버 점검 페이지 없이 365일 24시간 내내 애플리케이션이 운영되기 위한 배포 전략이나 필요한 시스템 구성은 어떤 것이 있을까요?</strong></summary>
        <br>
        * 무중단 운영을 위한 배포 전략 및 시스템 구성을 물어보는 것!<br>
        <br>
        <ul>
            <li><strong>배포 전략</strong><br> 블루/그린 또는 카나리 방식 적용</li>
            <li><strong>트래픽 분리</strong><br> LB/Ingress 기반 헬스체크 후 안전한 전환</li>
            <li><strong>자동화 도구</strong><br> GitHub Actions, ArgoCD, Spinnaker 등</li>
            <li><strong>모니터링</strong><br> Prometheus, Grafana, ELK, CloudWatch 등 활용</li>
            <li><strong>알림 및 기록</strong><br> 배포 이력 자동 기록 + Slack 알림</li>
            <li><strong>고가용성 인프라</strong><br> Auto Scaling, Multi-AZ 구성, DB 이중화</li>
            <li><strong>중앙 통제</strong><br> 로그 및 메트릭 통합 수집, 관제 대시보드</li>
        </ul>
    </details>
    <br>
    <details>
        <summary><strong>+ 별도로 배포 시스템이 분리되어야 하는 경우</strong></summary>
        <br>
        <ul>
            <li><strong>보안이 중요한 경우:</strong> 금융 시스템, 민감한 데이터 분리 필요</li>
            <li><strong>특수 인프라:</strong> IoT, OTA 등 고유 배포 환경</li>
            <li><strong>외부 협력사:</strong> 파트너와 공동 개발 시 별도 구성 필요</li>
            <li><strong>레거시 시스템:</strong> 완전한 통합 전까지 분리 유지</li>
        </ul>
        단, 이런 경우에도 전사 인프라에 영향을 주지 않도록 <strong>격리 및 관제 연동</strong>이 필요함!
</details>
