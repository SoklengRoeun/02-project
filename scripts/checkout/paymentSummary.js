import {cart} from '../../data/cart.js';
import {getProduct} from '../../data/products.js';
import formatCurrency from '../utils/money.js';

export function renderPaymentSummary () {
    let productPriceCents = 0;
    cart.forEach((cartItem) => {
        const product = getProduct(cartItem.productId);
        productPriceCents += product.priceCents * cartItem.quantity;
    });

    let cartQuantity = 0 ;

    cart.forEach((cartItem) => {
        cartQuantity += cartItem.quantity;
    });

    const paymentSummaryHTML = `
         <div class="font-bold text-[1.2rem]">Order Summary</div>

                    <div class="payment-summary-row">
                        <div>Items (${cartQuantity}):</div>
                        <div>$${formatCurrency(productPriceCents)}</div>
                    </div>

                    <div class="payment-summary-row">
                        <div>Shipping & handling:</div>
                        <div>$0</div>
                    </div>

                    <div class="payment-summary-total">
                        <div>Order tatol</div>
                        <div>$${formatCurrency(productPriceCents)}</div>
                    </div>

                    <button class="place-order-button js-place-order-button">Place your order</button>
    `;
    document.querySelector('.js-payment-summary')
    .innerHTML = paymentSummaryHTML ;

    const alertMessage = document.querySelector('.js-place-order-button');
    alertMessage.addEventListener('click' , () => {
            alert('Thank you !🙏❤️...');
       
    })
}