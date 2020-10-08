// Write your JS here.
window.addEventListener("DOMContentLoaded", () => {
	const heads = Array.from(document.querySelectorAll(".wgs__mole-head"));

	function initialize() {
		heads.forEach((mole) => {
      mole.classList.add("wgs__mole-head--hidden");
      mole.addEventListener('click', e => {
        mole.classList.add("wgs__mole-head--hidden");
      });
		});
	}
	initialize();

	function popUpRandomMole() {
    const num = Math.floor(Math.random() * Math.floor(8));

    heads[num].classList.remove("wgs__mole-head--hidden");

    setTimeout(hideMole, 1000, heads[num]);
  }

  function hideMole(mole) {
    mole.classList.add("wgs__mole-head--hidden");

    setTimeout(popUpRandomMole, 1000);
  }

  setTimeout(popUpRandomMole, 0);
});
