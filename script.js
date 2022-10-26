// for typing effect
let NameStatement = ["Sardar Patel Institute of Technology", "Bhartiya Vidya Bhavans", "Autonomous Institute Affiliated to Mumbai University"]
let collegeName = document.getElementById("college-name")
let bhavansName = document.getElementById("bhavans")
let universityName = document.getElementById("university")
let typecount = [0, 0, 0]
let toBeShown = ["", "", ""]

function type(i) {
    if (typecount[i] == NameStatement[i].length) {
        typecount[i] = 0
    }
    else {
        toBeShown[i] += NameStatement[i].charAt(typecount[i])
        if (i == 0)
            collegeName.innerText = toBeShown[i]
        else if (i == 1)
            bhavansName.innerText = toBeShown[i]
        else
            universityName.innerText = toBeShown[i]
        typecount[i]++
        delay(i)
    }
}
function delay(i) {
    let time
    if (i == 0)
        time = 50
    else if (i == 1)
        time = 35
    else
        time = 65
    setTimeout(type, time, i)
}
for (let i = 0; i < 3; i++)
    type(i)

//for menu and close
let menu=document.getElementById("menu")
let navbar=document.getElementById("navbar")
let close=document.getElementById("close")
menu.addEventListener("click",()=>{
    navbar.classList.add("active-navbar")
    document.querySelector("html").style.overflow="hidden"
})
close.addEventListener("click",()=>{
    navbar.classList.remove("active-navbar")
    document.querySelector("html").style.overflow=""

})

//for back to top button
let mybutton = document.getElementById("btn-back-to-top");
window.onscroll = function () {
    scrollFunction();
};
function scrollFunction() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
mybutton.addEventListener("click", backToTop);
function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

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

//for alumni cards
// let alumni=document.querySelector(".alumni")
// let listOfBackground=["linear-gradient(to right, #5614b0, #dbd65c)","linear-gradient(to right, #c2e59c, #64b3f4)"]
let bgIndex=0
let cardToAppear=0
let startCardIndex=0
function findwidth(){
    if(window.screen.width>850){
        cardToAppear=3
    }
    else if(window.screen.width>575){
        cardToAppear=2
    }
    else{
        cardToAppear=1
    }
}
function bringCards(){
    // changeBackground()
    let order=1
    let alumniCards=document.querySelectorAll(".alumni-card")
    for(let i=0;i<alumniCards.length;i++){
        alumniCards[i].classList.add("no")
        alumniCards[i].style.order=null
    }
    for(let i=0;i<cardToAppear;i++){
        let toRemove=(startCardIndex+i)%alumniCards.length
        alumniCards[toRemove].style.order=order
        alumniCards[toRemove].classList.remove("no")
        order++
    }
    startCardIndex=(startCardIndex+1)%alumniCards.length
}
// function changeBackground(){
//     console.log("bgIndex="+bgIndex);
//     console.log("listOfBackground[bgIndex]="+listOfBackground[bgIndex]);
//     console.log("listOfBackground.length="+listOfBackground.length);
//     document.querySelector(".alumni").style.background=`${listOfBackground[bgIndex]}`
//     bgIndex=(bgIndex+1)%listOfBackground.length
// }
bringCards()
setInterval(findwidth,1000)
setInterval(bringCards,3000)
