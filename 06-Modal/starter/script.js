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
  btnsOpenModal[i].addEventListener('click', openModal); //don\t call the class with brackets

  btnCloseModal.addEventListener('click', closeModal);
  overLay.addEventListener('click', closeModal);
}
