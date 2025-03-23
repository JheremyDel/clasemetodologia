document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("colorButton");

    if (button) {
        button.addEventListener("click", function() {
            document.body.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        });
    } else {
        console.error("El botón no se encontró en el DOM.");
    }
});
