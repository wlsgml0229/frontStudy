//생성자 함수를 이용하여 새로운 객체를 만들어 내는 방법
//인자로 받은 name,age를 객체가 프로퍼티로 가지도록 만들게 해줄 수 있다.

function Person(name,age) {
    console.log(this);
    this.name = name;
    this.age = age;
}

const p = new Person('Mark',21);

console.log(p, p.name, p.age);   

const a = new Person('jinny',26);

//두개는 서로 다른 객체임

console.log(a, a.name, a.age);

//만들 수 있는 이유는 Person이라는 함수가 this를 만들어내기 때문
//this의 역할이 객체가 만들어졌을때 객체를 가리키는 용도로 사용됨

//arrow함수는 함수안에 this가 생기지 않기 때문에 arrow함수는 새로운 객체를 만들어내는 생성자 함수로 사용할 수 없다
//생성자 함수로사용되는 함수는 모두 function키워드 사용해야함

const Cat = (name,age) => {
    console.log(this);
    this.name = name;
    this.age = age;
}

const c = new Cat('냥', 1);


