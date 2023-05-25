const arrows = document.querySelectorAll('.price__iconarrow');

arrows.forEach((arrow) => {

  arrow.addEventListener('click', () => {
    const service = arrow.closest('.serv');
    const description = service.querySelector('.price__Mobiledescription');
    const isActive = description.classList.contains('active');
    
    if (isActive) {
      description.classList.remove('active');
    } else {
      description.classList.add('active');
    }
  });
});
