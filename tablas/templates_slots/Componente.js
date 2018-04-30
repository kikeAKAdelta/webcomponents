class Componente extends HTMLElement{
	constructor(){
		super();

		let template=document.getElementById('my-paragraph'); //Obteniendo el template
		let templateContent =template.content; //Obteniento su contenido


		// const shadowroot=this.attachShadow({mode:'open'})
		// .appendChild(templateContent.cloneNode(true)); //Lo clonamos y lo mostramos
		 const shadowRoot=this.attachShadow({mode:'open'});
		 shadowRoot.appendChild(templateContent.cloneNode(true));
	}
}

customElements.define('my-paragraph',Componente);