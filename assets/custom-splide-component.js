// class SpliderComponent extends HTMLElement{
//   constructor(){
//     super()
//     this.element = this.querySelector(".splide")
//     this.options = JSON.parse(this.element.dataset.sliderSettings);
//     this.intializer()
//     console.log("Splider section")
//   }

//   intializer(){
//    const splide=new Splide(this.element,this.options)
//     splide.mount()
//      console.log(this.options)
//   }
// }

// customElements.define("splider-component",SpliderComponent)

class CustomSlider extends HTMLElement {
  constructor() {
    super();
    this.splideEl = this.querySelector(".splide");
    this.options = JSON.parse(this.splideEl.dataset.sliderSettings);
    console.log(this.options)
    this.mountSplider();
  }

  mountSplider() {
    new Splide(this.splideEl,this.options).mount();
  }
}

customElements.define("splider-component", CustomSlider);