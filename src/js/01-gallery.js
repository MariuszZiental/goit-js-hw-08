import SimpleLightbox from 'simplelightbox';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
export const galleryImages = galleryItems
  .map(
    image =>
      `<li class="gallery__item">
      <a class="gallery__link" href="${image.original}">
        <img class="gallery__image" data-source="${image.original}" src="${image.preview}" alt="${image.description}" />
      </a>
    </li>`
  )
  .join('');
gallery.insertAdjacentHTML('beforeend', galleryImages);

let simplelightbox = new simplelightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

console.log(gallery);
console.log(SimpleLightbox);
console.log(galleryItems);
