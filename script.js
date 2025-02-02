document.querySelector(".button").addEventListener("click", function (event) {
    event.preventDefault(); // Evita que el enlace recargue la página

    for (let i = 0; i < 10; i++) {
        createHeart();
    }

    // Mostrar el mensaje después de 2 segundos (cuando los corazones terminan)
    setTimeout(() => {
        document.querySelector(".love-message").style.display = "block";
    }, 2000);
});

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💗💗💗💗💗💗";
    
    const xPos = Math.random() * window.innerWidth;
    heart.style.left = `${xPos}px`;

    document.querySelector(".hearts-container").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 2000); // Elimina el corazón después de la animación
}