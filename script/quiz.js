const themeSelect = document.getElementById('themeSelect');
const startBtn = document.getElementById('startBtn');
const quizContainer = document.getElementById('quizContainer');
const submitBtn = document.getElementById('submitBtn');
const questionCount = document.getElementById('questionCount');

async function fetchThemes() {
    const response = await fetch('http://localhost:8000/api/themes');
    const themes = await response.json();
    return themes;
}

function populateThemeSelect(themes) {
    themes.forEach(theme => {
        const option = document.createElement('option');
        option.value = theme.id;
        option.textContent = theme.nom;
        themeSelect.appendChild(option);
    });
}

async function fetchQuizData(theme, nbQuestions) {
    const response = await fetch(`http://localhost:8000/api/themes/${theme}/questions/${nbQuestions}`);
    const data = await response.json();
    return data;
}

function displayQuiz(data) {
    quizContainer.innerHTML = '';
    data.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.innerHTML = `<h2>${index + 1}. ${question.intitule}</h2>`;
        const optionsDiv = document.createElement('div');
        optionsDiv.classList.add('options');
        question.reponse.forEach(option => {
            optionsDiv.classList.add('row-response');
            const optionLabel = document.createElement('label');
            optionLabel.innerHTML = option.intutile;
            const optionInput = document.createElement('input');
            optionInput.type = 'radio';
            optionInput.name = `question${index}`;
            optionInput.value = option.correct;
            optionLabel.prepend(optionInput);
            optionsDiv.appendChild(optionLabel);
        });
        questionDiv.appendChild(optionsDiv);
        quizContainer.appendChild(questionDiv);
    });
    quizContainer.style.display = 'block';
    submitBtn.style.display = 'block';
}

function handleStartQuiz() {
    const selectedTheme = themeSelect.options[themeSelect.selectedIndex].text;
    const nbQuestions = parseInt(questionCount.value);
    fetchQuizData(selectedTheme, nbQuestions).then(displayQuiz);
}

function handleSubmit() {
    let score = 0;
    const userAnswers = quizContainer.querySelectorAll('input[type="radio"]:checked');
    userAnswers.forEach(answer => {
        if (answer.value === 'true') score++;
    });
    const results = document.getElementById('results');
    results.textContent = `Votre score: ${score} / ${parseInt(questionCount.value)}`;
    results.style.display = 'block';
    submitBtn.style.display = 'none';
}

fetchThemes().then(populateThemeSelect);
startBtn.addEventListener('click', handleStartQuiz);
submitBtn.addEventListener('click', handleSubmit);
