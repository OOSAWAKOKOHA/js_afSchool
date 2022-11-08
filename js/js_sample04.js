const txtHall = document.getElementById("txtHall");
const inTxt = document.getElementById("inTxt");
const send = document.getElementById("send");
const clear = document.getElementById("clear");


send.addEventListener("click",() => {
  console.log( inTxt.value );
});
