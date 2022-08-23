const zeroPad = (num, places) => String(num).padStart(places, "0");

const updateWatch = () => {
  const currentTime = new Date();

  document.querySelector(".hours").innerHTML = zeroPad(
    currentTime.getHours(),
    2
  );

  document.querySelector(".minutes").innerHTML = zeroPad(
    currentTime.getMinutes(),
    2
  );

  document.querySelector(".seconds").innerHTML = zeroPad(
    currentTime.getSeconds(),
    2
  );
};

const initWatch = () => {
  const ONE_SECOND = 1 * 1000;

  updateWatch();

  setInterval(updateWatch, ONE_SECOND);
};

initWatch();
