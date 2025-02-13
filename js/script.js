document.querySelectorAll('.select-number, .select-number2, .select-number3, .select-name').forEach(el => {
    el.addEventListener('click', () => {
        navigator.clipboard.writeText(el.textContent.trim()).then(() => {
            alert('Скопировано в буфер обмена!');
        }).catch(err => console.error('Ошибка копирования', err));
    });
});

// Снегопад 

function createSnowflake(){
    const snowflake = document.createElement("div");
    snowflake.className = 'snowflake';
    snowflake.textContent = '❄';
    snowflake.style.left = Math.random() * 100 + 'vw'
    snowflake.style.animationDuration = Math.random() * 3 + 7 + 's'
    snowflake.style.fontSize = Math.random() * 10 + 10 + 'px'
    document.querySelector('.snowflakes').appendChild(snowflake);
    setTimeout(() => snowflake.remove(), 10000)

}
setInterval(createSnowflake, 300)