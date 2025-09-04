# 네트워크

<details>
    <summary><h3>구글 검색창에 검색어를 입력했을 때 어떤 일이 일어나나요?</h3></summary>
    <p>웹 브라우저, 네트워크, 서버, 검색 엔진 전반의 동작 원리를 종합적으로 설명할 수 있는지 확인하려는 의도</p>
    <br>
    <h3>1. 사용자 입력</h3>
    <ul>
      <li>사용자가 브라우저 검색창에 검색어를 입력</li>
      <li>브라우저는 입력이 URL인지, 검색어인지 판단 (URL: www.google.com, 검색어: 강아지)</li>
    </ul>
    <br>
    <h3>2. 요청 생성</h3>
    <ul>
      <li>검색어일 경우, 브라우저는 기본 검색 엔진(구글)에 요청을 보낼 URL을 만듦<br>
      ex) https://www.google.com/search?q=강아지
      </li>
    </ul>
    <ul>
      <li>이 URL에 대한 HTTP 요청이 생성됨</li>
    </ul>
    <br>
    <h3>3. 네트워크 계층</h3>
    <ul>
    <li>DNS 조회: www.google.com → 실제 서버 IP 주소로 변환</li>
    <li>TCP 연결 수립: 3-way handshake</li>
    <li>TLS/SSL 핸드셰이크: HTTPS 암호화 연결 수립</li>
    <li>브라우저가 보낼 준비를 마치면, HTTP 요청이 구글 서버로 전송됨</li>
    </ul>
    <br>
    <details>
    <summary><b>TCP 3-way Handshake vs TLS/SSL Handshake</b></summary>
        <h4>TCP 3-way Handshake</h4>
        <ul>
            <li>위치: 전송 계층(4계층)</li>
            <li>목적: 신뢰성 있는 연결 수립</li>
        </ul>
        <p>패킷이 유실되지 않고, 순서대로 도착하며, 양쪽이 서로 데이터를 주고받을 준비가 되어 있음을 확인</p>
        <ul>
            <li>결과: **데이터를 안전하게 주고받을 파이프라인 확보**</li>
        </ul>
        <h4>TLS/SSL Handshake</h4>
        <ul>
            <li>위치: TCP 위, 주로 세션 계층(5계층)</li>
            <li>목적: 보안 통신을 위한 암호화 세션 확립</li>
            <li>서버 인증서 검증(진짜 구글 서버 맞는지 확인)</li>
            <li>키 교환 → 대칭키(세션 키) 공유</li>
            <li>암호화 알고리즘 협상</li>
        </ul>
        <ul>
            <li>결과: **그 파이프라인 위에 자물쇠를 설치해서 도청, 변조를 막음**</li>
        </ul>
        <p>* 추가) TLS Handshake</p>
    </details>
    <br>
    <h3>4. 구글 서버 처리</h3>
    <ul>
    <li>구글의 로드밸런서가 가장 가까운 데이터센터로 트래픽을 분산</li>
    <li>검색 요청을 받은 검색 엔진 서버가 동작
        <ul>
        <li>인덱스 서버: 미리 크롤링, 저장된 웹페이지 인덱스에서 관련 문서 검색</li>
        <li>랭킹 알고리즘: 페이지랭크, 최신성, 사용자 선호, 광고 여부 등을 고려해 결과 순서 결정</li>
        <li>캐싱: 자주 검색되는 쿼리는 캐시에서 빠르게 응답</li>
        </ul>
    </li>
    </ul>
    <br>
    <h3>5. 응답 반환</h3>
    <ul>
      <li>구글 서버가 검색 결과 페이지(HTML)를 생성해 브라우저로 전송</li>
      <li>브라우저는 HTML, CSS, JS, 이미지 등을 렌더링해서 사용자가 보는 결과 화면을 그림 </li>
    </ul>
    <br>
    <h3>6. 사용자 경험</h3>
    <ul>
      <li>사용자는 검색 결과 페이지를 확인</li>
      <li>(추가로) 브라우저는 오토컴플리트, 쿠키 기반 개인화, 로컬 캐시 등을 통해 더 빠르고 맞춤화된 결과 제공</li>
    </ul>

  </details>
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
    <h3>✔️ 정적(static) 방식</h3>
    <ul>
        <li>사전에 설정된 기준에 따라 트래픽 분산</li>
        <li>서버 상태 변화 고려 X</li>
    </ul>
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
    <h4>3. IP Hash (IP 해시 기반)</h4>
    <ul>
        <li>클라이언트 IP를 해싱해 항상 같은 서버로 요청을 보냄</li>
        <li>세션 유지를 위해 사용 (ex. 로그인 유지, 장바구니 등)</li>
        <li>세션 고정(sticky session)이 필요한 서비스에서 사용</li><br>
    </ul>
    <br>
    <h3>✔️ 동적 방식</h3>
    <ul>
        <li>실시간 서버 상태(부하, 응답 시간 등)를 기준으로 분산</li>
        <li>서버 성능/상태 반영</li>
    </ul>
    <h4>1. Dynamic Weighted Round Robin (다이나믹 가중 라운드 로빈)</h4>
    <ul>
        <li>서버 응답 시간, 지연 시간 등을 기준으로 <strong>실시간 가중치 조정</strong></li><br>
    </ul>
    <h4>2. Least Connection (최소 연결 수 기반)</h4>
    <ul>
        <li>현재 연결된 클라이언트 수가 가장 적은 서버에 요청 분산</li>
        <li>요청 처리 시간이 다양한 환경에 효율적</li><br>
    </ul>
    <h4>3. Least Response Time (최소 응답 시간 기반)</h4>
    <ul>
        <li>응답 시간이 가장 빠른 서버로 요청을 분산</li><br>
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
