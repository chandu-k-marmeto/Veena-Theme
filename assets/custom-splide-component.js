<<<<<<< HEAD
=======
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
>>>>>>> ac686a3d40a93ed2896fe50996420eefed1fee7a

class CustomSlider extends HTMLElement {
  constructor() {
    super();
<<<<<<< HEAD
    this.element = this.querySelector(".splide");
    this.options = JSON.parse(this.element.dataset.sliderSettings);
    this.mountSplider()
  }

  mountSplider() {
    new Splide(this.element,this.options).mount();
=======
    this.splideEl = this.querySelector(".splide");
    this.options = JSON.parse(this.splideEl.dataset.sliderSettings);
    console.log(this.options)
    this.mountSplider();
  }

  mountSplider() {
    new Splide(this.splideEl,this.options).mount();
>>>>>>> ac686a3d40a93ed2896fe50996420eefed1fee7a
  }
}

customElements.define("splider-component", CustomSlider);