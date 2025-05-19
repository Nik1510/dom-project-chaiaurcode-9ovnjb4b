document.querySelector("#calculate").addEventListener("click",(event)=>{
    event.preventDefault(); 
    const height = parseFloat(document.querySelector("#height").value);
    const weight = parseFloat(document.querySelector("#weight").value);
    const results = document.querySelector("#results");
  
  
    if(!height || !weight || height<=0 || weight<=0){
      results.innerHTML="Please enter a valid number ";
      return;
    }
    const bmi = Math.abs((10000 * weight) / (height * height));
    results.innerHTML = `Your BMI is ${bmi}`;
  })
  
  
  