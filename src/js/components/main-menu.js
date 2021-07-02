export const showMenu = () => {
	const iconMenu = document.getElementById('iconMenu');
	const mainNav = document.getElementById('main-nav');

	iconMenu.addEventListener('click', () => {
		mainNav.classList.toggle('main-nav--show');
	});
}

showMenu();