import SimpleLightbox from "simplelightbox";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import "simplelightbox/dist/simple-lightbox.min.css"

console.log(galleryItems);


const galleryEl = document.querySelector('.gallery');
const galleryMarkupEl = handleGalleryItems(galleryItems);

galleryEl.insertAdjacentHTML('beforeend', galleryMarkupEl);


function handleGalleryItems(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `
   <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
`;
        })
        .join('');
}
    
let gallerySimple = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    captionPosition: 'bottom',
    });
 
