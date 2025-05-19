// method 1 



// function update(){
//   const clock = document.querySelector("#clock");
//   const date = new Date();
//   const time = date.toLocaleTimeString('en-GB', { hour12: false });
//   clock.innerHTML=time;
// }
// setInterval(update,1000);

function update(){
    const clock = document.querySelector("#clock");
    const date = new Date();
    let hours = date.getHours();
    let second = date.getSeconds();
    let minutes = date.getMinutes();
    
    hours= hours<10? "0"+hours:hours;
    second= second<10? "0"+second:second;
    minutes= minutes<10? "0"+minutes:minutes;
    clock.innerHTML=`${hours}:${minutes}:${second}`
  }
  
  setInterval(update,1000)
  
  
  