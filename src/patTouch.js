setTimeout(() => {
    const con = document.body;

    con.addEventListener("touchstart", (e) => {
        if (e.target && e.target.className && e.target.className.includes("map-container")) {
            e.preventDefault();
        }
    })

    con.addEventListener("touchdrag", (e) => {
        if (e.target && e.target.className && e.target.className.includes("map-container")) {
            e.preventDefault();
        }
    })

    con.addEventListener("touchend", (e) => {
        if (e.target && e.target.className && e.target.className.includes("map-container")) {
            e.preventDefault();
        }
    })

    con.addEventListener("touchcancel", (e) => {
        if (e.target && e.target.className && e.target.className.includes("map-container")) {
            e.preventDefault();
        }
    })

}, 500);
