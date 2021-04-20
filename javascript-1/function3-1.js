//함수를 호출하면 함수를 만들어서 리턴

function plus(base) {
    return function(num) {
        return base + num;
    }
}

const plus5 = plus(5); //base로 들어감
console.log(plus5(10)); //num값으로 들어감

const plus7 = plus(7);
console.log(plus7(8));


//함수를 인자로 하여 함수를 호출

function hello(c) {
    console.log('안녕');
    c()
}

//실행할때 함수를 넣음 
//arrow함수도 가능
//hello함수가 실행되면서 안녕이 찍히고 c()가 실행되면서 콜백이 실행
hello(function(){
    console.log('콜백');
});

