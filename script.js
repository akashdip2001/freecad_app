document.addEventListener("DOMContentLoaded", function () {
    const videoCards = document.querySelectorAll(".video-card");

    videoCards.forEach((card) => {
        const iframe = card.querySelector("iframe");
        const fullscreenButton = card.querySelector(".fullscreen-button");

        fullscreenButton.addEventListener("click", () => {
            if (iframe.requestFullscreen) {
                iframe.requestFullscreen();
            } else if (iframe.mozRequestFullScreen) {
                iframe.mozRequestFullScreen();
            } else if (iframe.webkitRequestFullscreen) {
                iframe.webkitRequestFullscreen();
            } else if (iframe.msRequestFullscreen) {
                iframe.msRequestFullscreen();
            }
        });
    });
});
