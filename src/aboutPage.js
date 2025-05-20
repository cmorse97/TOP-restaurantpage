import { logger } from './logger'

class AboutPage {
	constructor() {
		this.containerId = 'content'
		this.title = 'About Us'
		this.content =
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
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
		div.classList.add('about-page')
		div.innerHTML = `
      <h1>${this.title}</h1>
      <p>${this.content}</p>
    `

		container.innerHTML = ''
		container.appendChild(div)
	}

	hide() {
		const container = document.getElementById(this.containerId)
		container.innerHTML = ''
	}
}

const aboutPage = new AboutPage()

export { aboutPage }
