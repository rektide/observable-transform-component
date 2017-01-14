var
  most= require( "most"),
  MostCreate= require( "most-cree8"),
  childChangedCallback= require( "child-changed-callback")

class ObservableTransform extends HTMLElement{
	constructor(){
		super()
		var inner= new MostCreate( _switch => this._switch= _switch)
		this.stream= inner.switchLatest()
	}
	changedCallback(){
		this.stream= null
		var src= this.getAttribute( "src")
		if( !src){
			console.error( "Expected `src` attribute")
			return
		}
		var target= document.getElementById( src)
		if( !target){
			console.error( "Could not find target src `"+ src+ "`")
			return
		}

		// chain children
		var stream= Array.prototype.reduce.call( current.childNodes, function( src, el){
			var srcId= src.getAttribute("id")
			if( !srcId){
				srcId= "otid-" + Math.floor( Math.random()* Number.MAX_SAFE_INTEGER)
				src.setAttribute("id", srcId)
			}
			if( !src.stream){
				console.error( "Couldn't find stream on `"+ src+ "`")
			}
			el.setAttribute("src", srcId)
			return el
		}, src).stream
		this._switch( stream)
	}
	get attributeChangedBack(){ return this.changedCallback}
	get childChangedCallback(){ return this.changedCallback}
	get connectedCallback(){ return this.connectedCallback}
}

if(typeof customElements !== "undefined" && customElements.define){
	customElements.define("ObservableTransformComponent", ObservableTransformComponent)
}

if(typeof module !== "undefined"){
	module.exports= ObservableTransform
	module.exports.default= ObservableTransform
	module.exports.ObservableTransformComponent= ObservableTransform
}
