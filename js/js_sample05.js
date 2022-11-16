

const thumb = document.getElementById('thumb');
const overlay = document.querySelector('.overlay')

// const main = document.getElementsByTagName('main');

thumb.onclick = () => {
  overlay.classList.toggle("hidden");
}

overlay.onclick = () => {
  overlay.classList.toggle("hidden");
}



// thumb.onclick = () => {

//   console.log(main);
//   main.innerHTML +=
//   `<div class="overlay">
//     <picture>
//       <img src="img/img_modal_pic01_l.jpg" alt="cake_l">
//     </picture>
//   </div>`
// }