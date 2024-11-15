import requests

def get_coordinates(address):
    base_url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'
    access_token = 'pk.eyJ1IjoicGV0ZXJtY2NsdXNreSIsImEiOiJjbG01a3k5azcybW9nM3JvOWg5eDQ1N2xjIn0.ABK0uv2BJQNAFcXJw4bShA'

    # Format the address parameter for the API request
    formatted_address = address.replace(' ', '%20')

    # Construct the complete API request URL
    url = f'{base_url}{formatted_address}.json?access_token={access_token}'

    # Send the HTTP GET request
    response = requests.get(url)

    # Parse the JSON response
    data = response.json()

    # Extract the coordinates if the request was successful
    if response.status_code == 200 and 'features' in data and len(data['features']) > 0:
        location = data['features'][0]['geometry']['coordinates']
        longitude, latitude = location
        return latitude, longitude
    else:
        return None

# # Usage example
# address = '18 Annankatu, Kamppi, 00120 Helsinki, Finland'
# api_key = 'pk.eyJ1IjoicGV0ZXJtY2NsdXNreSIsImEiOiJjbG01a3k5azcybW9nM3JvOWg5eDQ1N2xjIn0.ABK0uv2BJQNAFcXJw4bShA'

# coordinates = get_coordinates(address, api_key)

# if coordinates:
#     latitude, longitude = coordinates
#     print(f'Latitude: {latitude}')
#     print(f'Longitude: {longitude}')
# else:
#     print('Failed to retrieve coordinates.')