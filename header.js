const btn = document.querySelector(".header_btn");
const box = document.querySelector(".header_nav");

btn.addEventListener("click", () => {
  if(box.style.display == "block")
    box.style.display = "none";
  else
    box.style.display = "block";

});

var typed = new Typed(".auto_type",{
  strings: ["Web Development", "Android Development","Codding","Algorithms","Server Management","And More"],
  typeSpeed:50,
  backSpeed:50,
  loop:true
})
