from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait
from selenium.common.exceptions import *
from time import sleep
import getCurrentDate
import extractNumber
import getScrapingData

company_name = 'booking.com'
hotel_name = ''
hotel_id = ''
city_name = ''
city_id = ''
hotel_star_category = ''
hotel_rating = ''
hotel_address = ''
hotel_locality = ''
hotel_geo_coordinates = ''
google_map_url = ''
hotel_listing_page_thumbnail_image = ''
hotel_listing_page_images = ''
hotel_type = ''
hotel_amenities = ''
hotel_listing_page_basic_price = ''
hotel_listing_page_taxes = ''
hotel_listing_page_discounted_basic_price = ''
hotel_listing_page_discounted_taxes = ''
hotel_web_link = ''
romm_name = ''
romm_size = ''
romm_view = ''
romm_amenities = ''
romm_images = ''
romm_contract_name = ''
romm_contract_inclusions = ''
romm_contract_basic_price = ''
romm_contract_taxes = ''


all_input_data = []

FILENAME = "city_country.txt"
with open(FILENAME, 'r', encoding='utf-8') as file:
    for line in file:
        all_input_data.append(line.strip())

# print(all_input_data)
# print(len(all_input_data))
firefox_profile_directory = 'C:/Users/root/AppData/Roaming/Mozilla/Firefox/Profiles/bcgxfdql.default-release'
firefox_options = webdriver.FirefoxOptions()
firefox_options.profile = webdriver.FirefoxProfile(firefox_profile_directory)

driver = webdriver.Firefox(options=firefox_options)
driver.maximize_window()
driver.get("https://www.booking.com/")

# accept_cookie_button = WebDriverWait(driver, 45).until(EC.element_to_be_clickable((By.CSS_SELECTOR, "button[id=\"onetrust-accept-btn-handler\"]")))
# accept_cookie_button.click()

for input_city_data in all_input_data:
    print(input_city_data)
    input_city_element = WebDriverWait(driver, 45).until(EC.element_to_be_clickable((By.CSS_SELECTOR, "input[class=\"eb46370fe1\"]")))
    input_city_element.clear()
    input_city_element.send_keys(input_city_data)

    today_date, next_date = getCurrentDate.get_current_date()
    date_picker_button = WebDriverWait(driver, 45).until(EC.element_to_be_clickable((By.CSS_SELECTOR, "div[data-testid=\"searchbox-dates-container\"]")))
    date_picker_button.click()
    WebDriverWait(driver, 45).until(EC.element_to_be_clickable((By.CSS_SELECTOR, f"span[data-date=\"{today_date}\"]"))).click()
    WebDriverWait(driver, 45).until(EC.element_to_be_clickable((By.CSS_SELECTOR, f"span[data-date=\"{next_date}\"]"))).click()

    sleep(1)
    search_button = WebDriverWait(driver, 45).until(EC.element_to_be_clickable((By.CSS_SELECTOR, "button[type=\"submit\"]")))
    search_button.click()
    sleep(3)
    try:
        # driver.find_element(By.CSS_SELECTOR, "div[data-testid=\"properties-list-empty-state\"]")
        result_text = driver.find_element(By.CSS_SELECTOR, "h1[class=\"f6431b446c d5f78961c3\"]").text      
        if 'no' in result_text:
            print("No properties")
        else:
            driver.find_element(By.XPATH, "//*[text()='Hotels']").click()
            WebDriverWait(driver, 6).until(EC.element_to_be_clickable((By.LINK_TEXT, "Show hotels only"))).click()
            sleep(3)
            WebDriverWait(driver, 6).until(EC.element_to_be_clickable((By.CSS_SELECTOR, "div[class=\"c82435a4b8 a178069f51 a6ae3c2b40 a18aeea94d d794b7a0f7 f53e278e95 c6710787a4\"]")))
            result_text = driver.find_element(By.CSS_SELECTOR, "h1[class=\"f6431b446c d5f78961c3\"]").text
            print(result_text)
            result_count = extractNumber.get_extract_number(result_text)
            print(result_count)

            hotel_elements = driver.find_elements(By.CSS_SELECTOR, "div[class=\"c82435a4b8 a178069f51 a6ae3c2b40 a18aeea94d d794b7a0f7 f53e278e95 c6710787a4\"]")
            print(len(hotel_elements))

            hotel_driver = webdriver.Chrome()
            hotel_driver.maximize_window()
            index = 0
            if result_count <= len(hotel_elements):
                for hotel_element in hotel_elements:
                    if index == result_count:
                        break
                    hotel_link = hotel_element.find_element(By.TAG_NAME, "a").get_attribute('href')
                    hotel_locality = hotel_element.find_element(By.CSS_SELECTOR, "span[data-testid=\"distance\"]").text
                    try:
                        hotel_listing_page_basic_price = hotel_element.find_element(By.CSS_SELECTOR, "span[class=\"c73ff05531 e84eb96b1f\"]").text
                    except:
                        hotel_listing_page_basic_price = "None"

                    try:
                        hotel_listing_page_taxes = hotel_element.find_element(By.CSS_SELECTOR, "div[data-testid=\"taxes-and-charges\"]").text
                    except:
                        hotel_listing_page_taxes = "None"

                    try:
                        hotel_listing_page_discounted_basic_price = hotel_element.find_element(By.CSS_SELECTOR, "span[class=\"f6431b446c fbfd7c1165 e84eb96b1f\"]").text
                    except:
                        hotel_listing_page_discounted_basic_price = "None"
                        
                    
                    # print("HOTEL LOCALITY: " + hotel_locality)
                    hotel_driver.get(hotel_link)
                    data = getScrapingData.scraping_data(hotel_driver, company_name, hotel_locality, hotel_listing_page_basic_price, hotel_listing_page_taxes, hotel_listing_page_discounted_basic_price)
                    print(data)
                    index += 1
                    sleep(3)
                print("Less")
                hotel_driver.quit()
            else:
                # WebDriverWait(driver, 45).until(EC.element_to_be_clickable((By.CSS_SELECTOR, "div[aria-label=\"Next page\"]")))
                next_page_button_disabled = None
                while(next_page_button_disabled == None):
                    try:
                        WebDriverWait(driver, 45).until(EC.element_to_be_clickable((By.CSS_SELECTOR, "div[class=\"c82435a4b8 a178069f51 a6ae3c2b40 a18aeea94d d794b7a0f7 f53e278e95 c6710787a4\"]")))
                        hotel_elements = driver.find_elements(By.CSS_SELECTOR, "div[class=\"c82435a4b8 a178069f51 a6ae3c2b40 a18aeea94d d794b7a0f7 f53e278e95 c6710787a4\"]")
                        for hotel_element in hotel_elements:
                            hotel_link = hotel_element.find_element(By.TAG_NAME, "a").get_attribute('href')
                            hotel_driver.get(hotel_link)
                            sleep(3)
                    except:
                        pass
                    try:
                        next_page_button = WebDriverWait(driver, 5).until(EC.element_to_be_clickable((By.CSS_SELECTOR, "button[aria-label=\"Next page\"]")))
                        next_page_button_disabled = next_page_button.get_attribute('disabled')
                        next_page_button.click()
                        sleep(3)
                    except:
                        break
                
                
            
    except:
        print("Never properties")


sleep(1000)