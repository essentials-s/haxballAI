// Основные стили и настройки
document.head.appendChild(Object.assign(document.createElement("style"), { 
  innerHTML: `
    :root {
      --primary-color: #3a4a56;
      --secondary-color: #2a363f;
      --accent-color: #ffde59;
      --text-color: #ffffff;
      --bg-color: #1a2125;
    }
    
    body {
      font-family: 'Inter', sans-serif;
      background: var(--bg-color);
      color: var(--text-color);
      touch-action: none;
      user-select: none;
      margin: 0;
      padding: 0;
      height: 100vh;
      overflow: hidden;
    }
    
    .header, .rightbar {
      display: none !important;
    }
    
    .gameframe {
      width: 100%;
      height: 100%;
      border: none;
    }
    
    .dialog {
      background: var(--secondary-color);
      border-radius: 12px;
      padding: 20px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.3);
      max-width: 90%;
      margin: 0 auto;
    }
    
    button {
      background: var(--primary-color);
      border: none;
      border-radius: 8px;
      color: var(--text-color);
      padding: 10px 15px;
      margin: 5px;
      font-family: 'Inter';
      transition: all 0.2s;
      cursor: pointer;
    }
    
    button:hover {
      background: #4a5a66;
      transform: translateY(-2px);
    }
    
    input {
      background: var(--primary-color);
      border: none;
      border-radius: 8px;
      color: var(--text-color);
      padding: 10px;
      margin: 5px 0;
      width: 100%;
    }
    
    .room-list {
      width: 100%;
      border-collapse: collapse;
    }
    
    .room-list tr {
      border-bottom: 1px solid var(--primary-color);
      transition: background 0.2s;
    }
    
    .room-list tr:hover {
      background: var(--primary-color);
    }
    
    .rounded {
      border-radius: 50%;
    }
    
    [view|=hidden] {
      display: none;
    }
    
    [view|=visible] {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
    [float] {
      position: absolute;
    }
    
    svg {
      fill: #ecf0f3cc;
      width: 30px;
      height: auto;
    }
    
    #kick svg {
      width: 50%;
    }
    
    /* Стили для фрейма игры */
    .game-view > .top-section, 
    .room-view {
      margin-top: 0;
    }
    
    .settings-view {
      width: 100%;
      max-height: none;
    }
    
    .game-view > [data-hook=popups] {
      background-color: #1a212585;
    }
    
    .disconnected-view .dialog,
    .disconnected-view .room-view > .container {
      width: 450px;
    }
    
    .create-room-view > .dialog,
    .room-view.create-room-view > .container {
      max-width: 450px;
      width: 100%;
    }
    
    [data-hook=leave-btn] {
      background: #c13535 !important;
    }
    
    .file-btn, [data-hook=rec-btn] {
      display: none !important;
    }
    
    h1 {
      text-align: center;
    }
    
    .room-view > .container > .header-btns {
      bottom: 0;
      right: 10px;
      top: auto;
    }
    
    .room-view > .container {
      max-width: none;
      max-height: max-content;
    }
    
    .room-view {
      position: absolute;
      width: 100%;
    }
    
    .roomlist-view > .dialog {
      max-width: max-content;
      max-height: max-content;
    }
    
    .game-state-view .bar > .scoreboard {
      display: flex;
      align-items: center;
      margin-right: 50px;
    }
    
    .chatbox-view {
      position: absolute;
      left: 15px;
      margin: 0;
      top: 10px;
      width: 30%;
      pointer-events: none;
      font-size: 1rem;
      display: contents;
    }
    
    .chatbox-view-contents {
      flex-direction: column-reverse;
      background: 0 0;
      pointer-events: none;
    }
    
    .chatbox-view-contents > .input {
      margin-bottom: 10px;
      pointer-events: auto;
    }
    
    .chatbox-view-contents > .log {
      flex-direction: column;
      pointer-events: none;
      overflow-y: scroll;
      scrollbar-width: none;
    }
    
    .settings-view .section.selected {
      display: flex;
      align-items: center;
    }
    
    .log-contents {
      display: flex;
      flex-direction: column-reverse;
      text-shadow: 1px 1px 5px #000000cc;
    }
    
    .fade-out {
      opacity: 0;
      transition: opacity 10s ease-out;
    }
    
    thead tr {
      display: table-row !important;
    }
    
    .input-options {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 20;
      background-color: #1a2125;
    }
    
    /* Стили для виртуального джойстика */
    #joystick, #kick {
      z-index: 100;
      bottom: var(--controls-margin);
    }
    
    .neo {
      opacity: var(--controls-opacity);
      background-color: #c2c2c255;
      box-shadow: 6px 6px 10px 0 #a5abb133, -5px -5px 9px 0 #a5abb133;
      color: #dedede55;
      font-weight: bolder;
      font-size: 1.5rem;
    }
    
    .sizer {
      width: var(--controls-width);
      aspect-ratio: 1 / 1;
    }
    
    #joystick {
      left: var(--controls-margin);
      overflow: visible;
    }
    
    #thumb {
      width: 40%;
      height: 40%;
      background-color: #ecf0f3cc;
    }
    
    #kick {
      right: var(--controls-margin);
    }
    
    button.neo:active {
      opacity: calc(var(--controls-opacity) / 2);
    }
    
    /* Стили для чат-джойстика */
    #chat-joystick, #chat-stick {
      color: #dedede55;
      font-weight: bolder;
      font-size: 1.5rem;
      border-radius: 50%;
    }
    
    #chat-joystick {
      width: 120px;
      height: 120px;
      opacity: 1;
      position: absolute;
      right: 0;
      top: 0;
      margin: 30px;
    }
    
    #chat-joystick-panel {
      width: min-content;
      height: min-content;
      position: absolute;
      right: 0;
      top: 35px;
      display: block;
      z-index: 3;
    }
    
    #chat-stick {
      width: calc(100px * .45);
      height: calc(100px * .45);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: #244967;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    #chat-svg {
      fill: #FFFFFF;
    }
    
    #chat-joystick-label {
      color: white;
      position: absolute;
      text-align: center;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 0.8em;
      font-family: 'Inter';
      font-weight: normal;
      text-shadow: 1px 0px 4px rgba(0,0,0,0.66);
    }
    
    /* Стили для FPS-счетчика */
    #fps-counter {
      position: fixed;
      bottom: 5px;
      left: 50%;
      transform: translateX(-50%);
      color: white;
      font-size: 0.9em;
      font-family: monospace;
      opacity: 0.25;
      text-shadow: 1px 1px 1px black;
      z-index: 9999;
      pointer-events: auto;
    }
    
    /* Стили для стрелки направления мяча */
    #ball-arrow {
      position: fixed;
      top: 0;
      left: 0;
      pointer-events: none;
      z-index: 9999;
    }
    
    @media only screen and (max-device-width: 480px) {
      body {
        touch-action: manipulation;
      }
    }
  `
}));

// Подключаем шрифт Inter
const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap';
fontLink.rel = 'stylesheet';
document.head.appendChild(fontLink);

// Проверка и установка низколатентного canvas
if(!localStorage.getItem('low_latency_canvas') || localStorage.getItem('low_latency_canvas') == 1) {
    localStorage.setItem('low_latency_canvas', 0);
    location.reload();
}

///////////////////////////////////////// CONSTANTS /////////////////////////////////////////
let gameFrame = document.querySelector('.gameframe').contentWindow;
let body;

const tips = [
    "Tip: maintain a good defensive position.",
    "Tip: communicate and coordinate with your teammates.",
    "Tip: practice your dribbling skills to outplay opponents.",
    // ... остальные советы
];

const countryFilterHandler = document.createElement('style');
const hideButtons = document.createElement('style');
hideButtons.innerHTML = "button{display:none}";
gameFrame.document.head.appendChild(hideButtons);

const controlsHandler = document.createElement('style');
const copyrightHandler = document.createElement("span");
const aboutHandler = document.createElement("div");
const inputOptionsHandler = document.createElement("div");
const config = { childList: true, subtree: true };

///////////////////////////////////////// VARIABLES /////////////////////////////////////////
let firstTime = true;
let canResetJoystick = true;
let lastMessage;
let joystick;
let kickButton;
let isTouching = false;
let thumb;

///////////////////////////////////////// MAIN FUNCTIONS /////////////////////////////////////////

function checkLoader() {
    if (!gameFrame.document.body.querySelector(".loader-view") && gameFrame.document.body.querySelector('.choose-nickname-view')) {
        clearInterval(checkLoaderInterval);
        body = gameFrame.document.body.children[0];
        init();
    }
}

function init() {
    createFPSCounter();
    setupBallDirectionRenderer();

    // Удаляем рекламу и заголовок
    document.querySelector('.rightbar')?.remove();
    document.querySelector('.header')?.remove();

    document.querySelector("meta[name=viewport]").setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=0');

    setupCountryFilter();
    setupControls();
    setupCopyright(true);
    hideButtons.remove();

    // Наблюдатель за изменениями DOM
    const observer = new MutationObserver(function(mutationsList, observer) {
        try {
            updateUI();
            updatedChat();
        } catch {}
    });
    
    try { updateUI(); } catch {}
    observer.observe(body, config);

    gameFrame.head.innerHTML += "<style>button{display: }</style>";
    
    // Создаем красивое меню "О нас"
    aboutHandler.setAttribute('data-hook', 'about');
    aboutHandler.style.cssText = `
        background: var(--bg-color); 
        position: absolute; 
        width: 100%; 
        height: 100%; 
        display: none; 
        justify-content: center; 
        flex-direction: column; 
        align-items: center; 
        margin: 0;
    `;
    aboutHandler.innerHTML = `
        <div class="dialog" style="max-width: 500px;">
            <h1>About Us</h1>
            <p>We are a development team that wants the Haxball community to grow. This application is free and contains no ads.</p>
            <p>Special thanks to @basro for creating this amazing game.</p>
            <div class="buttons">
                <button data-hook="closeabout">Close</button>
            </div>
        </div>
    `;
    
    body.parentNode.appendChild(aboutHandler);
    
    if (localStorage.getItem("firstTime") === null) {
        aboutHandler.style.display = 'flex';
        localStorage.setItem("firstTime", "true");
        localStorage.setItem("view_mode", "1");
        localStorage.setItem("resolution_scale", "0.75");
    }
    
    body.parentNode.querySelector('[data-hook="closeabout"]').addEventListener("click", function() {
        aboutHandler.style.display = 'none';
    });

    console.log("PAGE_LOADED");
}

// ... (остальные функции остаются без изменений, как в исходном коде)

// Инициализация после загрузки страницы
var checkLoaderInterval = setInterval(checkLoader, 1000);
window.addEventListener('load', () => {
    createFPSCounter();
    setupBallDirectionRenderer();
});

// Удаляем чат-бинды если они есть
const chatBinds = document.querySelectorAll('[data-chat-bind]');
chatBinds.forEach(bind => bind.remove());
