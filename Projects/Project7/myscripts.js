// PRELOAD IMAGES
function preloadImages() {
    var imageList = [
        "Images/Fullsize/print1.jpg",
        "Images/Fullsize/print2.jpg",
        "Images/logo2.png"
    ];

    for (var i = 0; i < imageList.length; i++) {
        var img = new Image();
        img.src = imageList[i];
    }
}

// SWAP IMAGE FOR THUMBNAILS
function swapImage(newSrc) {
    document.getElementById("fullsize").src = newSrc;
}

// LOGO ROLLOVER
window.onload = function() {
    // Set up image rollover for logo
    var logo = document.getElementById("logo");

    if (logo) {
        logo.onmouseover = function() {
            this.src = "Images/logo2.png"; // rollover image
        };
        logo.onmouseout = function() {
            this.src = "Images/logo.png"; // original image
        };
    }

    // Also call preloadImages when the window loads
    preloadImages();
};
