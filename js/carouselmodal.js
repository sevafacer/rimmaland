document.addEventListener('DOMContentLoaded', () => {
  const modals = Array.from(document.querySelectorAll('.portfolio__modal'));
  const closeButtons = Array.from(document.querySelectorAll('.portfolio__modal-close'));
  let activeModal = null;
  let touchStartX = 0;
  let touchEndX = 0;

  const minusSlide = (modal) => {
    const slides = Array.from(modal.querySelectorAll('.slider-slide'));
    const activeIndex = slides.findIndex((slide) => slide.classList.contains('active'));
    const previousIndex = (activeIndex - 1 + slides.length) % slides.length;
    slides[activeIndex].classList.remove('active');
    slides[previousIndex].classList.add('active');
    updateActiveElements(modal, previousIndex);
  };

  const plusSlide = (modal) => {
    const slides = Array.from(modal.querySelectorAll('.slider-slide'));
    const activeIndex = slides.findIndex((slide) => slide.classList.contains('active'));
    const nextIndex = (activeIndex + 1) % slides.length;
    slides[activeIndex].classList.remove('active');
    slides[nextIndex].classList.add('active');
    updateActiveElements(modal, nextIndex);
  };

  const updateActiveElements = (modal, index) => {
    const dots = Array.from(modal.querySelectorAll('.slider__dot'));
    const slides = Array.from(modal.querySelectorAll('.slider-slide'));

    dots.forEach((dot, dotIndex) => {
      dot.classList.toggle('active', dotIndex === index);
    });

    slides.forEach((slide, slideIndex) => {
      slide.classList.toggle('active', slideIndex === index);
    });
  };

  const openModal = (modal) => {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    activeModal = modal;
    const slides = Array.from(modal.querySelectorAll('.slider-slide'));
    slides.forEach((slide, index) => {
      slide.classList.toggle('active', index === 0);
    });
    const dots = Array.from(modal.querySelectorAll('.slider__dot'));
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === 0);
    });
  };

  const closeModal = () => {
    if (activeModal) {
      activeModal.style.display = 'none';
      document.body.style.overflow = 'initial';
      activeModal = null;
    }
  };

  const handlePrevButtonClick = () => {
    minusSlide(activeModal);
  };

  const handleNextButtonClick = () => {
    plusSlide(activeModal);
  };

  const handleDotClick = (dotIndex) => {
    updateActiveElements(activeModal, dotIndex);
  };

  const handleModalTouchStart = (event) => {
    touchStartX = event.touches[0].clientX;
  };

  const handleModalTouchMove = (event) => {
    touchEndX = event.touches[0].clientX;
  };

  const handleModalTouchEnd = () => {
    const touchDiff = touchStartX - touchEndX;

    if (touchDiff > 0) {
      plusSlide(activeModal);
    } else if (touchDiff < 0) {
      minusSlide(activeModal);
    }
  };

  const handleProjectButtonClick = (index) => {
    openModal(modals[index]);
  };

  const handleCloseButtonClick = () => {
    closeModal();
  };

  const handleOutsideClick = (event) => {
    if (event.target.classList.contains('portfolio__modal')) {
      closeModal();
    }
  };

  const handleKeyDown = (e) => {
    const slides = activeModal ? Array.from(activeModal.querySelectorAll('.slider-slide')) : [];
    const activeSlideIndex = slides.findIndex((slide) => slide.classList.contains('active'));

    if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'ф') {
      if (activeSlideIndex !== -1) {
        minusSlide(activeModal);
      }
    } else if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'в' || e.key === ' ') {
      if (activeSlideIndex !== -1) {
        plusSlide(activeModal);
      }
    } else if (e.key === 'Escape') {
      closeModal();
    }
  };

  modals.forEach((modal) => {
    const prevButton = modal.querySelector('.portfolio__carousel-prev');
    const nextButton = modal.querySelector('.portfolio__carousel-next');
    const dotButtons = Array.from(modal.querySelectorAll('.slider__dot'));

    prevButton?.addEventListener('click', handlePrevButtonClick, { passive: true });
    nextButton?.addEventListener('click', handleNextButtonClick, { passive: true });

    dotButtons.forEach((dot, dotIndex) => {
      dot.addEventListener('click', () => {
        handleDotClick(dotIndex);
      });
    });

    modal.addEventListener('touchstart', handleModalTouchStart, { passive: true });
    modal.addEventListener('touchmove', handleModalTouchMove, { passive: true });
    modal.addEventListener('touchend', handleModalTouchEnd, { passive: true });
  });

  const projectButtons = Array.from(document.querySelectorAll('.project'));

  projectButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      handleProjectButtonClick(index);
    });
  });

  closeButtons.forEach((button) => {
    button.addEventListener('click', handleCloseButtonClick, { passive: true });
    button.addEventListener('touchend', handleCloseButtonClick, { passive: true });
  });

  window.addEventListener('click', handleOutsideClick, { passive: true });
  document.addEventListener('keydown', handleKeyDown, { passive: true });
}, { passive: true });
