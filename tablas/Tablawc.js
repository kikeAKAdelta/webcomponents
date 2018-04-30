class Tablawc extends HTMLElement{


	constructor(){
		super();
	}

	connectedCallback(){
		let shadowroot=this.attachShadow({mode:'open'});

		let boton=document.createElement('input');
		boton.setAttribute('id', 'datos');
		boton.setAttribute('value', 'hola');

		let tabla=document.createElement('table');
		tabla.style.width='300px';
		tabla.style.height='300px';
		tabla.style.background = '#C6375B';
		tabla.style.border='2px solid';

		let fila=document.createElement('tr');
		fila.setAttribute('id', 'myf');

		let columna=document.createElement('td');
		columna.appendChild(document.createTextNode('holaaaa bitch'));

		let fila2=document.createElement('tr');

		let columna2=document.createElement('td');
		columna2.setAttribute('id', 'men');
		columna2.appendChild(document.createTextNode('holaaaa'));

		

		fila.appendChild(columna);
		fila.appendChild(columna2)
		tabla.appendChild(fila);

		shadowroot.appendChild(boton);
		shadowroot.appendChild(tabla);

	}


}

customElements.define('tabla-wc',Tablawc);