import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryList = document.querySelector(".gallery");

const galleryItemsList = galleryItems
  .map(
    ({ original, preview, description }) =>
      `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          alt="${description}"
        />
      </a>
    </li>`
  )
  .join("");

galleryList.insertAdjacentHTML("afterbegin", galleryItemsList);

var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  
});