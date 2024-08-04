document.getElementById('country-select').addEventListener('change', function () {
    if (this.value === '') {
        this.classList.add('default')
    } else {
        this.classList.remove('default')
    }
})