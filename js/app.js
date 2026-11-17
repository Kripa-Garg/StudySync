
import {
    startTimer,
    pauseTimer,
    resetTimer,
    setTimerMode
} from "./timer.js";

import {
    completeSession,
    recordDistraction,
    resetProgress
} from "./focus.js";

import {
    createRoom,
    joinRoom
} from "./rooms.js";

// TIMER CONTROLS

document.getElementById("startBtn").addEventListener("click", () => {
    startTimer(() => {
        completeSession();
    });
});

document.getElementById("pauseBtn").addEventListener("click", () => {
    pauseTimer();
});

document.getElementById("resetBtn").addEventListener("click", () => {
    resetTimer();
});

// TIMER MODES

document.getElementById("normalMode").addEventListener("click", () => {
    setTimerMode("normal");

    document.getElementById("normalMode").classList.add("active");
    document.getElementById("demoMode").classList.remove("active");
});

document.getElementById("demoMode").addEventListener("click", () => {
    setTimerMode("demo");

    document.getElementById("demoMode").classList.add("active");
    document.getElementById("normalMode").classList.remove("active");
});

// FOCUS TRACKER

document.getElementById("distractionBtn").addEventListener("click", () => {
    recordDistraction();
});

document.getElementById("resetProgressBtn").addEventListener("click", () => {
    resetProgress();
});

// STUDY ROOM

document.getElementById("createRoomBtn").addEventListener("click", () => {
    createRoom();
});

document.getElementById("joinRoomBtn").addEventListener("click", () => {
    joinRoom();
});
