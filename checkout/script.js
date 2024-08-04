document.getElementById('country-select').addEventListener('change', function () {
    if (this.value === '') {
        this.classList.add('default')
    } else {
        this.classList.remove('default')
    }
})

const toggleCheckoutForm = ()=>{
    const formToggleBtn = document.querySelector('.payment-btn.form-toggeler span')
    let inputs = document.querySelectorAll('.checkout-section input');
    inputs = Array.from(inputs)
    inputs = inputs.slice(0,8)
    inputs.push(document.querySelector('.checkout-section select'))
    for (let i = 0; i < inputs.length; i++) {
        if (!inputs[i].value) {
            inputs[i].focus()
            return null
        }
    }
    if (formToggleBtn.innerText === 'Payment') {
        formToggleBtn.innerText = 'Shipping'
    }else{
        formToggleBtn.innerText = 'Payment'
    }
    document.querySelector('.checkout-section').classList.toggle('payment-toggled')
}

let cartItems = JSON.parse(localStorage.getItem('cart'));

let total = document.getElementById('total');
let subTotal = document.getElementById('subtotal');
let shippingTax = document.getElementById('shippingTax');

const calculateSubTotal = (x = 0) => {
    let totalItem = 0;
    cartItems.map((item) => {
        totalItem += item.quantity * item.price;
    })
    return (totalItem + x).toFixed(2);
}
subTotal.innerHTML = "$ " + calculateSubTotal();
shippingAmount = cartItems.length > 0 ? 10 : 0;
shippingTax.innerHTML = "$ " + shippingAmount;
total.innerHTML = '$ ' + calculateSubTotal(cartItems.length > 0 ? 10 : 0);
document.querySelector('.your-order .order-count').innerHTML = `(${cartItems.length})`

document.getElementById('your-order-items').innerHTML = cartItems.map((item)=>`
<div class="order-item">
    <img src="${item.image}" alt="order-image" class="order-image">
    <div class="order-details">
        <div>
            <div class="order-item-name">
                ${item.name}
                <br>
                <p><span class="order-item-color" style="background: ${item.color};"></span>/ ${item.size}</p>
            </div>
            <a href="../cart/">Change</a>
        </div>
            <div><span style="color: #000E8A;">(${item.quantity})</span><span>$${item.price}</span></div>
        </div>
</div>`).join('');

const confirmOrder = (e)=>{
    e.preventDefault();
    let inputs = document.querySelectorAll('.checkout-section input');
    inputs = Array.from(inputs);
    for (let i = 8; i < inputs.length; i++) {
        if (!inputs[i].value) {
            inputs[i].focus()
            return null
        }
    }
    localStorage.removeItem('cart')
    document.querySelector('div.checkout-section').innerHTML = `<h1>Your order Confirmed Successfully </br> You will be redirect to Home page...</h1>`
    setTimeout(() => {
        window.location.href = '/'
    }, 5000);
}