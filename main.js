var clock = setInterval(myClock, 1000);

function myClock() {
    var time = new Date();
    document.getElementById("demo").innerHTML = time.toLocaleTimeString();
}

