const fetch = require('node-fetch').default;

const books = 
    [
        {
          "title": "Harry Potter e a Pedra Filosofal",
          "authorNames": ["J.K. Rowling"],
          "synopsis": "Harry Potter é um jovem órfão que descobre ser um bruxo e é convidado a estudar na Escola de Magia e Bruxaria de Hogwarts.",
          "subject": "Ficção, Fantasia",
          "editionCount": 1,
         "publishYear": 1997,
          "imageUrl": "https://covers.openlibrary.org/b/olid/OL26474711M-L.jpg"
        },
        {
          "title": "O Senhor dos Anéis: A Sociedade do Anel",
          "authorNames": ["J.R.R. Tolkien"],
          "synopsis": "Uma história épica de aventura que se passa em um mundo fictício chamado Terra-média, onde um grupo de heróis embarca em uma missão perigosa para destruir um poderoso anel.",
          "subject": "Ficção, Fantasia",
          "editionCount": 1,
         "publishYear": 1954,
          "imageUrl": "https://covers.openlibrary.org/b/olid/OL24327495M-L.jpg"
        },
        {
          "title": "1984",
          "authorNames": ["George Orwell"],
          "synopsis": "Um romance distópico que descreve uma sociedade totalitária controlada pelo Estado e vigilância constante.",
          "subject": "Ficção, Distopia",
          "editionCount": 1,
         "publishYear": 1949,
          "imageUrl": "https://covers.openlibrary.org/b/olid/OL394412W-L.jpg"
        },
        {
          "title": "Orgulho e Preconceito",
          "authorNames": ["Jane Austen"],
          "synopsis": "Um romance clássico que retrata os costumes sociais da Inglaterra do século XIX, abordando temas como amor, casamento e preconceito.",
          "subject": "Ficção, Romance",
          "editionCount": 1,
         "publishYear": 1813,
          "imageUrl": "https://covers.openlibrary.org/b/olid/OL6974919M-L.jpg"
        },
        {
          "title": "Dom Quixote",
          "authorNames": ["Miguel de Cervantes"],
          "synopsis": "Uma obra-prima da literatura espanhola que conta a história de um cavaleiro idealista que embarca em aventuras delirantes.",
          "subject": "Ficção, Aventura",
          "editionCount": 1,
         "publishYear": 1605,
          "imageUrl": "https://covers.openlibrary.org/b/olid/OL7131480M-L.jpg"
        },
        {
          "title": "Cem Anos de Solidão",
          "authorNames": ["Gabriel García Márquez"],
          "synopsis": "Uma obra-prima do realismo mágico que retrata a história da família Buendía ao longo de várias gerações em um lugar fictício chamado Macondo.",
          "subject": "Ficção, Realismo Mágico",
          "editionCount": 1,
         "publishYear": 1967,
          "imageUrl": "https://covers.openlibrary.org/b/olid/OL26474745M-L.jpg"
        },
        {
          "title": "A Metamorfose",
          "authorNames": ["Franz Kafka"],
          "synopsis": "Um conto surrealista que conta a história de Gregor Samsa, que acorda transformado em um inseto monstruoso e enfrenta as consequências dessa metamorfose.",
          "subject": "Ficção, Surrealismo",
          "editionCount": 1,
         "publishYear": 1915,
          "imageUrl": "https://covers.openlibrary.org/b/olid/OL24327556M-L.jpg"
        },
        {
          "title": "Moby Dick",
          "authorNames": ["Herman Melville"],
          "synopsis": "Um romance clássico que segue a história do capitão Ahab em sua obsessiva busca pela baleia branca, Moby Dick.",
          "subject": "Ficção, Aventura",
          "editionCount": 1,
         "publishYear": 1851,
          "imageUrl": "https://covers.openlibrary.org/b/olid/OL24327555M-L.jpg"
        },
        {
          "title": "O Sol é para Todos",
          "authorNames": ["Harper Lee"],
          "synopsis": "Um romance que aborda temas como racismo, justiça e moralidade em uma cidade sulista dos Estados Unidos na década de 1930.",
          "subject": "Ficção, Drama",
          "editionCount": 1,
         "publishYear": 1960,
          "imageUrl": "https://covers.openlibrary.org/b/olid/OL26475046M-L.jpg"
        },
        {
          "title": "O Grande Gatsby",
          "authorNames": ["F. Scott Fitzgerald"],
          "synopsis": "Um retrato brilhante e trágico da alta sociedade americana na década de 1920, destacando os excessos e a ilusão do sonho americano.",
          "subject": "Ficção, Drama",
          "editionCount": 1,
         "publishYear": 1925,
          "imageUrl": "https://covers.openlibrary.org/b/olid/OL26475211M-L.jpg"
        },
        {
          "title": "Ulisses",
          "authorNames": ["James Joyce"],
          "synopsis": "Um romance complexo e inovador que acompanha um dia na vida de Leopold Bloom enquanto ele explora as ruas de Dublin.",
          "subject": "Ficção, Modernismo",
          "editionCount": 1,
         "publishYear": 1922,
          "imageUrl": "https://covers.openlibrary.org/b/olid/OL24327557M-L.jpg"
        },
        {
          "title": "O Apanhador no Campo de Centeio",
          "authorNames": ["J.D. Salinger"],
          "synopsis": "Um romance que narra a história do adolescente Holden Caulfield, que passa por uma crise existencial após ser expulso de uma escola preparatória.",
          "subject": "Ficção, Coming-of-Age",
          "editionCount": 1,
         "publishYear": 1951,
          "imageUrl": "https://covers.openlibrary.org/b/olid/OL26475096M-L.jpg"
        },
        {
          "title": "O Pequeno Príncipe",
          "authorNames": ["Antoine de Saint-Exupéry"],
          "synopsis": "Um conto filosófico e poético que segue as aventuras de um príncipe que visita vários planetas e faz reflexões sobre a vida e o amor.",
          "subject": "Ficção, Filosofia",
          "editionCount": 1,
         "publishYear": 1943,
          "imageUrl": "https://covers.openlibrary.org/b/olid/OL7285455M-L.jpg"
        },
        {
          "title": "Romeu e Julieta",
          "authorNames": ["William Shakespeare"],
          "synopsis": "Uma das tragédias mais famosas de Shakespeare, que conta a história do amor proibido entre Romeu e Julieta, membros de famílias rivais em Verona.",
          "subject": "Drama, Romance",
          "editionCount": 1,
         "publishYear": 1597,
          "imageUrl": "https://covers.openlibrary.org/b/olid/OL24313477M-L.jpg"
        },
        {
          "title": "Crime e Castigo",
          "authorNames": ["Fyodor Dostoevsky"],
          "synopsis": "Um romance psicológico que segue a história de um jovem que comete um assassinato e lida com as consequências psicológicas de seu ato.",
          "subject": "Ficção, Psicológico",
          "editionCount": 1,
         "publishYear": 1866,
          "imageUrl": "https://covers.openlibrary.org/b/olid/OL24313956M-L.jpg"
        },
        {
          "title": "O Morro dos Ventos Uivantes",
          "authorNames": ["Emily Brontë"],
          "synopsis": "Uma história intensa de amor e vingança que se passa nas charnecas sombrias de Yorkshire, Inglaterra.",
          "subject": "Ficção, Romance Gótico",
          "editionCount": 1,
         "publishYear": 1847,
          "imageUrl": "https://covers.openlibrary.org/b/olid/OL6945717M-L.jpg"
        },
        {
          "title": "O Retrato de Dorian Gray",
          "authorNames": ["Oscar Wilde"],
          "synopsis": "Um romance filosófico que retrata um jovem que permanece eternamente jovem enquanto seu retrato envelhece e mostra os efeitos da vida imoral que ele leva.",
          "subject": "Ficção, Filosofia",
          "editionCount": 1,
         "publishYear": 1890,
          "imageUrl": "https://covers.openlibrary.org/b/olid/OL24313892M-L.jpg"
        },
        {
          "title": "O Conde de Monte Cristo",
          "authorNames": ["Alexandre Dumas"],
          "synopsis": "Uma história de vingança e redenção que segue o personagem Edmond Dantès, que é injustamente preso e busca vingança contra aqueles que o traíram.",
          "subject": "Ficção, Aventura",
          "editionCount": 1,
         "publishYear": 1844,
          "imageUrl": "https://covers.openlibrary.org/b/olid/OL24313857M-L.jpg"
        },
        {
          "title": "A Guerra dos Tronos",
          "authorNames": ["George R.R. Martin"],
          "synopsis": "O primeiro livro da série 'As Crônicas de Gelo e Fogo', que narra a história de várias famílias nobres enquanto lutam pelo controle do Trono de Ferro.",
          "subject": "Ficção, Fantasia",
          "editionCount": 1,
         "publishYear": 1996,
          "imageUrl": "https://covers.openlibrary.org/b/olid/OL24338455M-L.jpg"
        },
        {
          "title": "Amor & Gelato",
          "authorNames": ["Jenna Evans Welch"],
          "synopsis": "Uma história de amor e descobertas que se passa na Itália, onde uma jovem chamada Lina descobre segredos sobre sua mãe enquanto explora a cidade de Florença.",
          "subject": "Ficção, Romance",
          "editionCount": 1,
         "publishYear": 2016,
          "imageUrl": "https://covers.openlibrary.org/b/olid/OL27138350M-L.jpg"
        }
      ]
      


async function sendBookData() {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkZWxpYUBleGFtcGxlLmNvbSIsImlhdCI6MTY4ODI2OTUwMCwiZXhwIjoxNjg4MjcyNTAwfQ.JTqON9pvRVx40L7mS1Kki6L9-dadNQj0X2mLUDD85g0"
   try{ for (let i = 0; i < books.length; i++) {
      const book = books[i];
      const response = await fetch('http://localhost:3000/books/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${token}`
          },
        body: JSON.stringify(book)
      });

      if (response.ok) {
        console.log(`Livro "${book.title}" enviado com sucesso!`);
      } else {
        console.log(`Erro ao enviar o livro "${book.title}": ${response.status} ${response.statusText}`);
      }
    }
  } catch (error) {
    console.error('Ocorreu um erro:', error);
  }
}

sendBookData();
