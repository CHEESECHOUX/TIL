// 변수
type Name = string | number;

let 이름1 :Name = 123;
let 이름2: string | number = 'jisoo';

let 친구1: string[] = ['jisoo', 'susie'];

let 친구2: { name?: string } = { name: 'jisoo'};


// 함수
function 함수(x: number): number {
  return x * 2
}


// array 에 사용할 수 있는 tuple 타입
type Member = [number, boolean];
let john: Member = [123, true]


// object 에 타입 지정해야 할 속성이 많은 경우
type Member2 = {
  [key: string]: string
}
let jisoo: Member2 = { name: 'choi', age: '123'}


// class
class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}