'use strict';

const modal = document.querySelector('.modal');
const overLay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('show-modal'); //use queryselectorALL to select all the properties in the class

const closeModal = function () {
  modal.classList.add('hidden');
  overLay.classList.add('hidden');
}; // have this function available outside

const openModal = function () {
  modal.classList.remove('hidden');
  overLay.classList.remove('hidden');
};

for (i = 0; i < btnsOpenModal; i++) {
  //we don't really need {}
  btnsOpenModal[i].addEventListener('click', openModal); //don't call the class with brackets, this openModal function is a first clas function, treated as a variable

  btnCloseModal.addEventListener('click', closeModal);
  overLay.addEventListener('click', closeModal);

  //listen for esc key press
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal(); //you need to call the class here
    }
  });
}
