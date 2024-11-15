from geopy.geocoders import Nominatim

def get_coordinates(address):
    geolocator = Nominatim(user_agent='myGeocoder')
    location = geolocator.geocode(address)

    if location is not None:
        latitude = location.latitude
        longitude = location.longitude
        return latitude, longitude
    else:
        return None

# # Usage example
# address = '18 Annankatu, Kamppi, 00120 Helsinki, Finland'
# coordinates = get_coordinates(address)

# if coordinates:
#     latitude, longitude = coordinates
#     print(f'Latitude: {latitude}')
#     print(f'Longitude: {longitude}')
# else:
#     print('Failed to retrieve coordinates.')