
text = open("10000_de_words.txt")

lines = text.readlines()

with open("5char_words.txt", "w") as file:
    for word in lines:
        # überprüfen ob nicht kaputt und länge 5
        if (len(word) == 6 and "�" not in word and word[0].isupper()):
            # wenn sauber, schreibe in neue datei
            file.write(word.lower())
