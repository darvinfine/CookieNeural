const russian = document.getElementById("russianIcon");
const english = document.getElementById("englishIcon");

const rusButton = document.getElementById("russianButton");
const engButton = document.getElementById("englishButton");

const create = document.getElementById("createChatLabel");
const hello = document.getElementById("helloLabel");
const about = document.getElementById("aboutLabel");
const error = document.getElementById("errorSendLabel");
const think = document.getElementById("writeLabel");
const sources = document.getElementById("sourcesLabel");
const write = document.getElementById("writeMessageField");
const copyable = document.getElementById("copyableLabel");
const photo = document.getElementById("uploadPhotoLabel");
const file = document.getElementById("uploadFileLabel");
const code = document.getElementById("codeLabel");
const degenerate = document.getElementById("resendLabel");
const offline = document.getElementById("disconnectLabel");
const online = document.getElementById("connectLabel");

const settings = document.getElementById("settingsLabel");
const dark = document.getElementById("themeLabel");
const locate = document.getElementById("locateLabel");
const login = document.getElementById("loginLabel");
const username = document.getElementById("usernameLabel");

const account = document.getElementById("accountLabel");
const edit = document.getElementById("editLabel");
const change = document.getElementById("changeLabel");
const clear = document.getElementById("clearLabel");
const logout = document.getElementById("logoutLabel");
const telegram = document.getElementById("telegramLabel");

const empty = document.getElementById("nullLabel");
const wait = document.getElementById("warningError");

function openEnglishLang() {
	create.innerText = "New chat";
	hello.innerText = "Hello, I'm CookieNeural";
	about.innerText = "This reval time is not English Variant";
	engButton.style.opacity = "50%";
	rusButton.style.opacity = "100%";
	russian.style.display = "none";
	english.style.display = "inline";
	error.innerText = "Message is not sending. Attempted resend?";
	think.innerText = "CookieNeural thinking...";
	sources.innerText = "Sources";
	copyable.innerText = "Text to copied";
	write.placeholder = "Message writing...";
	photo.innerText = "Upload photo";
	file.innerText = "Upload file";
	code.innerText = "Code writed the AI. This needed errors.";
	degenerate.innerText = "Message full is not generating. Attempted resend";
	dark.innerText = "The dark theme?";
	locate.innerText = "Localization";
	login.innerText = "Log In the Account";
	username.innerText = "Account settings";
	telegram.innerText = "CookieNeural in the Telegram";
	empty.innerText = "This is not a reval time. Starting dialogue of assistent, saved how this listing.";
	wait.innerText = "CookieNeural is needed errors. Checking is your warning.";
	settings.innerText = "Settings";
	offline.innerText = "Connecting...";
	online.innerText = "Connected";
	account.innerText = "Account settings";
	edit.placeholder = "Username...";
	change.innerText = "EDIT";
	clear.innerText = "Clear chats history";
	logout.innerText = "Log Out the Account";
}

function openRussianLang() {
	create.innerText = "Новый чат";
	hello.innerText = "Привет, Я CookieNeural";
	about.innerText = "А так ты можешь называть меня Куки. Введи какой-нибудь запрос снизу, и я на него отвечу.";
	engButton.style.opacity = "100%";
	rusButton.style.opacity = "50%";
	russian.style.display = "inline";
	english.style.display = "none";
	error.innerText = "Сообщение не удалось отправить. Попробовать заново?";
	think.innerText = "CookieNeural думает...";
	sources.innerText = "Источники";
	copyable.innerText = "Текст скопирован";
	write.placeholder = "Напишите сообщение...";
	photo.innerText = "Загрузить фото";
	file.innerText = "Загрузить файл";
	code.innerText = "Код написан ИИ. Могут быть недочёты.";
	degenerate.innerText = "Не удалось сгенерировать сообщение полностью. Попробовать заново?";
	settings.innerText = "Настройки";
	dark.innerText = "Тёмная тема?";
	locate.innerText = "Локализация";
	login.innerText = "Войти в аккаунт";
	username.innerText = "Настройки аккаунта";
	telegram.innerText = "CookieNeural в Telegram";
	empty.innerText = "Здесь пока нет чатов. Начините диалог с ассистентом, чтобы сохранить его тут.";
	wait.innerText = "CookieNeural может ошибаться. Проверяйте нужное";
	settings.innerText = "Настройки";
	offline.innerText = "Проверка соединения...";
	online.innerText = "Соединение восстановлено";
	account.innerText = "Настройки аккаунта";
	edit.placeholder = "Имя пользователя...";
	change.innerText = "ИЗМЕНИТЬ";
	clear.innerText = "Очистить историю чатов";
	logout.innerText = "Выйти из аккаунта";
}