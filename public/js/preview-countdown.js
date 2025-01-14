var countDownDate = new Date('2025-03-23T11:00:00'); // Set the specific date and time
var countDownDateTime = countDownDate.getTime(), x = setInterval(function () {
    var e = new Date().getTime(),
        $ = countDownDate - e,
        n = document.querySelector(".vs-time-days"),
        o = document.querySelector(".vs-time-hours"),
        t = document.querySelector(".vs-time-minutes"),
        r = document.querySelector(".vs-time-seconds");

    if (!n || !o || !t || !r) {
        clearInterval(x);
        return;
    }

    n.innerHTML = Math.floor($ / 864e5),
        o.innerHTML = Math.floor($ % 864e5 / 36e5),
        t.innerHTML = Math.floor($ % 36e5 / 6e4),
        r.innerHTML = Math.floor($ % 6e4 / 1e3),
        $ < 0 && (clearInterval(x), n.innerHTML = "0", o.innerHTML = "0", t.innerHTML = "0", r.innerHTML = "0");
}, 1000);
