let timerSeconds = 0;
let timerIntervalId;

const startTimer = () => {
  document.querySelector(".timer .btn-start").disabled = true;
  document.querySelector(".timer .btn-pause").disabled = false;
  document.querySelector(".timer .btn-restart").disabled = false;

  timerIntervalId = setInterval(() => {
    timerSeconds++;

    const { hours, minutes, seconds } = getTimeUnitsBySeconds(timerSeconds);

    insertTimeUnitsInto("timer", hours, minutes, seconds);
  }, ONE_SECOND);
};

const pauseTimer = () => {
  document.querySelector(".timer .btn-pause").disabled = true;

  clearInterval(timerIntervalId);

  document.querySelector(".timer .btn-start").classList.add("hidden");
  document.querySelector(".timer .btn-resume").classList.remove("hidden");
};

const restartTimer = () => {
  document.querySelector(".timer .btn-start").disabled = false;
  document.querySelector(".timer .btn-pause").disabled = true;
  document.querySelector(".timer .btn-restart").disabled = true;

  clearInterval(timerIntervalId);
  timerSeconds = 0;

  insertTimeUnitsInto("timer", 0, 0, 0);
};

const resumeTimer = () => {
  startTimer();

  document.querySelector(".timer .btn-resume").classList.add("hidden");
  document.querySelector(".timer .btn-start").classList.remove("hidden");
};
