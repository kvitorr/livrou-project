import fetch from 'node-fetch';

const advertisements = [
    {
        "title": "Livro em Excelente Estado - História Fascinante!",
        "bookId": 11,
        "conservationId": 2,
        "description": "Livro em excelente estado. História fascinante!",
        "transactionTypeId": 1,
        "value": 40.0,
        "removed": false,
        "locations": [
          {
            "city": "Goiânia",
            "state": "GO"
          }
        ]
      },
      {
        "title": "Livro Usado - Aproveite o Preço Baixo!",
        "bookId": 12,
        "conservationId": 3,
        "description": "Livro usado, mas ainda em boas condições. Aproveite o preço baixo!",
        "transactionTypeId": 3,
        "value": 20.0,
        "removed": false,
        "locations": [
          {
            "city": "Vitória",
            "state": "ES"
          }
        ]
      },
      {
        "title": "Livro Novo e Lacrado - Leitura Imperdível!",
        "bookId": 13,
        "conservationId": 1,
        "description": "Livro novo, lacrado. Leitura imperdível!",
        "transactionTypeId": 1,
        "value": 55.0,
        "removed": false,
        "locations": [
          {
            "city": "Natal",
            "state": "RN"
          }
        ]
      },
      {
        "title": "Livro em Ótimo Estado - Conhecimento Garantido!",
        "bookId": 14,
        "conservationId": 2,
        "description": "Livro em ótimo estado. Conhecimento garantido!",
        "transactionTypeId": 2,
        "removed": false,
        "locations": [
          {
            "city": "Brasília",
            "state": "DF"
          }
        ]
      },
      {
        "title": "Livro com Marcas de Uso - Preço Promocional!",
        "bookId": 15,
        "conservationId": 3,
        "description": "Livro com marcas de uso, mas ainda legível. Preço promocional!",
        "transactionTypeId": 1,
        "value": 28.0,
        "removed": false,
        "locations": [
          {
            "city": "Porto Velho",
            "state": "RO"
          }
        ]
      },
      {
        "title": "Livro Novo - Excelente para Estudantes!",
        "bookId": 16,
        "conservationId": 1,
        "description": "Livro novo, nunca usado. Excelente para estudantes!",
        "transactionTypeId": 3,
        "value": 75.0,
        "removed": false,
        "locations": [
          {
            "city": "Maceió",
            "state": "AL"
          }
        ]
      },
      {
        "title": "Livro em Bom Estado - Ótimo para Entretenimento!",
        "bookId": 17,
        "conservationId": 2,
        "description": "Livro em bom estado. Ótimo para entretenimento!",
        "transactionTypeId": 1,
        "value": 48.0,
        "removed": false,
        "locations": [
          {
            "city": "João Pessoa",
            "state": "PB"
          }
        ]
      },
      {
        "title": "Livro com Algumas Marcas de Uso - Preço Especial para Venda Rápida!",
        "bookId": 18,
        "conservationId": 3,
        "description": "Livro com algumas marcas de uso. Preço especial para venda rápida!",
        "transactionTypeId": 2,
        "removed": false,
        "locations": [
          {
            "city": "Teresina",
            "state": "PI"
          }
        ]
      },
      {
        "title": "Livro Novo - Envolvente do Início ao Fim!",
        "bookId": 19,
        "conservationId": 1,
        "description": "Livro novo, nunca usado. Envolvente do início ao fim!",
        "transactionTypeId": 1,
        "value": 65.0,
        "removed": false,
        "locations": [
          {
            "city": "Belém",
            "state": "PA"
          }
        ]
      },
      {
        "title": "Livro em Bom Estado - História Emocionante!",
        "bookId": 20,
        "conservationId": 2,
        "description": "Livro em bom estado. História emocionante!",
        "transactionTypeId": 3,
        "value": 32.0,
        "removed": false,
        "locations": [
          {
            "city": "Campo Grande",
            "state": "MS"
          }
        ]
      }
];

async function sendAdvertisementData() {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvYW9AZ21haWwuY29tIiwidXNlcl9pZCI6MiwibmFtZSI6IkpvYW8iLCJpYXQiOjE2ODg0ODM5NzgsImV4cCI6MTY4ODQ4Njk3OH0.eN3Z6z3_v3EoHWWKhcJBuzcVFfDm2guHiakYnF9-Wvs";

    try {
        for (let i = 0; i < advertisements.length; i++) {
            const advertisement = advertisements[i];
            console.log(advertisement)
            const response = await fetch('http://localhost:3000/advertisement', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${token}`
                },
                body: JSON.stringify(advertisement)
            });

            if (response.ok) {
                console.log(`Anúncio "${advertisement.title}" enviado com sucesso!`);
            } else {
                console.log(`Erro ao enviar o anúncio "${advertisement.title}": ${response.status} ${response.statusText}`);
            }
        }
    } catch (error) {
        console.error('Ocorreu um erro:', error);
    }
}

sendAdvertisementData();


/*

{
  "anuncios": [
    {
      "title": "Livro Novo - Ótima Oportunidade!",
      "bookId": 1,
      "conservationId": 1,
      "description": "Livro novo, nunca usado. Ótima oportunidade!",
      "transactionTypeId": 1,
      "value": 50.0,
      "removed": false,
      "locations": [
        {
          "city": "São Paulo",
          "state": "SP"
        }
      ]
    },
    {
      "title": "Livro em Excelente Estado - Pouco Utilizado",
      "bookId": 2,
      "conservationId": 2,
      "description": "Livro em excelente estado. Pouco utilizado.",
      "transactionTypeId": 2,
      "removed": false,
      "locations": [
        {
          "city": "Rio de Janeiro",
          "state": "RJ"
        }
      ]
    },
    {
      "title": "Livro em Bom Estado - Desconto Especial!",
      "bookId": 3,
      "conservationId": 3,
      "description": "Livro com marcas de uso, porém ainda em bom estado. Desconto especial!",
      "transactionTypeId": 1,
      "value": 30.0,
      "removed": false,
      "locations": [
        {
          "city": "Belo Horizonte",
          "state": "MG"
        }
      ]
    },
    {
      "title": "Livro Novo e Lacrado - Garanta já o seu!",
      "bookId": 4,
      "conservationId": 1,
      "description": "Livro novo, lacrado. Garanta já o seu!",
      "transactionTypeId": 3,
      "value": 80.0,
      "removed": false,
      "locations": [
        {
          "city": "Porto Alegre",
          "state": "RS"
        }
      ]
    },
    {
      "title": "Livro em Ótimo Estado - Ideal para Estudos!",
      "bookId": 5,
      "conservationId": 2,
      "description": "Livro em ótimo estado. Ideal para estudos!",
      "transactionTypeId": 1,
      "value": 45.0,
      "removed": false,
      "locations": [
        {
          "city": "Curitiba",
          "state": "PR"
        }
      ]
    },
    {
      "title": "Livro com Algumas Anotações - Preço Imperdível!",
      "bookId": 6,
      "conservationId": 3,
      "description": "Livro com algumas anotações, mas em condições de uso. Preço imperdível!",
      "transactionTypeId": 2,
      "removed": false,
      "locations": [
        {
          "city": "Recife",
          "state": "PE"
        }
      ]
    },
    {
      "title": "Livro Novo - Excelente para Presentear!",
      "bookId": 7,
      "conservationId": 1,
      "description": "Livro novo, nunca usado. Excelente para presentear!",
      "transactionTypeId": 1,
      "value": 60.0,
      "removed": false,
      "locations": [
        {
          "city": "Salvador",
          "state": "BA"
        }
      ]
    },
    {
      "title": "Livro em Bom Estado - Leitura Envolvente e Cativante!",
      "bookId": 8,
      "conservationId": 2,
      "description": "Livro em bom estado. Leitura envolvente e cativante!",
      "transactionTypeId": 3,
      "value": 35.0,
      "removed": false,
      "locations": [
        {
          "city": "Manaus",
          "state": "AM"
        }
      ]
    },
    {
      "title": "Livro com Marcas de Uso - Preço Especial!",
      "bookId": 9,
      "conservationId": 3,
      "description": "Livro com marcas de uso, porém completo. Preço especial!",
      "transactionTypeId": 1,
      "value": 25.0,
      "removed": false,
      "locations": [
        {
          "city": "Fortaleza",
          "state": "CE"
        }
      ]
    },
    {
      "title": "Livro Novo - Desperte seu Conhecimento!",
      "bookId": 10,
      "conservationId": 1,
      "description": "Livro novo, nunca lido. Desperte seu conhecimento!",
      "transactionTypeId": 2,
      "removed": false,
      "locations": [
        {
          "city": "Florianópolis",
          "state": "SC"
        }
      ]
    },
    {
      "title": "Livro em Excelente Estado - História Fascinante!",
      "bookId": 11,
      "conservationId": 2,
      "description": "Livro em excelente estado. História fascinante!",
      "transactionTypeId": 1,
      "value": 40.0,
      "removed": false,
      "locations": [
        {
          "city": "Goiânia",
          "state": "GO"
        }
      ]
    },
    {
      "title": "Livro Usado - Aproveite o Preço Baixo!",
      "bookId": 12,
      "conservationId": 3,
      "description": "Livro usado, mas ainda em boas condições. Aproveite o preço baixo!",
      "transactionTypeId": 3,
      "value": 20.0,
      "removed": false,
      "locations": [
        {
          "city": "Vitória",
          "state": "ES"
        }
      ]
    },
    {
      "title": "Livro Novo e Lacrado - Leitura Imperdível!",
      "bookId": 13,
      "conservationId": 1,
      "description": "Livro novo, lacrado. Leitura imperdível!",
      "transactionTypeId": 1,
      "value": 55.0,
      "removed": false,
      "locations": [
        {
          "city": "Natal",
          "state": "RN"
        }
      ]
    },
    {
      "title": "Livro em Ótimo Estado - Conhecimento Garantido!",
      "bookId": 14,
      "conservationId": 2,
      "description": "Livro em ótimo estado. Conhecimento garantido!",
      "transactionTypeId": 2,
      "removed": false,
      "locations": [
        {
          "city": "Brasília",
          "state": "DF"
        }
      ]
    },
    {
      "title": "Livro com Marcas de Uso - Preço Promocional!",
      "bookId": 15,
      "conservationId": 3,
      "description": "Livro com marcas de uso, mas ainda legível. Preço promocional!",
      "transactionTypeId": 1,
      "value": 28.0,
      "removed": false,
      "locations": [
        {
          "city": "Porto Velho",
          "state": "RO"
        }
      ]
    },
    {
      "title": "Livro Novo - Excelente para Estudantes!",
      "bookId": 16,
      "conservationId": 1,
      "description": "Livro novo, nunca usado. Excelente para estudantes!",
      "transactionTypeId": 3,
      "value": 75.0,
      "removed": false,
      "locations": [
        {
          "city": "Maceió",
          "state": "AL"
        }
      ]
    },
    {
      "title": "Livro em Bom Estado - Ótimo para Entretenimento!",
      "bookId": 17,
      "conservationId": 2,
      "description": "Livro em bom estado. Ótimo para entretenimento!",
      "transactionTypeId": 1,
      "value": 48.0,
      "removed": false,
      "locations": [
        {
          "city": "João Pessoa",
          "state": "PB"
        }
      ]
    },
    {
      "title": "Livro com Algumas Marcas de Uso - Preço Especial para Venda Rápida!",
      "bookId": 18,
      "conservationId": 3,
      "description": "Livro com algumas marcas de uso. Preço especial para venda rápida!",
      "transactionTypeId": 2,
      "removed": false,
      "locations": [
        {
          "city": "Teresina",
          "state": "PI"
        }
      ]
    },
    {
      "title": "Livro Novo - Envolvente do Início ao Fim!",
      "bookId": 19,
      "conservationId": 1,
      "description": "Livro novo, nunca usado. Envolvente do início ao fim!",
      "transactionTypeId": 1,
      "value": 65.0,
      "removed": false,
      "locations": [
        {
          "city": "Belém",
          "state": "PA"
        }
      ]
    },
    {
      "title": "Livro em Bom Estado - História Emocionante!",
      "bookId": 20,
      "conservationId": 2,
      "description": "Livro em bom estado. História emocionante!",
      "transactionTypeId": 3,
      "value": 32.0,
      "removed": false,
      "locations": [
        {
          "city": "Campo Grande",
          "state": "MS"
        }
      ]
    }
  ]
}

*/