const digitalClock = document.querySelector(".digital-clock");
const hourHand = document.querySelector(".hour");
const minuteHand = document.querySelector(".minute");
const secondsHand = document.querySelector(".second");

function displayDateTime() {
    setInterval(() => {
        let date = new Date();
        let hours = date.getHours() % 12 || 12;
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let milliseconds = date.getMilliseconds();

        let hourStr = hours.toString().padStart(2, "0");
        let minuteStr = minutes.toString().padStart(2, "0");
        let secondStr = seconds.toString().padStart(2, "0");
        let ampm = date.getHours() >= 12 ? "PM" : "AM";

        let secondsDegrees = (seconds + milliseconds / 1000) * 6;
        let minutesDegrees = (minutes + seconds / 60) * 6;
        let hoursDegrees = (hours + minutes / 60) * 30;

        digitalClock.textContent = `${hourStr}:${minuteStr}:${secondStr} ${ampm}`;

        secondsHand.style.transform = `translateX(-50%) rotate(${secondsDegrees}deg)`;
        minuteHand.style.transform = `translateX(-50%) rotate(${minutesDegrees}deg)`;
        hourHand.style.transform = `translateX(-50%) rotate(${hoursDegrees}deg)`;
    }, 10);
}

displayDateTime();
