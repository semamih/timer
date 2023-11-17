function startCountdown() {
            const endDateInput = document.getElementById('endDate');
            // Получаем значение даты и времени окончания таймера в формате строки
            const endDateString = endDateInput.value;

            // Преобразуем строку в объект Date
            const endDate = new Date(endDateString.replace(/-/g, '/'));

            function updateCountdown() {
                const currentDate = new Date();
                const timeDifference = endDate - currentDate;

                if (timeDifference > 0) {
                    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
                    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    const minutes = Math.floor((timeDifference %й (1000 * 60)) / 1000);

                    const countdownElement = document.getElementById('countdown');
                    countdownElement.innerHTML = `До окончания таймера: ${days} дней, ${hours} часов, ${minutes} минут, ${seconds} секунд.`;

                    // Изменяем цвет шрифта с каждой секундой
                    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
                    countdownElement.style.color = randomColor;
                } else{
                    const countdownElement = document.getElementById('countdown');
                    countdownElement.innerHTML = 'Таймер истек!';
                }
            }
            const intervalId = setInterval(updateCountdown, 1000);


}