const page1 = document.getElementById("page1")
const page2 = document.getElementById("page2")
const page3 = document.getElementById("page3")
const page4 = document.getElementById("page4")
const topbarnews = document.getElementById("topbarbackground")
const newsbody = document.getElementById("newsbodybackground")
const newstext = document.getElementById("newstext")
const newstextdiv = document.getElementById("newstextdiv")
const newsred = document.getElementById("newsred")
const notready = document.getElementById(`yesred`)
const nored = document.getElementById("noredcontent")
const redtext = document.getElementById(`redtext`)
const segeliframe = document.getElementById(`segeliframe`)
page1.innerHTML= `דף הבית`
page2.innerHTML= `הכשרת סגל`
page3.innerHTML= `עתיד לצאת`
page4.innerHTML= `עזרו לנו להשתפר`
let red = false ;

function glitchout() {
    if (red == false) {
 var image = document.getElementById(`glitchoutgif`)
 image.style.display = `block`
 notready.style.display = `flex`
 nored.style.display = `none`
setTimeout(blackandred,1500)
red = true
    } else {

    }
}
function blackandred() {
    var image = document.getElementById(`glitchoutgif`)
 image.style.display = `none`
    page1.style.color = `#000000`
    page2.style.color = `#000000`
    page3.style.color = `#000000`
    page4.style.color = `#000000`
    topbarnews.style.background = `linear-gradient(to left, rgba(200, 0, 0, 0.74), rgb(0, 0, 0))`
    newsbody.style.background = `linear-gradient(to left, rgba(255, 0, 0, 0.74), rgb(170, 0, 0))` 
    newstext.style.color = `#000000`
    newstextdiv.style.transform = `rotate(-15deg)`
        newstextdiv.style.right = `65px`

 setTimeout(normal1,5000)
}
function normal1() { 
        var image = document.getElementById(`glitchoutgif`)
    image.style.display = `block`
    notready.style.display = `none`
    page1.style.color = `rgb(50, 7, 206)`
    page2.style.color = `rgb(50, 7, 206)`
    page3.style.color = `rgb(50, 7, 206)`
    page4.style.color = `rgb(50, 7, 206)`
        topbarnews.style.background = `linear-gradient(to left, rgba(106, 140, 252, 0.74), rgb(59, 70, 160))`
        newsbody.style.background = `#015858`
        newstext.style.color = `rgb(240, 248, 255)`
        newstextdiv.style.transform = `rotate(0deg)`
        newstextdiv.style.right = `5px`
        nored.style.display = `flex`
    setTimeout(normal2,1500)
   }
   function normal2(){
       var image = document.getElementById(`glitchoutgif`)
    image.style.display = `none`
    red = false
   }
function attendance() {
    segeliframe.style.display = `block`
    segeliframe.src = `https://www.youtube.com/embed/P-MSzSGWCXs?si=_g389s7AnDbtpYQh&autoplay=1`
    segeliframe.scrollIntoView({ behavior: "smooth" })
    document.getElementById(`testreport`).style.display = `none`
    document.getElementById(`branchingreport`).style.display = `none`
    document.getElementById(`evaluationreport`).style.display = `none`
}
function evaluation() {
    segeliframe.style.display = `block`
    segeliframe.src = `https://www.youtube.com/embed/3mb6M1Sj4mQ?si=qc9M7bZnFHIZX38z&autoplay=1`
    segeliframe.scrollIntoView({ behavior: "smooth" })
    document.getElementById(`testreport`).style.display = `none`
    document.getElementById(`branchingreport`).style.display = `none`
    document.getElementById(`evaluationreport`).style.display = `none`
}

function test() {
    segeliframe.style.display = `block`
    segeliframe.src = `https://www.youtube.com/embed/08K6GHhwnOI?si=f2egwyXhfElud3LS&autoplay=1`
    segeliframe.scrollIntoView({ behavior: "smooth" })
    document.getElementById(`testreport`).style.display = `none`
    document.getElementById(`branchingreport`).style.display = `none`
    document.getElementById(`evaluationreport`).style.display = `none`
}
function branching() {
    segeliframe.style.display = `block`
    segeliframe.src = `https://www.youtube.com/embed/RtgJqV5KQ7Y?si=DBFRMTV0YMXNGLVZ&autoplay=1`
    segeliframe.scrollIntoView({ behavior: "smooth" })
    document.getElementById(`testreport`).style.display = `none`
    document.getElementById(`branchingreport`).style.display = `none`
    document.getElementById(`evaluationreport`).style.display = `none`
}
function testreport() {
    segeliframe.style.display = `block`
    segeliframe.src = `https://www.youtube.com/embed/EqAhMD-2zEI?si=uyRmFhc-3lhfaXtg&autoplay=1`
    segeliframe.scrollIntoView({ behavior: "smooth" })
    document.getElementById(`testreport`).style.display = `block`
    document.getElementById(`branchingreport`).style.display = `block`
    document.getElementById(`evaluationreport`).style.display = `block`
    document.getElementById(`testreport`).style.backgroundColor = `rgb(17, 188, 139)`
    document.getElementById(`evaluationreport`).style.backgroundColor = `rgb(250, 235, 215)`
    document.getElementById(`branchingreport`).style.backgroundColor = `rgb(250, 235, 215)`
}
function evaluationreport() {
    segeliframe.style.display = `block`
    segeliframe.src = `https://www.youtube.com/embed/D2uEREbBWY8?si=Z7aoEatcNj4z4KgY&autoplay=1`
    segeliframe.scrollIntoView({ behavior: "smooth" })
    document.getElementById(`testreport`).style.display = `block`
    document.getElementById(`branchingreport`).style.display = `block`
    document.getElementById(`evaluationreport`).style.display = `block`
    document.getElementById(`evaluationreport`).style.backgroundColor = `rgb(17, 188, 139)`
    document.getElementById(`branchingreport`).style.backgroundColor = `rgb(250, 235, 215)`
    document.getElementById(`testreport`).style.backgroundColor = `rgb(250, 235, 215)`
}
function branchingreport() {
    segeliframe.style.display = `block`
    segeliframe.src = `https://www.youtube.com/embed/s9_k-FubyRY?si=gTyUFf4gy04bduaT&autoplay=1`
    segeliframe.scrollIntoView({ behavior: "smooth" })
    document.getElementById(`testreport`).style.display = `block`
    document.getElementById(`branchingreport`).style.display = `block`
    document.getElementById(`evaluationreport`).style.display = `block`
    document.getElementById(`branchingreport`).style.backgroundColor = `rgb(17, 188, 139)`
    document.getElementById(`evaluationreport`).style.backgroundColor = `rgb(250, 235, 215)`
    document.getElementById(`testreport`).style.backgroundColor = `rgb(250, 235, 215)`
}
function task() {
    segeliframe.style.display = `block`
    segeliframe.src = `https://www.youtube.com/embed/2wanDaDdVEM?si=g1QbxWE4Wldd76TA&autoplay=1`
    segeliframe.scrollIntoView({ behavior: "smooth" })
    document.getElementById(`testreport`).style.display = `none`
    document.getElementById(`branchingreport`).style.display = `none`
    document.getElementById(`evaluationreport`).style.display = `none`
}
function checktest() {
    segeliframe.style.display = `block`
    segeliframe.src = `https://www.youtube.com/embed/2wanDaDdVEM?si=g1QbxWE4Wldd76TA&autoplay=1`
    segeliframe.scrollIntoView({ behavior: "smooth" })
    document.getElementById(`testreport`).style.display = `none`
    document.getElementById(`branchingreport`).style.display = `none`
    document.getElementById(`evaluationreport`).style.display = `none`
}
function dotest() {
    segeliframe.style.display = `block`
    segeliframe.src = `https://www.youtube.com/embed/2wanDaDdVEM?si=g1QbxWE4Wldd76TA&autoplay=1`
    segeliframe.scrollIntoView({ behavior: "smooth" })
    document.getElementById(`testreport`).style.display = `none`
    document.getElementById(`branchingreport`).style.display = `none`
    document.getElementById(`evaluationreport`).style.display = `none`
}