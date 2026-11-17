
import { updateLeaderboard } from "./leaderboard.js";
import {
    addSessionHistory,
    displayHistory
} from "./history.js";

let focusPoints = Number(localStorage.getItem("focusPoints")) || 0;
let completedSessions = Number(localStorage.getItem("completedSessions")) || 0;
let distractions = Number(localStorage.getItem("distractions")) || 0;

function displayProgress() {
    document.getElementById("points").textContent = focusPoints;
    document.getElementById("sessions").textContent = completedSessions;
    document.getElementById("distractions").textContent = distractions;

    updateLeaderboard(focusPoints);
    displayHistory();
}

function saveProgress() {
    localStorage.setItem("focusPoints", focusPoints);
    localStorage.setItem("completedSessions", completedSessions);
    localStorage.setItem("distractions", distractions);
}

export function completeSession() {
    completedSessions++;
    focusPoints += 25;

    saveProgress();

    // Add the completed session to history
    addSessionHistory(25);

    displayProgress();

    alert("Congratulations! You earned 25 Focus Points! ⭐");
}

export function recordDistraction() {
    distractions++;

    saveProgress();
    displayProgress();
}

export function resetProgress() {
    const confirmed = confirm(
        "Are you sure you want to reset all your progress?"
    );

    if (!confirmed) return;

    focusPoints = 0;
    completedSessions = 0;
    distractions = 0;

    saveProgress();

    // Clear session history too
    localStorage.removeItem("studysyncHistory");

    displayProgress();

    alert("Your progress has been reset!");
}

displayProgress();
