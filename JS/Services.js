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
