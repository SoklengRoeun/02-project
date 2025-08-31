import {cart, removeFromCart} from '../../data/cart.js';
import {products, getProduct} from '../../data/products.js';
import { formatCurrency } from '../utils/money.js';
import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js'; //call esm version can mudule file
import {renderPaymentSummary} from './paymentSummary.js';
    //External library + javascript module
    const today = dayjs();
    const dateString = today.format('dddd, MMMM D')
 
export function renderOrderSummary() {

    let cartSummaryHTML = '';

    cart.forEach((cartItem) => {
    const productId = cartItem.productId;

    const matchingProduct = getProduct(productId);

    cartSummaryHTML += `
            <div class="cart-container 
            js-cart-item-container-${matchingProduct.id}" >
                <div class="delivery-date" >Deliver date: ${dateString}</div>
                <div class="cart-item-details-grid">
                    <img class="product-image" 
                    src="${matchingProduct.image}" alt="6-piece-non-stick-baking-set">
                    
                    <div class="cart-item-details">
                        <div class="product-name">
                            ${matchingProduct.name}
                        </div>
                        <div class="product-price">
                            $${formatCurrency(matchingProduct.priceCents)}
                        </div>
                        <div class="product-quantity">
                            <span class="font-bold">
                            Quantity: ${cartItem.quantity}
                            </span>
                            <span class="text-green-700">
                                Update
                            </span>
                            <input class="quantity-input">
                            <span class="save-quantity-link" >Save</span>

                            <span class="text-red-700 js-delete-link" 
                            data-product-id ="${matchingProduct.id}">
                                Delete
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });

    document.querySelector('.js-order-summary')
    .innerHTML = cartSummaryHTML ;

    document.querySelectorAll('.js-delete-link')
    .forEach ((link) => {
        link.addEventListener('click', () => {
            const productId = link.dataset.productId;

            removeFromCart(productId);
            //remove product from container
            const container = document.querySelector(`.js-cart-item-container-${productId}`);
            container.remove();

            renderPaymentSummary();
        })
    });
}