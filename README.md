# StudySync – Decentralized Focus & Pomodoro Battle Arena 🎯

**StudySync** is a gamified study platform designed to make focused learning more engaging, interactive, and motivating. It introduces a competitive study environment where users can participate in virtual study rooms, follow Pomodoro sessions, earn focus points, and track their productivity.

The idea behind StudySync is simple: make studying less lonely and more rewarding through gamification.

## ✨ Key Features

- **Pomodoro Timer:** A 25-minute study timer with start, pause, and reset controls.
- **Demo Mode:** A 10-second timer mode for quickly testing the application.
- **Virtual Study Rooms:** Create and join study rooms using room codes (simulated in the current prototype).
- **Focus Points:** Earn 25 points for every completed study session.
- **Distraction Tracker:** Keep track of distractions during study sessions.
- **Leaderboard:** Compare focus points with sample players.
- **Session History:** View completed sessions along with their dates, times, and earned points.
- **Progress Tracking:** Automatically save study progress using browser LocalStorage.
- **Reset Progress:** Clear saved points, sessions, and distraction records.

## 📸 Application Screenshot

### StudySync Dashboard

<img width="100%" alt="StudySync Dashboard" src="https://github.com/user-attachments/assets/bece6f49-4064-4ad6-8149-e80c59ca75fa" />

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Application structure |
| CSS3 | Styling and responsive layout |
| JavaScript (ES6 Modules) | Application functionality |
| LocalStorage | Client-side data persistence |
| Git & GitHub | Version control and project hosting |

## 📁 Project Structure

```text
StudySync/
│
├── index.html
├── style.css
│
├── js/
│   ├── app.js
│   ├── timer.js
│   ├── rooms.js
│   ├── focus.js
│   ├── leaderboard.js
│   └── history.js
│
├── docs/
│   └── project-overview.md
│
└── README.md
```

## 🚀 Getting Started

Follow these steps to run StudySync locally.

### Prerequisites

- Visual Studio Code
- A modern web browser
- Live Server extension for VS Code

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Kripa-Garg/StudySync.git
```

2. Navigate to the project directory:

```bash
cd StudySync
```

3. Open the folder in Visual Studio Code.

4. Install the Live Server extension if you haven't already.

5. Right-click `index.html` and select **Open with Live Server**.

6. The StudySync application will open in your browser.

## ⚙️ How It Works

1. Open the application in your browser.
2. Start a Pomodoro study session.
3. Use the pause or reset controls whenever required.
4. Complete a session to earn 25 focus points.
5. Track your distractions and study history.
6. Check the leaderboard to compare your progress.
7. Create or join a virtual study room using a room code.

## 💾 Data Storage

The current prototype uses browser LocalStorage to maintain:

- Focus points
- Completed study sessions
- Distraction count
- Session history

This allows user progress to remain available after refreshing the browser on the same device and browser.

## 🔮 Future Enhancements

The following features are planned for future development:

- Real-time multiplayer study rooms using WebSockets.
- Backend integration and database management.
- User authentication and individual profiles.
- Camera-based attention monitoring with user consent.
- Real-time leaderboard synchronization.
- Competitive focus battles and reward mechanisms.
- Advanced productivity analytics and study reports.

## 📌 Current Project Status

StudySync is currently a **functional frontend prototype**. Its timer, room simulation, focus-point system, leaderboard, session history, and local progress tracking are implemented.

Backend services, real-time multiplayer functionality, database integration, authentication, and camera-based attention monitoring are planned enhancements and are not yet implemented.

## 👩‍💻 Contributors

Developed as a Software Engineering project.

**Repository:** [StudySync – GitHub](https://github.com/Kripa-Garg/StudySync)

---

*Study smarter. Stay focused. Grow together.* 🚀
