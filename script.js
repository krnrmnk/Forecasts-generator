/* Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */

/* Заранее заготовь 3-5 предсказаний и в зависимости от того, как лягут карты судьбы (или что скажет Math.random) показывай их пользователю */

/* Подставляй текст нового предсказания в .current-forecast h1 */

/* Показывай процент вероятности, с которым предсказание сбудется — в верстке это .current-forecast p */

/* Данный процент также нужно генерировать автоматически, он может принимать значения от 0 до 100% */

/* Совет: заведи функцию-хелпер, которая будет заниматься только генерацией данных в диапазоне от min до max и используй ее где нужно */

/* При генерации нового предсказания старое предсказание должно добавляться в начало списка «Мои предсказания» — .forecasts  */

/* Для добавления предсказания в список воспользуйся шаблоном forecast-item */

const predictions = [
    'Сегодня тебя ждет что-то неожиданное!',
    'Получишь хорошие новости в ближайшем будущем!',
    'Тебя ждет интересное знакомство!',
    'Удача сегодня будет на твоей стороне!',
    'Сегодня обязательно произойдет что-то хорошее!'
];

const forecastButton = document.querySelector('.forecast-btn');
const currentForecast = document.querySelector('.current-forecast h1');
const currentPersentage = document.querySelector('.current-forecast p');
const forecastList = document.querySelector('.forecasts');
const forecastTemplate = document.getElementById('forecast-item').content;

forecastButton.addEventListener('click', () => {
    const predictionIndex = Math.floor(Math.random() * predictions.length);
    const predictionText = predictions[predictionIndex];
    const eventProbability = generatePrediction(0, 100);

    currentForecast.textContent = predictionText;
    currentPersentage.textContent = `Вероятность: ${eventProbability}%`;

    addNewForecast(predictionText, eventProbability);
});

function generatePrediction(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function addNewForecast(predictionText, eventProbability) {
    const forecastItem = document.importNode(forecastTemplate, true);
    forecastItem.querySelector('h3').textContent = predictionText;
    forecastItem.querySelector('p').textContent = `Вероятность: ${eventProbability}%`;

    forecastList.prepend(forecastItem);
}