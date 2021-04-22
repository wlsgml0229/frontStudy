/*
fullfilled되거나 rejeccted된 후에 최종적으로 실행 할 것이 있다면, .finally()를 설정하고 , 함수를 인자로 넣는다.
*/

// function p() {
//     return new Promise((resolve,reject) =>{
//         setTimeout(()=>{
//             reject('error');
//         },1000);
//     })
// }
//     p().then((message)=> {
//         console.log('1000ms 후에 fullfilled됩니다',message)
//     }).catch((reason)=>{
//         //reject가 불리면 연결 될 함수
//         console.log('rejected됩니다.',reason)
//     })
//     .finally(() =>{
//         console.log('끝')
//     })

    /**
     * 보통 비동기 작업을 할때 ,callback 함수를 인자로 넣어 로직이 끝나면 callback함수를 호출한다.
     * 이런경우 함수가 아래로 진행되지 않고, callback함수 안으로 진행된다.
     */

    function c(callback){
        setTimeout(()=> {
            callback();
        },1000);
    }

    c(()=>{
        console.log('1000ms 후에 callback함수가 실행됩니다.')
    });

    c(()=>{
        c(()=>{
            c(()=>{
                console.log('3000ms 후에 callback함수가 실행됩니다.')
            });
        });
    });

    /**
     * promise를 활용한 비동기 작업 
     * then 함수에서 다시 프로미스 객체를 리턴하는 방버븡 ㄹ통해 체이닝하면, 비동기 작업을 순차적으로 아래로 표현가능
     * then에 함수를 넣는 여러 방법을 확인해 본다.
     */

    function p(){
        return new Promise((resolve,reject)=>{
            setTimeout(()=> {
                resolve();
            },1000)
        })
    }

    //p() : pending
    //작업이 완료되는 순간 .then()
    p().then(()=>{
        //다시 새로운 프로미스객체를 만들어 리턴
        return p()
    })
    .then(()=>p())
    .then(()=>p())
    .then(()=>{
        console.log('4000ms 후에 진행')
    })