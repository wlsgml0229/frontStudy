//생성자 함수

//A라는 함수생성
function A() {}

//new A를통해 객체가 만들어져서 객체가 a라는 변수에 할당이 된다.
const a = new A();
console.log(a, typeof a)
//
console.log(A()); 

//생성하면서 데이터 넣기
function B(name, age) {
    console.log(name,age);
}

const b = new B(); //undefined undefined
const c = new B('Mark',22); // Mark 22
console.log(B()); //undefined undefined
                  //undefined : console.log(name,age)에서 또 undefined이기 때문


