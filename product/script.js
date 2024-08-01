const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id')

console.log(productId);

const url = `https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/detail?lang=en&country=us&productcode=${productId}`;
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '4874a52925mshaa774d5f2dd1872p1b7d34jsn381ef1598205',
        'x-rapidapi-host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com'
    }
};

const displayData = async () => {
    try {
        const response = await fetch(url, options);
        const data = await response.json();
        console.log(data.product);
    } catch (error) {
        console.error(error);
    }
}
displayData();