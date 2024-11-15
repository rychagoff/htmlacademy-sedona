const showModal = () => {
  const button = document.querySelector('.navigation-button__link');
  const modal = document.querySelector('.modal-container');
  const close = document.querySelector('.modal-close');

  function removeHash() {
    history.replaceState(null, '', window.location.pathname);
  }

  function classToggler() {
    modal.classList.toggle('modal-container--show');
  }

  const closeHandler = (evt) => {
    console.log('closed');
    classToggler();
    removeHash();

    button.addEventListener('click', modalHandler);
    close.removeEventListener('click', closeHandler);
  }

  const modalHandler = () => {
    console.log('click');

    classToggler();

    button.removeEventListener('click', modalHandler);
    close.addEventListener('click', closeHandler);
  }

  button.addEventListener('click', modalHandler);
}

showModal();
