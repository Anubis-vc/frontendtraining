import requests
from bs4 import BeautifulSoup

# URL of the website
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
}
url = "https://www.afi.com/afis-100-years-100-movie-quotes/"

response = requests.get(url, headers=headers)
response.raise_for_status()

soup = BeautifulSoup(response.text, 'html.parser')

# Find the section containing the quotes
quotes = soup.select('.container p')
quotes

# List to store the extracted quotes and their sources
# movie_quotes = []

# for quote in quotes:
#     text = quote.get_text()
#     if ' – ' in text:
#         quote_text, source = text.split(' – ')
#         movie_quotes.append({'quote': quote_text.strip(), 'source': source.strip()})

# # Print each quote with its source
# for entry in movie_quotes:
#     print(f"Quote: {entry['quote']}\nSource: {entry['source']}\n")