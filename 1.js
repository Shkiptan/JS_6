// // Задача 1. Выведите координаты мыши относительно блока в 
//момент движения курсора мыши внутри блока. 
//Координаты выводить под блоком.

document.querySelector ('#cord').onmousemove = function (event) {
	event = event || window.event;
	document.querySelector ('#offx').innerHTML = event.offsetX;
	document.querySelector ('#offy').innerHTML = event.offsetY;
}


// Задача 2. Создайте блок div, в качестве изображения фона установите ему
// изображение закрытой папки. Добавьте событие, которое выполняется при
// двойном клике на блоке и заменяет фон блока на изображение открытой
// папки.
var folder = document.getElementById ('folder');

folder.ondblclick = function () {
	this.style.backgroundImage = "url('folder_open.png')";
}


// Задача 3. Добавьте в документ 300-400 блоков div квадратной формы с
// размерами сторон 30px, и цветом фона. Добавление элементов выполните
// с помощью цикла. Добавьте событие при наведении мыши, которое будет
// скруглять данные блоки с помощью border-radius до круга. (Для
// замедления эффекта скругления в CSS можно добавить transition).
for (i=0; i<300; i++) {
	var div = document.createElement ('div');
	div.innerHTML = i;
	document.body.appendChild(div);
	div.classList.add ('box');

	div.onmouseenter = function () {
		this.style.borderRadius = '50px';
	}
}

//Задача 4. Создайте div размерами ширина – 100%, высота 250px. Ниже
// добавьте 4-5 изображений с одинаковыми классами, разного размера.
// Добавьте событие, которое будет при клике на изображении
// устанавливать его фоном блока div со свойством background-size: contain.
 // var picture = document.getElementByClassName('picture');

 document.onclick = function (event) {
 	if (event.target.className == 'picture') {
 		takeImg (event.target);
 	}
 }

function takeImg (t) {
	var frame = document.querySelector ('#frame');
	frame.style.background = 'url(' + t.src + ')';
    frame.style.backgroundSize = 'contain';
    frame.style.backgroundRepeat = 'no-repeat';
	}


// Задача 5. Создайте блок размерами 50x50px. Добавьте событие клик, так,
// что при каждом клике на блоке он отодвигается на 100px вниз от
// предыдущего положения.

y=0;
var block = document.getElementById ('one');

block.onclick = function (event) {
	y=y+100;
	this.style.top = y + 'px';
}


// Задача 6. РЕАЛИЗУЙТЕ ТРИГГЕР ПЕРЕКЛЮЧАТЕЛЬ
// триггер переключатель следующего вида: см. pdf
// При загрузке переключатель находится в первом положении.
// При клике, он переходит в положение два (средняя картинка), а в консоль
// выводится цифра 1.
// При следующем клике переключатель переходит в состояние три (нижняя
// картинка), а в консоль выводится цифра 2. При следующем клике,
// переключатель переходит в состояние 1 (верхняя картинка), а в консоль
// выводится 0.

var x=0; 
var click = 0;

document.getElementById('bum').onclick = function(event) {
	x=x+100; 
	this.style.left = x +'px';
	click++;
	
	if(click == 3) {
		x=0; 
		this.style.left = x +'px';
		click=0;
	}

	console.log(click);
}
