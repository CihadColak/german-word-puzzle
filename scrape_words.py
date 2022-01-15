import requests
from bs4 import BeautifulSoup
letters = "QWERTZUIOPÜASDFGHJKLÖÄYXCVBNM"
words = []
url_pre = "https://scrabblemania.de/Worter-Mit-5-Buchstaben-Die-Mit-"
url_suf = "-Anfangen"
for letter in letters:
    req = requests.get(url_pre + letter + url_suf)
    soup = BeautifulSoup(req.content, 'html.parser')
    all_as = soup.findAll('a')
    for x in all_as:
        x = str(x)
        if len(x) == 26:
            words.append(x.split(">")[1][:5])
print(words)
print(len(words))
