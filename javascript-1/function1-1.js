hello1();
// hello2();
hello3();

//선언적 방식과 익명함수를 사용하는 방식의 차이점은
//선언적방식은 function이 어디에 있든지 호출이 가능
function hello1() {
    console.log('hello');
}

var hello2 = function() {
    console.log('hello2');
}

const hello3 = function() {
    console.log('hello3');
}
