const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

// rootDir로 수정하기 전
// router.get('/', (req, res, next) => {
//   res.sendFile(path.join(__dirname, '../', 'views', 'shop.html')); 
// });
// path모듈의 join메서드를 호출해 생성한 경로로 파일을 보낸다
// __dirname 운영체제의 절대 경로를 이 프로젝트 폴더로 고정해주는 전역 변수. 리눅스 윈도우 모두 작동
// __dirname은 자신이 사용된 폴더를 나타내기 때문에, 실제로 routes 폴더를 나타냄. 

module.exports = router;