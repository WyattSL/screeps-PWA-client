setTimeout(() => {
    const con = document.body;

    // Stop PWA scrolling
    window.addEventListener("scroll", (e) => {
        e.preventDefault();
        window.scrollTo(0, 0);
    })

    let touchDown = false;
    let touchStart = {};

    con.addEventListener("touchstart", (e) => {
        console.log("touchstart",e)
        if (e.target && e.target.className && e.target.className.includes("map-container")) {
            console.log("pass");
            e.preventDefault();
            if (e.touches.length > 1) return;
            console.log("pass2");
            touchDown = true;
            touchStart = {x: e.touches[0].screenX, y: e.touches[0].screenY, dragged: false}
        }
    })

    con.addEventListener("touchdrag", (e) => {
        console.log("touchdrag",e)
        if (e.target && e.target.className && e.target.className.includes("map-container")) {
            console.log("pass");
            e.preventDefault();
            let tX = e.touches[0].screenX;
            let tY = e.touches[0].screenY;
            let changeX = (tX - touchStart.x) / 10;
            let changeY = (tY - touchStart.y) / 10;
            touchStart.x = tX;
            touchStart.y = tY;
            touchStart.changed = true;
            console.log("DRAG!",changeX,changeY)
            let curX = Number(location.href.split("?pos=")[1].split(",")[0]);
            let curY = Number(location.href.split(",")[1]);
            location.href = location.href.split("?")[0] + "?pos=" + (curX - changeX) + "," + (curY - changeY);
        }
    })

    con.addEventListener("touchend", (e) => {
        console.log("touchend",e)
        if (e.target && e.target.className && e.target.className.includes("map-container")) {
            console.log("pass");
            e.preventDefault();
            if (e.touches.length >= 1) return;
            console.log("pass2");

            let tX = e.changedTouches[0].screenX;
            let tY = e.changedTouches[0].screenY;
            let changeX = (tX - touchStart.x) / 10;
            let changeY = (tY - touchStart.y) / 10;
            console.log("END!",changeX,changeY)
            let curX = Number(location.href.split("?pos=")[1].split(",")[0]);
            let curY = Number(location.href.split(",")[1]);
            location.href = location.href.split("?")[0] + "?pos=" + (curX - changeX) + "," + (curY - changeY);

            touchDown = false;
            let tE = {x: e.changedTouches[0].screenX, y: e.changedTouches[0].screenY}
            if (touchStart.dragged) return;
            let dist = Math.sqrt(((tE.y-touchStart.y)**2) + ((tE.x-touchStart.x)**2));
            if (dist < 7) {
                let wms = angular.element(document.getElementsByClassName("world-map")[0]).scope();
                wms.WorldMap.goToRoom(e);
            }
        }
    })

    con.addEventListener("touchcancel", (e) => {
        console.log("touchcancel",e)
        if (e.target && e.target.className && e.target.className.includes("map-container")) {
            console.log("pass");
            e.preventDefault();
            if (e.touches.length >= 1) return;
            console.log("pass2");
            touchDown = false;
        }
    })

}, 500);
