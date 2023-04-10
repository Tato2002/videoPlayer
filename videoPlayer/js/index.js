

let videoLinks = [
	"https://www.youtube.com/embed/L_LUpnjgPso",
	"https://www.youtube.com/embed/-mNp3-UX9Qc",
	"https://www.youtube.com/embed/aRGdDy18qfY",
	"https://www.youtube.com/embed/sTeoEFzVNSc",
	"https://www.youtube.com/embed/L_LUpnjgPso",
	"https://www.youtube.com/embed/-mNp3-UX9Qc",
	"https://www.youtube.com/embed/aRGdDy18qfY",
	"https://www.youtube.com/embed/sTeoEFzVNSc",
	"https://www.youtube.com/embed/L_LUpnjgPso"
]


let iframe = document.querySelector(".video iframe");

let videoBtn = document.querySelectorAll(".videoBtn");

for (const Btn of videoBtn) {
	Btn.addEventListener("click", function () {
		let iframeLink = this.getAttribute("data-link")
		iframe.setAttribute("src", iframeLink);
	})
}

for (let i = 0; i < videoLinks.length; i++) {
	videoBtn[i].setAttribute("data-link", videoLinks[i])
}

iframe.setAttribute("src", videoLinks[0]);