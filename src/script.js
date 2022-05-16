
let title = document.getElementById('title')
let aboutMe = document.getElementById('about-me')
let projects = document.getElementById('project-title')
let work = document.getElementById('work-text')
let contact = document.getElementById('contact-text')
let i = 0
let speed = 100
//TODO: create a function that takes in an element and text, then typewrites it to the DOM
window.addEventListener('hashchange', function() {
       let hash = location.hash
       if (hash === "#about") {
              i = 0
              writeAboutMe()
              console.log('on about')
       }
       else if (hash === "#header") {
              i = 0
              writeTitle()
              console.log('on header')
       }
       else if (hash === "#projects") {
              i = 0
              writeProjects()
       }
       else if (hash === "#work") {
              i = 0
              writeWork()
       }
       else if (hash === "#contact") {
              i = 0
              writeContact()
       }
})


function writeTitle() {
       let text = "Hey, I'm Sten."
        if (i<text.length && title.innerHTML != text) {
               title.innerHTML += text.charAt(i)
               i++
               setTimeout(writeTitle, speed)
        }
        
 }



function writeAboutMe() {
       let text = "ABOUT ME"
       if (i<text.length && aboutMe.innerHTML != text) {
              aboutMe.innerHTML += text.charAt(i)
              i++
              setTimeout(writeAboutMe, speed)
       }
}

function writeProjects() {
       let text = "PROJECTS"
       if (i<text.length && projects.innerHTML != text){
              projects.innerHTML += text.charAt(i)
              i++
              setTimeout(writeProjects, speed)
       }
}

function writeWork() {
       let text = "WORK"
       if (i<text.length && work.innerHTML != text){
              work.innerHTML += text.charAt(i)
              i++
              setTimeout(writeWork, speed)
       }
}

function writeContact() {
       let text = "LET'S CONNECT."
       if (i<text.length && contact.innerHTML != text){
              contact.innerHTML += text.charAt(i)
              i++
              setTimeout(writeContact, speed)
       }
}

writeTitle()





 
 document.getElementById("work-button").onclick = function () {
        location.href = "#projects";
 };
 
 document.getElementById("back").onclick = function () {
        location.href = "#header";
 };

 