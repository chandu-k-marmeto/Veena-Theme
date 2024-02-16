class ProductCard extends HTMLElement{
  constructor(){
    super()
    this.addEventListener("mouseover", ()=>{console.log("mouseOvered")})
  }
}

customElements.define("product-card",ProductCard)