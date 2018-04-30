class SellButton extends HTMLElement{

	constructor(){
		super();
	}

	connectedCallback(){
		//las comillas inclinadas son pra escribir texto con formato, esto viene en templates script
		let shadoRoot=this.attachShadow({mode:'open'});
		shadowRoot.innerHTML=`
		<style>
		 :host{
		 	--orange: #e67e22;
		 	--space: 1.5em;
		 }
		</style> 
		<div>
			<button>Comprar ahora</button>
		</div>
		`
	}

}

window.customElements.define('sell-button',SellButton);