var most= require( "most")

class ObservableTransform extends HTMLElement{
	constructor(){
		super()
	}
	changedCallback(){
		var
		  src= this.getAttribute( "src"),
		  target= document.getElementById( src)
		for( var i= 0; i< this.childNodes.length; ++i){
			var node= this.childNodes[ i]
			
		}
	}
	attributeChangedCallback(){
		this.changedCallback()
	}
	connectedCallback(){
		this.changedCallback()
	}
	
}

if(typeof customElements !== "undefined" && customElements.define){
	customElements.define("ObservableTransformComponent", ObservableTransformComponent)
}

if(typeof module !== "undefined"){
	module.exports= ObservableTransform
	module.exports.default= ObservableTransform
	module.exports.ObservableTransformComponent= ObservableTransform
}
