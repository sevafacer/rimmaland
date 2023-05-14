const modals = document.querySelectorAll('.portfolio__modal');

modals.forEach(modal => {
  const slides = modal.querySelectorAll('.slider-slide');
  const dots = modal.querySelectorAll('.slider__dot');
  const prevButton = modal.querySelector('.portfolio__carousel-prev');
  const nextButton = modal.querySelector('.portfolio__carousel-next');
  const numSlides = slides.length;
  let slideIndex = 0;

  function showSlide(n) {
    if (n >= numSlides) {
      n = 0;
    } else if (n < 0) {
      n = numSlides - 1;
    }
    slides.forEach(slide => {
      slide.classList.remove('active', 'previous', 'next');
      if (slide === slides[n]) {
        slide.classList.add('active');
      } else if (slide === slides[(n + numSlides - 1) % numSlides]) {
        slide.classList.add('previous');
      } else if (slide === slides[(n + 1) % numSlides]) {
        slide.classList.add('next');
      }
    });
    dots.forEach(dot => {
      dot.classList.remove('active');
      if (dot === dots[n]) {
        dot.classList.add('active');
      }
    });
  }

  function plusSlide(n) {
    slideIndex += n;
    showSlide(slideIndex);
  }
  
  function minusSlide(n) {
    slideIndex -= n;
    showSlide(slideIndex);
  }

  prevButton.addEventListener('click', () => {
    minusSlide(1);
  });

  nextButton.addEventListener('click', () => {
    plusSlide(1);
  });

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      slideIndex = index;
      showSlide(slideIndex);
    });
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft' || event.key === 'a' || event.key === 'ф') {
      minusSlide(1);
    } else if (event.key === 'ArrowRight' || event.key === 'd' || event.key === 'в') {
      plusSlide(1);
    }
  });

  showSlide(0);
});
