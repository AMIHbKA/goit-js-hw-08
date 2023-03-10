// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

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

new SimpleLightbox('.gallery a', {
  captionSelector: 'img',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
