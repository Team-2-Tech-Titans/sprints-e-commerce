const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id')

console.log(productId);

const url = `https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/detail?lang=en&country=us&productcode=${productId}`;
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': 'b2e173c3a8msh95b68978cee8ee6p1ad865jsn6e796fcffc74',
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