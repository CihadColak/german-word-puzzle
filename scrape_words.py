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
    # These letters have a second page which for some reason also
    # has a slightly different page prefix
    if letter in "BSK":
        url_pre_2 = "https://scrabblemania.de/Worter-Mit-5-Buchstaben-Die-Nit-"
        req = requests.get(url_pre_2 + letter + url_suf + "-Seite-2")
        soup = BeautifulSoup(req.content, 'html.parser')
        all_as = soup.findAll('a')
        for x in all_as:
            x = str(x)
            if len(x) == 26:
                words.append(x.split(">")[1][:5])
# print(words)
with open("accepted_words.txt", "w") as outfile:
    outfile.write(",".join(words))
