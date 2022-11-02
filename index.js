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
