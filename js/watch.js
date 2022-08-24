const updateWatch = () => {
  const currentTime = new Date();

  document.querySelector(".watch .hours").innerHTML = zeroPad(
    currentTime.getHours(),
    2
  );

  document.querySelector(".watch .minutes").innerHTML = zeroPad(
    currentTime.getMinutes(),
    2
  );

  document.querySelector(".watch .seconds").innerHTML = zeroPad(
    currentTime.getSeconds(),
    2
  );
};

const initWatch = () => {
  updateWatch();

  setInterval(updateWatch, ONE_SECOND);
};

initWatch();
