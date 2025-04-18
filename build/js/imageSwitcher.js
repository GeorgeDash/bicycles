// Script to switch the category image when an article is clicked

document.addEventListener('DOMContentLoaded', function () {
    const articles = document.querySelectorAll('.category');
    const mainImage = document.getElementById('categoryImage');

    if (!mainImage || articles.length === 0) return;

    articles.forEach(article => {
        article.addEventListener('click', function () {
            // Remove "selected" from all categories, add to this one
            articles.forEach(a => a.classList.remove('selected'));
            this.classList.add('selected');

            const newImg = this.getAttribute('data-img');
            if (mainImage.src.endsWith(newImg)) return;

            // Fade out
            mainImage.style.opacity = 0;

            setTimeout(() => {
                mainImage.src = newImg;
                // When image loads, fade in
                mainImage.onload = () => {
                    mainImage.style.opacity = 1;
                };
            }, 300); // Match the duration-300 (300ms)
        });
    });
});