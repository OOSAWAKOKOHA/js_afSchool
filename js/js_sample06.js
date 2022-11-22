//同じことは一つにまとめるべき -> 大変だから


// const btnA = document.getElementById("btnA");
// const btnB = document.getElementById("btnB");

// btnA.onclick = function(){
//   changeBg('tomato');
// }

// btnB.onclick = function(){
//   changeBg('skyblue');
// }

// function changeBg( value ){
//   console.log( value );
//   document.body.style.backgroundColor = value;
// }



const btn = document.querySelectorAll('.btn');
// console.log( btn[ length ] );
for( let i=0; i<btn.length; i++ ){
  // console.log( i );
  btn[i].onclick = function( evt ){
    console.log( evt.target.dataset.color );
    const color = evt.target.dataset.color;
    changeBg( color );
  }
}

function changeBg( value ){
  // console.log( 'aaa' );
  document.body.style.backgroundColor = value;
}
