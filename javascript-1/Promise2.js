//p.then 으로 callback 함수를 설정했기 때문에 fullfilled되면서 callback이 실행 됩니다.

// const p = new Promise((resolve,reject) => {
//     /*pending */
//     setTimeout(()=>{
//         resolve(); /* fulfilled 상태로 넘어감 */
//     },1000)
// });

//1초후에 실행됨
// p.then(()=>{
//     console.log('fullfiled시됩니다')
// })

/**
 * then을 설정하는 시점을 정확하고, 함수의 실행과 동시에 프로미스 객체를 만들면서 pending이 시작하도록 하기 위해
 * 프로미스 객체를 생성하면서 리턴하는 함수 (p)를 만들어 함수 (p) 실행과 동시에 then 을 설정한다
 */

// function p() {
//     return  new Promise((resolve,reject) => {
//         /*pending */
//         setTimeout(()=>{
//             resolve(); /* fulfilled 상태로 넘어감 */
//         },1000)
//     });
// }

// p().then(() => {
//     console.log('1000ms 후에 fullfiled 됩니다.')
// })

/*
마찬가지로 프로미스 객체가 rejected 되는 시점에 p.chatch 안에 설정한 callback 함수가 실행된다.
*/

// function p() {
//     return new Promise((resolve,reject) =>{
//         setTimeout(()=>{
//             reject();
//         },1000);
//     })
// }
//     p().then(()=> {
//         console.log('1000ms 후에 fullfilled됩니다')
//     }).catch(()=>{
//         //reject가 불리면 연결 될 함수
//         console.log('rejected됩니다.')
//     })


    /**
     * excutor의 resolve 함수를 실행 할 때 인자를 넣어 실행 하면, then의 callback함수의 인자로 받을 수 있습니다.
     * resolve('hello')
     * then((message) => {...})
     */
     function p() {
        return new Promise((resolve,reject) =>{
            setTimeout(()=>{
                resolve('hello');
            },1000);
        })
    }
        p().then((message)=> {
            console.log('1000ms 후에 fullfilled됩니다',message)
        }).catch(()=>{
            //reject가 불리면 연결 될 함수
            console.log('rejected됩니다.')
        })

    /**
     * 마찬가지로, excutor의 reject함수를 실행할 때 인자를 넣어 실행하면 , catch의 callback 함수의 인자로 받을 수 있다.
     * rejecte('error')
     * then((reson)=> {...})
     * 
     */

     function p() {
        return new Promise((resolve,reject) =>{
            setTimeout(()=>{
                reject('error');
            },1000);
        })
    }
        p().then((message)=> {
            console.log('1000ms 후에 fullfilled됩니다',message)
        }).catch((reason)=>{
            //reject가 불리면 연결 될 함수
            console.log('rejected됩니다.',reason)
        })

/*
보통 reject 함수를 실행하며 rejected되는 이유를 넘기는데, 표준 내장 객체인 Error의 생성자를 이용하여 Error객체를 만든다.
*/

function p() {
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            reject(new Error('bad'));
        },1000);
    })
}
    p().then((message)=> {
        console.log('1000ms 후에 fullfilled됩니다',message)
    }).catch((error)=>{
        //reject가 불리면 연결 될 함수
        console.log('rejected됩니다.',error)
    })