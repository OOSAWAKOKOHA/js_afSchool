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

const reversi = document.getElementById('reversi');
const tbody = reversi.getElementsByTagName('tbody')[0];
// const tbody = document.createElement('tbody');
// const tr = document.createElement('tr');
// const td = document.createElement('td');

console.log(tbody);
// console.log(tr);

for( j = 1; j <= 8; i++ ){
  tbody.innerHTML = `<tr></tr>`;
  const tr = document.getElementsByTagName('tr')[0];
  
  for( i = 1; i <= 8; i++ ){
    tr.innerHTML += `<td></td>`;
  }
}
console.log(td);

// tr.appendChild(td);
// tbody.appendChild(tr);
// reversi.appendChild(tbody);

