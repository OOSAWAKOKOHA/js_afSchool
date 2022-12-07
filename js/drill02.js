/*
drill02 - 配列
配列 arr を作成し、以下の出力になる様にデータを変更すること

[表示内容]
[]
[200]
[200,300]
[300]
*/

// let arr = ['[]','[200]','[200,300]','[300]'];
// console.log(arr[0]);

// console.log(arr[1]);

// console.log(arr[2]);

// console.log(arr[3]);


// let arr = ['200,300'];
// console.log(`[]`);

// console.log(arr[1]);

// console.log(arr[2]);

// console.log(arr[3]);


let arr = [];
console.log(arr);

arr[0] = 200;
console.log(arr);

arr.push(300);
console.log(arr);

arr.shift();
console.log(arr);