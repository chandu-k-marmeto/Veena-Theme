class CustomProductCard extends HTMLElement{
  constuctor(){
    super()
    this.addEventListener("mouseover", ()=>{console.log("mouseOvered")})
  }
}

customElements.define("product-card",CustomProductCard)