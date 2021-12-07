let img = document.querySelector("img")
let container = document.querySelector(".container")
let bookName = document.querySelector("h2 span")
img.addEventListener("click", ez)
bookName.addEventListener("click", openContainer)


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

let data = {}
function openContainer(e) {
	if (!container.classList.contains("container-open")) {
		container.classList.add("container-open")
		data.name = e.target.textContent
		console.log(e.target.textContent)
		e.target.innerHTML = "hello from main.js"
	} else {
		container.classList.remove("container-open")
		e.target.innerHTML = data.name
	}
	
	
}
