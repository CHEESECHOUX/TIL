## 시스템 아키텍처

<details>
  <summary><h3>3계층 구조 (3-Tier Architecture)</h3></summary>
  <ul>
    <li><strong>3계층 구조란?</strong></li>
    플랫폼을 세 가지 계층으로 나누어 논리적 또는 물리적으로 분리하여 구축 및 운영하는 아키텍처
    <br><br>
    예를 들어 웹 서비스를 운영할 때, 서버 한 대에 모든 기능을 통합하는 대신<br> 
    <strong>데이터 계층, 애플리케이션 계층, 프레젠테이션 계층</strong><br>
    으로 분리해 각각 독립적으로 관리합니다.
    <br><br>
    3계층 외에도 2계층, 4계층 등 다양한 구조로 나눌 수 있으며, 이를 <strong>다층 구조(Multi-tier Architecture)</strong>라고 합니다.
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
