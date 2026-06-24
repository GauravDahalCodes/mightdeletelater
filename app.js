(function () {
  const storageKey = "np-si-computer-quiz-mistakes";
  const letters = ["A", "B", "C", "D"];

  const state = {
    selectedUnitId: null,
    mode: "unit",
    pool: [],
    quiz: [],
    answers: new Map(),
    index: 0,
    lastMistakes: [],
  };

  const els = {
    totalQuestions: document.getElementById("totalQuestions"),
    totalUnits: document.getElementById("totalUnits"),
    unitList: document.getElementById("unitList"),
    allUnitsButton: document.getElementById("allUnitsButton"),
    mistakesButton: document.getElementById("mistakesButton"),
    modeLabel: document.getElementById("modeLabel"),
    quizTitle: document.getElementById("quizTitle"),
    scorePill: document.getElementById("scorePill"),
    questionCount: document.getElementById("questionCount"),
    shuffleToggle: document.getElementById("shuffleToggle"),
    startButton: document.getElementById("startButton"),
    progressText: document.getElementById("progressText"),
    answeredText: document.getElementById("answeredText"),
    progressBar: document.getElementById("progressBar"),
    questionStage: document.getElementById("questionStage"),
    prevButton: document.getElementById("prevButton"),
    nextButton: document.getElementById("nextButton"),
    submitButton: document.getElementById("submitButton"),
    results: document.getElementById("results"),
  };

  function allQuestions() {
    return window.QUIZ_DATA.units.flatMap((unit) =>
      unit.questions.map((question) => ({ ...question, unitTitle: unit.title }))
    );
  }

  function savedMistakeIds() {
    try {
      return JSON.parse(localStorage.getItem(storageKey) || "[]");
    } catch (_error) {
      return [];
    }
  }

  function setMistakeIds(ids) {
    localStorage.setItem(storageKey, JSON.stringify([...new Set(ids)]));
  }

  function shuffle(items) {
    const copy = [...items];
    for (let i = copy.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function renderUnits() {
    els.totalQuestions.textContent = allQuestions().length;
    els.totalUnits.textContent = window.QUIZ_DATA.units.length;
    els.unitList.innerHTML = window.QUIZ_DATA.units
      .map(
        (unit) => `
          <button class="unit-button" type="button" data-unit-id="${unit.id}">
            <strong>${unit.title}</strong>
            <span>${unit.questions.length} questions</span>
          </button>
        `
      )
      .join("");
  }

  function setSelection(mode, unitId) {
    state.mode = mode;
    state.selectedUnitId = unitId || null;

    document.querySelectorAll(".unit-button").forEach((button) => {
      button.classList.toggle("active", button.dataset.unitId === state.selectedUnitId);
    });

    if (mode === "all") {
      state.pool = allQuestions();
      els.modeLabel.textContent = "All units";
      els.quizTitle.textContent = "Full question bank";
    } else if (mode === "mistakes") {
      const mistakeIds = new Set(savedMistakeIds());
      state.pool = allQuestions().filter((question) => mistakeIds.has(question.id));
      els.modeLabel.textContent = "Retake mode";
      els.quizTitle.textContent = "Mistakes only";
    } else {
      const unit = window.QUIZ_DATA.units.find((item) => item.id === unitId);
      state.pool = unit ? unit.questions.map((question) => ({ ...question, unitTitle: unit.title })) : [];
      els.modeLabel.textContent = unit ? `Unit ${unit.number}` : "Choose a unit";
      els.quizTitle.textContent = unit ? unit.title : "Select a unit to begin";
    }

    populateQuestionCount();
    resetQuizSurface();
  }

  function populateQuestionCount() {
    const count = state.pool.length;
    const choices = [10, 20, 30, 50].filter((value) => value < count);
    choices.push(count);
    els.questionCount.innerHTML = [...new Set(choices)]
      .map((value) => `<option value="${value}">${value === count ? `All ${count}` : value}</option>`)
      .join("");
    els.startButton.disabled = count === 0;
    if (count === 0 && state.mode === "mistakes") {
      els.scorePill.textContent = "No mistakes saved";
    } else {
      els.scorePill.textContent = count ? `${count} available` : "Ready";
    }
  }

  function resetQuizSurface() {
    state.quiz = [];
    state.answers = new Map();
    state.index = 0;
    els.results.hidden = true;
    els.results.innerHTML = "";
    els.progressText.textContent = state.pool.length ? "Ready to start" : "No questions here yet";
    els.answeredText.textContent = "0 answered";
    els.progressBar.style.width = "0%";
    els.prevButton.disabled = true;
    els.nextButton.disabled = true;
    els.submitButton.disabled = true;
    els.questionStage.innerHTML = `
      <div class="empty-state">
        <div class="empty-mark">${state.mode === "mistakes" ? "!" : "?"}</div>
        <h3>${state.pool.length ? "Start when you are ready." : "No saved mistakes yet."}</h3>
        <p>${state.pool.length ? "Select the number of questions, then begin. You can move back and change answers before submitting." : "After a quiz, missed questions will appear here for retaking."}</p>
      </div>
    `;
  }

  function startQuiz() {
    if (!state.pool.length) return;
    const requested = Number(els.questionCount.value) || state.pool.length;
    const pool = els.shuffleToggle.checked ? shuffle(state.pool) : [...state.pool];
    state.quiz = pool.slice(0, requested);
    state.answers = new Map();
    state.index = 0;
    els.results.hidden = true;
    els.results.innerHTML = "";
    renderQuestion();
  }

  function renderQuestion() {
    const question = state.quiz[state.index];
    if (!question) return;
    const selected = state.answers.get(question.id);

    els.questionStage.innerHTML = `
      <article class="question-card">
        <div class="question-top">
          <div>
            <div class="question-number">Question ${state.index + 1} of ${state.quiz.length}</div>
            <div class="question-text">${escapeHtml(question.text)}</div>
          </div>
          <div class="score-pill">${escapeHtml(question.unitTitle || "")}</div>
        </div>
        <div class="options">
          ${question.options
            .map(
              (option, optionIndex) => `
                <label class="option ${selected === optionIndex ? "selected" : ""}">
                  <input type="radio" name="answer" value="${optionIndex}" ${selected === optionIndex ? "checked" : ""}>
                  <span class="option-key">${letters[optionIndex]}</span>
                  <span>${escapeHtml(option)}</span>
                </label>
              `
            )
            .join("")}
        </div>
      </article>
    `;

    document.querySelectorAll("input[name='answer']").forEach((input) => {
      input.addEventListener("change", () => {
        state.answers.set(question.id, Number(input.value));
        renderQuestion();
      });
    });

    updateProgress();
  }

  function updateProgress() {
    const answered = state.quiz.filter((question) => state.answers.has(question.id)).length;
    const percent = state.quiz.length ? (answered / state.quiz.length) * 100 : 0;
    els.progressText.textContent = state.quiz.length
      ? `Question ${state.index + 1} of ${state.quiz.length}`
      : "No quiz running";
    els.answeredText.textContent = `${answered} answered`;
    els.progressBar.style.width = `${percent}%`;
    els.prevButton.disabled = state.index === 0 || !state.quiz.length;
    els.nextButton.disabled = state.index >= state.quiz.length - 1 || !state.quiz.length;
    els.submitButton.disabled = !state.quiz.length || answered < state.quiz.length;
    els.scorePill.textContent = state.quiz.length ? `${answered}/${state.quiz.length}` : "Ready";
  }

  function submitQuiz() {
    if (!state.quiz.length) return;
    const missed = state.quiz.filter((question) => state.answers.get(question.id) !== question.answer);
    const correct = state.quiz.length - missed.length;
    state.lastMistakes = missed;

    const saved = new Set(savedMistakeIds());
    state.quiz.forEach((question) => {
      if (missed.some((item) => item.id === question.id)) {
        saved.add(question.id);
      } else {
        saved.delete(question.id);
      }
    });
    setMistakeIds([...saved]);

    els.scorePill.textContent = `${correct}/${state.quiz.length}`;
    els.results.hidden = false;
    els.results.innerHTML = `
      <div class="result-head">
        <div>
          <h3>Score: ${correct} / ${state.quiz.length}</h3>
          <p class="result-note">${missed.length ? `${missed.length} question${missed.length === 1 ? "" : "s"} need another pass.` : "Perfect. This unit is clear."}</p>
        </div>
        <div class="result-actions">
          <button class="secondary" type="button" id="reviewAgain">Retake same quiz</button>
          <button class="primary" type="button" id="retakeMissed" ${missed.length ? "" : "disabled"}>Retake mistakes</button>
        </div>
      </div>
      <div class="miss-list">
        ${missed.length ? missed.map(renderMissedQuestion).join("") : "<div class='miss-card'><strong>No mistakes.</strong><p class='explain'>Nice work. Choose another unit when you are ready.</p></div>"}
      </div>
    `;

    document.getElementById("reviewAgain").addEventListener("click", () => {
      state.pool = [...state.quiz];
      populateQuestionCount();
      els.questionCount.value = String(state.pool.length);
      startQuiz();
    });

    document.getElementById("retakeMissed").addEventListener("click", () => {
      if (!state.lastMistakes.length) return;
      state.mode = "mistakes";
      state.pool = [...state.lastMistakes];
      populateQuestionCount();
      els.questionCount.value = String(state.pool.length);
      startQuiz();
    });

    els.results.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function renderMissedQuestion(question) {
    const chosenIndex = state.answers.get(question.id);
    const chosen = Number.isInteger(chosenIndex) ? question.options[chosenIndex] : "Not answered";
    const correct = question.options[question.answer];
    return `
      <article class="miss-card">
        <strong>${escapeHtml(question.text)}</strong>
        <div class="answer-line wrong">Your answer: ${escapeHtml(chosen)}</div>
        <div class="answer-line correct">Correct answer: ${escapeHtml(correct)}</div>
        ${question.note ? `<p class="explain">${escapeHtml(question.note)}</p>` : ""}
      </article>
    `;
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  els.unitList.addEventListener("click", (event) => {
    const button = event.target.closest(".unit-button");
    if (button) setSelection("unit", button.dataset.unitId);
  });

  els.allUnitsButton.addEventListener("click", () => setSelection("all"));
  els.mistakesButton.addEventListener("click", () => setSelection("mistakes"));
  els.startButton.addEventListener("click", startQuiz);
  els.prevButton.addEventListener("click", () => {
    state.index = Math.max(0, state.index - 1);
    renderQuestion();
  });
  els.nextButton.addEventListener("click", () => {
    state.index = Math.min(state.quiz.length - 1, state.index + 1);
    renderQuestion();
  });
  els.submitButton.addEventListener("click", submitQuiz);

  renderUnits();
  setSelection("unit", window.QUIZ_DATA.units[0]?.id);
})();
