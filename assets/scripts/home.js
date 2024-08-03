const baseUrl = 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list';
const url = `${baseUrl}?country=us&lang=en&currentpage=0&pagesize=12&productTypes=T-shirt`;

const options = {
    method: "GET",
    headers: {
        "x-rapidapi-key": "36203c0954msh58a9775e198481dp1be859jsnece5e3a9d7c1",
        "x-rapidapi-host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
    },
};
const getProducts = async () => {
    try {
        const response = await fetch(url, options);
        const data = await response.json();
        displayProducts(data.results);
    } catch (error) {
        console.error(error);
    }
};
const displayProducts = (products) => {
    const productListing = document.getElementById("T-shirts-container");
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


let currentIndexLanding = 0;
let currentIndex = 0;
const imageContainer = document.getElementById('imageContainerLanding');
const tShirtContainer = document.getElementById('T-shirts-container');

function updateButtons() {
    document.getElementById('leftButtonLanding').disabled = currentIndexLanding === 0;
    document.getElementById('rightButtonLanding').disabled = currentIndexLanding === 2;
    document.getElementById('leftButton').disabled = currentIndex === 0;
    document.getElementById('rightButton').disabled = currentIndex === 3;
}
function moveLeftLanding() {
    if (currentIndexLanding > 0) {
        currentIndexLanding--;
        updateSliderLanding(imageContainer, currentIndexLanding, 25);
    }
}
function moveRightLanding() {
    if (currentIndexLanding < 2) {
        currentIndexLanding++;
        updateSliderLanding(imageContainer, currentIndexLanding, 25);
    }
}
function moveLeft() {
    if (currentIndex > 0) {
        currentIndex--;
        updateSliderLanding(tShirtContainer, currentIndex, 25);
    }
}
function moveRight() {
    if (currentIndex < 3) {
        currentIndex++;
        updateSliderLanding(tShirtContainer, currentIndex, 25);
    }
}
function updateSliderLanding(images, index, num) {
    const offset = -index * num; // 50% width per image
    images.style.transform = `translateX(${offset}%)`;
    updateButtons();
}
document.addEventListener('DOMContentLoaded', () => {
    getProducts()
    updateButtons();
});
