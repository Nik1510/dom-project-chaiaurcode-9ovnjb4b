const url = 'https://api.chucknorris.io/jokes/random';

const btn = document.querySelector("#getJoke");
const joke = document.querySelector("#display-joke");
const img = document.querySelector("#img");



// handle this end point with XMLHttpRequest


// handle this end point with promises
btn.addEventListener("click",()=>{
  fetch("https://api.chucknorris.io/jokes/random")
.then(response =>response.json())
.then(data=>{
  joke.innerHTML=data.value;
  img.src=data.icon_url;
})
.catch(error=>{
  console.log("There was an error:",error);
  joke.innerHTML="Oops! "
});
})



// handle the case of race condition
