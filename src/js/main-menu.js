(( d ) => {
	const iconMenu = d.getElementById('iconMenu'),
				mainNav = d.getElementById('main-nav');
	
	iconMenu.addEventListener('click', () => {
		mainNav.classList.toggle('main-nav--show');
	});

	d.addEventListener("click", ( ev ) => {
		if( !ev.target.matches('.main-menu__link') ) return false;
		mainNav.classList.remove('main-nav--show');
	});
})(document);

