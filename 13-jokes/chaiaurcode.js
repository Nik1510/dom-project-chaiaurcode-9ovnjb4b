const url = 'https://api.chucknorris.io/jokes/random';
const btn = document.querySelector("#getJoke");
const display = document.querySelector("#display-joke");
const container = document.querySelector(".container");
const img = document.querySelector("#img")

// handle this end point with XMLHttpRequest

// btn.addEventListener("click",()=>{
//   function getJokeWithXHR(){
//     const xhr = new XMLHttpRequest();
//     xhr.open("GET",url);
//     xhr.onreadystatechange =function(){
//       if(xhr.readyState===4 && xhr.status===200){
//         const data = JSON.parse(xhr.responseText);
//         display.innerHTML=data.value;

//         const img = document.createElement("img");
//         img.src=data.icon_url;

//         const oldImg =container.querySelector("img");
//         if(oldImg) oldImg.remove();
//         container.append(img);
//       }
//     };
//     xhr.send();
//   }

//   getJokeWithXHR();
// })

// handle this end point with promises
// btn.addEventListener("click",()=>{
//   fetch(url)
// .then(response =>response.json())
// .then(data=>{
//   img.src=data.icon_url;
//   display.innerHTML=data.value;
// })
// .catch(err=>{
//   console.log("Api not active")
// })
// })


// handle the case of race condition

let requestId =0;
btn.addEventListener("click",()=>{
  const currentRequestId = ++requestId;

  fetch(url)
  .then(response=>response.json())
  .then(data =>{
    if(currentRequestId === requestId){
      display.innerHTML =data.value;
      img.src=data.icon_url;
    }
  })
  .catch(err=>{
    console.log("API not active",err)
  })

})
