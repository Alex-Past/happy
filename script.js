document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.magic-btn');
    const wish = document.querySelector('.wish');
    const snowContainer = document.querySelector('.snowflakes');

    // Создаем больше снежинок через JS для красоты
    for (let i = 0; i < 50; i++) {
        let snowflake = document.createElement('i');
        let size = Math.random() * 10 + 5; // от 5px до 15px
        let posX = Math.random() * 100; // случайная позиция по горизонтали
        let duration = Math.random() * 20 + 10; // от 10s до 30s
        let delay = Math.random() * -20; // случайная задержка

        snowflake.style.width = size + 'px';
        snowflake.style.height = size + 'px';
        snowflake.style.left = posX + '%';
        snowflake.style.animationDuration = duration + 's';
        snowflake.style.animationDelay = delay + 's';

        snowContainer.appendChild(snowflake);
    }

    // Обработчик кнопки
    button.addEventListener('click', function() {
        wish.classList.add('show');
        button.textContent = 'Разгадай секрет!';
        button.style.background = 'linear-gradient(to right, #FFD700, #FFA500)';
        button.style.color = '#0b1c2c';

        // Добавляем конфетти/эффект (простой вариант)
        createConfetti();
    });

    function createConfetti() {
        const colors = ['#FFD700', '#FF6B6B', '#4ECDC4', '#FFA500', '#C779D0'];
        for (let i = 0; i < 100; i++) {
            let confetti = document.createElement('div');
            confetti.style.position = 'absolute';
            confetti.style.width = '10px';
            confetti.style.height = '10px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.borderRadius = '50%';
            confetti.style.top = '50%';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.opacity = '0.8';
            confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
            confetti.style.animation = `confettiFall ${Math.random() * 3 + 2}s linear forwards`;

            document.body.appendChild(confetti);

            // Удаляем конфетти после анимации
            setTimeout(() => {
                confetti.remove();
            }, 3000);
        }
    }

    // Добавляем ключевые кадры для конфетти
    const style = document.createElement('style');
    style.textContent = `
        @keyframes confettiFall {
            0% { transform: translateY(0) rotate(0deg); opacity: 0.8; }
            100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
});
