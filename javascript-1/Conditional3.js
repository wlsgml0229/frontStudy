// 표현식 && 표현식
if(true && true) {
    console.log('두개 모두 참')
}
if(false && true) {
    console.log('한개만 참이면 거짓 ')
}
if(false && false) {
    console.log('두개모두 거짓이면 거짓')
}
// 표현식 || 표현식
if( true || true) {
    console.log('두개모두 참이면 참')
}
if(false || true) {
    console.log('한개만 참이면 참')
}
if(false || false) {
    console.log('두개 모두 참')
}
// !표현식

if(!true) {
    console.log('참이면 거짓');
}
if(!false) {
    console.log('거짓이면 참');
}


//&&
// 둘다 참일때만 참이다.
//표현식은 앞에 먼저 평가 후 , 뒤 평가
// 앞 표현식을 평가를 해서 참 일때만, 뒤 표현식을 평가할 필요가 생기기 때문에 뒤의 표현식이 실행된다.

let n = 5;

n % 5 === 0 && console.log('5로 나누어 떨어질 때만 실행')


//앞표현식의 평가 결과가 거짓일 때는 뒤 표현식이 실행 되지 않는다.

n = 6;

n % 5 === 0 && console.log('5로 나누어 떨어질 때만 실행')


//표현식 || 표현식
//둘 중에 하나만 참이면 참이다.
// 앞 표현식을 평가해서 참이면, 뒤표현식을 평가할 필요가 없어짐

n = 5;

n % 5 === 0 || console.log('5로 나누어질 때는 실행 되지 않음')

//앞 표현식을 평가를 해서 거짓일때만, 뒤 표현식을 평가할 필요가 생기기 때문에 뒤의 표현식이 실행된다.

n  = 6;
n % 5 === 0 || console.log('5로 나누어 떨어지지 않을때만 실행')



