let img = document.querySelector("img")
img.addEventListener("click", ez)

function ez() {
	if (!img.classList.contains("animation")) {img.classList.add("animation")}
		else {img.classList.remove("animation")}
}