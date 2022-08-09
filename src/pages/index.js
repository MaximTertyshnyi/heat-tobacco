import './index.css'

const ButtonBurger = document.querySelector('.button-burger')


function openBurger () {
  const burger = document.querySelector('.assortement__grid_burger');
  burger.classList.toggle('burger');
}

ButtonBurger.addEventListener('click', () => {
  openBurger() 
})

ButtonBurger.addEventListener('click', function() {
  ButtonBurger.innerHTML =
    (ButtonBurger.innerHTML === 'Еще вкусы') ? ButtonBurger.innerHTML = 'Свернуть' : ButtonBurger.innerHTML = 'Еще вкусы';
})




const buttonShow = document.querySelectorAll('.button-show');
const buttonHide = document.querySelectorAll('.button-hide');
const popup = document.querySelectorAll('.card');

function closePopup () {
  const openedPopup = document.querySelector('.card--open');
  openedPopup.classList.remove('card--open');
}

buttonShow.forEach((b, i) => b.addEventListener('click', () => {
  popup[i].classList.add('card--open');
}))

buttonHide.forEach(b => b.addEventListener('click', () => {
  closePopup();
}))

document.addEventListener ('keydown', function(evt) {
  if(evt.keyCode == 27) {
    closePopup();
  }
})

document.addEventListener ('click', function(evt) {
  const isPopup = evt.target.classList.contains('card');

  if (isPopup) {
    closePopup();
  }
})





    
    const chat_id = '628414722', botID = 'bot5444187892:AAGOABdbwBV7MRjK3wbBG0ekc3QAZBgHrw4';
    const telegramURL = `https://api.telegram.org/${botID}/sendMessage`;
    document.querySelector('#messageForm').addEventListener("submit", async e => { // When the user submits the form
        e.preventDefault(); // Don't submit
        let text = JSON.stringify( // Convert the form data to a string to send as our Telegram message
            Object.fromEntries(new FormData(e.target).entries()), // Convert the form data to an object.
        null, 4); // Prettify the JSON so we can read the data easily
        const sendMessage = await fetch(telegramURL, { // Send the request to the telegram API
            method: 'POST',
            headers: {"Content-Type": "application/json"}, // This is required when sending a JSON body.
            body: JSON.stringify({chat_id, text}), // The body must be a string, not an object
        });
        const messageStatus = document.querySelector('#status');
        if (sendMessage.ok) // Update the user on if the message went through
            messageStatus.textContent = "Заявка отправлена";
        else
            messageStatus.textContent = "Message Failed to send :( " + (await sendMessage.text());
        e.target.reset(); // Clear the form fields.
    });


    // const burger = document.querySelector('.burger')
