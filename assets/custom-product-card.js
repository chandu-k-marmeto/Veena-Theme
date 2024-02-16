class CustomProduct extends HTMLElement{
  constructor(){
    super()
    this.addEventListener("mouseover", ()=>{console.log("mouseOvered")})
  }
}

customElements.define("product-card",CustomProduct)