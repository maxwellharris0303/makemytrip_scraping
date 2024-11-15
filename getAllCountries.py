import pycountry

def get_country_names():
    countries = list(pycountry.countries)
    country_names = [country.name for country in countries]
    return country_names

# Usage
# all_country_names = get_country_names()
# print(all_country_names)
# print(len(all_country_names))