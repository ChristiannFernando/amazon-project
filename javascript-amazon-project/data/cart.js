export let cart = [{
  productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
  quantity: 2
},{
  productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
  quantity:1
}
    
]

export function addtoCart(productId){
     
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

   console.log(cart )
}