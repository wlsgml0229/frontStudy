/*
value가 프로미스 객체인지 아닌지 알 수 없는 경우, 사용하면 연결된 then 메소드를  실행한다.
value가 프로미스 객체면, resolve된  then메소드를 실행한다.
value가 프로미스 객체가 아니면, value를 인자로 보내면서 then메소드를 실행한다.
*/

//Promise라는 전역객체의 안에 있는 resolve라는 함수를 실행하면서 promise를 생성
// Promise.resolve(/*value*/);

// Promise.resolve(new Promise((resolve,reject) => {
//     setTimeout(()=> {
//         resolve('foo');
//     },1000);
// })).then((data)=>{
//     console.log('프로미스 객체인 경우, resolve된 결과를 받아 then이 실행된다.',data)
// })

// Promise.resolve('bar').then(data => {
//     console.log('then메서드가 없는 경우, fullfilled됩니다.',data)
// })

/**
 * promise.reject를 사용하면, catch로 연결된 rejected상태로 변경된다.
 * 
 */

// Promise.reject(/* value */);

// Promise.reject(new Error('reason')).then(error => {})
// .catch(error =>{
//     console.log(error);
// })

/**
 * 프로미스 객체 여러개를 생성하여,
 * 배열로 만들어 인자로 넣고 Promise.all 을 실행하면,
 * 배열의 모든 프로미스 객체들이 fulfilled 되었을때, then 의 함수가 실행됩니다.
 * then의 함수의 인자로 프로미스 객체들의 resolve 인자값을 배열로 돌려준다.
 */

// Promise.all([프로미스 객체들]);

function p(ms){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(ms);
        },ms);
    })
}

//3초후에 실행 됨 
//비동기 작업을 여러개 시작해서 다 끝난후에 처리해야될게 있다면 사용하기에 유용
Promise.all([p(1000),p(2000),p(3000)]).then((messages)=> {
    console.log('모두 fullfilled된 이후에 실행된다.',messages)
})

