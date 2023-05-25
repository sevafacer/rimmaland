const steps = document.getElementsByClassName('steps__number');

for (var i = 0; i < steps.length; i++) {

	steps[i].addEventListener('click', function () {

		const description = this.querySelector('.description_step');
		const isVisible = description.style.display === 'block';

		if (isVisible) {
			description.style.display = 'none';
		} else {
			description.style.display = 'block';
		}
	});
}

