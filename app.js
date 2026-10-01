/* =========================================================
   CláusulaGovTech
   Motor principal da aplicação
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* -------------------------------------------------------
     ELEMENTOS DA INTERFACE
     ------------------------------------------------------- */

  const screens = {
    home: document.getElementById("home-screen"),
    methodology: document.getElementById("methodology-screen"),
    analysis: document.getElementById("analysis-screen"),
    results: document.getElementById("results-screen")
  };

  const startButton = document.getElementById("start-analysis");
  const methodologyButton = document.getElementById("open-methodology");
  const brandHome = document.getElementById("brand-home");

  const questionContainer = document.getElementById("question-container");
  const previousButton = document.getElementById("previous-question");
  const nextButton = document.getElementById("next-question");

  const progressLabel = document.getElementById("progress-label");
  const progressBar = document.getElementById("progress-bar");

  const resultsContainer = document.getElementById("results-container");
const analysisSummary =
  document.getElementById("analysis-summary");

  const newAnalysisButton = document.getElementById("new-analysis");
  const editAnswersButton = document.getElementById("edit-answers");
  const printResultsButton = document.getElementById("print-results");

  const traceModal = document.getElementById("trace-modal");
  const traceContent = document.getElementById("trace-content");
  const openTraceButton = document.getElementById("open-trace");


  /* -------------------------------------------------------
     ESTADO DA APLICAÇÃO
     ------------------------------------------------------- */

  let answers = {};
  let visibleQuestions = [];
  let currentQuestionIndex = 0;
  let activatedRequirements = [];


  /* -------------------------------------------------------
     NAVEGAÇÃO ENTRE TELAS
     ------------------------------------------------------- */

  function showScreen(screenName) {

    Object.values(screens).forEach(screen => {
      screen.classList.remove("active");
    });

    screens[screenName].classList.add("active");

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }


  function goHome() {
    showScreen("home");
  }


  brandHome.addEventListener("click", event => {
    event.preventDefault();
    goHome();
  });


  document.querySelectorAll("[data-back='home']").forEach(button => {
    button.addEventListener("click", goHome);
  });


  methodologyButton.addEventListener("click", () => {
    showScreen("methodology");
  });


  /* -------------------------------------------------------
     NOVA ANÁLISE
     ------------------------------------------------------- */

  function startNewAnalysis() {

    answers = {};
    currentQuestionIndex = 0;
    activatedRequirements = [];

    updateVisibleQuestions();

    showScreen("analysis");
    renderCurrentQuestion();
  }


  startButton.addEventListener("click", startNewAnalysis);
  newAnalysisButton.addEventListener("click", startNewAnalysis);


  /* -------------------------------------------------------
     CONDIÇÕES DAS PERGUNTAS
     ------------------------------------------------------- */

  function questionShouldAppear(question) {

    if (!question.showIf) {
      return true;
    }

    const previousAnswer =
      answers[question.showIf.questionId];

    return previousAnswer === question.showIf.equals;
  }


  function updateVisibleQuestions() {

    visibleQuestions = window.QUESTIONS.filter(
      questionShouldAppear
    );

    if (currentQuestionIndex >= visibleQuestions.length) {
      currentQuestionIndex =
        Math.max(0, visibleQuestions.length - 1);
    }
  }


  /* -------------------------------------------------------
     RENDERIZAÇÃO DAS PERGUNTAS
     ------------------------------------------------------- */

  function renderCurrentQuestion() {

    updateVisibleQuestions();

    const question =
      visibleQuestions[currentQuestionIndex];

    if (!question) {
      showResults();
      return;
    }

    questionContainer.innerHTML = "";


    const moduleLabel =
      document.createElement("p");

    moduleLabel.className = "eyebrow";
    moduleLabel.textContent =
      question.module;


    const title =
      document.createElement("h2");

    title.textContent =
      question.title;


    const description =
      document.createElement("p");

    description.className =
      "question-description";

    description.textContent =
      question.description;


    const options =
      document.createElement("div");

    options.className =
      "question-options";


    question.options.forEach(option => {

      const label =
        document.createElement("label");

      label.className =
        "option-card";

      if (
        answers[question.id] === option.value
      ) {
        label.classList.add("selected");
      }


      const input =
        document.createElement("input");

      input.type = "radio";
      input.name = question.id;
      input.value = option.value;

      input.checked =
        answers[question.id] === option.value;


      const content =
        document.createElement("div");

      content.className =
        "option-content";


      const strong =
        document.createElement("strong");

      strong.textContent =
        option.label;


      content.appendChild(strong);


      if (option.help) {

        const small =
          document.createElement("small");

        small.textContent =
          option.help;

        content.appendChild(small);
      }


      label.appendChild(input);
      label.appendChild(content);


      input.addEventListener("change", () => {

        answers[question.id] =
          option.value;

        options
          .querySelectorAll(".option-card")
          .forEach(card => {
            card.classList.remove("selected");
          });

        label.classList.add("selected");

        removeAnswersThatBecameHidden();
        updateVisibleQuestions();
        updateProgress();
      });


      options.appendChild(label);

    });


    questionContainer.appendChild(moduleLabel);
    questionContainer.appendChild(title);
    questionContainer.appendChild(description);
    questionContainer.appendChild(options);


    previousButton.style.visibility =
      currentQuestionIndex === 0
        ? "hidden"
        : "visible";


    nextButton.textContent =
      currentQuestionIndex ===
      visibleQuestions.length - 1
        ? "Ver resultados"
        : "Continuar";


    updateProgress();
  }


  /* -------------------------------------------------------
     LIMPEZA DE RESPOSTAS QUE DEIXARAM DE SER APLICÁVEIS
     ------------------------------------------------------- */

  function removeAnswersThatBecameHidden() {

    window.QUESTIONS.forEach(question => {

      if (
        question.showIf &&
        !questionShouldAppear(question)
      ) {
        delete answers[question.id];
      }

    });
  }


  /* -------------------------------------------------------
     PROGRESSO
     ------------------------------------------------------- */

  function updateProgress() {

    const total =
      visibleQuestions.length || 1;

    const current =
      currentQuestionIndex + 1;

    progressLabel.textContent =
      `Etapa ${current} de ${total}`;

    const percentage =
      (current / total) * 100;

    progressBar.style.width =
      `${percentage}%`;
  }


  /* -------------------------------------------------------
     BOTÕES ANTERIOR / CONTINUAR
     ------------------------------------------------------- */

  previousButton.addEventListener("click", () => {

    if (currentQuestionIndex > 0) {

      currentQuestionIndex--;

      renderCurrentQuestion();
    }
  });


  nextButton.addEventListener("click", () => {

    const question =
      visibleQuestions[currentQuestionIndex];

    if (!answers[question.id]) {

      showTemporaryMessage(
        "Selecione uma opção antes de continuar."
      );

      return;
    }


    updateVisibleQuestions();


    if (
      currentQuestionIndex <
      visibleQuestions.length - 1
    ) {

      currentQuestionIndex++;

      renderCurrentQuestion();

    } else {

      showResults();
    }
  });


  /* -------------------------------------------------------
     MENSAGEM DE VALIDAÇÃO
     ------------------------------------------------------- */

  function showTemporaryMessage(message) {

    let existing =
      document.querySelector(".validation-message");

    if (existing) {
      existing.remove();
    }


    const warning =
      document.createElement("div");

    warning.className =
      "validation-message";

    warning.textContent =
      message;

    warning.style.marginTop = "18px";
    warning.style.padding = "12px 14px";
    warning.style.borderRadius = "8px";
    warning.style.background = "#faf0f3";
    warning.style.color = "#6f1734";
    warning.style.fontWeight = "600";
    warning.style.fontSize = "14px";


    questionContainer.appendChild(warning);


    setTimeout(() => {
      warning.remove();
    }, 2600);
  }


  /* -------------------------------------------------------
     MOTOR DETERMINÍSTICO
     ------------------------------------------------------- */

  function conditionMatches(condition) {

  const answer =
    answers[condition.questionId];


  if (
    Object.prototype.hasOwnProperty.call(
      condition,
      "equals"
    )
  ) {
    return answer === condition.equals;
  }


  if (Array.isArray(condition.in)) {

    return condition.in.includes(answer);
  }


  return false;
}


function requirementIsActivated(requirement) {

  if (Array.isArray(requirement.anyOf)) {

    return requirement.anyOf.some(
      conditionMatches
    );
  }


  if (requirement.trigger) {

    return conditionMatches(
      requirement.trigger
    );
  }


  return false;
}

function getMatchedConditions(requirement) {

  if (Array.isArray(requirement.anyOf)) {

    return requirement.anyOf.filter(
      conditionMatches
    );
  }


  if (
    requirement.trigger &&
    conditionMatches(requirement.trigger)
  ) {

    return [requirement.trigger];
  }


  return [];
}


  function evaluateRequirements() {

    activatedRequirements =
      window.REQUIREMENTS.filter(
        requirementIsActivated
      );

    return activatedRequirements;
  }

/* -------------------------------------------------------
   INFORMAÇÕES PENDENTES
   ------------------------------------------------------- */

function getPendingQuestions() {

  return window.QUESTIONS.filter(question => {

    return (
      questionShouldAppear(question) &&
      answers[question.id] === "unknown"
    );

  });
}
  /* -------------------------------------------------------
     RESULTADOS
     ------------------------------------------------------- */

  function showResults() {

  evaluateRequirements();

  renderAnalysisSummary();
  renderResults();

  showScreen("results");
}

function renderAnalysisSummary() {

  const pendingQuestions =
    getPendingQuestions();


  const answeredQuestions =
    window.QUESTIONS.filter(question => {

      return (
        questionShouldAppear(question) &&
        answers[question.id] !== undefined
      );

    });


  analysisSummary.innerHTML = "";


  const header =
    document.createElement("div");

  header.className =
    "summary-header";


  header.innerHTML = `
    <div>
      <p class="eyebrow">Resumo da análise</p>
      <h2>Características consideradas</h2>
      <p>
        Síntese das informações utilizadas para produzir
        os resultados desta análise.
      </p>
    </div>

    <span class="summary-version">
      Matriz v${escapeHTML(window.CGT_DATABASE.version)}
    </span>
  `;


  const stats =
    document.createElement("div");

  stats.className =
    "summary-stats";


  stats.innerHTML = `
    <div class="summary-stat">
      <strong>
        ${answeredQuestions.length}
      </strong>
      <span>
        respostas consideradas
      </span>
    </div>

    <div class="summary-stat">
      <strong>
        ${activatedRequirements.length}
      </strong>
      <span>
        requisitos ativados
      </span>
    </div>

    <div class="summary-stat">
      <strong>
        ${pendingQuestions.length}
      </strong>
      <span>
        questões pendentes
      </span>
    </div>
  `;


  const answerList =
    document.createElement("div");

  answerList.className =
    "summary-answers";


  answeredQuestions.forEach(question => {

    const selectedOption =
      question.options.find(
        option =>
          option.value === answers[question.id]
      );


    const row =
      document.createElement("div");

    row.className =
      "summary-answer";


    row.innerHTML = `
      <span class="summary-answer-question">
        ${escapeHTML(question.title)}
      </span>

      <span class="summary-answer-value">
        ${escapeHTML(
          selectedOption?.label ||
          answers[question.id]
        )}
      </span>
    `;


    answerList.appendChild(row);

  });


  analysisSummary.appendChild(header);
  analysisSummary.appendChild(stats);
  analysisSummary.appendChild(answerList);
}

  function renderResults() {

    resultsContainer.innerHTML = "";


    /* -----------------------------------------------------
       FORA DO ESCOPO
       ----------------------------------------------------- */

    if (answers.sisp_scope !== "yes") {

      const card =
        document.createElement("article");

      card.className = "result-card";

      card.innerHTML = `
        <div class="result-card-header">
          <div>
            <p class="eyebrow">Escopo</p>
            <h3>Contratação fora do recorte inicial do protótipo</h3>
          </div>

          <span class="requirement-type">
            Revisão necessária
          </span>
        </div>

        <p>
          A primeira versão do CláusulaGovTech foi delimitada
          às contratações de soluções de TIC realizadas por
          órgãos e entidades integrantes do SISP, dentro do
          âmbito de aplicação da IN SGD/ME nº 94/2022.
        </p>

        <div class="result-source">
          <strong>Resultado:</strong>
          o protótipo não realizará a triagem dos requisitos
          para este caso.
        </div>

        <p>
          A ausência de análise não significa ausência de
          requisitos jurídicos aplicáveis.
        </p>
      `;

      resultsContainer.appendChild(card);

      return;
    }

/* -----------------------------------------------------
   INFORMAÇÕES AINDA NÃO DEFINIDAS
   ----------------------------------------------------- */

const pendingQuestions =
  getPendingQuestions();


pendingQuestions.forEach(question => {

  const selectedOption =
    question.options.find(
      option =>
        option.value === answers[question.id]
    );


  const card =
    document.createElement("article");

  card.className =
    "result-card";


  card.innerHTML = `
    <div class="result-card-header">

      <div>
        <p class="eyebrow">
          ${escapeHTML(question.module)}
        </p>

        <h3>
          Informação necessária ainda não definida
        </h3>
      </div>

      <span class="requirement-type">
        Revisão necessária
      </span>

    </div>

    <p>
      A análise deste ponto não pode ser concluída porque
      uma característica relevante da contratação ainda
      não foi definida.
    </p>

    <div class="result-source">

      <strong>Pergunta:</strong>
      ${escapeHTML(question.title)}
      <br>

      <strong>Resposta informada:</strong>
      ${escapeHTML(selectedOption?.label || "Não definido")}
      <br>

      <strong>Efeito na análise:</strong>
      os requisitos que dependem desta informação não serão
      considerados aplicáveis nem descartados nesta etapa.

    </div>

    <p>
      <strong>Revisão humana:</strong>
      a informação deverá ser esclarecida antes da conclusão
      da análise correspondente.
    </p>

    <p style="font-size: 13px;">
      Esta sinalização representa um estado metodológico do
      protótipo e não constitui, por si só, requisito jurídico
      autônomo.
    </p>
  `;


  resultsContainer.appendChild(card);

});


    /* -----------------------------------------------------
       NENHUM REQUISITO ATIVADO
       ----------------------------------------------------- */

    if (
  activatedRequirements.length === 0 &&
  pendingQuestions.length === 0
) {
      const card =
        document.createElement("article");

      card.className = "result-card";

      card.innerHTML = `
        <div class="result-card-header">
          <div>
            <p class="eyebrow">Resultado</p>
            <h3>Nenhum requisito adicional foi ativado nesta versão da matriz</h3>
          </div>
        </div>

        <p>
          As respostas fornecidas não ativaram os requisitos
          atualmente incorporados à versão ${window.CGT_DATABASE.version}
          da base.
        </p>

        <div class="result-source">
          <strong>Atenção:</strong>
          isso não significa que a contratação esteja dispensada
          de outras exigências jurídicas ou administrativas.
        </div>
      `;

      resultsContainer.appendChild(card);

      return;
    }


    /* -----------------------------------------------------
       REQUISITOS ATIVADOS
       ----------------------------------------------------- */

    activatedRequirements.forEach(requirement => {

      const card =
        document.createElement("article");

      card.className =
        "result-card";


      const header =
        document.createElement("div");

      header.className =
        "result-card-header";


      const headerText =
        document.createElement("div");


      const module =
        document.createElement("p");

      module.className =
        "eyebrow";

      module.textContent =
        requirement.module;


      const title =
        document.createElement("h3");

      title.textContent =
        requirement.title;


      const nature =
        document.createElement("span");

      nature.className =
        "requirement-type";

      nature.textContent =
        requirement.nature;


      headerText.appendChild(module);
      headerText.appendChild(title);

      header.appendChild(headerText);
      header.appendChild(nature);


      const summary =
        document.createElement("p");

      summary.textContent =
        requirement.summary;


      const sourceBox =
        document.createElement("div");

      sourceBox.className =
        "result-source";

      sourceBox.innerHTML = `
        <strong>Fonte:</strong>
        ${escapeHTML(requirement.source)}
        <br>

        <strong>Dispositivo:</strong>
        ${escapeHTML(requirement.provision)}
        <br>

        <strong>Instrumento de materialização:</strong>
        ${escapeHTML(requirement.materialization)}
      `;


      const whyButton =
        document.createElement("button");

      whyButton.className =
        "why-button";

      whyButton.type =
        "button";

      whyButton.textContent =
        "Por que este requisito é relevante?";


      const whyContent =
        document.createElement("div");

      whyContent.className =
        "why-content";


      whyContent.innerHTML = `
        <p>
          <strong>Por que apareceu?</strong><br>
          ${escapeHTML(requirement.activationText)}
        </p>

        <p>
          <strong>Fundamento:</strong><br>
          ${escapeHTML(requirement.explanation)}
        </p>

        <p>
          <strong>Revisão humana:</strong><br>
          ${escapeHTML(requirement.humanReview)}
        </p>

        <a
          class="source-link"
          href="${requirement.sourceUrl}"
          target="_blank"
          rel="noopener noreferrer"
        >
          Abrir fonte oficial ↗
        </a>
      `;


      whyButton.addEventListener("click", () => {

        whyContent.classList.toggle("open");

        whyButton.textContent =
          whyContent.classList.contains("open")
            ? "Ocultar explicação"
            : "Por que este requisito é relevante?";
      });


      card.appendChild(header);
      card.appendChild(summary);
      card.appendChild(sourceBox);
      card.appendChild(whyButton);
      card.appendChild(whyContent);


      resultsContainer.appendChild(card);
    });
  }


  /* -------------------------------------------------------
     RASTRO DA ANÁLISE
     ------------------------------------------------------- */

 function renderTrace() {

  traceContent.innerHTML = "";


  if (answers.sisp_scope !== "yes") {

    traceContent.innerHTML = `
      <div class="trace-item">

        <strong>Verificação de escopo</strong>

        <div class="trace-path">

          <span class="trace-chip">
            Contratação não confirmada no recorte SISP / IN nº 94
          </span>

          <span class="trace-path-arrow">→</span>

          <span class="trace-chip">
            Análise interrompida
          </span>

        </div>

      </div>
    `;

    return;
  }


  const pendingQuestions =
    getPendingQuestions();


  if (
    activatedRequirements.length === 0 &&
    pendingQuestions.length === 0
  ) {

    traceContent.innerHTML = `
      <p>
        Nenhum requisito da versão atual da matriz foi
        ativado pelas respostas fornecidas.
      </p>
    `;

    return;
  }


  /* INFORMAÇÕES PENDENTES */

  pendingQuestions.forEach(question => {

    const option =
      question.options.find(
        item =>
          item.value === answers[question.id]
      );


    const item =
      document.createElement("div");

    item.className =
      "trace-item";


    item.innerHTML = `
      <strong>
        Informação pendente
      </strong>

      <div class="trace-path">

        <span class="trace-chip">
          ${escapeHTML(question.title)}
          → ${escapeHTML(option?.label || "Não definido")}
        </span>

        <span class="trace-path-arrow">
          →
        </span>

        <span class="trace-chip">
          Incidência não determinada
        </span>

        <span class="trace-path-arrow">
          →
        </span>

        <span class="trace-chip">
          Revisão necessária
        </span>

      </div>
    `;


    traceContent.appendChild(item);

  });


  /* REQUISITOS ATIVADOS */

 activatedRequirements.forEach(requirement => {

  const matchedConditions =
    getMatchedConditions(requirement);


  const activationPaths =
    matchedConditions.map(condition => {

      const question =
        window.QUESTIONS.find(
          q => q.id === condition.questionId
        );


      const answerValue =
        answers[condition.questionId];


      const option =
        question?.options.find(
          item => item.value === answerValue
        );


      return `
        <span class="trace-chip">
          ${escapeHTML(question?.title || "Pergunta")}
          → ${escapeHTML(option?.label || answerValue)}
        </span>
      `;

    }).join(`
      <span class="trace-path-arrow">+</span>
    `);


  const item =
    document.createElement("div");

  item.className =
    "trace-item";


  item.innerHTML = `
    <strong>
      ${escapeHTML(requirement.title)}
    </strong>

    <div class="trace-path">

      ${activationPaths}

      <span class="trace-path-arrow">
        →
      </span>

      <span class="trace-chip">
        ${escapeHTML(requirement.id)}
      </span>

      <span class="trace-path-arrow">
        →
      </span>

      <span class="trace-chip">
        ${escapeHTML(requirement.source)}
      </span>

      <span class="trace-path-arrow">
        →
      </span>

      <span class="trace-chip">
        ${escapeHTML(requirement.title)}
      </span>

    </div>
  `;


  traceContent.appendChild(item);

});
}


  /* -------------------------------------------------------
     MODAL DO RASTRO
     ------------------------------------------------------- */

  openTraceButton.addEventListener("click", () => {

    renderTrace();

    traceModal.classList.add("open");
    traceModal.setAttribute(
      "aria-hidden",
      "false"
    );
  });


  document
    .querySelectorAll("[data-close-modal]")
    .forEach(element => {

      element.addEventListener("click", () => {

        traceModal.classList.remove("open");

        traceModal.setAttribute(
          "aria-hidden",
          "true"
        );
      });
    });


  document.addEventListener("keydown", event => {

    if (
      event.key === "Escape" &&
      traceModal.classList.contains("open")
    ) {

      traceModal.classList.remove("open");

      traceModal.setAttribute(
        "aria-hidden",
        "true"
      );
    }
  });


  /* -------------------------------------------------------
     REVISAR RESPOSTAS
     ------------------------------------------------------- */

  editAnswersButton.addEventListener("click", () => {

    updateVisibleQuestions();

    currentQuestionIndex =
      Math.max(
        0,
        visibleQuestions.length - 1
      );

    showScreen("analysis");

    renderCurrentQuestion();
  });


  /* -------------------------------------------------------
     IMPRESSÃO / PDF
     ------------------------------------------------------- */

  printResultsButton.addEventListener("click", () => {

    window.print();
  });


  /* -------------------------------------------------------
     SEGURANÇA BÁSICA DE TEXTO
     ------------------------------------------------------- */

  function escapeHTML(value) {

    if (
      value === null ||
      value === undefined
    ) {
      return "";
    }


    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

});