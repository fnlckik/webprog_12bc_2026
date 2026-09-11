function timer() {
    const now = new Date(Date.now());
    const p = document.querySelector("#ora");
    p.innerText = now.toLocaleTimeString();
}

// 1000 milliszekundum = 1 másodperc
setInterval(timer, 1000);