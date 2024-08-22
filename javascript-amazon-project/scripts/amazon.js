import {cart} from '../data/cart.js';

let productshtml = ''

products.forEach((product) =>{
    productshtml += `
    <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
          ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
            ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            $${(product.priceCents / 100).toFixed(2)}
          </div>

          <div class="product-quantity-container">
            <select class="product-quantity-${product.id}">
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart added-to-cart-${product.id}">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-cart" data-product-id="${product.id}">
            Add to Cart
          </button>
        </div>
    `
    
})

document.querySelector(".js-products-grid").
innerHTML = productshtml;

const buttonCart = document.querySelectorAll(".js-add-cart")
.forEach((button) =>{
   button.addEventListener('click',() =>{
     const productId = button.dataset.productId;
     let mathItem;

     let quantityJs = document.querySelector(`.product-quantity-${productId}`);
     let selector = Number(quantityJs.value)
     
     cart.forEach((item) => {
      if(productId === item.productId){
        mathItem = item
      }
     })
     if(mathItem){
      mathItem.quantity +=  selector;
    }else{
      cart.push({
        productId: productId,
        quantity:  selector
       });
    }

    let totalQuantity = 0
    cart.forEach((item) =>{
      totalQuantity += item.quantity
    })
   
    let cartQuantity = document.querySelector(".cart-quantity")
    .innerHTML= `${totalQuantity}`

    const addedMessage = document.querySelector(`.added-to-cart-${productId}`)
    addedMessage.classList.add('addedMessage')
     
     console.log(cart )

     //setTimeout(() =>{
     // addedMessage.classList.remove('addedMessage')
    // },2000)
    let timeoutId

    if(timeoutId){
      clearTimeout(timeoutId)
    }

    let time = setTimeout(() => {addedMessage.classList.remove('addedMessage')},2000)
    timeoutId = time
   })
})