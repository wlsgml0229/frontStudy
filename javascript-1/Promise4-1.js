/**
 * 프로미스 객체 여러개를 생성하여,
 * 배열로만들어 인자로 넣고 Promise.race를 실행하면,
 * 배열의 모든 프로미스 객체들 중 가장먼저 fulfilled 된 것으로 ,then의 함수가 실행된다.
 * then의 함수가 인자로 가장먼저 fulfilled 된 프로미스 객체의 resolve인자 값을 돌려준다.
 */

//Promise.race([프로미스 객체들]);

function p(ms) {
 return new Promise((resolve,reject)=>{
     setTimeout(()=>{
         resolve(ms);
     },ms);
 });
}

Promise.race([p(1000),p(2000),p(3000)]).then(messages=> {
    console.log('가장빠른 하나가 fullfilled된 이후에 실행된다.',messages);
});
