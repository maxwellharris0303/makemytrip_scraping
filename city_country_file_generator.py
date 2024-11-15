import getAllCountries
import getCountryCode
import getCities

FILENAME = "city_country.txt"
def data_save(data):
    with open(FILENAME, "a", encoding='utf-8') as file:
        file.write(data + "\n")

all_country_names = getAllCountries.get_country_names()
country_count = len(all_country_names)
print(country_count)
index = 0
for country_name in all_country_names:
    country_code = getCountryCode.get_country_code(country_name)
    print(country_code)

    cities = getCities.get_cities(country_code)
    print(cities)
    print(len(cities))
    for city in cities:
        data_save(city + "\t" + country_name)
        index += 1

print(index)