const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');
const productDetails = document.getElementById("productDetails");

const url = `https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/detail?lang=en&country=us&productcode=${productId}`;
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '36203c0954msh58a9775e198481dp1be859jsnece5e3a9d7c1',
        'x-rapidapi-host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com'
    }
};

const displayData = async () => {
    try {
        const response = await fetch(url, options);
        const data = await response.json();

        // Extract the first article from the list
        const product = data.product;
        if (!product || !product.articlesList || product.articlesList.length === 0) {
            productDetails.innerHTML = '<p>Product not found.</p>';
            return;
        }

    } catch (error) {
        console.error('Error fetching product data:', error);
        productDetails.innerHTML = '<p>Error loading product details.</p>';
    }
};

displayData();
