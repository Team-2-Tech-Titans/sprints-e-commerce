let currentIndex = 0;

function updateButtons() {
    document.getElementById('leftButton').disabled = currentIndex === 0;
    document.getElementById('rightButton').disabled = currentIndex === 2;
}

function moveLeft() {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
    }
}

function moveRight() {
    if (currentIndex < 2) {
        currentIndex++;
        updateSlider();
    }
}

function updateSlider() {
    const imageContainer = document.getElementById('imageContainer');
    const offset = -currentIndex * 25; // 50% width per image
    imageContainer.style.transform = `translateX(${offset}%)`;
    updateButtons();
}

document.addEventListener('DOMContentLoaded', () => {
    updateButtons();
});
