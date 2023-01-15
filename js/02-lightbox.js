import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
const galleryMarkup = galleryItems
  .map(
    (item) =>
      `<li><a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a></li>`
  )
  .join("");

gallery.innerHTML = galleryMarkup;

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

const onGalleryClick = function (event) {
  event.preventDefault();
};

gallery.addEventListener("click", onGalleryClick);
