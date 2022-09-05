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
      let cart = { products: [], totalPrice: 0 };
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
      fs.writeFile(p, JSON.stringify(cart), err => {
        console.log(err);
      });
    });
  }

  static deleteProduct(id, productPrice) {
    fs.readFile(p, (err, fileContent) => {
      if (err) { // 장바구니를 찾지 못했다면 삭제할 제품이 없으니까 그대로 리턴
        return; 
      }
      const updatedCart = { ...JSON.parse(fileContent) }; // 기존 장바구니의 모든 속성을 새로운 객체로 넣기
      const product = updatedCart.products.find(prod => prod.id === id);
      if (!product) {
        return; //제품이 없으면 그대로 리턴
      }
      const productQty = product.qty; // 수량 정보
      updatedCart.products = updatedCart.products.filter( // 모델에서 했던 것과 똑같이 반환값이 true인 요소만 유지 (삭제 아닌 것)
      prod => prod.id !== id
      );
      updatedCart.totalPrice =
        updatedCart.totalPrice - productPrice * productQty;

      fs.writeFile(p, JSON.stringify(updatedCart), err => {
        console.log(err);
      });
    });
  }

  static getCart(cb) { // 제품 정보를 받은 후 호출하는 콜백
    fs.readFile(p, (err, fileContent) => {
      const cart = JSON.parse(fileContent);
      if (err) {
        cb(null);
      } else {
        cb(cart); // 콜백에서 장바구니 전체를 반환
      }
    });
  }
};