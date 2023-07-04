import requests

# Função para enviar uma location para a rota http://localhost:3000/location
def send_location(location):
    try:
        response = requests.post('http://localhost:3000/location', json=location)
        response.raise_for_status()  # Lança uma exceção se ocorrer um erro na requisição
        print('Location enviada com sucesso:', response.json())
    except requests.exceptions.RequestException as e:
        print('Erro ao enviar a location:', e)

# Função para obter os estados da API do IBGE
def get_states():
    try:
        response = requests.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
        response.raise_for_status()  # Lança uma exceção se ocorrer um erro na requisição
        return response.json()
    except requests.exceptions.RequestException as e:
        print('Erro ao obter os estados:', e)
        return []

# Função para obter os municípios de um estado da API do IBGE
def get_cities_by_state(state):
    try:
        response = requests.get(f'https://servicodados.ibge.gov.br/api/v1/localidades/estados/{state}/municipios')
        response.raise_for_status()  # Lança uma exceção se ocorrer um erro na requisição
        return response.json()
        print(f'Erro ao obter os municípios do estado {state}:', e)
    except requests.exceptions.RequestException as e:
        print(f'Erro ao obter os municípios do estado {state}:', e)
        return []

# Função principal para buscar os estados, municípios e enviar as locations uma a uma
def fetch_data_and_send_locations():
    states = get_states()

    for state in states:
        cities = get_cities_by_state(state['id'])
        for city in cities:
            location = {
                'city': city['nome'],
                'state': state['sigla']
            }
            send_location(location)

# Chamada da função principal
fetch_data_and_send_locations()
