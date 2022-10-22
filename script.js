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

// let indexOfLanding=0
// function landingImg(){
//     document.getElementById('box-landing-page').style.backgroundImage=`url('images/landing_img${indexOfLanding}.png')`
//     indexOfLanding=(indexOfLanding+1)%7
//     console.log("done "+indexOfLanding);
//     setTimeout(landingImg,3000)
// }
// landingImg(indexOfLanding)

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
    // console.log(slides[slideindex])
    setTimeout(showSlides, 3000)

}
