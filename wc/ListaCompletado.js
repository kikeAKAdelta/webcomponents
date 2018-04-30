// import MarcaResourceClient from './MarcaResourceClient.js';
class ListaCompletado extends HTMLElement{

		constructor(){
			//siempre llamar al constructor super
			super();

			

		}

		//Cuando se conecta por primera vez al DOM
		connectedCallback(){
			//creando un shadow root
			let shadow=this.attachShadow({mode: 'open','composed':true,'bubbles':true});

			

			//creando boton
			let boton=document.createElement("input");
			boton.setAttribute('type', 'button');
			boton.setAttribute('value', 'Busqueda');
			boton.style.width='100px';


			//Creando evento
			//let evento=new new CustomEvent('key_complete', {'detail':inputText});
			let evento=new CustomEvent("boton_complete");
			// this.mrc=new MarcaResourceClient();
			boton.addEventListener("click", teclear(), false);
			boton.dispatchEvent(evento);

			boton.addEventListener('click', e => {
       			console.log(e.type);
    		});
			
			//Agregando al dom
			shadow.appendChild(boton);

		}

}

	function teclear () {
     		console.log('salu');
   	}
     

	//Definiendo un nuevo elemento
	customElements.define('boton-complete',ListaCompletado);

	// export default ListaCompletado;