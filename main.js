let img = document.querySelector("img")
let container = document.querySelector(".container")
let bookNames = document.querySelector(".book-names")
let popUp = {}

let infoArray = []
container.childNodes.forEach((e) => {
	if (e.tagName == "P") {
		infoArray.push(e)
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
	popUp.currentParagraph = infoArray[popUp.currentIndex - 1]
	popUp.currentParagraph.classList.add("info-active")
	popUp.current.classList.add("active-book-name")
	container.classList.add("container-open")
}

function closeContainer(t) {
	popUp.currentParagraph.classList.remove("info-active")
	popUp.current.classList.remove("active-book-name")
	container.classList.remove("container-open")
}



img.addEventListener("click", ez)
bookNames.addEventListener("click", engage)