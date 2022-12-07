/*
drill03 - 配列2
オセロの盤を作成したい。
table(#reversi)内に8x8のマス（td要素）を作成すること
中央4x4マスには
黒（●）と白（○）を配置しておくこと
[表示内容]中央位置は下記の様にマスを設定しておく

横（a〜h）
縦（1〜8）と過程すると、
d/4 には ○
d/5 には ●
e/4 には ●
e/5 には ○
を配置し、中央の4マスには黒石と白石が置かれている状況を作成すること
○ ●
● ○
*/

// console.log(reversi);

// let arr = [];
// for( let i = 0; i < 8; i++ ){
  //   // arr[ i ] = i;
  //   document.reversi.createElement('td');
  
  // }
  // console.log( arr );
  
  // function addtd () {
    //   const new = document.createElement('td');
    // }
    
    // document.body.tbody = addtd;
    
    
    
    // let trAdd = reversi.tBodies[0].insertRow(-1);
    // const tr = document.getElementsByTagName('tr');
    
    // let td = document.createElement('td');
    // const createtr = document.createElement('tr');
    
const reversi = document.getElementById('reversi');
console.log(reversi);

for( i = 0; i < 7; i++ ){
  reversi.innerHTML += `<td></td>`;
}


