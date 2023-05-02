import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const imageList = document.querySelector("gallery");

const imageItem = galleryItems.map(
  ({original, description }) => `<li class="gallery_item">
<img class="newImage" src="${original}" alt="${description}">
</li>`).join("");

newImageList.insertAdjacentHTML("afterbegin", imageItem);