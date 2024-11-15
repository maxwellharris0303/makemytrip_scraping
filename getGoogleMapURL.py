from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait
from selenium.common.exceptions import *
from time import sleep

def get_google_map_url(address):
    google_map_driver = webdriver.Chrome()
    google_map_driver.get("https://www.google.com/maps")

    WebDriverWait(google_map_driver, 30).until(EC.element_to_be_clickable((By.CSS_SELECTOR, "button[jscontroller=\"soHxf\"]"))).click()

    input_search = WebDriverWait(google_map_driver, 30).until(EC.element_to_be_clickable((By.CSS_SELECTOR, "input[class=\"searchboxinput xiQnY\"]")))
    input_search.send_keys(address)

    WebDriverWait(google_map_driver, 30).until(EC.element_to_be_clickable((By.CSS_SELECTOR, "button[id=\"searchbox-searchbutton\"]"))).click()
    url = google_map_driver.current_url
    while(url == google_map_driver.current_url):
        sleep(0.3)
    url = google_map_driver.current_url
    google_map_driver.quit()
    return url

# aaa = get_google_map_url("18 Annankatu, Kamppi, 00120 Helsinki, Finland")
# print(aaa)