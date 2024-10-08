export let cart = JSON.parse(localStorage.getItem('cart'));


if(!cart){
  cart = [{
    productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity: 2
  },{
    productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity:1
  }
      
  ];
};



function saveData(){
  localStorage.setItem('cart',JSON.stringify(cart));
}

export function addtoCart(productId){
     
    let mathItem;

    let quantityJs = document.querySelector(`.product-quantity-${productId}`);
    let selector = Number(quantityJs.value)
    
    cart.forEach((item) => {
     if(productId === item.productId){
       mathItem = item;
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

   saveData()
}

export function removeFromCart(productId){
   let newCart = []
   
   cart.forEach((cartItem) => {
    if(productId !== cartItem.productId){
      newCart.push(cartItem)
    };
   });
  
   cart = newCart;
   saveData();
 
}