// const products = []; // 배열이 아닌 파일에 저장하기 위해 삭제
const fs = require('fs'); 
const path = require('path'); // 모든 운영체제에서 작동하는 경로 구축

module.exports = class Product {
  constructor(t) {
      this.title = t;
  }

  save() { // 메서드
  // products.push(this); // push해서 배열에 집어넣음 // 배열이 필요 없으므로 삭제
  const p = path.join(
    path.dirname(process.mainModule.filename), 
    'data', 
    'products.json'
  );
  fs.readFile(p, (err, fileContent) => { // 기존 제품 배열을 가져와야 새 제품을 저장할 수 있음
    let products = []; // 저장된게 아무것도 없으면 빈배열 출력
    if (!err) { // 저장된게 있으면 추출한 파일로부터 제품을 출력해라
      products = JSON.parse(fileContent); // parse: json을 받아 자스 배열, 객체, 파일에 있는 내용을 주는 메서드
    }
    products.push(this); // 새로운 제품 푸시
    fs.writeFile(p, JSON.stringify(products), (err) => { // 파일에 작성 // stringify: 자스 객체나 배열을 json으로 변환시키는 메서드
      console.log(err);
    }); 
  }); 
}

  static fetchAll(cb) { // 모든 제품 메서드 // callback 인수 포함: fetchAll에 함수를 전달할 수 있게 되고 함수가 끝난 뒤 fetchAll이 함수를 실행해 반환하려는 데이터의 호출을 인식
    const p = path.join( // cb인수는 fetchAll에 전달할 컨트롤러의 products
      path.dirname(process.mainModule.filename), 
      'data', 
      'products.json'
    );
    fs.readFile(p, (err, fileContent) => { // 데이터를 저장소에서 가져오기
      if (err) { // 제품이 없어서 에러가 발생했다면
        return cb([]); // 공백 배열 반환 콜백
      }
      cb(JSON.parse(fileContent)); // fetchAll을 호출하는 컨트롤러로 이동 // 텍스트를 배열로 파싱된 형태로 반환해 전달하는 콜백
      console.log(JSON.parse(undefined));
    });
  }
};