//표준 내장객체 : 객체가 이미 런타임 환경에 만들어 져 있는것 

//Arryay
const a = new Array('red','black','white');

//대괄호로 나오는 요소들, 이것도 또한 객체임
//Array의 인스턴스이자 Object의 인스턴스
console.log(a, typeof a)
console.log(a instanceof Array)
console.log(a instanceof Object)

const b = ['red','black','white']

console.log( b ,typeof b)
console.log(b instanceof Array)
console.log(b instanceof Object);

console.log(b.slice(0,1));
//오브젝트를 프로토타입으로 받아온 array가 따로 또 구현한것
console.log(Array.prototype.slice, Object.prototype.slice)

