const count = document.querySelector(".count");
// const add = document.querySelector(".add");
// const resetCount = document.querySelector(".reset");
// const sub = document.querySelector(".subtract");

const buttonsContainer = document.querySelector(".buttons");

buttonsContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("add")) {
    count.innerHTML++;
    changeColor();
  }
  if (e.target.classList.contains("subtract")) {
    count.innerHTML--;
    changeColor();
  }
  if (e.target.classList.contains("reset")) {
    count.innerHTML = 0;
    changeColor();
  }
});

function changeColor() {
    if (count.innerHTML > 0) {
        count.style.color="yellow";
    }else if (count.innerHTML < 0) {
        count.style.color="orangered";
    }else{
        count.style.color="white";
    }
}
// add.addEventListener('click',()=>{
// count.innerHTML++;
// if(count.innerHTML>=0){
//     count.style.color = "white";
// }
// })
// sub.addEventListener('click',()=>{
// count.innerHTML--;
// if(count.innerHTML<0){
//     count.style.color = "red";
// }
// })
// resetCount.addEventListener('click',()=>{
// count.innerHTML = 0;
// if(count.innerHTML==0){
//     count.style.color = "white";
// }
// })
