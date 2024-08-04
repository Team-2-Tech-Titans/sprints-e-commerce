document.getElementById('country-select').addEventListener('change', function () {
    if (this.value === '') {
        this.classList.add('default')
    } else {
        this.classList.remove('default')
    }
})

const toggleCheckoutForm = ()=>{
    document.querySelector('.checkout-section').classList.toggle('payment-toggled')
    const formToggleBtn = document.querySelector('.payment-btn.form-toggeler span')
    if (formToggleBtn.innerText === 'Payment') {
        formToggleBtn.innerText = 'Shipping'
    }else{
        formToggleBtn.innerText = 'Payment'
    }
}