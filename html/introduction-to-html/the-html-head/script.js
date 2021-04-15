const list = document.createElement('ul');
const info = document.createElement('p');
const html = document.querySelector('html');
const header = document.createElement('h1')

info.textContent = 'Below is a dynamic list. Click anywhere outside the list to add a new list item. Click an existing list item to change its text to something else.';

header.textContent='Dynamic header'

document.body.appendChild(info);
document.body.appendChild(list);
document.body.appendChild(header)

html.onclick = function () {
    const listItem = document.createElement('li');
    const listContent = prompt('What content do you want the list item to have?');
    listItem.textContent = listContent;
    list.appendChild(listItem);

    listItem.onclick = function (e) {
        console.log(e)
        e.stopPropagation();
        const listContent = prompt('Enter new content for your list item');
        this.textContent = listContent;
    }
}

/*
* Задание:
*
* Кликаем мышкой на произвольную область и выводим инфу о клике.
* Инфа о клике:
* - координаты клика
* - текст элемента по которому кликнули
* - потом меняем текст на какую-нибудь заглуху
*
* По такому принципу можно будет потом сделать игру: закрашивание сетки
*
* */