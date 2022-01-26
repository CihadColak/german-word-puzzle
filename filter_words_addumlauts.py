text = open("5char_words.txt")

lines = text.readlines()


with open("5char_words_withumlauts.txt", "w") as file:
    for word in lines:
        if word[5] == 'x':
            file.write("\"" + word[:5].lower() + "\",")
