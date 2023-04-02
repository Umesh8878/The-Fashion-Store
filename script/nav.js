const input = document.getElementById('search-input')
const searchBtn = document.getElementById('search-btn')

const expand = () => {
	searchBtn.classList.toggle('close')
	input.classList.toggle('square')
}

searchBtn.addEventListener(
	'click',
	expand
)(function () {
	$('.hamburger-menu').on('click', function () {
		$('.bar').toggleClass('animate')
		$('.mobile-menu').toggleClass('active')
		return false
	})
	$('.has-children').on('click', function () {
		$(this).children('ul').slideToggle('slow', 'swing')
		$('.icon-arrow').toggleClass('open')
	})
})()
