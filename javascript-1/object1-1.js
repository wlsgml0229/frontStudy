//값을 속성으로 넣기
//생성자 함수 사용

function A(){
    this.name = 'Mark';
}

const a = new A(); //{name: 'Mark'}
console.log(a);

//함수를 속성으로 넣기

function B() {
    this.hello = function() {
        console.log('hello');
    }
}

new B().hello();

//new Function()
//표준내장객체 의해 만들어진 새로운 객체



