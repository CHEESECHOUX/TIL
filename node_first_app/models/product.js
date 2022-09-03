const fs = require('fs'); 
const path = require('path');

const p = path.join( 
  path.dirname(process.mainModule.filename), 
  'data', 
  'products.json'
);

const getProductsFormFile = (cb) => {
  fs.readFile(p, (err, fileContent) => { 
    if (err) { 
      cb([]);
    } else {
    cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    getProductsFromFile(products => {
      if (this.id) {
        const existingProductIndex = products.findIndex(
          prod => prod.id === this.id
        );
        const updatedProducts = [...products];
        updatedProducts[existingProductIndex] = this;
        fs.writeFile(p, JSON.stringify(updatedProducts), err => {
          console.log(err);
        });
      } else {
        this.id = Math.random().toString(); // product id 만들어주기 (위에 export할 때 만들어줘도 되고 save 할 때 만들어줘도 됨)
        products.push(this);
        fs.writeFile(p, JSON.stringify(products), err => {
          console.log(err);
        });
      }
    });
  }

  static fetchAll(cb) {
    getProductsFormFile(cb);
  }

  static findById(id, cb) { // 제품 검색을 마치면 실행할 콜백
    getProductsFormFile(products => { // 모든 제품을 가져와 파일 전체를 읽고, 
      const product = products.find(p => p.id === id); // 원하는 id를 가진 제품 하나를 필터 
      cb(product);                                     // find 메서드로 product 검색. 전달하는 함수값이 true에 해당하는 원소를 회신. (짧은 화살표 구문)
    });                                                // 현재보고있는 product id가 인수로 받은 id와 같은지 확인 
  }
};