// for typing effect
let NameStatement = ["Sardar Patel Institute of Technology","Bhartiya Vidya Bhavans","Autonomous Institute Affiliated to Mumbai University"]
let collegeName = document.getElementById("college-name")
let bhavansName = document.getElementById("bhavans")
let universityName = document.getElementById("university")
let typecount = [0,0,0]
let toBeShown = ["","",""]

function type(i) {
    if (typecount[i] == NameStatement[i].length) {
        typecount[i] = 0
    }
    else {
        toBeShown[i] += NameStatement[i].charAt(typecount[i])
        if(i==0)
            collegeName.innerText = toBeShown[i]
        else if(i==1)
            bhavansName.innerText=toBeShown[i]
        else
            universityName.innerText=toBeShown[i]
        typecount[i]++
        delay(i)
    }
}
function delay(i) {
    let time
    if(i==0)
        time=50
    else if(i==1)
        time=35
    else
        time=65
    setTimeout(type, time,i)
}
for(let i=0;i<3;i++)
    type(i)

// for sliding images on landing page
let slideindex = 0
showSlides()
function showSlides() {

    slides = document.getElementsByClassName("slides")
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }
    slideindex++
    if (slideindex > slides.length) { slideindex = 1 }
    slides[slideindex - 1].style.display = "block"
    setTimeout(showSlides, 3000)
}


//for animating slide
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);