const pageInput = document.getElementById('page');
const limitInput = document.getElementById('limit');
const button = document.querySelector('button');
const output = document.getElementById('result');

// Выводим изображения прошлых посещений, если они есть
window.addEventListener('load', function() {
    const savedImages = localStorage.getItem('lastImages');
    if (savedImages) {
        output.innerHTML = savedImages;
    }
});

// Функция валидации введенных значений
function isValid(value) {
    return !isNaN(value) && value >= 1 && value <= 10;
}

// Вешаем обработчик на кнопку
button.addEventListener('click', onButtonClick);

// Проверяем введенные значения, отправляем запрос, отрисовываем картинки и сохраняем последний рендер в Storage
function onButtonClick() {
    const page = parseInt(pageInput.value);
    const limit = parseInt(limitInput.value);

    if (!isValid(page) && !isValid(limit)) {
        output.innerHTML = 'Номер страницы и лимит вне диапазона от 1 до 10.';
    } else if (!isValid(page)) {
        output.innerHTML = 'Номер страницы вне диапазона от 1 до 10.';
    } else if (!isValid(limit)) {
        output.innerHTML = 'Лимит вне диапазона от 1 до 10.';
    } else {
        fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`)
            .then((response) => { return response.json(); })
            .then((data) => {
                let imagesHTML = '';
                for (let image of data) {
                    imagesHTML += `<img src="${image.download_url}" width="200"><br>`;
                }
                output.innerHTML = imagesHTML;
                localStorage.setItem('lastImages', imagesHTML);
            })
            .catch((error) => {
                console.error('Ошибка:', error);
            });
    };
}
