import { logger } from './logger'

class HomePage {
	constructor() {
		this.containerId = 'content'
		this.heading = 'Welcome to our Restaurant'
		this.paragraph =
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		this.image =
			'https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D'
	}

	setContainerId(id) {
		this.containerId = id
	}

	render() {
		const container = document.getElementById(this.containerId)

		if (!container) {
			logger.log(
				`Container with ID '${this.containerId}' not found in the DOM.`
			)
			return
		}

		const div = document.createElement('div')
		div.classList.add('home-page')

		const heading = document.createElement('h1')
		heading.textContent = this.heading

		const paragraph = document.createElement('p')
		paragraph.textContent = this.paragraph

		const image = document.createElement('img')
		image.src = this.image

		div.appendChild(heading)
		div.appendChild(image)
		div.appendChild(paragraph)

		container.innerHTML = ''
		container.appendChild(div)
	}

	hide() {
		const container = document.getElementById(this.containerId)
		container.innerHTML = ''
	}
}

const homePage = new HomePage()

homePage.render()

export { homePage }
