const btn = document.getElementById('btn')
const popup = document.getElementById('popup')
const overlay = document.getElementById('overlay')
const closeBtn = document.getElementById('closePopup')

btn.addEventListener('click', () => {
    popup.style.display = 'block';
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden'; 
})

closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
    overlay.style.display = 'none';
    document.body.style.overflow = ''; 
})
const checkmark = document.getElementById('checkmark');
const mark = document.getElementById('mark');


checkmark.addEventListener('click', () => {
    checkmark.classList.toggle('active')

    if (checkmark.classList.contains('active')) {
        mark.style.display = 'block';
    } else {
        mark.style.display = 'none';
    }
})


document.getElementById("btn").addEventListener("click", function () {
    const name = document.querySelectorAll('#input')[0].value;
    const phone = document.querySelectorAll('#input')[1].value;
    const question = document.querySelector('textarea').value;

    const message = `
📝 Новая заявка:
👤 Имя: ${name}
📞 Телефон: ${phone}
❓ Вопрос: ${question}
    `

    const token = '8187645894:AAHoqANHSsXH07UPEE3kiCRPr-m5aPS-TiM';
    const chatId = '2036023984';

    fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: chatId,
            text: message
        })
    }).then(() => {
        document.querySelector('.popup').style.display = 'block';
        document.body.classList.add('noscroll')
    })
})

const checkbox = document.getElementById('consent');




