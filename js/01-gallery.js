import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
const galleryMarkup = galleryItems
  .map(
    (item) =>
      `<div class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
      />
    </a>
  </div>`
  )
  .join("");

gallery.innerHTML = galleryMarkup;

const onGalleryClick = function (event) {
  event.preventDefault();
  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}">
`);

  instance.show();
  const onOpenedModalKeydown = function (event) {
    if (event.code === "Escape") {
      instance.close();
    }
  };
  if (instance.visible()) {
    window.addEventListener("keydown", onOpenedModalKeydown);
  }
};

gallery.addEventListener("click", onGalleryClick);
