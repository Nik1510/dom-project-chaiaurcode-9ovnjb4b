let hex ="0123456789ABCDEF";

const generate =function(){
  let color="#";
  for(let i=0;i<6;i++){
    color+=hex[Math.floor(Math.random()*16)];
  }
  return color;
}
let intervalId;
const cbg= function(){
  if(!intervalId){
    intervalId = setInterval(changeBgColor,1000);
  }
   


  function changeBgColor(){
    document.body.style.backgroundColor =generate();
  };
}

document.querySelector("#start").addEventListener("click",cbg);

document.querySelector("#stop").addEventListener("click",()=>{
  clearInterval(intervalId);
  intervalId=null;
});
