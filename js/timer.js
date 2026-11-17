
let timeLeft = 25 * 60;
let timerInterval = null;
let selectedDuration = 25 * 60;

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    document.getElementById("timer").textContent =
        `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

    const progress = (timeLeft / selectedDuration) * 100;
    document.getElementById("progressFill").style.width = progress + "%";
}

export function setTimerMode(mode) {
    pauseTimer();

    selectedDuration = mode === "demo" ? 10 : 25 * 60;
    timeLeft = selectedDuration;

    document.getElementById("sessionLabel").textContent =
        mode === "demo"
            ? "DEMO SESSION • 10 SEC"
            : "FOCUS SESSION • 25 MIN";

    updateTimerDisplay();
}

export function startTimer(onComplete) {
    if (timerInterval !== null) return;

    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();

        if (timeLeft <= 0) {
            pauseTimer();
            timeLeft = 0;
            updateTimerDisplay();

            alert("Focus session completed! 🎉");
            onComplete();
        }
    }, 1000);
}

export function pauseTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}

export function resetTimer() {
    pauseTimer();
    timeLeft = selectedDuration;
    updateTimerDisplay();
}
