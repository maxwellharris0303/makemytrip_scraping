from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait
from selenium.common.exceptions import *
from time import sleep
import requests
import keyboard

driver = webdriver.Chrome()
driver.maximize_window()
driver.get("https://www.agoda.com/")

accept_cookie_button = WebDriverWait(driver, 45).until(EC.element_to_be_clickable((By.CSS_SELECTOR, "button[id=\"onetrust-accept-btn-handler\"]")))
accept_cookie_button.click()


sleep(1000)