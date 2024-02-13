class SpliderComponent extends HTMLElement{
  constructor(){
    super()
    this.element = this.querySelector(".splide")
    console.log("I am custom Splider")
    this.options = JSON.parse(this.querySelector("script").textContent)
    this.intializer()
  }

  intializer(){
   const splide=new Splide(this.element,this.options)
    splide.mount()
    console.log(this.options)
  }
}

customElements.define("splider-component",SpliderComponent)
