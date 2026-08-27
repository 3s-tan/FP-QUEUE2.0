"use strict";


/* =========================================
   BOARD DATA nganiiiiiiiiiiii

   Status options: define options, case sensitive boiiii!
   - "Queue"
   - "Ongoing"
   - "Completed"

   Priority options:
   - "High"
   - "Medium"
   - "Low"

   nanggugulo to oh!!!!
========================================= */

const boards = [
/* =========================================
IN-PROGRESS PO MGA SERRRRRRR
========================================= */
    {
        id: 1,
        boardName: "TASB",
        status: "Ongoing",
        stage: "Continuity",
        progress: 90,
        priority: "High",
        targetWorkWeek: "WW50",
        programAvailable: ""
    },
    {
        id: 2,
        boardName: "SPG",
        status: "Ongoing",
        stage: "IC-Quicktest-Compatibility",
        progress: 55,
        priority: "High",
        targetWorkWeek: "WW50",
        programAvailable: ""
    },
    {
        id: 3,
        boardName: "TMU Analog",
        status: "Ongoing",
        stage: "Relay Test",
        progress: 40,
        priority: "High",
        targetWorkWeek: "WW50",
        programAvailable: ""
    },
    {
        id: 4,
        boardName: "TDSA",
        status: "Ongoing",
        stage: "Assigning Pins",
        progress: 10,
        priority: "High",
        targetWorkWeek: "WW50",
        programAvailable: ""
    },
    {
        id: 5,
        boardName: "DVI2K",
        status: "Ongoing",
        stage: "Resistance Test",
        progress: 30,
        priority: "High",
        targetWorkWeek: "WW50",
        programAvailable: ""
    },
/* =========================================
QUEUE -KWEWE NGANIIII
========================================= */
    {
        id: 6,
        boardName: "LION16",
        status: "Queue",
        stage: "Waiting for File Converter",
        progress: 0,
        priority: "Medium",
        targetWorkWeek: "WW50",
        programAvailable: ""
    },
    {
        id: 7,
        boardName: "GP4-Translator",
        status: "Queue",
        stage: "Waiting for Files from Customer",
        progress: 0,
        priority: "High",
        targetWorkWeek: "WW50",
        programAvailable: ""
    },
    {
        id: 8,
        boardName: "LTX88",
        status: "Queue",
        stage: "Waiting for the Board",
        progress: 0,
        priority: "High",
        targetWorkWeek: "WW50",
        programAvailable: ""
    },
    {
        id: 9,
        boardName: "MPDCMOD",
        status: "Queue",
        stage: "On Hold",
        progress: 0,
        priority: "Low",
        targetWorkWeek: "WW50",
        programAvailable: ""
    },
    {
        id: 10,
        boardName: "ADACON",
        status: "Queue",
        stage: "On Hold",
        progress: 0,
        priority: "Medium",
        targetWorkWeek: "WW50",
        programAvailable: ""
    },
    {
        id: 10,
        boardName: "VHFDIGCC",
        status: "Queue",
        stage: "On Hold",
        progress: 0,
        priority: "Low",
        targetWorkWeek: "WW50",
        programAvailable: ""
    },
    {
        id: 10,
        boardName: "TS227",
        status: "Queue",
        stage: "On Hold",
        progress: 0,
        priority: "Low",
        targetWorkWeek: "WW50",
        programAvailable: ""
    },

/* =========================================
KUMPLETOOOO NAAAAAAA!!!!!!!!!!!
========================================= */
    {
        id: 11,
        boardName: "DIM Rider Board",
        status: "Completed",
        stage: "Completed",
        progress: 100,
        priority: "",
        targetWorkWeek: "",
        programAvailable: "Quick Test, Resistor Test, Capacitor Test, Continuity Test,"
    },
    {
        id: 12,
        boardName: "DIFF-VS-HICM-GL",
        status: "Completed",
        stage: "Completed",
        progress: 100,
        priority: "",
        targetWorkWeek: "",
        programAvailable: "Quick Test, Continuity Test, Relay Test, Capacitor Test, Diode Test"
    },
    {
        id: 13,
        boardName: "MUX Card",
        status: "Completed",
        stage: "Completed",
        progress: 100,
        priority: "",
        targetWorkWeek: "",
        programAvailable: "Relay Test"
    },
    {
        id: 14,
        boardName: "SZ",
        status: "Completed",
        stage: "Completed",
        progress: 100,
        priority: "",
        targetWorkWeek: "",
        programAvailable: "Resistor Test, Capacitor Test"
    },
    {
        id: 15,
        boardName: "HMOD",
        status: "Completed",
        stage: "Completed",
        progress: 100,
        priority: "",
        targetWorkWeek: "",
        programAvailable: "Resistor Test, Capacitor Test, Inductor Test, Relay Test"
    },
    {
        id: 16,
        boardName: "Standard Cable",
        status: "Completed",
        stage: "Completed",
        progress: 100,
        priority: "",
        targetWorkWeek: "",
        programAvailable: "Continuity Test"
    },
    {
        id: 17,
        boardName: "PLFS-MF",
        status: "Completed",
        stage: "Completed",
        progress: 100,
        priority: "",
        targetWorkWeek: "",
        programAvailable: "Relay Test"
    },
    {
        id: 18,
        boardName: "AAPU Board",
        status: "Completed",
        stage: "Completed",
        progress: 100,
        priority: "",
        targetWorkWeek: "",
        programAvailable: "Relay Test"
    }
];


/* =========================================
   animation
========================================= */
function animateProgressCards(){

    const progressBars =
        document.querySelectorAll(
            ".animated-progress"
        );

    const percentages =
        document.querySelectorAll(
            ".animated-percentage"
        );

    progressBars.forEach(bar => {

        const target =
            parseInt(
                bar.dataset.progress
            );

        setTimeout(() => {

            bar.style.width =
                target + "%";

        },100);

    });

    percentages.forEach(label => {

        const target =
            parseInt(
                label.dataset.progress
            );

        let current = 0;

        const timer =
            setInterval(() => {

                current++;

                label.textContent =
                    current + "%";

                if(current >= target){

                    clearInterval(timer);

                }

            },15);

    });

}

/* =========================================
   ELEMENT REFERENCES
========================================= */
const elements = {
    totalCount:
        document.getElementById("totalCount"),

    queueCount:
        document.getElementById("queueCount"),

    ongoingCount:
        document.getElementById("ongoingCount"),

    completedCount:
        document.getElementById("completedCount"),

    summaryCards:
        document.querySelectorAll(".summary-card"),

    contentPanel:
        document.getElementById("contentPanel"),

    contentEyebrow:
        document.getElementById("contentEyebrow"),

    contentTitle:
        document.getElementById("contentTitle"),

    contentDescription:
        document.getElementById("contentDescription"),

    contentArea:
        document.getElementById("contentArea"),

    closeContent:
        document.getElementById("closeContent"),

    themeToggle:
        document.getElementById("themeToggle"),

    themeIcon:
        document.getElementById("themeIcon"),

    themeText:
        document.getElementById("themeText"),

    currentDateTime:
        document.getElementById("currentDateTime"),

    lastUpdated:
        document.getElementById("lastUpdated")
};


/* =========================================
   APPLICATION STATE
========================================= */

let currentView = null;


/* =========================================
   UTILITY FUNCTIONS
========================================= */

function escapeHtml(value) {
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}


function normalizeProgress(progress) {
    const numericProgress = Number(progress);

    if (!Number.isFinite(numericProgress)) {
        return 0;
    }

    return Math.min(
        100,
        Math.max(0, numericProgress)
    );
}


function getBoardsByStatus(status) {
    return boards.filter(
        board => board.status === status
    );
}


function getPriorityWeight(priority) {
    const priorityWeights = {
        High: 1,
        Medium: 2,
        Low: 3
    };

    return priorityWeights[priority] ?? 4;
}


function getWorkWeekNumber(workWeek) {
    const workWeekNumber =
        String(workWeek).replace(/\D/g, "");

    return Number(workWeekNumber) || 999;
}


function getPriorityClass(priority) {
    const priorityClasses = {
        High: "priority-high",
        Medium: "priority-medium",
        Low: "priority-low"
    };

    return (
        priorityClasses[priority] ||
        "priority-low"
    );
}


function getStatusClass(status) {
    const statusClasses = {
        Queue: "status-queue",
        Ongoing: "status-ongoing",
        Completed: "status-completed"
    };

    return (
        statusClasses[status] ||
        "status-queue"
    );
}


/* =========================================
   SUMMARY COUNTS
========================================= */

function updateSummaryCounts() {
    const queueBoards =
        getBoardsByStatus("Queue");

    const ongoingBoards =
        getBoardsByStatus("Ongoing");

    const completedBoards =
        getBoardsByStatus("Completed");

    elements.totalCount.textContent =
        boards.length;

    elements.queueCount.textContent =
        queueBoards.length;

    elements.ongoingCount.textContent =
        ongoingBoards.length;

    elements.completedCount.textContent =
        completedBoards.length;
}


/* =========================================
   ACTIVE SUMMARY CARD
========================================= */

function updateActiveCard(selectedView) {
    elements.summaryCards.forEach(card => {
        const isSelected =
            card.dataset.view === selectedView;

        card.classList.toggle(
            "active",
            isSelected
        );

        card.setAttribute(
            "aria-expanded",
            String(isSelected)
        );
    });
}


/* =========================================
   TOTAL BOARDS VIEW
========================================= */

function createTotalBoardsView() {
    if (boards.length === 0) {
        return createEmptyState(
            "No boards available",
            "No board records have been added."
        );
    }

    const tableRows = boards
        .map((board, index) => {
            const boardName =
                escapeHtml(board.boardName);

            const status =
                escapeHtml(board.status);

            const statusClass =
                getStatusClass(board.status);

            let boardDetails = "";

            if (board.status === "Queue") {
                boardDetails =
                    escapeHtml(board.targetWorkWeek);
            }

            if (board.status === "Ongoing") {
                boardDetails =
                    `${normalizeProgress(
                        board.progress
                    )}% - ${escapeHtml(
                        board.stage
                    )}`;
            }

            if (board.status === "Completed") {
                boardDetails =
                    escapeHtml(
                        board.programAvailable ||
                        "Program available"
                    );
            }

            return `
                <tr>
                    <td class="rank-column">
                        <span class="rank">
                            ${index + 1}
                        </span>
                    </td>

                    <td>
                        <span class="board-name">
                            ${boardName}
                        </span>
                    </td>

                    <td class="status-column">
                        <span
                            class="badge ${statusClass}"
                        >
                            ${status}
                        </span>
                    </td>

                    <td>
                        ${boardDetails}
                    </td>
                </tr>
            `;
        })
        .join("");

    return `
        <div class="table-wrapper">

            <table class="data-table">

                <thead>
                    <tr>
                        <th class="rank-column">#</th>
                        <th>Board Name</th>
                        <th class="status-column">
                            Status
                        </th>
                        <th>Current Information</th>
                    </tr>
                </thead>

                <tbody>
                    ${tableRows}
                </tbody>

            </table>

        </div>
    `;
}


/* =========================================
   QUEUE VIEW
========================================= */

function createQueueView() {
    const queueBoards =
        getBoardsByStatus("Queue")
            .sort((boardA, boardB) => {
                const priorityDifference =
                    getPriorityWeight(
                        boardA.priority
                    ) -
                    getPriorityWeight(
                        boardB.priority
                    );

                if (priorityDifference !== 0) {
                    return priorityDifference;
                }

                const workWeekDifference =
                    getWorkWeekNumber(
                        boardA.targetWorkWeek
                    ) -
                    getWorkWeekNumber(
                        boardB.targetWorkWeek
                    );

                if (workWeekDifference !== 0) {
                    return workWeekDifference;
                }

                return boardA.boardName.localeCompare(
                    boardB.boardName
                );
            });

    if (queueBoards.length === 0) {
        return createEmptyState(
            "Programming queue is empty",
            "There are no boards waiting for FP programming."
        );
    }

    const tableRows = queueBoards
        .map((board, index) => {
            const boardName =
                escapeHtml(board.boardName);

            const priority =
                escapeHtml(board.priority);

            const targetWorkWeek =
                escapeHtml(board.targetWorkWeek);

            const priorityClass =
                getPriorityClass(board.priority);

            return `
                <tr>
                    <td class="rank-column">
                        <span class="rank">
                            ${index + 1}
                        </span>
                    </td>

                    <td>
                        <span class="board-name">
                            ${boardName}
                        </span>
                    </td>

                    <td class="priority-column">
                        <span
                            class="badge ${priorityClass}"
                        >
                            ${priority}
                        </span>
                    </td>

                    <td class="week-column">
                        <span class="work-week">
                            ${targetWorkWeek}
                        </span>
                    </td>
                </tr>
            `;
        })
        .join("");

    return `
        <div class="table-wrapper">

            <table class="data-table">

                <thead>
                    <tr>
                        <th class="rank-column">#</th>
                        <th>Board Name</th>
                        <th class="priority-column">
                            Priority
                        </th>
                        <th class="week-column">
                            Target WW
                        </th>
                    </tr>
                </thead>

                <tbody>
                    ${tableRows}
                </tbody>

            </table>

        </div>
    `;
}


/* =========================================
   ONGOING VIEW
========================================= */

function createOngoingView() {
    const ongoingBoards =
        getBoardsByStatus("Ongoing")
            .sort(
                (boardA, boardB) =>
                    boardB.progress -
                    boardA.progress
            );

    if (ongoingBoards.length === 0) {
        return createEmptyState(
            "No ongoing programming",
            "There are currently no boards being programmed."
        );
    }

    const ongoingCards = ongoingBoards
        .map(board => {
            const boardName =
                escapeHtml(board.boardName);

            const stage =
                escapeHtml(board.stage);

            const targetWorkWeek =
                escapeHtml(board.targetWorkWeek);

            const progress =
                normalizeProgress(board.progress);

            return `
                <article class="progress-card">

                    <div class="progress-card-header">

                        <h3 title="${boardName}">
                            ${boardName}
                        </h3>

                        <span 
                            class="progress-percentage animated-percentage"
                            data-progress="${progress}">
                            0%
                        </span>

                    </div>

                    <p class="stage-label">
                        Current Stage
                    </p>

                    <p class="stage-name">
                        ${stage}
                    </p>

                    <div
                        class="progress-track"
                        role="progressbar"
                        aria-label="${boardName} progress"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        aria-valuenow="${progress}"
                    >
                        <div
                            class="progress-fill animated-progress"
                            data-progress="${progress}"
                            style="width:0%">
                        </div>
                    </div>

                    <div class="progress-footer">

                        <span>
                            Programming Progress
                        </span>

                        <span class="target-week">
                            Target ${targetWorkWeek}
                        </span>

                    </div>

                </article>
            `;
        })
        .join("");

    return `
        <div class="ongoing-grid">
            ${ongoingCards}
        </div>
    `;
}


/* =========================================
   COMPLETED VIEW
========================================= */

function createCompletedView() {
    const completedBoards =
        getBoardsByStatus("Completed");

    if (completedBoards.length === 0) {
        return createEmptyState(
            "No completed boards",
            "No FP programs have been marked as completed."
        );
    }

    const tableRows = completedBoards
        .map((board, index) => {
            const boardName =
                escapeHtml(board.boardName);

            const programAvailable =
                escapeHtml(
                    board.programAvailable ||
                    "Program available"
                );

            return `
                <tr>
                    <td class="rank-column">
                        <span class="rank">
                            ${index + 1}
                        </span>
                    </td>

                    <td>
                        <span class="board-name">
                            ${boardName}
                        </span>
                    </td>

                    <td>
                        ${programAvailable}
                    </td>
                </tr>
            `;
        })
        .join("");

    return `
        <div class="table-wrapper">

            <table class="data-table">

                <thead>
                    <tr>
                        <th class="rank-column">#</th>
                        <th>Board Name</th>
                        <th>FP Program Created</th>
                    </tr>
                </thead>

                <tbody>
                    ${tableRows}
                </tbody>

            </table>

        </div>
    `;
}


/* =========================================
   EMPTY STATE
========================================= */

function createEmptyState(title, description) {
    return `
        <div class="empty-state">

            <div class="empty-icon">
                ✓
            </div>

            <h3>
                ${escapeHtml(title)}
            </h3>

            <p>
                ${escapeHtml(description)}
            </p>

        </div>
    `;
}


/* =========================================
   VIEW CONFIGURATION
========================================= */

const viewConfiguration = {
    total: {
        eyebrow: "ALL BOARD RECORDS",
        title: "Total Boards",
        description:
            "Overview of every board currently monitored.",
        renderer: createTotalBoardsView
    },

    queue: {
        eyebrow: "PROGRAMMING QUEUE",
        title: "Boards on Queue",
        description:
            "Boards are sorted by priority and target work week.",
        renderer: createQueueView
    },

    ongoing: {
        eyebrow: "ACTIVE PROGRAMMING",
        title: "Ongoing Boards",
        description:
            "Current programming stage and completion progress.",
        renderer: createOngoingView
    },

    completed: {
        eyebrow: "AVAILABLE FP PROGRAMS",
        title: "Completed Boards",
        description:
            "Completed boards and their available FP programs.",
        renderer: createCompletedView
    }
};


/* =========================================
   OPEN AND CLOSE CONTENT
========================================= */

function showView(viewName) {
    const selectedView =
        viewConfiguration[viewName];

    if (!selectedView) {
        return;
    }

    if (
        currentView === viewName &&
        !elements.contentPanel.hidden
    ) {
        closeContentPanel();
        return;
    }

    currentView = viewName;

    elements.contentEyebrow.textContent =
        selectedView.eyebrow;

    elements.contentTitle.textContent =
        selectedView.title;

    elements.contentDescription.textContent =
        selectedView.description;

    elements.contentArea.innerHTML =
        selectedView.renderer();

        if(viewName === "ongoing"){

    setTimeout(() => {

        animateProgressCards();

    },50);

}

    elements.contentPanel.hidden = false;

    updateActiveCard(viewName);
}


function closeContentPanel() {
    currentView = null;

    elements.contentPanel.hidden = true;
    elements.contentArea.innerHTML = "";

    updateActiveCard(null);
}


/* =========================================
   THEME
========================================= */

function updateThemeButton(isDarkMode) {
    elements.themeIcon.textContent =
        isDarkMode ? "☀️" : "🌙";

    elements.themeText.textContent =
        isDarkMode
            ? "Light Mode"
            : "Dark Mode";

    elements.themeToggle.setAttribute(
        "aria-label",
        isDarkMode
            ? "Switch to light mode"
            : "Switch to dark mode"
    );
}


function applySavedTheme() {
    const savedTheme =
        localStorage.getItem(
            "fp-dashboard-theme"
        );

    const useDarkMode =
        savedTheme === "dark";

    document.body.classList.toggle(
        "dark-mode",
        useDarkMode
    );

    updateThemeButton(useDarkMode);
}


function toggleTheme() {
    const isDarkMode =
        document.body.classList.toggle(
            "dark-mode"
        );

    localStorage.setItem(
        "fp-dashboard-theme",
        isDarkMode ? "dark" : "light"
    );

    updateThemeButton(isDarkMode);
}


/* =========================================
   DATE AND TIME
========================================= */

function updateDateTime() {
    const currentDate = new Date();

    elements.currentDateTime.textContent =
        currentDate.toLocaleString(
            "en-PH",
            {
                weekday: "short",
                month: "short",
                day: "numeric",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit"
            }
        );
}


function updateLastUpdated() {
    const currentDate = new Date();

    elements.lastUpdated.textContent =
        `Last updated: ${
            currentDate.toLocaleString(
                "en-PH",
                {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit"
                }
            )
        }`;
}


/* =========================================
   EVENT LISTENERS
========================================= */

elements.summaryCards.forEach(card => {
    card.addEventListener(
        "click",
        () => {
            showView(card.dataset.view);
        }
    );
});


elements.closeContent.addEventListener(
    "click",
    closeContentPanel
);


elements.themeToggle.addEventListener(
    "click",
    toggleTheme
);


/* =========================================
   INITIALIZATION
========================================= */

function initializeDashboard() {
    applySavedTheme();
    updateSummaryCounts();
    updateDateTime();
    updateLastUpdated();

    window.setInterval(
        updateDateTime,
        1000
    );
}


initializeDashboard();