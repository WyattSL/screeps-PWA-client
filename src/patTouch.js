setTimeout(() => {
    const con = document.body;

    con.addEventListener("touchstart", (e) => {
        e.preventDefault();
    })

    con.addEventListener("touchdrag", (e) => {
        e.preventDefault();
    })

    con.addEventListener("touchend", (e) => {
        e.preventDefault();
    })

    con.addEventListener("touchcancel", (e) => {
        e.preventDefault();
    })

}, 500);
