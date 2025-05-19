// document.querySelector("#grey").addEventListener("click",()=>{
//   document.body.style.backgroundColor="grey";
// })
// document.querySelector("#white").addEventListener("click",()=>{
//   document.body.style.backgroundColor="white";
// })
// document.querySelector("#blue").addEventListener("click",()=>{
//   document.body.style.backgroundColor="blue";
// })
// document.querySelector("#yellow").addEventListener("click",()=>{
//   document.body.style.backgroundColor="yellow";
// })

const colors =["grey","white","blue","yellow"];


colors.forEach(color=>{
  document.querySelector(`#${color}`).addEventListener("click",()=>{
    document.body.style.backgroundColor=color;
  });
});