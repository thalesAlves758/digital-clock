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

    document.querySelector(".timer .hours").innerHTML = zeroPad(
      parcialHours,
      2
    );

    document.querySelector(".timer .minutes").innerHTML = zeroPad(
      parcialMinutes,
      2
    );

    document.querySelector(".timer .seconds").innerHTML = zeroPad(
      parcialSeconds,
      2
    );
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

  document.querySelector(".timer .hours").innerHTML = zeroPad(0, 2);

  document.querySelector(".timer .minutes").innerHTML = zeroPad(0, 2);

  document.querySelector(".timer .seconds").innerHTML = zeroPad(0, 2);
};
