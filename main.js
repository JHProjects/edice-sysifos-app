let img = document.querySelector("img")
let closeBtn = document.querySelector(".close-btn")
let container = document.querySelector("#container")
let posterContainer = document.querySelector("#poster-container")
let bookNames = document.querySelector(".book-names")
let popUp = {}

posterContainer.innerHTML = "hello"

let infoTexts = []
let infoImgs = []
container.childNodes.forEach((e) => {
	if (e.tagName == "P") {
		infoTexts.push(e)
	}
	if (e.tagName == "DIV") {
		infoImgs.push(e)
	}
})


function ez() {
	if (!img.classList.contains("animation")) {
		img.classList.add("animation")
		let timeOut = setTimeout(e => {
			img.classList.remove("animation")
		}, 10000)
	} else {
		clearTimeout("timeOut")
		img.classList.remove("animation")
	}
}



function engage(e) {
	if (e.target.tagName == "SPAN") {
		if (!container.classList.contains("container-open")) {
			openContainer(e.target)
		} else if (e.target.dataset.bookIndex !== popUp.currentIndex) {
			closeContainer()
			let pause = setTimeout(() => {
				openContainer(e.target)
			}, 200)
			//console.log("different book clicked!")	
		} else {closeContainer()}
	}
}


function openContainer(t) {
	popUp.current = t
	popUp.currentIndex = t.dataset.bookIndex
	popUp.currentParagraph = infoTexts[popUp.currentIndex - 1]
	popUp.currentImgs = infoImgs[popUp.currentIndex - 1]
	popUp.currentImgs.classList.add("imgs-active")
	popUp.currentParagraph.classList.add("info-active")
	popUp.current.classList.add("active-book-name")
	container.classList.add("container-open")
}

function closeContainer(t) {
	popUp.currentImgs.classList.remove("imgs-active")
	popUp.currentParagraph.classList.remove("info-active")
	popUp.current.classList.remove("active-book-name")
	container.classList.remove("container-open")
}



img.addEventListener("click", ez)
bookNames.addEventListener("click", engage)
posterBtn.addEventListener("click", )
closeBtn.addEventListener("click", closeContainer)
