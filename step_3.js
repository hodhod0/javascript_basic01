var btn = document.getElementById("submit");
var input = document.getElementById("name");
btn.addEventListener("click",(e)=>{

    e.preventDefault();
    alert(`Hello, ${input.value}`)
});