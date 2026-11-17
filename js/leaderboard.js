
const players = [
    { name: "Alex", points: 150 },
    { name: "Sam", points: 100 },
    { name: "Jamie", points: 75 }
];

export function updateLeaderboard(userPoints) {
    const leaderboard = document.getElementById("leaderboard");
    const username = localStorage.getItem("studysyncUser") || "You";

    const rankings = [
        ...players,
        { name: username, points: userPoints, isUser: true }
    ];

    rankings.sort((a, b) => b.points - a.points);

    const medals = ["🥇", "🥈", "🥉"];

    leaderboard.innerHTML = "";

    let previousPoints = null;
    let currentRank = 0;

    rankings.forEach((player, index) => {
        if (player.points !== previousPoints) {
            currentRank = index + 1;
            previousPoints = player.points;
        }

        const item = document.createElement("li");

        item.style.listStyle = "none";
        item.style.padding = "12px";
        item.style.margin = "8px 0";
        item.style.borderRadius = "10px";
        item.style.display = "flex";
        item.style.justifyContent = "space-between";
        item.style.alignItems = "center";

        item.style.background = player.isUser
            ? "#f3dce8"
            : "#f3e7ed";

        item.style.fontWeight = player.isUser ? "bold" : "normal";

        const rank = document.createElement("span");
        rank.textContent = currentRank <= 3
            ? medals[currentRank - 1]
            : `#${currentRank}`;

        const name = document.createElement("span");
        name.textContent = player.name + (player.isUser ? " (You)" : "");

        const score = document.createElement("strong");
        score.textContent = player.points + " pts";

        item.append(rank, name, score);
        leaderboard.appendChild(item);
    });
}
