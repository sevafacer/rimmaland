const scrollButton = document.querySelector('.scroll-up');

		if (scrollButton) {
			window.addEventListener('scroll', function () {
				scrollButton.classList.toggle('active', window.scrollY > 500);
			});

			function scrollToTop() {
				window.scrollTo({
					top: 0,
					behavior: "smooth"
				});
			}
		}