//function
//이름이 hello1인 함수를 선언
//() 에는 매개변수를 넣어줌

const hello1 = function() {
    console.log('hello1');
}
// function hello1() {
//     console.log('hello1');
// } 

console.log(hello1, typeof hello1);
//[Function: hello1] function

//함수도 결국 객체중 하나이다.

//함수의 매개변수
//함수를 호출 할 때 값을 지정

const hello2 = function(name){
    console.log('hello2' , name)
}
// function hello2(name) {
//     console.log('hello2', name);
// }
hello2('namename')

//함수의 리턴
//함수를 실행하면 얻어지는 값

const hello3 = function(name) {
    return `hello3 ${name}`
}
// function hello3(name) {
//     return `hello3 ${name}`;
// }

console.log(hello3('Mark'))

