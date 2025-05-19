const menuContainer = document.createElement('div')
menuContainer.classList.add('menu-container')

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

const menu = new MenuList()

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

menu.getMenu().forEach(item => {
	const div = document.createElement('div')
	div.classList.add('menu-item')

	div.innerHTML = item.info

	menuContainer.appendChild(div)
})

console.log(menuContainer)
export { menuContainer }
