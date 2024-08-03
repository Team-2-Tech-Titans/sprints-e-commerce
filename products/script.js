const urlParams = new URLSearchParams(window.location.search);
const pageNum = urlParams.get("page") || 0;
const ProductsType = urlParams.get("type");
const baseUrl = 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list';
const url = `${baseUrl}?country=us&lang=en&currentpage=${pageNum}&pagesize=30${ProductsType ? `&productTypes=${ProductsType}` : ''}`;

const options = {
    method: "GET",
    headers: {
        "x-rapidapi-key": "2fb3481aa7mshd89f4309f58d8b2p14a025jsn77188e6519bb",
        "x-rapidapi-host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
    },
};

const getProducts = async () => {
    try {
        const response = await fetch(url, options);
        const data = await response.json();
        displayProducts(data.results);
        displayFilters(data.results);
        displayPagination(data.pagination);
    } catch (error) {
        console.error(error);
    }
};

const displayProducts = (products) => {
    const productListing = document.getElementById("product-listing");
    productListing.innerHTML = products.map(prod => `
                <div class="product-card" onclick="window.location.href='/product/?id=${prod.articles[0].code}'">
                    <img src="${prod.images[0].url}" alt="${prod.name}">
                    <div class="product-info">
                        <span>Category: ${prod.categoryName} ${prod.rgbColors
            ? `<span class="prod-card-color" style="background-color:${prod.rgbColors[0]}"></span>${prod.rgbColors.length > 1 ? `+${prod.rgbColors.length}` : ""}`
            : ""
        }</span>
                        <div class="card-text">
                            <h4>${prod.name}</h4>
                            <p>${prod.price.formattedValue}</p>
                        </div>
                    </div>
                </div>
            `).join("");
};

const displayPagination = (pagination) => {
    const paginationContainer = document.querySelector(".pagination");
    let pageNumber = pagination.currentPage + 1;
    let lastPage = pagination.numberOfPages;
    paginationContainer.innerHTML = `
                <span onclick="changePage(${pagination.currentPage - 1}, '${ProductsType || ''}')" ${pageNumber === 1 ? "style='display:none'" : ""}><i class="fa-solid fa-angle-left"></i></span>
                <span>${pageNumber}</span>
                <span onclick="changePage(${pagination.currentPage + 1}, '${ProductsType || ''}')" ${pageNumber === lastPage ? "style='display:none'" : ""}><i class="fa-solid fa-angle-right"></i></span>
            `;
};

const changePage = (pageNumber, type) => {
    const url = new URL(window.location.href);
    url.searchParams.set('page', pageNumber);
    if (type) {
        url.searchParams.set('type', type);
    } else {
        url.searchParams.delete('type');
    }
    window.location.href = url.toString();
};

const displayFilters = (products) => {
    const categoryCounts = products.reduce((counts, prod) => {
        counts[prod.categoryName] = (counts[prod.categoryName] || 0) + 1;
        return counts;
    }, {});

    const categories = Object.keys(categoryCounts).map(category => {
        return { name: category, count: categoryCounts[category] };
    });

    const categoriesFilter = document.querySelector(".filter-section.category");
    categoriesFilter.innerHTML = `
                <h4 class="filter-header" onclick="collapseFilter(event)">Category<span><i class="fa-solid fa-angle-right"></i></span></h4>
                <div class="filter-options">
                    ${categories.map(category => `
                        <label>
                            <input type="checkbox"/> ${category.name} (<span style="color:blue;">${category.count}</span>)
                        </label>
                    `).join("")}
                </div>
            `;
};

const collapseFilter = (e) => {
    const content = e.target.nextElementSibling;
    const icon = e.target.querySelector('i');
    if (content.classList.contains("extend")) {
        icon.classList.replace("fa-angle-down", "fa-angle-right");
        content.classList.remove("extend");
        content.style.height = "0";
    } else {
        icon.classList.replace("fa-angle-right", "fa-angle-down");
        content.classList.add("extend");
        content.style.height = content.scrollHeight + "px";
    }
};

document.addEventListener('DOMContentLoaded', getProducts);