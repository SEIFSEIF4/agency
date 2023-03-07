function scroll() {
    if (document.documentElement.scrollTop > 200) {
        document.getElementById("navbar").classList.add("noTransparent");
    } else {
        document.getElementById("navbar").classList.remove("noTransparent");
    }
}

window.onscroll = function () {
    scroll();
};

window.onload = function () {
    let website = new CountUp("website-count", 0, 250, 0, 3);
    website.start();
    let app = new CountUp("app-count", 0, 100, 0, 3);
    app.start();
    let user = new CountUp("user-count", 0, 10000, 0, 3);
    user.start();
    let video = new CountUp("video-count", 0, 30, 0, 3);
    video.start();
    FullYear();
};

    document.getElementById("fullYear").innerHTML = new Date().getFullYear();



(() => {
    "use strict";
    const forms = document.querySelectorAll(".needs-validation");
    Array.from(forms).forEach((form) => {
        form.addEventListener(
            "submit",
            (event) => {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add("was-validated");
            },
            false
        );
    });
})();
