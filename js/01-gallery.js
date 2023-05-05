import { galleryItems } from "./gallery-items.js";
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
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
  )
  .join("");

galleryList.insertAdjacentHTML("afterbegin", galleryItemsList);






galleryList.addEventListener("click", (event) => {
  event.preventDefault();

  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" width="800" height="600" alt="${event.target.alt}"/>
    `,
    {
      onShow: () => document.addEventListener("keydown", onEscPush),
      onClose: () => document.removeEventListener("keydown", onEscPush)
    }
  );
  instance.show();

  function onEscPush (event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }
});


