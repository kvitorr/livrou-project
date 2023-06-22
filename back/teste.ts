import axios from 'axios';

const coverApiUrl = 'https://covers.openlibrary.org/b';
const openLibraryApiUrl = 'https://openlibrary.org';

async function searchBooks(query) {
  try {
    const response = await axios.get(`${openLibraryApiUrl}/search.json`, {
      params: {
        q: query,
      },
    });

    const books = response.data.docs;
    const formattedBooks = books.map(book => ({
      title: book.title,
      author: book.author_name?.join(', '),
      subject: book.subject,
      edition_count: book.edition_count,
      publish_date: book.publish_date,
      isbn: book.isbn?.join(', '),
      publisher: book.publisher?.join(', '),
      coverUrl: `${coverApiUrl}/olid/${book.cover_edition_key}-L.jpg`,
    }));

    console.log('Livros encontrados:', formattedBooks);
  } catch (error) {
    console.error('Erro ao pesquisar livros:', error.message);
  }
}

// Exemplo de uso:
const searchQuery = 'Harry Potter'; // Termo de pesquisa

searchBooks(searchQuery);
