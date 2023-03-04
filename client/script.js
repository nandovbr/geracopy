import bot from './assets/bot.svg';
import user from './assets/user.svg';

const form = document.querySelector('form');
const chatContainer = document.querySelector('#chat-container');

let loadInterval;

// função para visualizar o carregamento da mensagem da I.A.
function loader(element) {
  element.textContent = '';

  loadInterval = setInterval(() => {
    element.textContent += '.';

    if (element.textContent === '....') {
      element.textContent = '';
    }
  }, 300);
};

// função para a I.A. ir respondendo como se estivesse digitando a mensagem ao invés de aparecer de uma vez
function typeText(element, text) {
  let index = 0;

  let interval = setInterval(() => {
    if (index < text.length) {
      element.innerHTML += text.chartAt(index);
      index++;
    } else {
      clearInterval(interval);
    }
  }, 20);
};

// ID único da conversa
function generateUniqueId() {
  const timestamp = Date.now();
  const randomNumber =Math.random();
  const hexadecimalString = randomNumber.toString(16);

  return `id-${timestamp}-${hexadecimalString}`;
};

// faixa para identificar as mensagens do usuário e da I.A.
function chatStripe(isAi, value, uniqueId) {
  return (
    `
      <div class="wrapper ${ isAi && 'ai' }">
        <div class="chat">
          <div className="profile">
            <img
              src="${ isAi ? bot : user }"
              alt="${ isAi ? 'bot' : 'user' }"
            />
          </div>
          <div className="messagee" id="${ uniqueId }">${ value }</div>
        </div>
      </div>
    `
  )
};