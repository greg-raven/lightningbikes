document.addEventListener("DOMContentLoaded", function () {
    "use strict";
    const path = window.location.pathname;
    const pathToIdMap = {
        "about": "about",
        "cranks": "home",
        "cycledyn": "about",
        "e-lightning": "home",
        "f22": "home",
        "f40": "racing",
        "f90": "home",
        "howtobuy": "buying",
        "introduction": "intro",
        "media": "media",
        "midracers": "racing",
        "p38": "home",
        "phantom": "home",
        "photos": "photos",
        "r84": "home",
        "racing": "racing",
        "riders": "riders",
        "search": "search",
        "stealth": "home",
        "store": "store",
        "support": "support",
        "t38": "racing",
        "thunderbolt": "home",
        "tips": "tips",
        "u2": "racing",
        "videos": "videos",
        "voyager": "home",
        "white-lightning": "racing",
        "x2": "racing",
        "x4": "racing"
    };

    Object.keys(pathToIdMap).forEach(function (key) {
        if (path.includes(key)) {
            document.getElementById(pathToIdMap[key])?.classList.add("active");
            return;
        }
    });

    if (path.endsWith("company.html")) {
        document.getElementById("about")?.classList.add("active");
    }
    if (path.endsWith("search.html")) {
        document.getElementById("search")?.classList.add("active");
    }
});
