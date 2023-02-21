// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';

const galleryRef = document.querySelector('.gallery');

const createGalleryItems = galleryItems =>
  galleryItems
    .map(
      ({ preview, original, description }) => `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" loading="lazy" />
        </a>
    `
    )
    .join('');

const galleryItemsMarkup = createGalleryItems(galleryItems);
galleryRef.innerHTML = galleryItemsMarkup;

let gallery = new SimpleLightbox('.gallery a', {
  captionSelector: 'img',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

console.log(galleryItems);
