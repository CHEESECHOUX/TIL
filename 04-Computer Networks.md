# 네트워크

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
