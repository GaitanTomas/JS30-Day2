// CLOCK HANDS
let hourHand = document.querySelector(".hour-hand");
let minHand = document.querySelector(".min-hand");
let secondHand = document.querySelector(".second-hand");

// CLOCK FUNCTION
function showDate(){
    // DATE INFORMATION
    let date = new Date()
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    // HOURS
    hour = hour > 12 ? date.getHours() - 12 : date.getHours();
    const hourDegrees = ((hour * 30) + (min / 2) + (sec / 120)) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    // MIN
    const minDegrees = ((min * 6) + (sec / 10)) + 90;
    minHand.style.transform = `rotate(${minDegrees}deg)`;
    // SEC
    const secDegrees = (sec * 6) + 90
    secondHand.style.transform = `rotate(${secDegrees}deg)`;
}
setInterval(showDate, 1000);