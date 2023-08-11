/*
N장의 카드 

각각의 카드는 차례로 1부터 N까지

1번 카드가 제일 위에, N번 카드가 제일 아래

1번 카드는 버리고
2번 카드는 맨 뒤로 넣기
*/

// 시간초과
const fs = require("fs");
const input = fs
  .readFileSync("input.txt")
  .toString()
  .split(" ")
  .map((el) => Number(el));

let cards = [];

for (let i = 1; i <= input; i++) {
  cards.push(i);
}

while (true) {
  if (cards.length === 1) {
    break;
  } else {
    cards.shift();
    cards.push(cards.shift());
  }
}
console.log(cards);

/*
// 링크드 리스트 사용해야함! 

배열에서 삽입, 삭제 과정이 많아지면 
배열의 다른 요소들에 인덱스 번호를 붙이는 과정이 기하급수적으로 늘어나 
시간 복잡도가 커질 수 밖에 없다.

이를 해결하기 위해서는 연결 리스트 자료구조를 이용해야한다.

연결 리스트는 배열의 요소들에 인덱스 번호를 따로 붙이지 않고, 
각 노드들을 포인터로 연결한느 자료구조이다.
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
    }
    this.tail = newNode;
    this.length++;

    return newNode;
  }

  getHead() {
    return this.head.value;
  }

  removeHead() {
    // 연결 리스트의 헤드 노드 제거
    this.head = this.head.next;
    this.head.prev = null;
    this.length--;
  }

  getSize() {
    return this.length;
  }
}

const list = new LinkedList();

for (let i = 1; i <= input; i++) list.push(i);

for (;;) {
  // 무한 루프를 생성 (연결 리스트의 크기가 1이하가 될 때까지)
  if (list.getSize() <= 1) break;
  list.removeHead();
  list.push(list.getHead());
  list.removeHead();
}

console.log(list.getHead);
