from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait
from selenium.common.exceptions import *
from time import sleep
import getCurrentDate
import extractNumber
from bs4 import BeautifulSoup
import getScrapingData

firefox_profile_directory = 'C:/Users/root/AppData/Roaming/Mozilla/Firefox/Profiles/bcgxfdql.default-release'
firefox_options = webdriver.FirefoxOptions()
firefox_options.profile = webdriver.FirefoxProfile(firefox_profile_directory)

driver = webdriver.Firefox(options=firefox_options)
driver.maximize_window()
driver.get("https://www.booking.com/hotel/fi/mestari.html?aid=304142&label=gen173bo-1FCAEoggI46AdIM1gDaEiIAQGYATG4ARfIAQ_YAQHoAQH4AQOIAgGYAgKoAgO4AoCfj6oGwAIB0gIkNDg3ZDc4YmQtYmJhZS00MTNkLWI3YjMtODY1NGUyM2RiNDUw2AIF4AIB&sid=1fb0f42abddbd4842ab95206c16bb4e4&all_sr_blocks=735169801_327280326_0_2_0;checkin=2023-11-03;checkout=2023-11-04;dest_id=-1364995;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=2;highlighted_blocks=735169801_327280326_0_2_0;hpos=2;matching_block_id=735169801_327280326_0_2_0;nflt=ht_id%3D204;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;sr_pri_blocks=735169801_327280326_0_2_0__13860;srepoch=1698976715;srpvid=749303b661600086;type=total;ucfs=1&#hotelTmpl")
sleep(3)

data = getScrapingData.scraping_data(driver, "sdfsdf", "sdfsdf")
print(data)


sleep(1000)