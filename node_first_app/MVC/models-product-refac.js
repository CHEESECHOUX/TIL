const fs = require('fs'); 
const path = require('path');

const p = path.join( 
  path.dirname(process.mainModule.filename), 
  'data', 
  'products.json'
);

const getProductsFormFile = (cb) => { // 여기서 cb을 실행하고 회신
  fs.readFile(p, (err, fileContent) => { 
    if (err) { 
      cb([]); // 여기서 콜백을 실행하고 최종적으로 이를 실행하기 때문에
    } else {
    cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(t) {
      this.title = t;
  }

  save() {
    getProductsFormFile(products => { // getProductsFromFile에 인수로 전달할 함수 // 여기는 자체 논리가 있으므로 콜백을 포워딩 하지는 않음
      products.push(this); // this가 문맥을 잃지 않고 클래스와 클래스에 기반한 객체를 가리키도록 화살표함수 사용
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }
    // const p = path.join(   // getProductsFormFile 호출 했으니까 삭제
  //   path.dirname(process.mainModule.filename), 
  //   'data', 
  //   'products.json'
  // );
      
  // fs.readFile(p, (err, fileContent) => { 
  //   let products = []; 
    // if (!err) { 
    //   products = JSON.parse(fileContent);
    // }
    // products.push(this); // getProductsFormFile 로 올려줌
    // fs.writeFile(p, JSON.stringify(products), (err) => {
    //   console.log(err);
    // }); 
  // }); 

  static fetchAll(cb) { 
    // const p = path.join( // getProductsFormFile // 상단에 getProductsFormFile를 만들어 줬기 때문에 삭제
    //   path.dirname(process.mainModule.filename), 
    //   'data', 
    //   'products.json'
    // );
    // fs.readFile(p, (err, fileContent) => { 
    //   if (err) { 
    //     cb([]);
    //   }
    //   cb(JSON.parse(fileContent));
    //   console.log(JSON.parse(undefined));
    // });
    getProductsFormFile(cb);
  }
};