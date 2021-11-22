import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const galleryPictures = galleryItems
.map((galleryItem) => ` <a class="gallery__item" href="${galleryItem.original}">
                            <img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}" />
                        </a>`)
.join("");

gallery.insertAdjacentHTML("beforeend", galleryPictures);

const lightbox = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250});