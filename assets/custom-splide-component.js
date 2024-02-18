class SpliderComponent extends HTMLElement{
  constructor(){
    super()
    this.element = this.querySelector(".splide")
    this.options = this.element.dataset.sliderSettings;
    this.intializer()
    console.log("Splider section")
  }

  intializer(){
   const splide=new Splide(this.element,this.options)
    splide.mount()
     console.log(this.options)
  }
}

customElements.define("splider-component",SpliderComponent)
