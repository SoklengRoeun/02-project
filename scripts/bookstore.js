import {cart ,addToCart} from '../data/cart.js';
import {products} from '../data/products.js';
import {formatCurrency} from './utils/money.js';

let productsHTML = '';
products.forEach((product) => {
    productsHTML += `
        <div class="product-container">
            <div class="product-image" >
                <img class="max-h-full max-w-full" 
                src="${product.image}">
            </div>

            <div class="product-name">
                ${product.name}
            </div>

            <div class="font-bold text-lg">
                $${formatCurrency(product.priceCents)}
            </div>

            <div class="select-value" >
                <select class=" js-quantity-selector-${product.id}">
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
            <div class="h-1"></div>

            <div class="add-to-cart js-added-to-cart-${product.id}">
                <img class="h-5" src="image/icons/checkmark.png">
                Added
            </div>

            <button class="btn-buynow js-btn-buynow"
            data-product-id="${product.id}">
              Buy now
            </button>
        </div>
    `
});

//this point for generation on web site
document.querySelector('.js-products-grid')
.innerHTML = productsHTML;

const addedMessageTimeouts = {};

function updateCartQuantity (productId) {
    //generate cartquantity to html
    let cartQuantity = 0 ;
    cart.forEach((cartItem) => {
        cartQuantity += cartItem.quantity;
    });

    document.querySelector('.js-cart-quantity')
    .innerHTML = cartQuantity;

    //added messagge
    const addedMessage = document.querySelector(
        `.js-added-to-cart-${productId}`
    );
    addedMessage.classList.add('add-to-cart-visible');
    
    //product. if there its, we should stop it
    const previousTimeoutId = addedMessageTimeouts[productId];
    if(previousTimeoutId) {
        clearTimeout(previousTimeoutId);
    }

    const timeoutId = setTimeout (() => {
        addedMessage.classList.remove('add-to-cart-visible');
    }, 2000);

    //save the timeoutId for this product
    //so we can stop it later we need to
    addedMessageTimeouts[productId] = timeoutId;

}


document.querySelectorAll('.js-btn-buynow')
.forEach((button) => {
    button.addEventListener('click',() => {
        // const productId = button.dataset.productId;
        const {productId} = button.dataset; //short cut
        addToCart(productId);
        updateCartQuantity(productId);

    });
});

