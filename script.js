const surpriseBtn = document.getElementById("surpriseBtn");
const message = document.getElementById("message");
const confettiContainer = document.getElementById("confetti-container");

surpriseBtn.addEventListener("click", () => {

    // Show birthday message
    message.classList.remove("hidden");

    // Change button text
    surpriseBtn.textContent = "🎉 Happy Birthday! 🎉";

    // Create confetti
    createConfetti();

    // Scroll smoothly to the message
    setTimeout(() => {
        message.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }, 200);
});

function createConfetti() {

    for (let i = 0; i < 100; i++) {

        const confetti = document.createElement("div");

        confetti.classList.add("confetti");

        // Random position
        confetti.style.left = Math.random() * 100 + "vw";

        // Random size
        const size = Math.random() * 8 + 5;
        confetti.style.width = size + "px";
        confetti.style.height = size + "px";

        // Random animation speed
        confetti.style.animationDuration =
            Math.random() * 2 + 2 + "s";

        // Random delay
        confetti.style.animationDelay =
            Math.random() * 0.5 + "s";

        // Random shape
        confetti.style.borderRadius =
            Math.random() > 0.5 ? "50%" : "2px";

        confettiContainer.appendChild(confetti);

        // Remove after animation
        setTimeout(() => {
            confetti.remove();
        }, 4000);
    }
}