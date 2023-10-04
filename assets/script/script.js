document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.tombol');

    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            const buttonText = button.innerText;

            if (buttonText === 'AC') {
                display.value = '';
            } else if (buttonText === '=') {
                try {
                    display.value = eval(display.value);
                } catch (error) {
                    display.value = 'Error';
                }
            } else if (buttonText === 'del') {
                display.value = display.value.slice(0, -1);
            } else {
                display.value += buttonText;
            }
        });
    });
});
