//while 무한루프
while(true) {
    console.log('안녕하세요');
    if ( Math.random() * 100 > 90 ) {
        break;
    }
}

do {
    console.log('do - 안녕하세요');
}while (Math.random() * 100 <= 90);

//for of 각각의 요소에 접근
for (const i of [1,2,3]){
    console.log(i);
}

//for in
//프로토타입안에 프로퍼티를 설정해놓으면 의도치 않은 test 까지 발생 
Object.prototype.test = function() {};

for(const i in {a:1 , b:2, c:3}) {
    console.log(i);
}

