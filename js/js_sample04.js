const txtHall = document.getElementById("txtHall");
const inTxt = document.getElementById("inTxt");
const send = document.getElementById("send");
const clear = document.getElementById("clear");
const balloon = document.getElementById("balloon");
const balloonNo = Math.floor(Math.random * balloon.length)

// inTxt.addEventListener("")
send.addEventListener("click",() => {
  console.log( inTxt.value );
  //加算代入
  txtHall.innerHTML += `<div id="balloon" class="balloon">${inTxt.value}</div>`;
});

clear.addEventListener("click",() => {
  console.log( txtHall );
  // txtHall.innerHTML -= `<div id="balloon" class="balloon">${inTxt.value}</div>`;
  txtHall.innerHTML = "";
})
