const widthInput = document.getElementById('width');
const heightInput = document.getElementById('height');
const button = document.querySelector('button');
const output = document.getElementById('result');

// Функция валидации введенных значений
function isValid(value) {
    return !isNaN(value) && value >= 100 && value <= 300;
}

// Вешаем обработчик на кнопку
button.addEventListener('click', onButtonClick);

// Проверяем введенные значения, отправляем запрос, отрисовываем картинки
function onButtonClick() {
    const width = parseInt(widthInput.value);
    const height = parseInt(heightInput.value);

    if (!isValid(width) || !isValid(height)) {
        output.innerHTML = 'Число вне диапазона от 100 до 300.';
    } else {
        fetch(`https://picsum.photos/${width}/${height}`)
            .then((response) => {
                output.innerHTML = `<img src="${response.url}">`;
            })
            .catch((error) => {
                console.error('Ошибка:', error);
            });
    };
}
