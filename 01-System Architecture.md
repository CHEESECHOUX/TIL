## 시스템 아키텍처

<details>
  <summary><h3>3계층 구조 (3-Tier Architecture)</h3></summary>
  <ul>
    <li><strong>3계층 구조란?</strong></li>
    플랫폼을 세 가지 계층으로 나누어 논리적 또는 물리적으로 분리하여 구축 및 운영하는 아키텍처
    <br><br>
    예를 들어 웹 서비스를 운영할 때, 서버 한 대에 모든 기능을 통합하는 대신<br> 
    <strong>데이터 계층, 애플리케이션 계층, 프레젠테이션 계층</strong><br>
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
<br><br>

## ✔️ Tech-Interview

<details>
  <summary><h3>웹 환경 아키텍처</h3></summary>
  <ul>
    <li>
        <p><strong>Q1. 다양한 클라이언트 디바이스(웹, 모바일, 태블릿)에서 서버를 호출할 때, 일반적인 3-Tier 환경에서 동작하는 전반적인 프로세스를 설명해주세요.</strong></p>
        <p>A. 
            사용자는 프레젠테이션 계층(웹 브라우저, 모바일 앱 등)을 통해 요청을 보냅니다. 이 요청은 애플리케이션 계층(Web 서버, API 서버 등)으로 전달되어 비즈니스 로직이 처리되고, 필요한 경우 데이터 계층(DB 서버)에서 데이터를 읽거나 저장합니다. 처리된 결과는 다시 애플리케이션 계층을 통해 프레젠테이션 계층으로 전달되어 사용자에게 응답됩니다.
            <br>
            + DNS, L7의 역할, LB 등의 역할 추가
            + 방화벽, CDN, DB의 리플리케이션 정도 설명 추가
        </p>
    </li>
    <li>
      <p><strong>Q2. 그 중 특정 디바이스 혹은 메뉴의 트래픽이 월등히 높아 서버에 부하가 많이 걸릴 경우, 아키텍처를 어떻게 구성 또는 변경해야 할까요?</strong></p>
      <p>질문의 의도: 점진적인 구조적 개선을 고민해보았는지, 데이터 및 트래픽의 부하 분산에 대해서 알고 있는지 물어보기 위함</p>
      <p>A. 병목 지점을 파악해서 서버를 늘리거나 DB의 수행 속도를 개선해야 한다. 정도의 답변은 아쉬움.
      </p>
    </li>

  </ul>
</details>
