import requests
from bs4 import BeautifulSoup
from flask import Flask, jsonify
from flask_cors import CORS

# URL of the website
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
}
url = "https://www.afi.com/afis-100-years-100-movie-quotes/"

response = requests.get(url, headers=headers)
response.raise_for_status()

soup = BeautifulSoup(response.text, 'html.parser')

# Find the section containing the quotes
quotes = soup.select('.single_list')

movie_quotes = []
for elt in quotes:
	movie_quotes.append((elt.find('h6').get_text(strip=True), 
					  elt.find('p').get_text(strip=True)))
	
for i in range(len(movie_quotes)):
	temp = movie_quotes[i][0].split('"')[1]
	temp = temp[0: str.find(temp, '"')]
	movie_quotes[i] = (temp, movie_quotes[i][1])
res = movie_quotes[:100]

app = Flask(__name__)
CORS(app)

@app.route('/calculate')
def calculate():
	result = {"value": res}
	return jsonify(result)

if __name__ == '__main__':
	app.run(debug=True)