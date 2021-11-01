var btn = document.getElementById("submit");
var namee = document.getElementById("name");
var surName = document.getElementById("surname");
var city = document.getElementById("city");

btn.addEventListener("click",(e)=>{

    e.preventDefault();
     alert(`Hello, ${namee.value}  ${surName.value} From: ${city.value}`)
});