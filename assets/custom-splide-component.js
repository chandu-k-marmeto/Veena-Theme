class SpliderComponent extends HTMLElement{
  constructor(){
    super()
    this.element = this.querySelector(".splide")
    console.log("I am custom Splider")
    this.options=this.dataset.sliderSettings
    console.log(this.options)
    this.intializer()
  }

  intializer(){
   const splide=new Splide(this.element,this.options)
    splide.mount()
    console.log(this.options)
  }
}

customElements.define("splider-component",SpliderComponent)
