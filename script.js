document.addEventListener('DOMContentLoaded', () => {
    const totalQuestions = 60; // Adjust to 30 for your requirement
    let currentQuestion = 1;
    let timeLeft = 90 * 60; // 90 minutes in seconds
    let questionStatus = Array(totalQuestions).fill('not-visited');

    // Timer
    const timerElement = document.getElementById('timer');
    setInterval(() => {
        timeLeft--;
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerElement.textContent = `Time Left: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }, 1000);

    // Question Palette
    const palette = document.getElementById('question-palette');
    for (let i = 1; i <= totalQuestions; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        button.className = `palette-button ${questionStatus[i-1]}`;
        button.addEventListener('click', () => {
            currentQuestion = i;
            updateQuestion();
        });
        palette.appendChild(button);
    }

    // Update Question (Placeholder - replace with your 30 questions)
    function updateQuestion() {
        document.getElementById('question-number').textContent = currentQuestion;
        // Replace with your dynamic question data (e.g., 5-year plan questions)
        document.getElementById('question-text').textContent = `Question ${currentQuestion} text here (5-Year Plan)`;
        // Clear previous selections
        const radios = document.getElementsByName('answer');
        radios.forEach(radio => radio.checked = false);
    }

    // Navigation Buttons
    document.getElementById('save-next').addEventListener('click', () => {
        questionStatus[currentQuestion - 1] = 'answered';
        updatePalette();
        if (currentQuestion < totalQuestions) currentQuestion++;
        updateQuestion();
    });

    document.getElementById('mark-review').addEventListener('click', () => {
        questionStatus[currentQuestion - 1] = 'marked';
        updatePalette();
        if (currentQuestion < totalQuestions) currentQuestion++;
        updateQuestion();
    });

    document.getElementById('clear').addEventListener('click', () => {
        const radios = document.getElementsByName('answer');
        radios.forEach(radio => radio.checked = false);
        questionStatus[currentQuestion - 1] = 'not-answered';
        updatePalette();
    });

    function updatePalette() {
        const buttons = palette.getElementsByTagName('button');
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].className = `palette-button ${questionStatus[i]}`;
        }
    }

    updateQuestion();
});
