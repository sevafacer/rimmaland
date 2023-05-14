const tooltipAnchors = document.querySelectorAll('.tooltip-anchor');
const tooltips = document.querySelectorAll('.tooltip');
let timeoutId;

tooltipAnchors.forEach((anchor) => {
  anchor.addEventListener('mouseenter', () => {
    // Скрываем все другие tooltips
    tooltips.forEach((tooltip) => {
      if (tooltip.id !== anchor.dataset.tooltip) {
        tooltip.style.display = 'none';
      }
    });

    // Показываем только нужный tooltip
    const tooltipId = anchor.dataset.tooltip;
    const tooltip = document.querySelector(`#${tooltipId}`);
    tooltip.style.display = 'block';

    // Отменяем скрытие tooltip, если оно уже запланировано
    clearTimeout(timeoutId);

    // Показываем tooltip ещё на 1 секунду после ухода курсора с anchor
    tooltip.addEventListener('mouseleave', () => {
      timeoutId = setTimeout(() => {
        tooltip.style.display = 'none';
      }, 1000);
    });
  });

  anchor.addEventListener('mouseleave', () => {
    const tooltipId = anchor.dataset.tooltip;
    const tooltip = document.querySelector(`#${tooltipId}`);

    // Скрываем tooltip через 1 секунду после ухода курсора с anchor
    timeoutId = setTimeout(() => {
      tooltip.style.display = 'none';
    }, 1000);
  });
});