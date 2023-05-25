function debounce(func, delay) {
  let timerId;
  return function() {
    clearTimeout(timerId);
    timerId = setTimeout(func, delay);
  };
}

window.addEventListener('load', function() {
  const sections = document.querySelectorAll('section');
  let sectionPositions = [];

  function updateSectionPositions() {
    sectionPositions = Array.from(sections).map(section => {
      const { top, height } = section.getBoundingClientRect();
      return {
        id: section.id,
        top: top + window.pageYOffset,
        bottom: top + window.pageYOffset + height
      };
    });
  }

  function getCurrentSection() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    for (let i = sectionPositions.length - 1; i >= 0; i--) {
      const { id, top, bottom } = sectionPositions[i];
      if (scrollPosition >= top - bottom / 2) {
        return id;
      }
    }
    return '';
  }

  function updateHash() {
    const currentSection = getCurrentSection();
    const newHash = '#' + currentSection;
    if (history.replaceState) {
      history.replaceState(null, null, newHash);
    } else {
      location.hash = newHash;
    }
  }

  function init() {
    updateSectionPositions();
    updateHash();
  }

  window.addEventListener('scroll', debounce(updateHash, 100));
  window.addEventListener('resize', debounce(updateSectionPositions, 200));
  init();
});
