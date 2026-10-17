// Create the lightbox overlay
const lightbox = document.createElement("div");
lightbox.id = "lightbox";

lightbox.innerHTML = `
    <div class="lightbox-content">
        <img src="" alt="">
        <p class="lightbox-caption"></p>
    </div>
`;

document.body.appendChild(lightbox);

const lightboxImage = lightbox.querySelector("img");
const lightboxCaption = lightbox.querySelector(".lightbox-caption");

// Make eligible images clickable
document.querySelectorAll(
    ".bio-images img, .project-image img"
).forEach(image => {

    image.classList.add("lightbox-trigger");

    image.addEventListener("click", () => {
        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt;

        lightboxCaption.textContent = image.alt;

        lightbox.classList.add("active");
    });
});

// Close when clicking the backdrop or enlarged image
lightbox.addEventListener("click", () => {
    lightbox.classList.remove("active");
});

// Prevent clicks on the caption from being treated as image clicks
lightbox.querySelector(".lightbox-caption")
    .addEventListener("click", event => {
        event.stopPropagation();
    });

// Close with Escape
document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        lightbox.classList.remove("active");
    }
});