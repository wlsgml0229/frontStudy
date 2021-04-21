//객체를 만들수 있는 새로운 방법
// es6 class - 좀더 강력한 객체지향을 지원하게 되었음
//prototype방식을 좀더 명료하게 사용하도록 도와줌

//class 
//선언적방식
class A {}
console.log(new A());

//class 표현식 변수에할당
const B = class {};

console.log(new B());

//선언적 방식이지만 호이스팅은 일어나지 않는다.
// new C();

// class C {}

//객체를 만들떄도 함수를 사용하여 인자를 넣어서 객체를 만들어줄수 있는 생성자 함수가 존재하는데 클래스에서도 똑같이 기능이 존재한다
//constructor : 초기값을 최초에 넣어주는 역할

//constructor
class D {}

console.log(new D());

class E {
    constructor() {
        console.log('constructor');
    }
}

console.log(new E());

class F {
    constructor(name,age){
        console.log('con' , name, age);
    }
}

console.log(new F('Mark',21));
//생성자 함수에서 정의된 인자가 없는경우
//undefind출력 
console.log(new F ());
