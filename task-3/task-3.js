const button = document.querySelector('button');
const result = document.querySelector('.result');

// Функция запрашивает и получает данные от сервера
function useRequest(url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    
    xhr.onload = function() {
        if (xhr.status !== 200) {
            console.log('Статус ответа:', xhr.status);
        } else {
            const answer = JSON.parse(xhr.responseText);
            callback(answer);
        }
    };
    
    xhr.onerror = function() {
        console.log('Ошибка! Статус ответа:', xhr.status);
    };
    
    xhr.send();
};

// Функция отрисовывает картинки
function renderImages(answer) {
    result.innerHTML = '';
    let output = '';
    for (let i = 0; i < answer.length; i++) {
        output += `<img src="${answer[i].download_url}" width="300"><br>`;
    }
    result.style.display = "block";
    result.innerHTML = output;
}

// Функция валидирует введенные значения и вызывает 2 функции: запрос на сервер и отрисовку картинок
function onButtonClick() {
    const inputValue = Number(document.querySelector('input').value);

    if (typeof inputValue === 'number' && inputValue >= 1 && inputValue <= 10) {
        useRequest('https://picsum.photos/v2/list?limit=' + inputValue, renderImages);
    } else {
        result.style.display = "block";
        result.innerHTML = 'Число вне диапазона от 1 до 10.';
    }
}

// Вешаем обработчик на кнопку
button.addEventListener('click', onButtonClick);
