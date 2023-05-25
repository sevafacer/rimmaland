const scrollButton = document.querySelector('.scroll-up');

if (scrollButton) {
	window.addEventListener('scroll', function () {
		scrollButton.classList.toggle('active', window.scrollY > 500);
	}, {passive: true});

			function scrollToTop() {
				window.scrollTo({
					top: 0,
					behavior: "smooth"
				});
			}
		}

		document.addEventListener('DOMContentLoaded', function() {
		window.addEventListener('load', function() {
			var section = document.querySelector('.div-main-2');
			var images = document.querySelectorAll('.main img');
	
			var maxHeight = 0;
			images.forEach(function(image) {
				var imageHeight = image.offsetHeight + parseInt(window.getComputedStyle(image).marginTop) + parseInt(window.getComputedStyle(image).marginBottom) +
					parseInt(window.getComputedStyle(image).paddingTop) + parseInt(window.getComputedStyle(image).paddingBottom);
				if (imageHeight > maxHeight) {
					maxHeight = imageHeight;
				}
			});
	
			section.style.height = maxHeight + 40 +'px';
		});});