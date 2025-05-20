class MenuList {
	constructor() {
		this.menu = []
	}

	addMenuItem(item) {
		this.menu.push(item)
	}

	getMenu() {
		return this.menu
	}
}

class MenuItem {
	constructor(title, price, desc) {
		this.title = title
		this.price = price
		this.desc = desc
	}

	get info() {
		return `
    <h4>${this.title} - <span>${this.price}</span></h4>
    <p>${this.desc}</p>
    `
	}
}

class MenuPage {
	constructor(menuData) {
		this.containerId = 'content'
		this.title = 'Menu'
		this.menuData = menuData
	}

	setContainerId(id) {
		this.containerId = id
	}

	render() {
		const container = document.getElementById(this.containerId)

		if (!container) {
			console.error(
				`Container with ID '${this.containerId}' not found in the DOM.`
			)
			return
		}

		const div = document.createElement('div')
		div.classList.add('menu-page')

		const heading = document.createElement('h1')
		heading.textContent = this.title

		const menuList = document.createElement('ul')
		menuList.classList.add('menu')

		this.menuData.forEach(item => {
			const menuItem = document.createElement('li')
			menuItem.classList.add('menu-item')
			menuItem.innerHTML = item.info
			menuList.appendChild(menuItem)
		})

		div.appendChild(heading)
		div.appendChild(menuList)

		container.innerHTML = ''
		container.appendChild(div)
	}

	hide() {
		const container = document.getElementById(this.containerId)
		container.innerHTML = ''
	}
}

const menu = new MenuList()
const cheeseBurger = new MenuItem(
	'Cheese Burger',
	'$15',
	'A cheese burger with lettuce, tomato, mayo, and pickles. Includes a side of fries and a drink'
)

const chickenStrips = new MenuItem(
	'Chicken Strips',
	'$12',
	'A basket of 4 chicken strips, served with fries, Texas Toast, and a drink'
)

const chickenSandwich = new MenuItem(
	'Chicken Sandwich',
	'$15',
	'Our famous chicken sandwich, served with fries, coleslaw, and pickle spear. Optional - toss chicken in buffalo sauce - $2 extra'
)

menu.addMenuItem(cheeseBurger)
menu.addMenuItem(chickenStrips)
menu.addMenuItem(chickenSandwich)
const menuData = menu.getMenu()

const menuPage = new MenuPage(menuData)

export { menuPage }
