const updateWatch = () => {
  const currentTime = new Date();

  insertTimeUnitsInto(
    "watch",
    currentTime.getHours(),
    currentTime.getMinutes(),
    currentTime.getSeconds()
  );
};

const initWatch = () => {
  updateWatch();

  setInterval(updateWatch, ONE_SECOND);
};

initWatch();
