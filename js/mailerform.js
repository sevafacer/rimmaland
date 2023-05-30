const forms = Array.from(document.querySelectorAll('form'));

forms.forEach((form) => {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const nameInput = form.querySelector('input[name="name-call"]');
    const phoneInput = form.querySelector('input[name="phone-call"]');

    if (phoneInput.value.length < 18) {
      console.log('Неполный номер телефона!');
      return;
    }

    try {
      const response = await fetch("https://potatocat.dev/api/v1/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          'Имя': nameInput.value,
          'Телефон': phoneInput.value,
        }),
      });

      if (response.ok) {
        Swal.fire({
          title: 'Успешно!',
          text: 'Письмо успешно отправлено!',
          icon: 'success',
          showConfirmButton: false,
          timer: 2000,
          customClass: {
            popup: 'my-custom-popup-class'
          },
        });
        nameInput.value = '';
        phoneInput.value = '';
        const isFormInPopup = form.closest('.call_me');
        if (isFormInPopup) {
          closecallPopup();
        }
      } else {
        console.log('Ошибка при отправке письма!');
      }
    } catch (error) {
      console.log('Произошла ошибка:', error);
    }
  });
});