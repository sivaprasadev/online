/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

/*===== MENU SHOW =====*/
/* Validate if constant exists */

if (navToggle) {
	navToggle.addEventListener('click', () => {
		navMenu.classList.add('show-menu');
	});
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */

if (navClose) {
	navClose.addEventListener('click', () => {
		navMenu.classList.remove('show-menu');
	});
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
	// When we click on each nav__link, we remove the show-menu class
	navMenu.classList.remove('show-menu');
}
navLink.forEach((n) => n.addEventListener('click', linkAction));
/*==================== ACCORDION SKILLS ====================*/

const skillsContent = document.getElementsByClassName('skills__content');
const skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkills() {
	let itemClass = this.parentNode.className;
	for (let i = 0; i < skillsContent.length; i++) {
		skillsContent[i].className = 'skills__content skills__close';
	}

	if (itemClass === 'skills__content skills__close') {
		this.parentNode.className = 'skills__content skills__open';
	}
}

skillsHeader.forEach((el) => {
	el.addEventListener('click', toggleSkills);
});

/*==================== QUALIFICATION TABS ====================*/

const tabs = document.querySelectorAll('[data-target]');
const tabContents = document.querySelectorAll('[data-content]');

tabs.forEach((tab) => {
	tab.addEventListener('click', () => {
		const target = document.querySelector(tab.dataset.target);

		tabContents.forEach((tabContent) => {
			tabContent.classList.remove('qualification__active');
		});

		target.classList.add('qualification__active');

		tabs.forEach((tab) => {
			tab.classList.remove('qualification__active');
		});

		tab.classList.add('qualification__active');
	});
});

/*==================== SERVICES MODAL ====================*/

const modalView = document.querySelectorAll('.services__modal');
const viewMoreBtn = document.querySelectorAll('.services__button');
const modalCloseBtn = document.querySelectorAll('.services__modal__close');

let modal = function (modalClick) {
	modalView[modalClick].classList.add('active-modal');
};

viewMoreBtn.forEach((modalBtn, i) => {
	modalBtn.addEventListener('click', () => {
		modal(i);
	});
});

modalCloseBtn.forEach((modalClose) => {
	modalClose.addEventListener('click', () => {
		modalView.forEach((modalView) => {
			modalView.classList.remove('active-modal');
		});
	});
});

/*==================== PORTFOLIO SWIPER  ====================*/

let swiper = new Swiper('.portfolio__container', {
	cssMode: true,
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true
	},
	keyboard: true
});

/*==================== TESTIMONIAL ====================*/

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

/*==================== CHANGE BACKGROUND HEADER ====================*/

/*==================== SHOW SCROLL UP ====================*/

/*==================== DARK LIGHT THEME ====================*/
