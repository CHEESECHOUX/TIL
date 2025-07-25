# 🧠 Today I Learned (TIL)

꾸준히 CS 지식을 쌓아가는 공간<br><br>
하루하루 꾸준히 하다보면 하루, 이틀, 일주일, 백엔드!
<br><br>

## 📚 Contents

- [System Architecture](https://github.com/CHEESECHOUX/TIL/blob/main/01-System%20Architecture.md)
- [Operating System](https://github.com/CHEESECHOUX/TIL/blob/main/02-Operating%20System.md)
- [Database](https://github.com/CHEESECHOUX/TIL/blob/main/03-Database.md)

<br>

<details>
  <summary><h4>대용량 데이터 처리 개선</h4></summary>

  <h4>1. 서버(Application Layer)에서의 개선</h4>
  <p>데이터를 어떻게 효과적으로 받아서, 나누고, 흘려보낼 것인가 초점</p>
  <br>
  <strong>* 목표</strong>
  <ul>
    <li>트래픽 분산</li>
    <li>실시간 처리 성능 확보</li>
    <li>DB 접근 최소화</li>
  </ul>
  <br>
  <strong>* 기법</strong>
  <ul>
    <li>캐싱</li>
    <li>비동기 처리 / 메시지 큐</li>
    <li>스트리밍 처리</li>
    <li>배치 처리</li>
    <li>API 응답 최적화(페이징, 필드 제한)</li>
    <li>서버 로드 밸런싱</li>
  </ul>
  <br>
  <br>
  <h4>2. DB(Database Layer)에서의 처리 개선</h4>
  <p>데이터를 어떻게 저장하고, 읽고, 정리할 것인가에 초점</p>
  <br>
  <strong>* 목표</strong>
  <ul>
    <li>데이터 조회 성능 향상</li>
    <li>DB 부하 완화</li>
    <li>스케일 확장</li>
  </ul>
  <br>
  <strong>* 기법</strong>
  <ul>
    <li>인덱싱</li>
    <li>파티셔닝</li>
    <li>샤딩</li>
    <li>정규화/비정규화 조정</li>
    <li>이력 분리/아카이빙</li>
    <li>읽기/쓰기 분리 (Master-Slave 구조)</li>
  </ul>
</details>
<br>
