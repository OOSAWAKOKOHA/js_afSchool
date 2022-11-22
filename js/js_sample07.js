//補足その1
function test( num,txt='ex' ){
  console.log( num,txt );
}
test(50,'test');


//補足その2
function test2(num=500){
  console.log(num);
}
test2(200);


//補足その3
const total =1000;

function testTax(num){
  if(数字じゃないものが入った場合){
    //結局実行されない
    return 'error!!!';
  }
  // console.log('tax',num * 0.1);
  const result = num * 0.1;
  return result;
  //returnの後は実行できない -> 帰ってきてるから
}
const tax = testTax(total);
console.log(total + 'の税金は' + tax);
