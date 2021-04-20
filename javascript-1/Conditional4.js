//조건 ? 조건이 참이면 실행되는 표현식 : 조건이 거짓이면 실행되는 표현식
// 중괄호 {} 를 사용할 수 없는 문법이기 때문에 하나의 표현식만 가능하다.

let n = 5;

console.log(n % 5 === 0? '5의 배수입니다' : '5의 배수가 아닙니다.');

//표현식의 결과를 변수에 할당 할 수 있습니다.

const message = n % 5 === 0? '5의 배수입니다.' : '5의 배수가 아닙니다.';
console.log(message);


//Swithch를 이용한 조건문 
//switch 뒤 괄호 안에 있는 값이 무엇인지 중괄호 안에 있는 코드들을 비교해서 실행합니다.
// 이중에 default : 뒤에 있는 문장은 항상 참이어서 실행되는 블럭입니다.
//문장이 한 줄이라서 중괄호는 생략한다

let a = 6;

// switch (a) {
//     default: 
//         console.log(a);
// }

//다음은 n이 5로 나누었을때 나머지가 0인경우 실행되는 블록을 추가
//case '비교할 값': 을 이용하여 맞으면 실행된다
//case 0: 인 경우와 default : 인 경우 두 블럭 모두 순서대로 실행이 된다
//5의 배수입니다
//5

// switch (a % 5) {
//      case 0 : {
//          console.log('5의 배수입니다');
//      }
//     default: 
//         console.log(a);
// }

//만약에 해당 블럭이 실행된 후 다음 블럭을 거치지 않고 switch 문을 나가고 싶다면, 
// case문 안에서 break;를 실행한다

// switch(a % 5) {
//     case 0 :{
//         console.log('5의 배수입니다.');
//         break;
//     }
//     default: {
//         console.log(a);
//     }
// }

//break와 case문의 순서를 잘 조정하여, 원하는 코드를 만들어 낼 수 있도록 이해하는것이 중요함

switch(a % 5) {
        case 0 :{
            console.log('5의 배수입니다.');
            break;
        }
        case 1 :
            case 2:
                case 3:
                    case 4:
                        console.log('5의 배수가 아닙니다.');
        default: {
            console.log(a);
        }
    }