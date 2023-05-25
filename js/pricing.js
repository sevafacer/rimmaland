const tooltipAnchors = document.querySelectorAll('.tooltip-anchor');
const tooltips = document.querySelectorAll('.tooltip');
let timeoutId;

tooltipAnchors.forEach((anchor) => {
  anchor.addEventListener('mouseenter', () => {
    tooltips.forEach((tooltip) => {
      if (tooltip.id !== anchor.dataset.tooltip) {
        tooltip.style.display = 'none';
      }
    });

    const tooltipId = anchor.dataset.tooltip;
    const tooltip = document.querySelector(`#${tooltipId}`);
    tooltip.style.display = 'block';

    clearTimeout(timeoutId);

    tooltip.addEventListener('mouseleave', () => {
      timeoutId = setTimeout(() => {
        tooltip.style.display = 'none';
      }, 1000);
    });
  });

  anchor.addEventListener('mouseleave', () => {
    const tooltipId = anchor.dataset.tooltip;
    const tooltip = document.querySelector(`#${tooltipId}`);

    timeoutId = setTimeout(() => {
      tooltip.style.display = 'none';
    }, 1000);
  });
});

