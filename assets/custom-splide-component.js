class SpliderComponent extends HTMLElement{
  constructor(){
    super()
    this.element = this.querySelector(".splide")
    this.options = this.dataset.sliderSettings;
    this.intializer()
    console.log("Splider section")
    console.log(this.options)
  }

  intializer(){
   const splide=new Splide(this.element,this.options)
    splide.mount()
  }
}

customElements.define("splider-component",SpliderComponent)
