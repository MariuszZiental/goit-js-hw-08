'use strict';
import SimpleLightbox from 'simplelightbox';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

export const galleryImages = galleryItems
  .map(
    image =>
      `<div class="gallery__item">
      <a class="gallery__link" href="${image.original}">
        <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
      </a>
    </div>`
  )
  .join('');
  
gallery.insertAdjacentHTML('beforeend', galleryImages);

new SimpleLightbox('.gallery', {
  captionsData: 'alt',
  captionDelay: 250,
});

gallery.addEventListener('click', e => {
  e.preventDefault();

  if (e.target.nodeName !== 'IMG') return;
  const handleEscapeKey = e => {
    if (e.key === 'Escape') instance.close();
  };

  const instance = simplelightbox.create(
    `<img src="${e.target.dataset.source}">`,
    {
      onShow: () => {
        document.addEventListener('keydown', handleEscapeKey);
      },
      onClose: () => {
        document.removeEventListener('keydown', handleEscapeKey);
      },
    }
  );
  instance.show();
});
