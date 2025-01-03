import json
import requests
from bs4 import BeautifulSoup

# URL of the website
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
}
url = "https://www.afi.com/afis-100-years-100-movies/"

response = requests.get(url, headers=headers)
response.raise_for_status()

soup = BeautifulSoup(response.text, 'html.parser')

movies = soup.select('.q_title')
movies = movies[:100]

scraped_data = []
for elt in movies:
	temp = elt.get_text(strip=True)
	paren = temp.find('(')
	yr = temp[paren + 1: paren + 5]
	text = temp[temp.find(' ') + 1:paren]
	scraped_data.append((text, yr))

# print(scraped_data)

with open("movie_array.json", 'w') as f:
	json.dump(scraped_data, f);