from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait
from selenium.common.exceptions import *
from time import sleep
from bs4 import BeautifulSoup
import json
import geoCoderByMapboxAPI
import re
import getGoogleMapURL

def scraping_data(driver, company_name, hotel_locality, hotel_listing_page_basic_price, hotel_listing_page_taxes, hotel_listing_page_discounted_basic_price):
    html_content = driver.page_source
    soup = BeautifulSoup(html_content, 'html.parser')

    utag_data = driver.execute_script("return window.utag_data")
    utag_data_string = json.dumps(utag_data)
    utag_data_json = json.loads(utag_data_string)

    hotel_name = utag_data_json["hotel_name"]
    hotel_id = utag_data_json["hotel_id"]
    city_name = utag_data_json["city_name"]
    city_id = utag_data_json["dest_id"]

    star_elements = soup.find_all('span', class_='fcd9eec8fb d31eda6efc c25361c37f')
    hotel_star_category = len(star_elements)

    hotel_rating = soup.find('div', class_='a3b8729ab1 d86cee9b25').text

    script_tag = soup.find("script", attrs={"type": "application/ld+json"})
    json_data = json.loads(script_tag.string)

    address = json_data["address"]
    hotel_address = address["streetAddress"]

    hotel_geo_coordinates = geoCoderByMapboxAPI.get_coordinates(hotel_address)

    google_map_url = getGoogleMapURL.get_google_map_url(hotel_address)

    hotel_listing_page_thumbnail_image = json_data["image"]

    hotel_listing_page_images = re.findall(r"https://cf2.bstatic.com/xdata/images/hotel/max1280x900\S+", str(soup))

    print(company_name, hotel_name, hotel_id, city_name, city_id, hotel_star_category, hotel_rating, hotel_address, hotel_locality, hotel_geo_coordinates, google_map_url, 
          hotel_listing_page_thumbnail_image, hotel_listing_page_images, hotel_listing_page_basic_price, hotel_listing_page_taxes, hotel_listing_page_discounted_basic_price)
    
    return "Success"
