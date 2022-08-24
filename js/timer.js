let timerSeconds = 0;
let timerIntervalId;

const startTimer = () => {
  document.querySelector(".timer .btn-start").disabled = true;
  document.querySelector(".timer .btn-pause").disabled = false;
  document.querySelector(".timer .btn-restart").disabled = false;

  timerIntervalId = setInterval(() => {
    timerSeconds++;

    let parcialSeconds = timerSeconds;

    let parcialMinutes = parseInt(parcialSeconds / 60);
    parcialSeconds -= parcialMinutes * 60;

    let parcialHours = parseInt(parcialMinutes / 60);
    parcialMinutes -= parcialHours * 60;

    insertTimeUnitsInto("timer", parcialHours, parcialMinutes, parcialSeconds);
  }, ONE_SECOND);
};

const pauseTimer = () => {
  document.querySelector(".timer .btn-start").disabled = false;
  document.querySelector(".timer .btn-pause").disabled = true;

  clearInterval(timerIntervalId);
};

const restartTimer = () => {
  document.querySelector(".timer .btn-start").disabled = false;
  document.querySelector(".timer .btn-pause").disabled = true;
  document.querySelector(".timer .btn-restart").disabled = true;

  clearInterval(timerIntervalId);
  timerSeconds = 0;

  insertTimeUnitsInto("timer", 0, 0, 0);
};
