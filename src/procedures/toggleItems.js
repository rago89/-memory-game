/**
@param {array} [arrayToToggle] - An array that stores target elements.
*/

export const toggleItems = (arrayToToggle) => {
  arrayToToggle[0].classList.remove("visible");
  arrayToToggle[0].classList.add("hidden");
  arrayToToggle[1].classList.remove("visible");
  arrayToToggle[1].classList.add("hidden");
  arrayToToggle.splice(0);
};

