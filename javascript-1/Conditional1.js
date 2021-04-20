/*
if(표현식) {
    표현식이 참으로 평가 될 때 실행되는 문장들의 모음
}

*/

if(true) {
    console.log('항상실행')
}

if(false) {
    console.log('항상 실행 되지 않음')
}

//블록에 코드가 한줄이면 , 중괄호 {} 는 생략가능
if(true) console.log('항상실행')

if(false) console.log('항상 실행 되지 않음')

//표현식이 거짓으로 평가될 때
//boolean자료형이 아니지만 True혹은 False로 자료형이 평가되는데
// Falsy : false,0,'',null,undefined,Nan 등이 해당한다

if (false) console.log(false);
if (0) console.log(false);
if ('') console.log('');
if (null) console.log(null);
if (undefined) console.log(undefined);
if (NaN) console.log(NaN);


//표현식이 참으로 평가될때
//Truethy : Falsy의 반대 : true, 37 , 'Mark', {}, []

if (true) console.log(true);
if (37) console.log(37);
if (-37) console.log(-37);
if ('Mark') console.log('Mark');
if ({}) console.log({});
if ([]) console.log([]);

//else{}: if에 해당하지 않을 때
let n = -22;

if (n > 0){
    console.log('n이 0보다 큰 경우');
} else {
    console.log('n이 0 보다 크지 않은 경우')
}

n=3;

//블록안 문장이 하나일 경우 , 중괄호 없이 사용가능
if (n>0) console.log('n이 0보다 큰 경우');
else  console.log('n이 0 보다 크지 않은 경우')
