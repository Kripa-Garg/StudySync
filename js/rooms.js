
let currentRoom = null;

export function createRoom() {
    const username = document.getElementById("username").value.trim();

    if (!username) {
        alert("Please enter your name first!");
        return;
    }

    const roomCode = Math.floor(100000 + Math.random() * 900000).toString();

    currentRoom = roomCode;

    localStorage.setItem("studysyncRoom", roomCode);
    localStorage.setItem("studysyncUser", username);

    document.getElementById("roomCode").textContent =
        "Your Room Code: " + roomCode;

    document.getElementById("roomStatus").textContent =
        username + " is in the study room!";

    document.querySelector(".avatar-name").textContent = username;
    document.querySelector(".avatar-caption").textContent =
        "Focus mode activated!";

    alert("Room created! Your code is: " + roomCode);
}

export function joinRoom() {
    const username = document.getElementById("username").value.trim();

    const enteredCode = document.getElementById("joinCode")
        .value.trim();

    const savedRoom = localStorage.getItem("studysyncRoom");

    if (!username || !enteredCode) {
        alert("Please enter your name and room code!");
        return;
    }

    if (enteredCode === savedRoom && savedRoom !== null) {
        currentRoom = enteredCode;

        document.getElementById("roomStatus").textContent =
            username + " joined room " + enteredCode + "!";

        document.querySelector(".avatar-name").textContent = username;
        document.querySelector(".avatar-caption").textContent =
            "Studying together!";

        alert("Successfully joined the room!");
    } else {
        alert("Invalid room code! Create a room first in this browser.");
    }
}
