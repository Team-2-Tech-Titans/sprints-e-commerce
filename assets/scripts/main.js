// const url =
//     "https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?country=us&lang=en&currentpage=0&pagesize=30&categories=men_all&concepts=H%26M%20MAN";
// const options = {
//     method: "GET",
//     headers: {
//         "x-rapidapi-key": "b2e173c3a8msh95b68978cee8ee6p1ad865jsn6e796fcffc74",
//         "x-rapidapi-host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
//     },
// };

// async function getData() {
//     try {
//         const response = await fetch(url, options);
//         const result = await response.text();
//         console.log(result);
//     } catch (error) {
//         console.error(error);
//     }
// }
// getData();

// Cart Count
const cart = JSON.parse(localStorage.getItem("cart")) || [];
const cartCount = document.getElementById("cart-count");
if (cart.length === 0) {
    cartCount.style.display = "none";
} else {
    cartCount.style.display = "flex";
    cartCount.innerText = cart.length;
}

// Toggle light/dark mode
const toggleTheme = document.getElementById("toggle-theme");
toggleTheme.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const icon = document.body.classList.contains("dark-mode")
        ? "fa-regular fa-moon"
        : "fa-regular fa-sun";
    toggleTheme.innerHTML = `<i class="${icon}"></i>`;
    localStorage.setItem(
        "theme",
        document.body.classList.contains("dark-mode") ? "dark" : "light"
    );
});

// Load theme preference
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    toggleTheme.innerHTML = '<i class="fa-regular fa-moon"></i>';
} else {
    toggleTheme.innerHTML = '<i class="fa-regular fa-sun"></i>';
}
