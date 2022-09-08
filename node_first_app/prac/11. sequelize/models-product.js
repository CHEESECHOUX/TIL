const Sequelize = require('sequelize');

const sequelize = require('../util/database'); // util의 database.js 두 가지 불러오기

const Product = sequelize.define('product', { // 모델 이름
  id: {                                       // 테이블 속성, 필드
    type: Sequelize.INTEGER,
    autoIncrement: true, // 자동으로 커지게
    allowNull: false,
    primaryKey: true
  },
  title: Sequelize.STRING,
  price: {
    type: Sequelize.DOUBLE,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Product; // 위에 정의한 Product 상수를 여기서 내보내기 하는 것 