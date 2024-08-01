const urlParams = new URLSearchParams(window.location.search);
const pageNum = urlParams.get("page") || 0;
const url = `https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?country=us&lang=en&currentpage=${pageNum}&pagesize=30`;
const options = {
    method: "GET",
    headers: {
        "x-rapidapi-key": "b2e173c3a8msh95b68978cee8ee6p1ad865jsn6e796fcffc74",
        "x-rapidapi-host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
    },
};
const getProducts = async () => {
    try {
        const response = await fetch(url, options);
        const data = await response.json();
        displayProducts(data.results);
        // displayPagination(data.pagination);
        console.log(data.results);
    } catch (error) {
        console.error(error);
    }
};
const displayProducts = (products) => {
    const productListing = document.getElementById("product-listing");
    productListing.innerHTML = products
        .map(
            (prod) => `
            <div class="product-card" onclick="window.location.href='/product/?id=${prod.articles[0].code}'">
                <img src="${prod.articles[0].logoPicture[0].baseUrl}" alt="${prod.name}">
                <div class="product-info">
                    <span>${prod.categoryName}</span>
                    <div class="card-text">
                        <h4>${prod.name}</h4>
                        <p>${prod.price.formattedValue}</p>
                    </div>
                </div>
            </div>`
        )
        .join("");
};
// const displayPagination = (pagination) => {
//     const paginationContainer = document.querySelector(".pagination");
//     const currentpage = pagination.currentPage;
//     const totalPages = pagination.numberOfPages;

// };
getProducts();
