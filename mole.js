// Write your JS here.
window.addEventListener("DOMContentLoaded", () => {
	//   setInterval(() => {
	//     const moleHeads = document.querySelectorAll('.wgs__mole-head');
	//     for (let moleHead of moleHeads) {
	//       moleHead.classList.toggle('wgs__mole-head--hidden');
	//     }
	//   }, 1000);

	const heads = document.querySelectorAll(".wgs__mole-head");

	function setHidden() {
		heads.forEach((mole) => {
			mole.classList.add("wgs__mole-head--hidden");
		});
	}
	setHidden();

	function popUpRandomMole() {
		const num = Math.floor(Math.random() * Math.floor(8));
	}
});
