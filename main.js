// Taking all the id's By DOM
const hour = document.getElementById('hour');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const ampm = document.getElementById('ampm');

console.log(hour)
console.log(minutes)
console.log(seconds)
console.log(ampm)
// script is running successfully


// function for clock
function updateClock(){
    let date = new Date()
    let  h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let ampmEl = "AM"
    // console.log(h)

    if(h>12){
        h = h-12;
        ampmEl = "PM"
    }

    h = h<10 ? "0" + h : h;
    m = m<10 ? "0" + m : m;
    s = s<10 ? "0" + s : s;


    hour.innerText = h;
    minutes.innerText = m;
    seconds.innerText = s;
    ampm.innerText = ampmEl;
    setInterval(() => {
        updateClock();
    })
}

updateClock()

