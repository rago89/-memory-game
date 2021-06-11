/**
@param {array} [arrayToToggle] - An array that stores target elements.
*/

const toggleItems = (arrayToToggle) => {
  arrayToToggle[0].classList.remove("visible");
  arrayToToggle[0].classList.add("hidden");
  arrayToToggle[1].classList.remove("visible");
  arrayToToggle[1].classList.add("hidden");
  arrayToToggle.splice(0);
};

export { toggleItems };
