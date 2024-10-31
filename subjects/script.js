document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.getElementById("menuButton");
    const closeButton = document.getElementById("closeButton");
    const offCanvas = document.getElementById("offCanvas");

    // Open the sidebar
    menuButton.addEventListener("click", function() {
        offCanvas.classList.add("open");
        menuButton.style.display="none";
    });

    // Close the sidebar
    closeButton.addEventListener("click", function() {
        offCanvas.classList.remove("open");
        menuButton.style.display="block";
    });
});
