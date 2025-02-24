// Define the questions array (paste the 60 questions here)
const questions = [
    { text: "Which of the following was the primary objective of India’s First Five-Year Plan (1951–1956)?", options: ["Industrialization", "Agricultural Development", "Rapid Urbanization", "Export Promotion"], answer: "b" },
    { text: "The Second Five-Year Plan (1956–1961) in India was based on which economic model?", options: ["Harrod-Domar Model", "Mahalanobis Model", "Keynesian Model", "Solow Model"], answer: "b" },
    { text: "What was the target growth rate for India’s Third Five-Year Plan (1961–1966)?", options: ["3.5%", "4.5%", "5.6%", "6.5%"], answer: "c" },
    { text: "Which Five-Year Plan in India emphasized the removal of poverty and was known as the ‘Garibi Hatao’ plan?", options: ["Fourth Plan", "Fifth Plan", "Sixth Plan", "Seventh Plan"], answer: "b" },
    { text: "During which Five-Year Plan was the slogan ‘Growth with Stability’ introduced?", options: ["Fourth Plan", "Fifth Plan", "Sixth Plan", "Seventh Plan"], answer: "b" },
    { text: "Which Five-Year Plan in India focused on rapid industrialization and the establishment of public sector enterprises?", options: ["First Plan", "Second Plan", "Third Plan", "Fourth Plan"], answer: "b" },
    { text: "What was the actual growth rate achieved during India’s Second Five-Year Plan (1956–1961)?", options: ["3.5%", "4.27%", "5.0%", "6.0%"], answer: "b" },
    { text: "Which Five-Year Plan in India was terminated prematurely in 1978 by the Morarji Desai government?", options: ["Fourth Plan", "Fifth Plan", "Sixth Plan", "Seventh Plan"], answer: "b" },
    { text: "The Sixth Five-Year Plan (1980–1985) aimed to achieve which of the following objectives?", options: ["Self-Reliance and Modernization", "Poverty Alleviation and Employment", "Industrial Growth Only", "Export-Led Growth"], answer: "a" },
    { text: "Which Five-Year Plan introduced the Minimum Needs Programme (MNP) in India?", options: ["Fifth Plan", "Sixth Plan", "Seventh Plan", "Eighth Plan"], answer: "a" },
    { text: "What was the target growth rate for India’s Eighth Five-Year Plan (1992–1997)?", options: ["5.0%", "5.6%", "6.5%", "7.0%"], answer: "b" },
    { text: "Which Five-Year Plan in India focused on ‘Inclusive Growth’ and social sector development?", options: ["Ninth Plan", "Tenth Plan", "Eleventh Plan", "Twelfth Plan"], answer: "c" },
    { text: "During which Five-Year Plan was the concept of ‘Rolling Plan’ introduced in India?", options: ["Fifth Plan", "Sixth Plan", "Seventh Plan", "Eighth Plan"], answer: "b" },
    { text: "Which Five-Year Plan in India aimed to achieve a growth rate of 9% but faced challenges due to the global financial crisis?", options: ["Tenth Plan", "Eleventh Plan", "Twelfth Plan", "Ninth Plan"], answer: "b" },
    { text: "The Twelfth Five-Year Plan (2012–2017) focused on which of the following themes?", options: ["Faster, Sustainable, and More Inclusive Growth", "Rapid Industrialization", "Export Promotion", "Agricultural Self-Sufficiency"], answer: "a" },
    { text: "Which Five-Year Plan in India saw the establishment of the Planning Commission?", options: ["First Plan", "Second Plan", "Third Plan", "Fourth Plan"], answer: "a" },
    { text: "What was the duration of India’s last Five-Year Plan before it was replaced by the NITI Aayog?", options: ["2007–2012", "2012–2017", "2002–2007", "1997–2002"], answer: "b" },
    { text: "Which Five-Year Plan in India emphasized the development of heavy industries like steel and power?", options: ["First Plan", "Second Plan", "Third Plan", "Fourth Plan"], answer: "b" },
    { text: "During which Five-Year Plan did India face the Indo-Pak war of 1971 and the Bangladesh Liberation War?", options: ["Fourth Plan", "Fifth Plan", "Sixth Plan", "Seventh Plan"], answer: "b" },
    { text: "Which Five-Year Plan introduced the Twenty-Point Programme in India?", options: ["Fifth Plan", "Sixth Plan", "Seventh Plan", "Eighth Plan"], answer: "a" },
    { text: "What was the target growth rate for India’s Seventh Five-Year Plan (1985–1990)?", options: ["4.0%", "5.0%", "5.2%", "6.0%"], answer: "b" },
    { text: "Which Five-Year Plan in India focused on stabilizing prices and controlling inflation?", options: ["Third Plan", "Fourth Plan", "Fifth Plan", "Sixth Plan"], answer: "b" },
    { text: "The Ninth Five-Year Plan (1997–2002) aimed to reduce poverty by how much percentage?", options: ["5%", "10%", "15%", "20%"], answer: "b" },
    { text: "Which Five-Year Plan in India was affected by the drought and wars, leading to a low growth rate of 2.4%?", options: ["Third Plan", "Fourth Plan", "Fifth Plan", "Sixth Plan"], answer: "a" },
    { text: "Which Five-Year Plan introduced the concept of ‘Self-Reliance’ as a major goal?", options: ["Second Plan", "Third Plan", "Fourth Plan", "Fifth Plan"], answer: "d" },
    { text: "What was the actual growth rate achieved during India’s Third Five-Year Plan (1961–1966)?", options: ["2.4%", "3.0%", "3.5%", "4.0%"], answer: "a" },
    { text: "Which Five-Year Plan in India focused on the development of agriculture and rural infrastructure?", options: ["First Plan", "Second Plan", "Third Plan", "Fourth Plan"], answer: "a" },
    { text: "During which Five-Year Plan was the Industrial Policy Resolution of 1956 adopted?", options: ["First Plan", "Second Plan", "Third Plan", "Fourth Plan"], answer: "b" },
    { text: "Which Five-Year Plan in India aimed to achieve a balanced regional development?", options: ["Sixth Plan", "Seventh Plan", "Eighth Plan", "Ninth Plan"], answer: "b" },
    { text: "What was the target growth rate for India’s Tenth Five-Year Plan (2002–2007)?", options: ["6.0%", "7.0%", "8.0%", "9.0%"], answer: "c" },
    { text: "Which Five-Year Plan in India saw the nationalization of 14 major banks?", options: ["Fourth Plan", "Fifth Plan", "Sixth Plan", "Seventh Plan"], answer: "b" },
    { text: "The Eleventh Five-Year Plan (2007–2012) aimed to increase the agriculture growth rate to:", options: ["2%", "3%", "4%", "5%"], answer: "c" },
    { text: "Which Five-Year Plan in India was launched after the liberalization of the economy in 1991?", options: ["Seventh Plan", "Eighth Plan", "Ninth Plan", "Tenth Plan"], answer: "b" },
    { text: "What was the main focus of India’s Fourth Five-Year Plan (1969–1974)?", options: ["Industrial Growth", "Poverty Removal", "Self-Reliance", "Modernization"], answer: "b" },
    { text: "Which Five-Year Plan in India emphasized the development of science and technology?", options: ["Fifth Plan", "Sixth Plan", "Seventh Plan", "Eighth Plan"], answer: "c" },
    { text: "During which Five-Year Plan was the Green Revolution initiated in India?", options: ["Third Plan", "Fourth Plan", "Fifth Plan", "Sixth Plan"], answer: "b" },
    { text: "What was the target growth rate for India’s Twelfth Five-Year Plan (2012–2017)?", options: ["7.0%", "8.0%", "9.0%", "10.0%"], answer: "b" },
    { text: "Which Five-Year Plan in India focused on ‘Social Justice’ and reducing economic inequalities?", options: ["Fourth Plan", "Fifth Plan", "Sixth Plan", "Seventh Plan"], answer: "a" },
    { text: "Which Five-Year Plan in India was affected by the global oil crisis of the 1970s?", options: ["Fourth Plan", "Fifth Plan", "Sixth Plan", "Seventh Plan"], answer: "b" },
    { text: "What was the duration of India’s First Five-Year Plan?", options: ["1950–1955", "1951–1956", "1952–1957", "1953–1958"], answer: "b" },
    { text: "Which Five-Year Plan in India aimed to achieve full employment as a major objective?", options: ["Sixth Plan", "Seventh Plan", "Eighth Plan", "Ninth Plan"], answer: "b" },
    { text: "During which Five-Year Plan was the National Rural Employment Guarantee Act (NREGA) launched?", options: ["Tenth Plan", "Eleventh Plan", "Twelfth Plan", "Ninth Plan"], answer: "b" },
    { text: "Which Five-Year Plan in India focused on the development of small-scale industries?", options: ["First Plan", "Second Plan", "Third Plan", "Fourth Plan"], answer: "c" },
    { text: "What was the actual growth rate achieved during India’s Fifth Five-Year Plan (1974–1979)?", options: ["3.3%", "4.0%", "4.8%", "5.0%"], answer: "a" },
    { text: "Which Five-Year Plan in India introduced the concept of ‘Inclusive Growth’?", options: ["Ninth Plan", "Tenth Plan", "Eleventh Plan", "Twelfth Plan"], answer: "c" },
    { text: "During which Five-Year Plan was the Electricity Supply Act amended in 1975?", options: ["Fourth Plan", "Fifth Plan", "Sixth Plan", "Seventh Plan"], answer: "b" },
    { text: "Which Five-Year Plan in India aimed to stabilize the economy after the liberalization of 1991?", options: ["Seventh Plan", "Eighth Plan", "Ninth Plan", "Tenth Plan"], answer: "b" },
    { text: "What was the target growth rate for India’s Ninth Five-Year Plan (1997–2002)?", options: ["5.0%", "6.5%", "7.0%", "8.0%"], answer: "b" },
    { text: "Which Five-Year Plan in India focused on the development of the service sector?", options: ["Eighth Plan", "Ninth Plan", "Tenth Plan", "Eleventh Plan"], answer: "c" },
    { text: "During which Five-Year Plan was the Indo-Pak war of 1965 a major challenge?", options: ["Second Plan", "Third Plan", "Fourth Plan", "Fifth Plan"], answer: "b" },
    { text: "Which Five-Year Plan in India saw the establishment of the Atomic Energy Commission?", options: ["First Plan", "Second Plan", "Third Plan", "Fourth Plan"], answer: "b" },
    { text: "What was the main focus of India’s Tenth Five-Year Plan (2002–2007)?", options: ["Poverty Reduction", "Industrial Growth", "Health and Education", "Export Growth"], answer: "a" },
    { text: "Which Five-Year Plan in India aimed to achieve a balanced growth between agriculture and industry?", options: ["Third Plan", "Fourth Plan", "Fifth Plan", "Sixth Plan"], answer: "a" },
    { text: "During which Five-Year Plan was the import substitution policy heavily emphasized?", options: ["First Plan", "Second Plan", "Third Plan", "Fourth Plan"], answer: "b" },
    { text: "Which Five-Year Plan in India focused on the development of rural roads and connectivity?", options: ["Sixth Plan", "Seventh Plan", "Eighth Plan", "Ninth Plan"], answer: "b" },
    { text: "What was the actual growth rate achieved during India’s Seventh Five-Year Plan (1985–1990)?", options: ["4.2%", "5.0%", "5.7%", "6.0%"], answer: "c" },
    { text: "Which Five-Year Plan in India was launched under the leadership of Jawaharlal Nehru?", options: ["First Plan", "Second Plan", "Third Plan", "Fourth Plan"], answer: "a" }
];

// Event listener for DOM content loaded
document.addEventListener('DOMContentLoaded', () => {
    const totalQuestions = 60; // Matches the number of questions
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
        if (timeLeft <= 0) {
            alert("Time's up! Test submitted.");
            // Add logic to submit or end the test here
        }
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

    // Update Question (Using the questions array)
    function updateQuestion() {
        document.getElementById('question-number').textContent = currentQuestion;
        const q = questions[currentQuestion - 1];
        document.getElementById('question-text').textContent = q.text;
        const options = document.getElementsByName('answer');
        for (let i = 0; i < options.length; i++) {
            options[i].value = String.fromCharCode(97 + i); // a, b, c, d
            options[i].nextSibling.textContent = ` ${q.options[i]}`;
        }
        // Clear previous selections
        options.forEach(radio => radio.checked = false);
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
        // Update Legend counts
        const answeredCount = questionStatus.filter(status => status === 'answered').length;
        const notAnsweredCount = questionStatus.filter(status => status === 'not-answered').length;
        const markedCount = questionStatus.filter(status => status === 'marked').length;
        const notVisitedCount = questionStatus.filter(status => status === 'not-visited').length;
        document.querySelector('.legend .answered').textContent = `${answeredCount} Answered`;
        document.querySelector('.legend .not-answered').textContent = `${notAnsweredCount} Not Answered`;
        document.querySelector('.legend .marked').textContent = `${markedCount} Marked`;
    }

    // Initialize
    updateQuestion();
    updatePalette();
});
