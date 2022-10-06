let collegeNameStatement = "Sardar Patel Institute of Technology"
let collegeName = document.getElementById("college-name")
let typecount = 0
let toBeShown = ""
function type() {
    // for(let i=0;i<collegeNameStatement.length;i++){
    // delay()
    // toBeShown+=collegeNameStatement.charAt(i)
    // console.log(i)
    // console.log(toBeShown)
    // collegeNameStatement.innerText=toBeShown
    // }
    if (typecount == collegeNameStatement.length) {
        typecount = 0
    }
    else {
        toBeShown+=collegeNameStatement.charAt(typecount)
        console.log(typecount)
        console.log(toBeShown)
        collegeName.innerText=toBeShown
        typecount++
        delay()

    }
}
function delay() {
    setTimeout(type, 75)
}
type()