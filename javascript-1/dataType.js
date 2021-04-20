let whatever = 'Mark';
//문자형으로 변환

whatever = 37;
//숫자형 타입으로 변환

whatever = true;
//boolean 형으로 변환

//값에따라 타입이 달라지게됨
//변수가 가지는 고정타입이 없음


//-------------------------
//기본형 

//Boolean

//boolean타입을 가진 변수를 만드는법
const isTrue = true;
const isFalse = false;

console.log(isTrue, typeof isTrue);
console.log(isFalse, typeof isFalse);

//생성자 함수를 통해 생성 가능하지만 쓰지않는 방법임

// const a = new Boolean(false);
// console.log(a, typeof a);
//[Boolean:false] 'object'

//객체로 인식되기 때문에 a가 실행 되게 된다.
// if(a) {
//     console.log('false');
// }

// const b = Boolean(false);

// console.log(b, typeof b);

//아래 if문은 찍히지 않음
// if (b) {
//     console.log('false?')
// }

//Null
//비어있는 값
const test1 = null;
console.log(test1, typeof test1);

//Undefined
//정해지지 않은값
let test2;
console.log(test2, typeof test2);

test2 = undefined;
 
console.log(test2, typeof test2);

//값만 비교해서 true
if(test1 == test2){
    console.log(test1 == test2)
}


//타입까지 판단해 주기 때문에 false
if (test1 === test2){
    console.log(test1 === test2);
}

const a = 37;
console.log(a, typeof a);

const b = 96.7;
console.log(b, typeof b);

const c = NaN;
console.log(c, typeof c)

//Nan, number로 발생
const d = Number('Mark');
console.log(d, typeof d);

const e = Number('37');
console.log(e, typeof e);







