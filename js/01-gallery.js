"use strict";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from "./gallery-items";
// Change code below this line

const gallery = document.querySelector(".gallery");
export const addImage = galleryItems;
// .map(
//     image => '<li class="gallery__item" >
//     <a class="gallery__link" href="${image.original}">
//     <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
//     </a>
//     </li >'
//     )
//     .join('');

gallery.insertAdjacentHTML("afterbegin", addImage);

let simplelightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

console.log(galleryItems);
