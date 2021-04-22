//class
//선언적 방식
class A {}

console.log(new A());

//class 표현식을 변수에 할당
const B = class {};

console.log(new B());

//선언적 방식이지만 호이스팅은 일어나지 않는다.
// new C();

// class C {}

//생성자를 이용해 최초의 초기값을 객체에 넣어줄 수 있는 역할을 하게 된다.

//consturctor

class D {}
console.log(new D());

class E{
    constructor(name, age) {
        console.log('constructor',name,age);
    }
}

console.log(new E('jinny',26))
console.log(new E())



