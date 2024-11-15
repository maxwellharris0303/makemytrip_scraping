import pycountry

def get_country_code(country_name):
    try:
        country = pycountry.countries.search_fuzzy(country_name)
        if country:
            return country[0].alpha_2
        else:
            return None
    except LookupError:
        return None

# # Get country code for a given country name
# country_name = input("Enter a country name: ")
# country_code = get_country_code(country_name)

# if country_code is not None:
#     print(f"The country code for {country_name} is {country_code}.")
# else:
#     print("Country not found.")