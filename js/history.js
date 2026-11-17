
const HISTORY_KEY = "studysyncHistory";

// Load saved session history
function getHistory() {
    return JSON.parse(localStorage.getItem(HISTORY_KEY)) || [];
}

// Save session history
function saveHistory(history) {
    localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
}

// Add a completed session
export function addSessionHistory(points) {
    const history = getHistory();

    const newSession = {
        number: history.length + 1,
        points: points,
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString()
    };

    history.unshift(newSession);

    saveHistory(history);
    displayHistory();
}

// Display all completed sessions
export function displayHistory() {
    const history = getHistory();
    const historyList = document.getElementById("sessionHistory");

    if (!historyList) return;

    historyList.innerHTML = "";

    if (history.length === 0) {
        historyList.innerHTML =
            "<p class='empty-history'>No completed sessions yet. Start studying!</p>";
        return;
    }

    history.forEach(session => {
        const item = document.createElement("div");

        item.className = "history-item";

        const details = document.createElement("div");

        const title = document.createElement("strong");
        title.textContent = `Focus Session #${session.number}`;

        const date = document.createElement("small");
        date.textContent = `${session.date} • ${session.time}`;

        details.append(title, date);

        const score = document.createElement("span");
        score.className = "history-points";
        score.textContent = `+${session.points} pts`;

        item.append(details, score);
        historyList.appendChild(item);
    });
}

// Load history when the page opens
displayHistory();
