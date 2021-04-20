//블럭
{
    //
    const name = 'Mark';
    console.log(name);
}
//블럭밖에서는 정의되지않았다고 판단하고 에러발생
console.log(name);

//밖에서 안으로
let age = 37;
{
    //블럭밖에서 선언해도 안으로 가져갈수는 있어서 안에서 출력이 가능
    age++;
    console.log(age);
}
console.log(age);

//중첩
{
    {
        {
            console.log(age);
        }
    }
}

//조건문과 반복문 모두 안에있는 블록에서는 변수를 알수 있지만

//조건문
if(true) {
    let age = 37;
    console.log(age);
}

//반복문
for(let i =0; i<5; i++) {
    const message = 'hello' + i;
    console.log(message);
}

// 블록밖에서는 변수를 알수 없음
//console.log(message)

//함수
function hello() {
    const name = 'Mark';
    console.log(name);
}

//자바스크립트에서는 특이하게 함수의 스코프를 가지고 있는게 있는데 var이다
//var의 유효 범위 - 함수스코프를 가짐
var a = 0;



(function() {
    a++;
    console.log(a);
})();

console.log(a);

(function(){
    var b = 0;
    console.log(b);
})();

//b++; //b is not defind 에러 
//console.log(b);


var c = 0;
{
    //let이나 const키워드 사용해도 상관없는 예제 
    c++
    console.log(c);
}

{
    var d = 0;
    console.log(d);
}

//var라는 키워드를 사용하면 어색한동작이 될 수 있음
//let, const 사용하는게 좋다
console.log(d);





