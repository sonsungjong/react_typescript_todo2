
// 타입스크립트는 변수를 만들때 Type(자료형)을 적어줘야한다
function sum(a : number, b : number){
    return a + b
}

console.log(sum(1, 2));

// 웹이나 nodejs는 .js를 실행할 수 있다 (.ts 는 실행불가)
// .ts => .js 로 바꿔서 사용
// 타입스크립트는 컴파일 실행을 해서 자바스크립트 파일로 만들어줘야한다
// npx tsc src/TSExample.ts  ==> TSExample.js