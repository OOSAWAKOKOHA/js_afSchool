const container = document.getElementById("container");
const box = document.getElementById("box");

let isMouseDown = false;

box.addEventListener("mousedown",() => {
  isMouseDown = true;
});

box.addEventListener("mouseup",() => {
  isMouseDown = false;
});

container.addEventListener("mousemove",(e) => {
  const x = e.clientX;
  const y = e.clientY;

  if (isMouseDown) {
    box.style.top = `${ y - 50 }px`;
    box.style.left = `${ x - 50 }px`;
  }

    console.log( x,y );
});


