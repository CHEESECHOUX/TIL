const fs = require('fs');
const path = require('path');

const p = path.join( // 경로 구축
  path.dirname(process.mainModule.filename), 
  'data', 
  'cart.json'
);

// constructor가 아닌 static. 계속 다시 생성할 객체가 아닌, 애플리케이션 내에 하나의 장바구니이기 때문에 
module.exports = class Cart { 
  static addProduct(id, productPrice) { // 추가하길 원하는 제품의 id // totalPrice 하기위해 productPrice 불러옴
    // 기존 또는 이전 cart를 파일에서 불러온 다음
    fs.readFile(p, (err, fileContent) => {
      let cart = { product: [], totalPrice: 0 };
      if (!err) {
        cart = JSON.parse(fileContent);
      }
    // 이를 분석해서 해당 제품이 이미 있는지 확인 => 기존 제품을 찾고
      const existingProductIndex = cart.products.findIndex(
        prod => prod.id === id  // 추가하려는 id와 같은지
      );
      const existingProduct = cart.products[existingProductIndex];
      let updatedProduct; 
      // 새로운 제품을 추가하거나 수량을 증가
      if (existingProduct) { // 기존 제품이 있다면 수량 증가
        updatedProduct = { ...existingProduct }; // existingProduct 속성을 그대로 가져오기
        updatedProduct.qty = updatedProduct.qty + 1;
        cart.products = [...cart.products];
        cart.products[existingProductIndex] = updatedProduct;
      } else {
        updatedProduct = { id: id, qty: 1 };
        cart.products = [...cart.products, updatedProduct];
      }
      cart.totalPrice = cart.totalPrice + +productPrice;
      fs.writeFile(p, JSON.stringify(cart), (err) => {
        console.log(err);
      });
    });
  }
};