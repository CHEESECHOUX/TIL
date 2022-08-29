// routes에서 rootDir
const path = require('path');

module.exports = path.dirname(process.mainModule.filename);
// dirname 경로의 디렉터리 이름을 회신
// process.mainModule.filename 우리 애플리케이션이 실행될 수 있도록 해주는 파일의 경로를 알려줌
// mainModule 애플리케이션을 시작한 주요 모듈 (app.js에서 만든 모듈)