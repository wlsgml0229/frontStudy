// if() {} else if() {} else{}

const n = 15;

if (n % 3 === 0){
    console.log('n은 3의 배수 입니다.')
} else if (n % 5 === 0) {
    console.log('n은 5의 배수 입니다.')
}else{
    console.log('n은 3의 배수도 5의 배수도 아니다')
}
// n이 3의 배수이면서 5의 배수이면 뭐라고 출력 될까요?
if (n % 3 === 0 && n % 5 === 0){
    console.log('n은 15의 배수이다.')
}else if(n % 3 === 0){
    console.log('n은 3의 배수이다')
}
 else if (n % 5 === 0) {
    console.log('n은 5의 배수 입니다.')
}else{
    console.log('n은 3의 배수도 5의 배수도 아니다')
}

//n % 3 === 0 과 n% 5 ===0 의 값은 여러번 반복되므로, 변수나 상수에 넣는다.
const multipleOfThree = n % 3 === 0;
const multipleOfFive = n % 5 === 0;

if (multipleOfThree && multipleOfFive){
    console.log('n은 15의 배수이다.')
}else if(multipleOfThree){
    console.log('n은 3의 배수이다')
}
 else if (multipleOfFive) {
    console.log('n은 5의 배수 입니다.')
}else{
    console.log('n은 3의 배수도 5의 배수도 아니다')
}

//중첩을 이용해서 표현가능

if (multipleOfThree && multipleOfFive){
    console.log('n은 15의 배수이다.')
}else {
    if(multipleOfThree){
        console.log('n은 3의 배수이다')
    }
     else if (multipleOfFive) {
        console.log('n은 5의 배수 입니다.')
    }else{
        console.log('n은 3의 배수도 5의 배수도 아니다')
    }
}
