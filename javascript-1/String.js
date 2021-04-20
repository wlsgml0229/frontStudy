//String

const a = 'Mark';
console.log(a, typeof a);

const b = 'Mark' + 'Lee';

const c = a + 'Lee';

console.log(c,typeof c);

//Template String 
const d = `${a} Lee`;

console.log(d, typeof d)

const s1 = Symbol();
const s2 = Symbol(37);
const s3 = Symbol('Mark');
const s4 = Symbol('Mark');

//고유한 값을 만들어 낼때 사용하게 됨
console.log(s1, typeof s1);
console.log(s3 === s4); //false

//생성자 함수로 사용할 수 없음 -> 에러
new Symbol();


