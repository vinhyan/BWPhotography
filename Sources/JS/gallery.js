/* My Works */ 

// click gallery

const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".click-gallery img");
const fullImg = document.querySelector(".full-img");
const caption = document.querySelector(".caption");

previews.forEach((preview) => {
    preview.addEventListener("click", () => {
        modal.classList.add("open");
        fullImg.classList.add("open");
        const originalSrc = preview.getAttribute("data-original");
        fullImg.src = `./Sources/Images/myworks/${originalSrc}`;
        const altText = preview.alt;
        caption.textContent = altText;
    });
});

modal.addEventListener('click', (e) => {
    if (e.target.classList.contains("modal")) {
        modal.classList.remove("open");
        fullImg.classList.remove("open");
    }
});