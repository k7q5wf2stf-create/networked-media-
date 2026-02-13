function updateClock() {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const messageElement = document.getElementById("message");

    let background = "";
    let textColor = "#ffffff";
    let quotes = [];

    // Morning 5am–12pm
    if (hour >= 5 && hour < 12) {
        background = "#f1deac";
        textColor = "#1a1a1a";
        quotes = [
            "The morning is a quiet promise.",
            "Begin gently.",
            "You are allowed to start again.",
            "Light is returning."
        ];
    }
    // Afternoon 12pm–5pm
    else if (hour >= 12 && hour < 17) {
        background = "#f4ad74";
        quotes = [
            "Stay with it.",
            "You are doing enough.",
            "Breathe between tasks.",
            "The day is unfolding."
        ];
    }
    // Evening 5pm–9pm
    else if (hour >= 17 && hour < 21) {
        background = "#725685";
        quotes = [
            "Let the light soften.",
            "You carried a lot today.",
            "Slow down with the sun.",
            "Evening holds you."
        ];
    }
    // Night 9pm–5am
    else {
        background = "#0e2039";
        quotes = [
            "Rest is part of the work.",
            "Darkness is not emptiness.",
            "You can let go now.",
            "Tomorrow will come."
        ];
    }

    const index = minute % quotes.length;
    const message = quotes[index];

    messageElement.style.opacity = 0;

    setTimeout(() => {
        messageElement.textContent = message;
        messageElement.style.opacity = 1;
        document.body.style.backgroundColor = background;
        messageElement.style.color = textColor;
    }, 800);
}

updateClock();
setInterval(updateClock, 60000);
