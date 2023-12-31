/* 
  소수 찾기

  1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.

  소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
  (1은 소수가 아닙니다.)

  !제한조건
  - n은 2이상 1000000이하의 자연수입니다.

  * input/output
  ---------------------------------------------------------------------------------------------
  n	    result
  10	  4
  5	    3
  ---------------------------------------------------------------------------------------------

*/

const solution = (n) => {
  let answer = 0;
  let num = 2;

  while(n >= num){
    let count = 0;
    for(let i = 2; i <= num; i++) {
      if(num % i === 0) count++;
      if(count === 2) break;
    }

    for (let i = 2; i <= Math.ceil(Math.sqrt(num)); i++) {
      console.log('num % i',num ,i ,num % i)
      if (num % i === 0) {
        // return false;
      }
    }

    count === 1 ? answer++ : null;
    num++;
  }

  return answer;
}

console.log( 'solution answer *1*', solution(10) )
console.log( 'solution answer *2*', solution(5) )


/** 
 * ? 문제해결중
 */