const delayer = {
  hours: [0, 0],
  minutes: [0, 0],
  seconds: [0, 0],
};

let delayerSeconds;
let delayerIntervalId;

const updateDelayer = () => {
  Object.entries(delayer).forEach(([key, values]) => {
    document
      .querySelectorAll(`.delayer .editable-timer .${key}`)
      .forEach((element, index) => {
        element.innerHTML = values[index];
      });
  });
};

const canBeMoreThanSix = (className, position) =>
  className === "hours" || position === "second";

const incrementValue = (element) => {
  const numberElement = element.parentElement.querySelector("span");
  const [numberClassName, position] = numberElement.classList;

  const currentValue = delayer[numberClassName][position === "first" ? 0 : 1];

  delayer[numberClassName][position === "first" ? 0 : 1] =
    (currentValue + 1) % (canBeMoreThanSix(numberClassName, position) ? 10 : 6);

  updateDelayer();
};

const decrementValue = (element) => {
  const numberElement = element.parentElement.querySelector("span");
  const [numberClassName, position] = numberElement.classList;

  const currentValue = delayer[numberClassName][position === "first" ? 0 : 1];

  delayer[numberClassName][position === "first" ? 0 : 1] = canBeMoreThanSix(
    numberClassName,
    position
  )
    ? (currentValue + 9) % 10
    : (currentValue + 5) % 6;

  updateDelayer();
};

const hideEditableTimer = () => {
  document.querySelector(".delayer .editable-timer").classList.add("hidden");
};

const showEditableTimer = () => {
  document.querySelector(".delayer .editable-timer").classList.remove("hidden");
};

const showUneditableTimer = () => {
  document
    .querySelector(".delayer .uneditable-timer")
    .classList.remove("hidden");
};

const hideUneditableTimer = () => {
  document.querySelector(".delayer .uneditable-timer").classList.add("hidden");
};

const convertArrayToNumbers = (array) => parseInt(array.join(""));

const restartDelayer = () => {
  delayerSeconds = 0;
  clearInterval(delayerIntervalId);

  Object.keys(delayer).forEach((key) => {
    delayer[key] = [0, 0];
  });

  hideUneditableTimer();

  updateDelayer();

  showEditableTimer();

  document.querySelector(".delayer .btn-start").disabled = false;
  document.querySelector(".delayer .btn-pause").disabled = true;
  document.querySelector(".delayer .btn-restart").disabled = true;
};

const finishDelayer = () => {
  alert("O tempo acabou!");
  clearInterval(delayerIntervalId);

  restartDelayer();
};

const initDelayerUpdater = () => {
  delayerIntervalId = setInterval(() => {
    if (delayerSeconds === 0) {
      finishDelayer();
      return;
    }

    delayerSeconds--;

    const { hours, minutes, seconds } = getTimeUnitsBySeconds(delayerSeconds);

    insertTimeUnitsInto("delayer-timer", hours, minutes, seconds);
  }, ONE_SECOND);
};

const startDelayer = () => {
  document.querySelector(".delayer .btn-start").disabled = true;

  hideEditableTimer();

  const hours = convertArrayToNumbers(delayer.hours);
  const minutes = convertArrayToNumbers(delayer.minutes);
  const seconds = convertArrayToNumbers(delayer.seconds);

  delayerSeconds = hours * 60 * 60 + minutes * 60 + seconds;

  insertTimeUnitsInto("delayer-timer", hours, minutes, seconds);

  showUneditableTimer();

  initDelayerUpdater();

  document.querySelector(".delayer .btn-pause").disabled = false;
  document.querySelector(".delayer .btn-restart").disabled = false;
};

const pauseDelayer = () => {
  document.querySelector(".delayer .btn-pause").disabled = true;

  clearInterval(delayerIntervalId);

  document.querySelector(".delayer .btn-start").classList.add("hidden");
  document.querySelector(".delayer .btn-resume").classList.remove("hidden");
};

const resumeDelayer = () => {
  document.querySelector(".delayer .btn-resume").classList.add("hidden");

  initDelayerUpdater();

  document.querySelector(".delayer .btn-start").classList.remove("hidden");
  document.querySelector(".delayer .btn-pause").disabled = false;
};

updateDelayer();
