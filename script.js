<script>
    const yesButton = document.getElementById("yesButton");
    const cartaContainer = document.getElementById("cartaContainer");

    yesButton.addEventListener("click", function() {
      cartaContainer.style.display = "block"; // Muestra la carta
    });

    // Crear los corazones (igual que antes)
    const body = document.body;
    for (let i = 0; i < 4; i++) {
      const heart = document.createElement("div");
      heart.classList.add("heart");
      heart.style.width = "50px";
      heart.style.height = "50px";
      heart.style.backgroundColor = "#ff0000";
      heart.style.borderRadius = "50% 50% 0 0";
      heart.style.transform = "rotate(-45deg)";
      heart.style.position = "absolute";
      heart.style.zIndex = "-1";

      // Posicionamiento de los corazones
      if (i === 0) {
        heart.style.top = "10px";
        heart.style.left = "10px";
      } else if (i === 1) {
        heart.style.bottom = "10px";
        heart.style.left = "10px";
      } else if (i === 2) {
        heart.style.top = "10px";
        heart.style.right = "10px";
      } else {
        heart.style.bottom = "10px";
        heart.style.right = "10px";
      }

      body.appendChild(heart);
    }
  </script>