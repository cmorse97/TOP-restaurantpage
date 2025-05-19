console.log('Hello from index.js')

import './styles.css'
import { homeContainer } from './homePage.js'
import { menuContainer } from './menuPage.js'

const content = document.getElementById('content')
const navBtn = document.querySelectorAll('button.nav-btn')
menuContainer.classList.add('hidden')

navBtn.forEach(btn => {
	const btnId = btn.dataset.page
	btn.addEventListener('click', () => {
		console.log(`Clicked ${btnId}`)
		if (btnId === 'menu') {
			homeContainer.classList.add('hidden')
			menuContainer.classList.remove('hidden')
		}
		if (btnId === 'home') {
			menuContainer.classList.add('hidden')
			homeContainer.classList.remove('hidden')
		}
	})
})

content.appendChild(homeContainer)
content.appendChild(menuContainer)
