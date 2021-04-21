//prototype 상속

function Person() {}
    Person.prototype.hello = function() {
        console.log('hello');
    }

    function Korean(region) {
        this.region = region
        this.where = function () {
            console.log('where', this.region)
        }
    }

    //Korean의 프로토타입을 Person의 프로토타입으로 변경
    
    Korean.prototype = Person.prototype;
    const k = new Korean('Seoul');

    k.hello();
    k.where();

    //모두 true가 나옴 
    //가까운곳에 있는것은 korean, 프로토타입 체인은 person이 tostring등 다양한것은 object에 존재
console.log(k instanceof Korean)
console.log(k instanceof Person)
console.log(k instanceof Object)

//객체 리터럴
//객체를 만들떄 마치 값으로  객체를 직접 써서 만든것 

const a = {}
console.log(a, typeof a);

const b = {
    name: 'Mark',
}
console.log(b, typeof b)

const c = {
    name: 'Mark',
    hello1(){
        console.log('hello1', this)
    },
    hello2: function() {
        console.log('hello2',this)
    },
    hello3 : () =>{
        console.log('hello3',this)
    }
}


