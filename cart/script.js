const cartItems = JSON.parse(localStorage.getItem('cart'))

const cartContainer = document.getElementById('cart-container');
cartContainer.innerHTML = `${cartItems.map((item) => `
        <div class="shoppingCartItem">
                    <div class="product-info-cart">
                        <div class="product-img">
                            <img
                                src="${item.image}"
                                alt="Full Sleeve Zipper "
                            />
                            <div class="favProduct">
                                <button>
                                    <i
                                        class="fa-regular fa-heart"
                                        style="transform: rotate(300deg)"
                                    ></i>
                                </button>
                            </div>
                        </div>
                        <div class="product-name">
                            <p>Cotton T-shirt</p>
                            <div class="test">
                                <h4>Full Sleeve Zipper</h4>
                                <span>$ 99 </span>
                            </div>
                        </div>
                    </div>
                    <div class="product-options">
                        <button><i class="fa-solid fa-xmark"></i></button>
                        <span name="size" id="size" class="custom-select"
                            >XL</span
                        >
                        <p
                            class="prod-card-color prodColor"
                            style="background-color: black"
                        ></p>
                        <div class="btn-group-increment">
                            <button type="button" class="btnLight">+</button>
                            <button type="button" class="btnLight">1</button>
                            <button type="button" class="btnLight">-</button>
                        </div>
                        <button class="refreshIcon">
                            <i class="fa-solid fa-arrows-rotate"></i>
                        </button>
                    </div>
                </div>
    `).join('')}`