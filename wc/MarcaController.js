import MarcaResourceClient from './MarcaResourceClient.js';
class MarcaController extends MarcaResourceClient{
	constructor(){
		super();
	}

	 busqueda () {

		this.mrc=new MarcaResourceClient();

		this.mrc.findByName()
		.then(function (res){
            return res.json();
        })
        .then(function (data){
        	
	        let html = '<input list="lista"><datalist id="lista">';	

	        data.forEach(function (marca){
	        html += ` <option> ${marca.marca} `
	        console.log(marca.marca);
	        
        })
	        html+='</datalist>';
           document.getElementById("h").innerHTML=html;
           
           
        })
	

	}


}


export default MarcaController;

