'use strict';

window.addEventListener('load', function(){

	var formulario = document.querySelector('#formulario');
	var numCapicuas = document.querySelector('#numCapicuas');
	var numOrdenados = document.querySelector('#numOrdenados');

	numCapicuas.style.display = 'none';
	numOrdenados.style.display = 'none';

	formulario.addEventListener('submit', function(){

		var parametro1 = parseInt(document.querySelector('#parametro1').value);
		var parametro2 = parseInt(document.querySelector('#parametro2').value);
		var parametro3 = parseInt(document.querySelector('#parametro3').value);
		var parametro4 = parseInt(document.querySelector('#parametro4').value);

		//Guardo los nums en el array
		var nums = [];

		if(!isNaN(parametro1)){
			nums.push(parametro1);
		} 

		if(!isNaN(parametro2)){
			nums.push(parametro2);
		} 

		if(!isNaN(parametro3)){
			nums.push(parametro3);
		} 

		if(!isNaN(parametro4)){
			nums.push(parametro4);
		}

		//Numeros Capicuas
		for (var i = 0; i < nums.length; i++){

			if(capicua(nums[i])){
				var p = document.createElement('p');
				p.innerHTML = `<span>${nums[i]} es capicúa</span>`;
				numCapicuas.appendChild(p);
				numCapicuas.style.display = 'block';
			}

		}

		//Mostrar Ordenados
		nums.sort(function(a, b){
			return a - b;
		});
		
		for(var i = 0; i < nums.length; i++){
			var p = document.createElement('p');
			p.innerHTML = `<span>${nums[i]}</span>`;
			numOrdenados.appendChild(p);
			numOrdenados.style.display = 'block';
		}

	});



});

const capicua = (valor) =>{

	var numero = valor.toString();
	var dividirNum = numero.split("");
	var invertirNum = dividirNum.reverse();
	var unirNum = invertirNum.join("");

	if(numero == unirNum)
	return true;
}
