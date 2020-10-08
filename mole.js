// Write your JS here.
window.addEventListener("DOMContentLoaded", () => {
	function initialize() {
		const heads = Array.from(document.querySelectorAll(".wgs__mole-head"));
		heads.forEach((mole) => {
			mole.classList.add("wgs__mole-head--hidden");
			mole.addEventListener("click", (e) => {
				mole.classList.add("wgs__mole-head--hidden");
				mole.classList.add("wgs__mole-head--whacked");
			});
		});
	}
	initialize();

	function popUpRandomMole() {
		const heads = Array.from(
			document.querySelectorAll(
				".wgs__mole-head:not(.wgs__mole-head--whacked)"
			)
		);
		if (!heads.length) {
			alert("You won!!");
			return;
		}
		const num = Math.floor(Math.random() * Math.floor(heads.length));
		heads[num].classList.remove("wgs__mole-head--hidden");

		setTimeout(hideMole, 1000, heads[num]);
	}

	function hideMole(mole) {
		mole.classList.add("wgs__mole-head--hidden");

		setTimeout(popUpRandomMole, 1000);
	}

	setTimeout(popUpRandomMole, 0);
});
