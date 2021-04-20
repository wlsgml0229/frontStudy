//new Function(/* 인자1, 인자2, ..., 함수의바디 */);

//선언적 함수를 사용하는 방식이 아니기 때문에 위에서 선언하면안됨
const sum = new Function('a','b','c','return a + b + c');

console.log(sum(1,2,3));


//글로벌 전역변수
global.a = 0;

{
    const a = 1;
    //여기에있는 a가 전역 있는 a를 사용하게 됨
    //0
    const test = new Function('return a');

    console.log(test());

}

{
    //지역변수 사용
    //2출력
    const a = 2;
    const test = function() {
        return a;
    }
    console.log(test());
}


// arrow 함수를 만들어 이름이 arrow1 인 변수에 할당
//선언적 방식으로는 사용할 수 없고 항상 익명함수임
//함수를 만들어서 변수에 할당

const arrow1 = () => {
    console.log('arrow1');
}

//함수의 매개변수
//함수를 호출 할 때 값을 지정

//매개변수가 하나일 때, 괄호 생략 가능
const arrow2 = name => {
    console.log('hello', name);
}

const arrow3 = (name,age) =>{
    console.log('arrow3', name,age)
}

//함수의 리턴
// 함수를 실행하면 얻어지는 값

const arrow4 = name => {
    return `arrow4 ${name}`;
}

//return 키워드와 중괄호 생략가능
//다른로직이 있다면 중괄호 사용해서 정리해야함
const arrow5 = name => `hello5 ${name}`;


