var btn = document.getElementById("submit");
var size = document.getElementById("size");
var year = document.getElementById("year");
var result = document.getElementById("result");

btn.addEventListener("click",(e)=>{

    e.preventDefault();
    var total = ((((size.value *2)+5)*50)-year.value)+1766;
    result.innerText = total;
});