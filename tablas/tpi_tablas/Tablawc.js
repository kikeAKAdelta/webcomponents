class Tablawc extends HTMLElement{


	constructor(){
		super();
	}

	connectedCallback(){

		let shadowRoot=this.attachShadow({mode:'open'});
		let template=document.getElementById('tablas');
		let templateContent=template.content;


		let fila=document.createElement('ul');
		fila.setAttribute('slot', 'pel');


		let celda=document.createElement('li');
		celda.setAttribute('slot', 'datoss');
		celda.innerText='lio';

		fila.appendChild(celda);

		templateContent.appendChild(fila);

		var clone=document.importNode(templateContent, true);
		

		shadowRoot.appendChild(templateContent.cloneNode(true));

	}
}

customElements.define('tabla-wc',Tablawc);