import './css/styles.css';
import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', async e => {
  e.preventDefault();
  const searchValue = e.target.elements['search-text'].value.trim();

  if (!searchValue) {
    iziToast.warning({ message: 'Please enter a search term.' });
    return;
  }

  clearGallery();
  showLoader();

  setTimeout(async () => {
    try {
      const data = await getImagesByQuery(searchValue);

      if (data.hits.length === 0) {
        iziToast.info({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        hideLoader();
        return;
      }

      createGallery(data.hits);
    } catch (error) {
      console.error('Error fetching images:', error);
      iziToast.error({ message: 'Something went wrong.' });
    } finally {
      hideLoader();
      e.target.reset();
    }
  }, 1000); // Затримка в 1000 мілісекунд (1 секунда)
});
