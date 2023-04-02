const input = document.getElementById('search-input')
const searchBtn = document.getElementById('search-btn')

const expand = () => {
	searchBtn.classList.toggle('close')
	input.classList.toggle('square')
}

// ############################

let container = document.getElementById('hamburger')

let isClicked = true

let show = function () {
	if (isClicked) {
		container.style.display = 'block'
		isClicked = false
	} else {
		container.style.display = 'none'
		isClicked = true
	}
}

let SHOPTYPE = document.getElementById('SHOPTYPE')

let change = function () {
	SHOPTYPE.style.color = 'white'
}
