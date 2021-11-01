var first = document.getElementById("fn");
var sec = document.getElementById("sn");
var btn = document.getElementById("submit");
var result = document.getElementById("result");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  var total = first.value / sec.value;
  result.innerText = total;
});
