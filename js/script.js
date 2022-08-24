const ONE_SECOND = 1 * 1000;

const navigateTo = (targetClassName) => {
  document.querySelectorAll(".content > div").forEach((element) => {
    element.classList[
      element.classList.contains(targetClassName) ? "remove" : "add"
    ]("hidden");
  });
};

const zeroPad = (num, places) => String(num).padStart(places, "0");
