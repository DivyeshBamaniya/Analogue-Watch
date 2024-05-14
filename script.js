let hr = document.querySelector("#hr")
let mn = document.querySelector("#mn");
let sc = document.querySelector("#sc");

//digital clock selectors
let hours = document.querySelector("#hour");
let minutes = document.querySelector("#minutes");
let seconds = document.querySelector("#seconds");
let ampm = document.querySelector("#ampm");


setInterval(() => {
    let day = new Date();
    let hh = day.getHours();
    let mm = day.getMinutes();
    let ss = day.getSeconds();

    hr.style.transform = `rotatez(${hh * 30 + mm / 2}deg)`;
    mn.style.transform = `rotatez(${mm * 6}deg)`;
    sc.style.transform = `rotatez(${ss * 6}deg)`;

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    // for AM & PM
    if(h>12)ampm.textContent = "PM";
    //convert 24hrs clock into 12 hrs
    if (h > 12) h = h - 12;

    //add Zero before single digit
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    hours.textContent = h;
    minutes.textContent = m;
    seconds.textContent = s;
});