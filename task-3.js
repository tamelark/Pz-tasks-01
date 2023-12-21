const ADMIN_PASSWORD = "tellMeWhy";
let message;

window.onload = function() {
  const password = prompt("Введіть пароль для авторизації:");

  if (password === null) {
    message = "Скасовано користувачем!";
  } else if (password === ADMIN_PASSWORD) {
    message = "Ласкаво просимо!";
  } else {
    message = "Доступ заборонений, невірний пароль!";
  }

  alert(message);
};