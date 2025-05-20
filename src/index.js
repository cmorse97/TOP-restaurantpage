import './styles.css'
import { homePage } from './homePage.js'
import { menuPage } from './menuPage.js'
import { aboutPage } from './aboutPage.js'

const navBtn = document.querySelectorAll('button.nav-btn')

navBtn.forEach(btn => {
	const btnId = btn.dataset.page
	btn.addEventListener('click', () => {
		if (btnId === 'menu') {
			homePage.hide()
			aboutPage.hide()
			menuPage.render()
		}
		if (btnId === 'home') {
			menuPage.hide()
			aboutPage.hide()
			homePage.render()
		}
		if (btnId === 'about') {
			homePage.hide()
			menuPage.hide()
			aboutPage.render()
		}
	})
})

// class Page {
// 	constructor(page) {
// 		this.page = page
// 	}

// 	loadPage(page) {
// 		const pageID = page.dataset.page
// 	}
// }
