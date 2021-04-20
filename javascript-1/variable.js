// 5와 10을 더해서,
//3으로 나누어 나머지가 0이면 '야호3' 출력,
//5로 나누어 나머지가 0이면, '야호5' 출력

if((5+10) %3 ===0) {
    console.log('야호3')
}

if((5 + 10) % 5 === 0) {
    console.log('야호5');
}

const sum = 5 + 10;
let result = false;

if((sum) %3 ===0) {
    console.log('야호3')
    result = true;
}

if((sum) % 5 === 0) {
    console.log('야호5');
    result = true;
}

