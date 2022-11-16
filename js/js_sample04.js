const txtHall = document.getElementById("txtHall");
const inTxt = document.getElementById("inTxt");
const send = document.getElementById("send");
const clear = document.getElementById("clear");



// console.log( balloon.[ 0 ] );


// const balloonNo = Math.floor(Math.random * balloon.length)

let element = 0;


// inTxt.addEventListener("")
send.addEventListener("click",() => {
  // console.log( inTxt.value );
  const randomX = Math.floor(Math.random() * (txtHall.clientWidth - 100));
  const randomY = Math.floor(Math.random() * (txtHall.clientHeight - 50));
  
  if (inTxt.value < 1){
    alert( "error!!" )
  }else{
    //加算代入
    txtHall.innerHTML += 
    `<div id="balloon" class="balloon" style="top: ${randomY }px; left: ${randomX }px;">
    ${inTxt.value}
    </div>`;

    const balloon = document.querySelectorAll(".balloon");
    // console.log( balloon );
    // console.log( balloon[ 0 ] );

    balloon[element].animate({
      scale: [ 1,2,1 ],
    },{
      duration: 500,
      fill: "forwards"
    });

    element = element + 1;
  }
});

clear.addEventListener("click",() => {
  console.log( txtHall );
  // txtHall.innerHTML -= `<div id="balloon" class="balloon">${inTxt.value}</div>`;
  txtHall.innerHTML = "";

  // balloon[element].animate({
  //   scale: [1,2,1],
  // },{
  //   duration: 500,
  //   fill: "forwards"
  // });

  // element = 
})
