const txtHall = document.getElementById("txtHall");
const inTxt = document.getElementById("inTxt");
const send = document.getElementById("send");
const clear = document.getElementById("clear");
const balloon = document.getElementById("balloon");
// const balloonNo = Math.floor(Math.random * balloon.length)

const animation = 

// inTxt.addEventListener("")
send.addEventListener("click",() => {
  // console.log( inTxt.value );
  const randomX = Math.floor(Math.random() * (txtHall.clientWidth - 100));
  const randomY = Math.floor(Math.random() * (txtHall.clientHeight - 50));

  if (inTxt.value < 1){
    alert( "error!!" )
  }else{
    //加算代入
    txtHall.innerHTML += `<div id="balloon" class="balloon" style="top: ${randomY }px; left: ${randomX }px; animation: zoom-in-anim 0.3s alternate;">${inTxt.value}</div>`;
  }
});

clear.addEventListener("click",() => {
  console.log( txtHall );
  // txtHall.innerHTML -= `<div id="balloon" class="balloon">${inTxt.value}</div>`;
  txtHall.innerHTML = "";
})
