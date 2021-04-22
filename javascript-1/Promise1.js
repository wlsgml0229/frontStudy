/*
ES6부터 자바스크립트의 표준내장 객체로 추가 되었다.
ES6를 지원하는 브라우저나 Node.js 에서 전역에 있는 promise를 확인할 수 있다.
*/

//node.js환경에서 전역객체로 들어와 있다.

console.log(Promise)

/*
생성자를 통해서 프로미스 객체를 만들 수 있다
생성자의 인자로 excutor라는 함수를 사용한다.
*/

new Promise(/*excutor라는*/)

/*
excutor 함수는 resolve 와 reject 를 인자로 가진다.
  (resolve, reject) => {...}
  resolve 와 reject는 함수입니다.
  resolve(), reject()
*/

new Promise(/* */(resolve, reject) =>{})

/*
생성자를 통해서 프로미스 객체를 만드는 순간 pending(대기) 상태이다.
*/

new Promise((resolve,reject) => {})  //pending

/*
excutor 함수 인자 중 하나인 resolve 함수를 실행하면 , fulfilled(이행) 상태가 된다.
*/

new Promise((resolve, reject) => {
    //
    //...
    resolve(); //fulfilled
})

// excutor 함수 인자 중 하나인 reject 함수를 실행하면, rejected(거부) 상태가 된다.
 
new Promise((resolve, reject)=>{
    reject();
})

// p라는 프로미스 객체는 1000ms 후에 fulfilled된다

new Promise((resolve,reject) => {
    /*pending */
    setTimeout(()=>{
        resolve(); /* fulfilled 상태로 넘어감 */
    },1000)
});


// p라는 프로미스 객체가 fulfilled 되는 시점에 p.then 안에 설정한 callback 함수가 실행된다

const p = new Promise((resolve,reject) => {
    /*pending */
    setTimeout(()=>{
        resolve(); /* fulfilled 상태로 넘어감 */
    },1000)
});

//1초후에 실행됨
p.then(/*콜백이 실행되는 곳*/)