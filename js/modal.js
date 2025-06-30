document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.open-modal');
  const modals = document.querySelectorAll('.modal');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const id = button.getAttribute('data-id');
      const modal = document.querySelector(`.modal[data-id="${id}"]`);
      if (modal) {
        modal.style.display = 'flex';
        document.body.classList.add('modal-open');
      }
    });
  });

  modals.forEach(modal => {
    const close = modal.querySelector('.close');

    close.addEventListener('click', () => {
      modal.style.display = 'none';
      document.body.classList.remove('modal-open');
    });

    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
        document.body.classList.remove('modal-open');
      }
    });
  });
});

let scrollPosition = 0;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const id = button.getAttribute('data-id');
    const modal = document.querySelector(`.modal[data-id="${id}"]`);
    if (modal) {
      scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollPosition}px`;
      document.body.style.width = '100%';

      modal.style.display = 'flex';
      document.body.classList.add('modal-open');
    }
  });
});

modals.forEach(modal => {
  const close = modal.querySelector('.close');

  close.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.classList.remove('modal-open');

    document.body.style.position = '';
    document.body.style.top = '';
    window.scrollTo(0, scrollPosition);
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
      document.body.classList.remove('modal-open');

      document.body.style.position = '';
      document.body.style.top = '';
      window.scrollTo(0, scrollPosition);
    }
  });
});

