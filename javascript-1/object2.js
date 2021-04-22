//new Object

const a = new Object();

console.log(a, typeof a);

<<<<<<< Updated upstream

//불린타입의 오브젝트형이 나옴
=======
>>>>>>> Stashed changes
const b = new Object(true);

console.log(b, typeof b);

<<<<<<< Updated upstream

//리터럴 : 문자 자체로 작성한 객체
const c = new Object({'name':'jinny' , 'age':'26'});
console.log(c, typeof c)


//오브젝트: 기초가 되는 객체
//프로토타입으로 모든 객체를 연결해서 사용가능 한데 -> 프로토타입 체인 이라고 한다

//prototype

function Person(name,age){
    this.name = name;
    this.age = age;
    this.hello = function() {
        console.log('hello', this.name, this.age)
    }
}

Person.prototype.hello = function() {
    console.log('hello',this.name,this.age)
}

//인자로 이름과 나이 넣어줌
const p = new Person('Mark',37);
//p.hello() 로 객체의 함수를 실행시킴
p.hello();

//p.toString() 은 어디에도 작성하지 않았음 [object Object] 라고 출력
console.log(p.toString());

console.log(Person.prototype);
console.log(Person.prototype.toString);
console.log(Person.prototype.constructor);
console.log(Person.prototype.hello);

console.log(Object.prototype);
console.log(Object.prototype.toString);
console.log(Object.prototype.constructor);

//p는 Person으로 부터 나온 오브젝트이냐
console.log(p instanceof Person);
console.log(p instanceof Object);







 
=======
const c = new Object({name:'Mark'});

console.log(c, typeof c);
//리터럴 문자 자체로 생성한 객체 

//Object는 기초가 되는 객체 
//ProtoType

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.hello = function() {
        console.log('hello', this.name, this.age);
    };
}

const p = new Person('Mark',37);
p.hello();
p.toString(p.toString());

>>>>>>> Stashed changes

