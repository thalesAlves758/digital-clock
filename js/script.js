const ONE_SECOND = 1 * 1000;

const navigateTo = (targetClassName) => {
  document.querySelectorAll(".content > div").forEach((element) => {
    element.classList[
      element.classList.contains(targetClassName) ? "remove" : "add"
    ]("hidden");
  });
};

const zeroPad = (num, places) => String(num).padStart(places, "0");

const insertTimeUnitsInto = (
  targetClassName,
  hours = 0,
  minutes = 0,
  seconds = 0
) => {
  Object.entries({ hours, minutes, seconds }).forEach(([key, value]) => {
    document.querySelector(`.${targetClassName} .${key}`).innerHTML = zeroPad(
      value,
      2
    );
  });
};
