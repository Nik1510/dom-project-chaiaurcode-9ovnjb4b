const url = 'https://api.thecatapi.com/v1/images/search';
const btn = document.querySelector(".btn");

const imgContainer = document.createElement("div");
document.body.appendChild(imgContainer);
btn.addEventListener("click",()=>{
  fetch(url)
  .then(response=>response.json())
  .then(data=>{
    imgContainer.innerHTML="";
    const img = document.createElement("img");
    img.src=data[0].url;
    img.style.width=data[0].width +"px";
    img.style.height=data[0].height+"px";
    imgContainer.appendChild(img)
  })
  .catch(error => {
    console.error("Error fetching cat image:", error);
  });

})
