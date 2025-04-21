import axios from 'axios';

export async function getImagesByQuery(query, page) {
  const API_KEY = '49857311-6635cfa9567008bd9332ca8ce';
  const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`;

  try {
    const response = await axios.get(URL);
    console.log('Pixabay response:', response.data); // ➕ добавь это
    return response.data;
  } catch (error) {
    console.error('Ошибка запроса к Pixabay:', error); // ➕ и это
    throw error;
  }
}
