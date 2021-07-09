const toggleMenu = document.querySelector('nav .toggle-menu .fas');
const navMenu = document.querySelector('nav .nav-menu');
const nav = document.querySelector('nav');

toggleMenu.addEventListener('click', function() {
	navMenu.classList.toggle('show');

	navMenu.classList.contains('show') ? this.classList.replace('fa-bars', 'fa-times') : this.classList.replace('fa-times', 'fa-bars');
});

window.addEventListener('scroll', function() {
	this.scrollY >= 10 ? nav.classList.add('active') : nav.classList.remove('active');
})