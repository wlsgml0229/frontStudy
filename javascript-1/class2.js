//멤버변수 - 객체의 프로퍼티

//이렇게 생성하면 name과 age에 값을 넣어주면 객체로 만들어지게 됨
class A {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

console.log(new A('Mark',21));

// A {name: 'Mark', age: 21}

// class field는 런타임 확인

//클래스의 field를 바로 써주는 방법 
class B {
    name;
    age;
}

console.log(new B());
//B {name: undefined, age:undefind}

class C {
    name = ''  //초기값 설정
    age = 0

    //constructor를 통해서 새로 할당된것임
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

console.log(new C('Mark',211))

//멤버 함수

class D {
    hello1() {
        console.log('hello1', this);
    }
    hello2 = () =>{
        console.log('hello2', this);
    }

}


new D().hello1();
new D().hello2();

class E{
    name = 'Mark';

    hello(){
        console.log('hello', this.name)
    }
}

new E().hello()

//함수를 만들고 함수에서 객체가 만드는자원을 가지고 로직을 만들 수 있음 



