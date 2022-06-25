from time import sleep

from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.options import Options

import requests

placeName = "Bhilai"

chrome_options = webdriver.ChromeOptions()
# prefs = {'download.default_directory': r'C:\Users\abhin\OneDrive\Desktop\PYTHON_SELEnium\Download'}
chrome_options.add_experimental_option('prefs', prefs)
chrome_options.add_argument('--disable-gpu')
chrome_options.add_argument('--headless')
driver = webdriver.Chrome('./chromedriver', chrome_options=chrome_options)

# auto download images from unsplash
driver.get("https://www.holidify.com/")
search_bar = driver.find_element_by_id('header-autocomplete')
# search_bar.clear()
sleep(3)
search_bar.send_keys(placeName)
search_bar.click()
search_bar.click()
sleep(7)
# driver.find_element_by_class_name('tt-suggestion tt-selectable').click()
driver.execute_script(
    "document.getElementsByClassName('tt-suggestion tt-selectable')[0].click();")
sleep(8)
categoryCard = driver.find_elements_by_class_name('nav-card')


try:
    for x in categoryCard:
        categoryText = x.find_element_by_class_name('nav-text').text
        if(categoryText == 'Things To Do'):
            x.click()
            break
except:
    print("Exception")


sleep(10)
cardData = driver.find_elements_by_class_name('content-card')

data = []

try:
    for x in cardData:
        title = x.find_element_by_class_name(
            'card-heading').text.split('. ')[1]
        ratingDiv = x.find_element_by_class_name('rating-badge')
        rating = ratingDiv.find_element_by_tag_name("b").text
        description = x.find_element_by_class_name(
            'card-text').text.split('(Read More)')[0]
        imageLink = x.find_element_by_class_name(
            'card-img-top').get_attribute('src')

        temp = {
            "name": title,
            "rating": rating,
            "description": description,
            "image": imageLink,
        }

        data.append(temp)
except:
    print("exception during data extraction")


# search_bar.send_keys(Keys.RETURN)
sleep(3)

driver.quit()


API_ENDPOINT = "https://developmentserver.quickblog.tech/attraction/createOtherAttraction"


for x in data:
    try:
        data = x
        # sending post request and saving response as response object
        r = requests.post(url=API_ENDPOINT, data=data)
        print("Api Response :- ",r.json())
        sleep(10)
    except:
        print("")

