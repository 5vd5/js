/* InterviewJS — client-side interview engine */

const QUESTION_BANK = [
  // JAVASCRIPT
  { id: 1, topic: "javascript", difficulty: "easy", question: "Which keyword creates a block-scoped variable that can be reassigned?", options: ["var", "let", "const", "static"], answer: "let", explanation: "let is block-scoped and allows reassignment." },
  { id: 2, topic: "javascript", difficulty: "easy", question: "What does Array.prototype.map() return?", options: ["The original array only", "A new transformed array", "A boolean", "A single object"], answer: "A new transformed array", explanation: "map returns a new array containing the callback result for each item." },
  { id: 3, topic: "javascript", difficulty: "easy", question: "Which method converts a JSON string into a JavaScript value?", options: ["JSON.parse()", "JSON.stringify()", "JSON.decode()", "JSON.toObject()"], answer: "JSON.parse()", explanation: "JSON.parse converts valid JSON text into a JavaScript value." },
  { id: 4, topic: "javascript", difficulty: "easy", question: "Which operator checks both value and type?", options: ["==", "=", "===", "!="], answer: "===", explanation: "The strict equality operator compares without implicit type conversion." },
  { id: 5, topic: "javascript", difficulty: "easy", question: "Which browser API stores small key-value data persistently?", options: ["localStorage", "console", "historyLog", "documentStore"], answer: "localStorage", explanation: "localStorage persists string key-value pairs across browser sessions." },
  { id: 6, topic: "javascript", difficulty: "medium", question: "What is a closure?", options: ["A loop that stops automatically", "A function retaining access to its lexical scope", "A DOM event", "A class constructor"], answer: "A function retaining access to its lexical scope", explanation: "A closure preserves access to variables from its surrounding lexical environment." },
  { id: 7, topic: "javascript", difficulty: "medium", question: "What does the spread syntax ... mainly do with an array?", options: ["Deletes the array", "Expands its elements", "Sorts it", "Freezes it"], answer: "Expands its elements", explanation: "Spread expands iterable elements into a new context such as an array literal or function call." },
  { id: 8, topic: "javascript", difficulty: "medium", question: "What is the output type of typeof null?", options: ["null", "undefined", "object", "boolean"], answer: "object", explanation: "typeof null returns object due to a long-standing JavaScript behavior." },
  { id: 9, topic: "javascript", difficulty: "medium", question: "Which method creates a new array containing items that pass a test?", options: ["reduce()", "filter()", "find()", "some()"], answer: "filter()", explanation: "filter creates a new array containing elements for which the callback returns true." },
  { id: 10, topic: "javascript", difficulty: "hard", question: "What is the main purpose of the event loop?", options: ["Compile JavaScript", "Coordinate synchronous code and queued asynchronous callbacks", "Create HTML", "Encrypt variables"], answer: "Coordinate synchronous code and queued asynchronous callbacks", explanation: "The event loop coordinates the call stack with task and microtask queues." },
  { id: 11, topic: "javascript", difficulty: "hard", question: "Which queue is processed before the next task in a typical browser event-loop turn?", options: ["Microtask queue", "Image queue", "CSS queue", "Storage queue"], answer: "Microtask queue", explanation: "Promise reactions and other microtasks are generally drained before the browser moves to the next task." },
  { id: 12, topic: "javascript", difficulty: "hard", question: "What does Promise.all() do when one input promise rejects?", options: ["Waits forever", "Resolves with partial results", "Rejects the combined promise", "Retries automatically"], answer: "Rejects the combined promise", explanation: "Promise.all rejects as soon as an input promise rejects." },
  { id: 13, topic: "javascript", difficulty: "hard", question: "Why is a function declared with async always useful with await?", options: ["await can pause asynchronous control flow inside it", "async makes it synchronous", "async disables promises", "await works only in loops"], answer: "await can pause asynchronous control flow inside it", explanation: "Inside an async function, await lets execution resume after a promise settles while the function itself returns a promise." },
  { id: 14, topic: "javascript", difficulty: "medium", question: "What does event delegation rely on?", options: ["Putting one listener on a common ancestor", "Creating one listener per child forever", "Disabling bubbling", "Removing DOM nodes"], answer: "Putting one listener on a common ancestor", explanation: "Event delegation uses bubbling so one ancestor can handle events from matching descendants." },
  { id: 15, topic: "javascript", difficulty: "hard", question: "Which statement about const objects is correct?", options: ["Their properties can never change", "The binding cannot be reassigned, but object properties can change", "They are deeply immutable", "They cannot be passed to functions"], answer: "The binding cannot be reassigned, but object properties can change", explanation: "const protects the variable binding, not the object's internal properties." },
  { id: 16, topic: "javascript", difficulty: "medium", question: "What does Array.prototype.reduce() commonly help produce?", options: ["A single accumulated result", "Only a sorted array", "A DOM node", "A CSS rule"], answer: "A single accumulated result", explanation: "reduce accumulates array values into a single result, though the result can itself be an object or array." },

  // WEB
  { id: 17, topic: "web", difficulty: "easy", question: "Which HTML element is intended for the main navigation links of a page?", options: ["<nav>", "<links>", "<menuitem>", "<route>"], answer: "<nav>", explanation: "The semantic nav element identifies a section containing navigation links." },
  { id: 18, topic: "web", difficulty: "easy", question: "Which CSS property changes the space inside an element's border?", options: ["margin", "padding", "gap", "inset"], answer: "padding", explanation: "Padding is the inner space between content and the border." },
  { id: 19, topic: "web", difficulty: "easy", question: "Which attribute provides alternative text for an informative image?", options: ["title", "alt", "srcset", "caption"], answer: "alt", explanation: "The alt attribute provides a text alternative for an image." },
  { id: 20, topic: "web", difficulty: "medium", question: "What does CSS Grid primarily provide?", options: ["Two-dimensional layout", "Database storage", "HTTP routing", "JavaScript execution"], answer: "Two-dimensional layout", explanation: "Grid is designed for row-and-column layouts." },
  { id: 21, topic: "web", difficulty: "medium", question: "What does responsive design aim to do?", options: ["Make pages adapt to different screen sizes", "Remove CSS", "Prevent JavaScript", "Use only desktop layouts"], answer: "Make pages adapt to different screen sizes", explanation: "Responsive design adapts layout and interaction to different viewport sizes." },
  { id: 22, topic: "web", difficulty: "medium", question: "Which HTTP method is commonly used to retrieve a resource?", options: ["GET", "PATCH", "DELETE", "CONNECT"], answer: "GET", explanation: "GET requests retrieve a representation of a resource." },
  { id: 23, topic: "web", difficulty: "hard", question: "What is CORS primarily about?", options: ["Cross-origin browser access rules", "CSS animation timing", "Database joins", "Image compression"], answer: "Cross-origin browser access rules", explanation: "CORS controls whether browser scripts may access resources from another origin." },
  { id: 24, topic: "web", difficulty: "hard", question: "Which status code normally means the request succeeded and returned a resource?", options: ["200", "301", "404", "500"], answer: "200", explanation: "HTTP 200 OK indicates a successful request." },
  { id: 25, topic: "web", difficulty: "hard", question: "Why should buttons and links have clear accessible names?", options: ["Assistive technologies need meaningful controls", "It improves database indexing", "It disables CSS", "It makes HTTP faster"], answer: "Assistive technologies need meaningful controls", explanation: "Clear accessible names help screen readers and other assistive technologies communicate control purpose." },
  { id: 26, topic: "web", difficulty: "medium", question: "What does defer do on a classic external script?", options: ["Runs it after HTML parsing and preserves document order", "Runs it before parsing", "Deletes the script", "Makes it server-side"], answer: "Runs it after HTML parsing and preserves document order", explanation: "Deferred classic scripts execute after parsing and in document order." },
  { id: 27, topic: "web", difficulty: "hard", question: "Which browser storage mechanism is best suited to larger structured client-side data?", options: ["IndexedDB", "document.title", "session URL", "CSS variables"], answer: "IndexedDB", explanation: "IndexedDB provides a client-side database for larger structured data." },

  // REACT
  { id: 28, topic: "react", difficulty: "easy", question: "What is a React component?", options: ["A reusable UI building block", "A database table", "A CSS file only", "A browser extension"], answer: "A reusable UI building block", explanation: "Components encapsulate reusable pieces of UI and behavior." },
  { id: 29, topic: "react", difficulty: "easy", question: "Which hook is commonly used for local component state?", options: ["useState", "useRoute", "useClass", "useDOM"], answer: "useState", explanation: "useState adds state to a function component." },
  { id: 30, topic: "react", difficulty: "easy", question: "What are props?", options: ["Inputs passed from a parent to a component", "Browser cookies", "CSS selectors", "Database indexes"], answer: "Inputs passed from a parent to a component", explanation: "Props let a parent provide data or callbacks to a child component." },
  { id: 31, topic: "react", difficulty: "medium", question: "Why are keys used when rendering lists in React?", options: ["To help React identify list items across renders", "To encrypt props", "To create CSS", "To replace state"], answer: "To help React identify list items across renders", explanation: "Keys give React stable identity information for elements in a list." },
  { id: 32, topic: "react", difficulty: "medium", question: "What is useEffect generally used for?", options: ["Synchronizing with external systems", "Declaring CSS", "Creating HTML tags", "Replacing all props"], answer: "Synchronizing with external systems", explanation: "Effects are commonly used for subscriptions, timers, network synchronization and other external side effects." },
  { id: 33, topic: "react", difficulty: "medium", question: "What happens when a state setter from useState is called?", options: ["React schedules an update", "The browser reloads automatically", "The component becomes a class", "The state is written to SQL"], answer: "React schedules an update", explanation: "Calling the setter requests a state update and may cause the component to render again." },
  { id: 34, topic: "react", difficulty: "hard", question: "What is a controlled input in React?", options: ["An input whose value is driven by React state", "An input controlled only by CSS", "An input with no events", "An input stored in localStorage automatically"], answer: "An input whose value is driven by React state", explanation: "A controlled form element gets its current value from React state and updates through handlers." },
  { id: 35, topic: "react", difficulty: "hard", question: "Why can an effect dependency array be important?", options: ["It controls when the effect is re-run", "It makes JSX valid", "It disables state", "It creates routes"], answer: "It controls when the effect is re-run", explanation: "React uses dependency values to determine when an effect needs to run again." },
  { id: 36, topic: "react", difficulty: "hard", question: "What is lifting state up?", options: ["Moving shared state to a common ancestor", "Moving state into CSS", "Deleting component state", "Saving state to a server"], answer: "Moving shared state to a common ancestor", explanation: "Shared state is often moved to the closest common parent so sibling components can use the same source of truth." },
  { id: 37, topic: "react", difficulty: "medium", question: "What does JSX represent?", options: ["A syntax extension commonly used to describe UI", "A database language", "A CSS preprocessor", "A browser storage API"], answer: "A syntax extension commonly used to describe UI", explanation: "JSX lets developers write HTML-like syntax that is transformed into JavaScript expressions." },
  { id: 38, topic: "react", difficulty: "hard", question: "Which is generally a better list key than an array index when items can be reordered?", options: ["A stable item identifier", "A random number on every render", "The current timestamp", "No key"], answer: "A stable item identifier", explanation: "Stable identifiers help React preserve the identity of items when a list changes." },

  // MIXED / PRACTICAL
  { id: 39, topic: "javascript", difficulty: "hard", question: "A timer uses setInterval() and the user navigates away. What should robust code do?", options: ["Clear the interval when it is no longer needed", "Create more intervals", "Ignore it forever", "Reload the browser"], answer: "Clear the interval when it is no longer needed", explanation: "Clearing timers prevents duplicate callbacks, leaks and unexpected state changes." },
  { id: 40, topic: "web", difficulty: "medium", question: "What is the safest way for a frontend app to render untrusted plain text?", options: ["Use textContent", "Build an HTML string with innerHTML", "Use eval()", "Put it inside a script tag"], answer: "Use textContent", explanation: "textContent treats the value as text rather than parsing it as HTML." },
  { id: 41, topic: "javascript", difficulty: "hard", question: "Why should user-controlled strings be escaped before being inserted into HTML?", options: ["To reduce HTML/script injection risk", "To increase CPU speed", "To enable CSS Grid", "To make arrays immutable"], answer: "To reduce HTML/script injection risk", explanation: "Escaping prevents untrusted content from being interpreted as markup or executable code." },
  { id: 42, topic: "web", difficulty: "hard", question: "What is progressive enhancement?", options: ["Start with a usable baseline and enhance it for capable browsers", "Use only the newest browser APIs", "Disable accessibility", "Load every feature before the page appears"], answer: "Start with a usable baseline and enhance it for capable browsers", explanation: "Progressive enhancement builds a functional baseline and layers richer behavior on top." },
  { id: 43, topic: "javascript", difficulty: "medium", question: "What is debouncing useful for?", options: ["Waiting until rapid events stop before running work", "Running code every millisecond", "Encrypting input", "Creating promises automatically"], answer: "Waiting until rapid events stop before running work", explanation: "Debouncing reduces repeated work for events such as search input or resize." },
  { id: 44, topic: "web", difficulty: "medium", question: "Why is semantic HTML useful?", options: ["It communicates structure and meaning to browsers and assistive technology", "It removes the need for CSS", "It prevents all bugs", "It stores API keys"], answer: "It communicates structure and meaning to browsers and assistive technology", explanation: "Semantic elements provide meaningful document structure and improve accessibility and maintainability." },
  { id: 45, topic: "javascript", difficulty: "hard", question: "What is a common edge case when parsing localStorage JSON?", options: ["The stored value may be missing or invalid JSON", "JSON always parses successfully", "localStorage stores objects natively", "Parsing requires React"], answer: "The stored value may be missing or invalid JSON", explanation: "Robust code should handle null, malformed data and storage failures." },
  { id: 46, topic: "react", difficulty: "hard", question: "Why is mutating React state directly a problem?", options: ["React may not detect the intended update correctly", "It makes JSX invalid", "It disables JavaScript", "It automatically clears props"], answer: "React may not detect the intended update correctly", explanation: "State should be updated through the supported state setter patterns rather than direct mutation." },
  { id: 47, topic: "javascript", difficulty: "medium", question: "What does optional chaining ?. help with?", options: ["Safely accessing a property when an earlier value may be nullish", "Sorting arrays", "Creating classes", "Making HTTP requests"], answer: "Safely accessing a property when an earlier value may be nullish", explanation: "Optional chaining short-circuits when the left side is null or undefined." },
  { id: 48, topic: "web", difficulty: "hard", question: "Why should a frontend never rely on client-side validation alone for sensitive operations?", options: ["Users can modify client-side code and requests", "CSS can delete data", "HTML cannot contain forms", "Browsers never run JavaScript"], answer: "Users can modify client-side code and requests", explanation: "Client validation improves UX, but a server must validate and authorize sensitive operations." }
];

const STORAGE_KEY = "interviewjs_history_v2";
const THEME_KEY = "interviewjs_theme_v2";
const DEFAULT_TIME = 60;

const state = {
  route: "home",
  topic: "all",
  difficulty: "all",
  questionCount: 10,
  questions: [],
  currentIndex: 0,
  selectedAnswer: null,
  submitted: false,
  answers: [],
  score: 0,
  timerId: null,
  remainingTime: DEFAULT_TIME,
  sessionStartedAt: null,
  sessionFinishedAt: null
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

const screens = {
  home: $("#homeScreen"),
  setup: $("#setupScreen"),
  quiz: $("#quizScreen"),
  result: $("#resultScreen"),
  history: $("#historyScreen"),
  privacy: $("#privacyScreen"),
  contact: $("#contactScreen")
};

const dom = {
  startBtn: $("#startBtn"),
  beginBtn: $("#beginBtn"),
  historyBtn: $("#historyBtn"),
  themeBtn: $("#themeBtn"),
  themeIcon: $("#themeIcon"),
  menuBtn: $("#menuBtn"),
  mobileMenu: $("#mobileMenu"),
  topicOptions: $("#topicOptions"),
  difficultyOptions: $("#difficultyOptions"),
  countOptions: $("#countOptions"),
  previewCount: $("#previewCount"),
  previewTopic: $("#previewTopic"),
  previewDifficulty: $("#previewDifficulty"),
  previewTime: $("#previewTime"),
  previewPool: $("#previewPool"),
  quizTopic: $("#quizTopic"),
  timerBox: $("#timerBox"),
  timer: $("#timer"),
  currentNumber: $("#currentNumber"),
  totalNumber: $("#totalNumber"),
  progressFill: $("#progressFill"),
  questionTopic: $("#questionTopic"),
  difficultyBadge: $("#difficultyBadge"),
  question: $("#question"),
  answers: $("#answers"),
  feedback: $("#feedback"),
  nextButton: $("#nextButton"),
  skipButton: $("#skipButton"),
  jsStatus: $("#jsStatus"),
  finalScore: $("#finalScore"),
  correctCount: $("#correctCount"),
  wrongCount: $("#wrongCount"),
  skippedCount: $("#skippedCount"),
  resultTitle: $("#resultTitle"),
  resultMessage: $("#resultMessage"),
  scoreRing: $("#scoreRing"),
  topicPerformance: $("#topicPerformance"),
  reviewButton: $("#reviewButton"),
  retryButton: $("#retryButton"),
  reviewSection: $("#reviewSection"),
  reviewList: $("#reviewList"),
  historyList: $("#historyList"),
  emptyHistory: $("#emptyHistory"),
  clearHistoryBtn: $("#clearHistoryBtn"),
  contactForm: $("#contactForm"),
  contactName: $("#contactName"),
  contactEmail: $("#contactEmail"),
  contactSubject: $("#contactSubject"),
  contactMessage: $("#contactMessage"),
  messageCount: $("#messageCount"),
  contactSuccess: $("#contactSuccess"),
  toast: $("#toast"),
  confirmModal: $("#confirmModal"),
  modalClose: $("#modalClose"),
  modalCancel: $("#modalCancel"),
  modalConfirm: $("#modalConfirm"),
  homeStatus: $("#homeStatus")
};

let toastTimer;

function safeStorageGet(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value === null ? fallback : value;
  } catch {
    return fallback;
  }
}

function safeStorageSet(key, value) {
  try {
    localStorage.setItem(key, value);
    return true;
  } catch {
    showToast("Browser storage is unavailable.");
    return false;
  }
}

function getHistory() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveHistory(entry) {
  const history = getHistory();
  history.unshift(entry);
  safeStorageSet(STORAGE_KEY, JSON.stringify(history.slice(0, 30)));
}

function showToast(message) {
  dom.toast.textContent = message;
  dom.toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => dom.toast.classList.remove("show"), 2300);
}

function showScreen(route) {
  const target = screens[route] ? route : "home";
  Object.values(screens).forEach(screen => screen.classList.remove("active"));
  screens[target].classList.add("active");
  state.route = target;
  window.scrollTo({ top: 0, behavior: "instant" });
  closeMobileMenu();

  if (target === "history") renderHistory();
  if (target === "setup") updateSessionPreview();
}

function navigate(route) {
  if (state.route === "quiz" && route !== "quiz" && state.currentIndex < state.questions.length) {
    openConfirmModal();
    state.pendingRoute = route;
    return;
  }
  window.location.hash = route;
}

function handleRoute() {
  const requested = window.location.hash.replace("#", "") || "home";
  const allowed = Object.keys(screens);
  const route = allowed.includes(requested) ? requested : "home";
  showScreen(route);
}

function formatTopic(topic) {
  return topic === "all" ? "Mixed" : topic.charAt(0).toUpperCase() + topic.slice(1);
}

function formatDifficulty(difficulty) {
  if (difficulty === "all") return "All levels";
  return difficulty.charAt(0).toUpperCase() + difficulty.slice(1);
}

function updateSessionPreview() {
  const pool = getFilteredQuestions();
  const effectiveCount = Math.min(state.questionCount, pool.length);
  dom.previewCount.textContent = effectiveCount;
  dom.previewTopic.textContent = formatTopic(state.topic);
  dom.previewDifficulty.textContent = formatDifficulty(state.difficulty);
  dom.previewTime.textContent = `${effectiveCount} min`;
  dom.previewPool.textContent = `${pool.length} available`;

  dom.beginBtn.disabled = pool.length === 0;
  if (pool.length === 0) {
    dom.beginBtn.textContent = "No questions available";
  } else {
    dom.beginBtn.innerHTML = "Begin Interview <span>→</span>";
  }
}

function getFilteredQuestions() {
  return QUESTION_BANK.filter(q => {
    const topicMatch = state.topic === "all" || q.topic === state.topic;
    const difficultyMatch = state.difficulty === "all" || q.difficulty === state.difficulty;
    return topicMatch && difficultyMatch;
  });
}

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function setupSelections() {
  $$("#topicOptions [data-topic]").forEach(button => {
    button.addEventListener("click", () => {
      $$("#topicOptions [data-topic]").forEach(b => b.classList.remove("selected"));
      button.classList.add("selected");
      state.topic = button.dataset.topic;
      updateSessionPreview();
    });
  });

  $$("#difficultyOptions [data-difficulty]").forEach(button => {
    button.addEventListener("click", () => {
      $$("#difficultyOptions [data-difficulty]").forEach(b => b.classList.remove("selected"));
      button.classList.add("selected");
      state.difficulty = button.dataset.difficulty;
      updateSessionPreview();
    });
  });

  $$("#countOptions [data-count]").forEach(button => {
    button.addEventListener("click", () => {
      $$("#countOptions [data-count]").forEach(b => b.classList.remove("selected"));
      button.classList.add("selected");
      state.questionCount = Number(button.dataset.count);
      updateSessionPreview();
    });
  });
}

function startInterview() {
  const pool = getFilteredQuestions();
  if (!pool.length) {
    showToast("No questions match those filters.");
    return;
  }

  clearTimer();

  state.questions = shuffle(pool)
    .slice(0, Math.min(state.questionCount, pool.length))
    .map(q => ({ ...q, options: shuffle(q.options) }));

  state.currentIndex = 0;
  state.selectedAnswer = null;
  state.submitted = false;
  state.answers = [];
  state.score = 0;
  state.sessionStartedAt = Date.now();
  state.sessionFinishedAt = null;

  window.location.hash = "quiz";
  renderQuestion();
}

function renderQuestion() {
  const current = state.questions[state.currentIndex];

  if (!current) {
    finishInterview();
    return;
  }

  state.selectedAnswer = null;
  state.submitted = false;

  dom.quizTopic.textContent = formatTopic(state.topic);
  dom.currentNumber.textContent = state.currentIndex + 1;
  dom.totalNumber.textContent = state.questions.length;
  dom.questionTopic.textContent = formatTopic(current.topic);
  dom.difficultyBadge.textContent = formatDifficulty(current.difficulty);
  dom.question.textContent = current.question;
  dom.progressFill.style.width = `${((state.currentIndex) / state.questions.length) * 100}%`;
  dom.feedback.hidden = true;
  dom.feedback.textContent = "";
  dom.feedback.className = "feedback";
  dom.nextButton.disabled = true;
  dom.nextButton.textContent = "Choose an answer";
  dom.skipButton.disabled = false;
  dom.timerBox.classList.remove("warning", "danger");

  renderAnswers(current);
  startTimer();
  updateJSStatus(`Question ${state.currentIndex + 1} rendered by JavaScript.`);
}

function renderAnswers(current) {
  dom.answers.innerHTML = "";
  const letters = ["A", "B", "C", "D"];

  current.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-btn";
    button.dataset.answer = option;
    button.innerHTML = `<span class="answer-letter">${letters[index]}</span><span>${escapeHTML(option)}</span>`;
    button.addEventListener("click", () => selectAnswer(option));
    dom.answers.appendChild(button);
  });
}

function selectAnswer(answer) {
  if (state.submitted) return;

  state.selectedAnswer = answer;
  state.submitted = true;

  const current = state.questions[state.currentIndex];
  const isCorrect = answer === current.answer;

  if (isCorrect) state.score += 1;

  state.answers[state.currentIndex] = {
    questionId: current.id,
    selected: answer,
    correct: current.answer,
    isCorrect,
    skipped: false,
    timeUsed: DEFAULT_TIME - state.remainingTime
  };

  $$(".answer-btn").forEach(button => {
    button.disabled = true;
    const value = button.dataset.answer;
    if (value === current.answer) button.classList.add("correct");
    if (value === answer && !isCorrect) button.classList.add("wrong");
    if (value === answer) button.classList.add("selected");
  });

  clearTimer();

  dom.feedback.hidden = false;
  dom.feedback.classList.add(isCorrect ? "good" : "bad");
  dom.feedback.textContent = isCorrect
    ? "Correct. Nice one."
    : `Not quite. The correct answer is "${current.answer}".`;

  dom.nextButton.disabled = false;
  dom.nextButton.textContent = state.currentIndex === state.questions.length - 1 ? "Finish Interview" : "Next Question →";
  dom.skipButton.disabled = true;

  updateJSStatus(isCorrect ? "JavaScript validated a correct answer." : "JavaScript validated the selected answer.");
}

function skipQuestion(reason = "manual") {
  if (state.submitted) return;

  const current = state.questions[state.currentIndex];
  state.answers[state.currentIndex] = {
    questionId: current.id,
    selected: null,
    correct: current.answer,
    isCorrect: false,
    skipped: true,
    timeUsed: DEFAULT_TIME - state.remainingTime,
    reason
  };

  clearTimer();
  moveNext();
}

function moveNext() {
  if (state.currentIndex >= state.questions.length - 1) {
    finishInterview();
    return;
  }

  state.currentIndex += 1;
  renderQuestion();
}

function startTimer() {
  clearTimer();
  state.remainingTime = DEFAULT_TIME;
  updateTimer();

  state.timerId = setInterval(() => {
    state.remainingTime -= 1;
    updateTimer();

    if (state.remainingTime === 10) {
      dom.timerBox.classList.add("warning");
      showToast("10 seconds left.");
      updateJSStatus("Timer warning: 10 seconds remaining.");
    }

    if (state.remainingTime === 5) {
      dom.timerBox.classList.remove("warning");
      dom.timerBox.classList.add("danger");
      showToast("5 seconds. Make your choice.");
    }

    if (state.remainingTime <= 0) {
      handleTimeUp();
    }
  }, 1000);
}

function updateTimer() {
  dom.timer.textContent = formatTime(state.remainingTime);
}

function handleTimeUp() {
  clearTimer();

  if (state.submitted) return;

  showToast("Time is up. Question skipped.");
  skipQuestion("timeout");
}

function clearTimer() {
  if (state.timerId) {
    clearInterval(state.timerId);
    state.timerId = null;
  }
}

function finishInterview() {
  clearTimer();

  state.sessionFinishedAt = Date.now();
  dom.progressFill.style.width = "100%";

  const total = state.questions.length;
  const correct = state.answers.filter(a => a && a.isCorrect).length;
  const skipped = state.answers.filter(a => !a || a.skipped).length;
  const wrong = Math.max(0, total - correct - skipped);
  const score = total ? Math.round((correct / total) * 100) : 0;

  const entry = {
    id: crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`,
    date: new Date().toISOString(),
    topic: state.topic,
    difficulty: state.difficulty,
    total,
    correct,
    wrong,
    skipped,
    score,
    durationSeconds: Math.max(0, Math.round((state.sessionFinishedAt - state.sessionStartedAt) / 1000)),
    answers: state.questions.map((q, index) => ({
      ...state.answers[index],
      questionId: q.id,
      question: q.question,
      correct: q.answer,
      explanation: q.explanation,
      topic: q.topic,
      difficulty: q.difficulty,
      options: q.options
    }))
  };

  saveHistory(entry);
  state.lastResult = entry;

  renderResults(entry);
  window.location.hash = "result";
}

function renderResults(result) {
  dom.finalScore.textContent = `${result.score}%`;
  dom.correctCount.textContent = result.correct;
  dom.wrongCount.textContent = result.wrong;
  dom.skippedCount.textContent = result.skipped;

  const degrees = result.score * 3.6;
  dom.scoreRing.style.background = `conic-gradient(var(--accent) ${degrees}deg, var(--surface-2) ${degrees}deg)`;

  if (result.score >= 80) {
    dom.resultTitle.textContent = "Strong run.";
    dom.resultMessage.textContent = "You are moving fast and getting the important concepts right.";
  } else if (result.score >= 60) {
    dom.resultTitle.textContent = "Solid attempt.";
    dom.resultMessage.textContent = "A few weak spots remain. Review them and run it again.";
  } else {
    dom.resultTitle.textContent = "Keep going.";
    dom.resultMessage.textContent = "Use the review section to identify the topics worth revisiting.";
  }

  renderTopicPerformance(result);
  renderReview(result);
  dom.reviewSection.hidden = true;
}

function renderTopicPerformance(result) {
  const groups = {};

  result.answers.forEach(answer => {
    const key = answer.topic;
    if (!groups[key]) groups[key] = { total: 0, correct: 0 };
    groups[key].total += 1;
    if (answer.isCorrect) groups[key].correct += 1;
  });

  dom.topicPerformance.innerHTML = Object.entries(groups).map(([topic, data]) => {
    const percent = data.total ? Math.round((data.correct / data.total) * 100) : 0;
    return `
      <div class="performance-row">
        <span>${escapeHTML(formatTopic(topic))}</span>
        <div class="bar"><span style="width:${percent}%"></span></div>
        <strong>${percent}%</strong>
      </div>
    `;
  }).join("");
}

function renderReview(result) {
  dom.reviewList.innerHTML = result.answers.map((answer, index) => {
    const status = answer.skipped ? "Skipped" : answer.isCorrect ? "Correct" : "Wrong";
    const answerText = answer.skipped ? "No answer" : answer.selected;
    return `
      <article class="review-item">
        <h4>${index + 1}. ${escapeHTML(answer.question)}</h4>
        <div class="review-answer ${answer.isCorrect ? "good" : answer.skipped ? "" : "bad"}">
          Your answer: <strong>${escapeHTML(answerText)}</strong>
        </div>
        <div class="review-answer">
          Correct answer: <strong>${escapeHTML(answer.correct)}</strong>
        </div>
        <div class="review-answer">${escapeHTML(answer.explanation)}</div>
        <div class="review-answer"><strong>${status}</strong></div>
      </article>
    `;
  }).join("");
}

function renderHistory() {
  const history = getHistory();
  dom.historyList.innerHTML = "";

  dom.emptyHistory.hidden = history.length > 0;
  dom.clearHistoryBtn.hidden = history.length === 0;

  history.forEach(entry => {
    const item = document.createElement("article");
    item.className = "history-item";
    item.innerHTML = `
      <div>
        <h3>${escapeHTML(formatTopic(entry.topic))} · ${escapeHTML(formatDifficulty(entry.difficulty))}</h3>
        <p>${escapeHTML(formatDate(entry.date))} · ${entry.total} questions · ${entry.correct} correct · ${entry.skipped} skipped</p>
      </div>
      <strong class="history-score">${entry.score}%</strong>
      <span class="history-badge">${entry.score >= 80 ? "Strong" : entry.score >= 60 ? "Solid" : "Practice"}</span>
    `;
    dom.historyList.appendChild(item);
  });
}

function toggleTheme() {
  const root = document.documentElement;
  const next = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = next;
  safeStorageSet(THEME_KEY, next);
  dom.themeIcon.textContent = next === "dark" ? "☀" : "◐";
  showToast(`${next === "dark" ? "Dark" : "Light"} mode enabled.`);
}

function loadTheme() {
  const saved = safeStorageGet(THEME_KEY, "light");
  document.documentElement.dataset.theme = saved === "dark" ? "dark" : "light";
  dom.themeIcon.textContent = saved === "dark" ? "☀" : "◐";
}

function updateJSStatus(message) {
  if (dom.jsStatus) dom.jsStatus.textContent = message;
  if (dom.homeStatus) dom.homeStatus.textContent = message;
}

function formatTime(seconds) {
  const safe = Math.max(0, Number(seconds) || 0);
  return `${String(Math.floor(safe / 60)).padStart(2, "0")}:${String(safe % 60).padStart(2, "0")}`;
}

function formatDate(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "Unknown date";
  return new Intl.DateTimeFormat(undefined, { dateStyle: "medium", timeStyle: "short" }).format(date);
}

function escapeHTML(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function openConfirmModal() {
  dom.confirmModal.hidden = false;
  dom.modalCancel.focus();
}

function closeConfirmModal() {
  dom.confirmModal.hidden = true;
  state.pendingRoute = null;
}

function closeMobileMenu() {
  dom.mobileMenu.hidden = true;
  dom.menuBtn.setAttribute("aria-expanded", "false");
}

function setupNavigation() {
  dom.startBtn.addEventListener("click", () => navigate("setup"));
  dom.beginBtn.addEventListener("click", startInterview);
  dom.historyBtn.addEventListener("click", () => navigate("history"));
  dom.themeBtn.addEventListener("click", toggleTheme);

  dom.menuBtn.addEventListener("click", () => {
    const open = dom.mobileMenu.hidden;
    dom.mobileMenu.hidden = !open;
    dom.menuBtn.setAttribute("aria-expanded", String(open));
  });

  $$("[data-route]").forEach(button => {
    button.addEventListener("click", () => navigate(button.dataset.route));
  });

  window.addEventListener("hashchange", handleRoute);
}

function setupQuizActions() {
  dom.nextButton.addEventListener("click", () => {
    if (!state.submitted) return;
    moveNext();
  });

  dom.skipButton.addEventListener("click", () => {
    if (state.submitted) return;
    skipQuestion();
  });

  dom.reviewButton.addEventListener("click", () => {
    dom.reviewSection.hidden = !dom.reviewSection.hidden;
    if (!dom.reviewSection.hidden) dom.reviewSection.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  dom.retryButton.addEventListener("click", () => navigate("setup"));
}

function setupHistoryActions() {
  dom.clearHistoryBtn.addEventListener("click", () => {
    if (!getHistory().length) return;
    if (!window.confirm("Clear all locally stored InterviewJS history?")) return;
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {}
    renderHistory();
    showToast("Local history cleared.");
  });
}

function setupContactForm() {
  dom.contactMessage.addEventListener("input", () => {
    dom.messageCount.textContent = dom.contactMessage.value.length;
  });

  dom.contactForm.addEventListener("submit", event => {
    event.preventDefault();

    const name = dom.contactName.value.trim();
    const email = dom.contactEmail.value.trim();
    const subject = dom.contactSubject.value;
    const message = dom.contactMessage.value.trim();

    if (name.length < 2) {
      showToast("Please enter your name.");
      dom.contactName.focus();
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showToast("Please enter a valid email.");
      dom.contactEmail.focus();
      return;
    }

    if (message.length < 10) {
      showToast("Please add a little more detail.");
      dom.contactMessage.focus();
      return;
    }

    const recipient = "hello@example.com";
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    const mailto = `mailto:${recipient}?subject=${encodeURIComponent(`[InterviewJS] ${subject}`)}&body=${encodeURIComponent(body)}`;

    dom.contactSuccess.hidden = false;
    dom.contactSuccess.textContent = "Your email draft is ready. Your default email app should open now.";
    window.location.href = mailto;
  });
}

function setupModal() {
  dom.modalClose.addEventListener("click", closeConfirmModal);
  dom.modalCancel.addEventListener("click", closeConfirmModal);

  dom.modalConfirm.addEventListener("click", () => {
    clearTimer();
    closeConfirmModal();
    window.location.hash = state.pendingRoute || "home";
  });

  dom.confirmModal.addEventListener("click", event => {
    if (event.target === dom.confirmModal) closeConfirmModal();
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && !dom.confirmModal.hidden) closeConfirmModal();
  });
}

function preventAccidentalExit() {
  window.addEventListener("beforeunload", event => {
    if (state.route === "quiz" && state.questions.length && state.currentIndex < state.questions.length) {
      event.preventDefault();
      event.returnValue = "";
    }
  });
}

function initialize() {
  loadTheme();
  setupSelections();
  setupNavigation();
  setupQuizActions();
  setupHistoryActions();
  setupContactForm();
  setupModal();
  preventAccidentalExit();
  updateSessionPreview();
  handleRoute();
}

initialize();
