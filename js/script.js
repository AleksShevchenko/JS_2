
"use strict";

var listName = [];

for (var i = 0; i < 5; i++){
	var name = prompt('Введите имя', '');
	listName[i]= name;
}

var userName = prompt ('Введите имя пользователя', '');
var message = 'ошибка';

for (var i = 0; i < listName.length; i++) {
    if (listName[i] === userName) {
        message = userName + ', вы успешно вошли';
    }
}

alert(message);