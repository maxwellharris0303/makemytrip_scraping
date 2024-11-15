import geonamescache

def get_cities(country_code):
    gc = geonamescache.GeonamesCache()
    countries = gc.get_countries()
    el_salvador_cities = []

    for city in gc.get_cities().values():
        if city['countrycode'] == country_code:
            el_salvador_cities.append(city['name'])

    return el_salvador_cities

# Call the function to get cities in El Salvador
# el_salvador_cities = get_cities("PH")

# print(f"Cities in El Salvador: {', '.join(el_salvador_cities)}")

# print(len(el_salvador_cities))


how to download webpage using python selenium?

I would like to download css, js, image files too