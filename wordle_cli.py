import random
# function that takes word and guess and returns number of common chars

# Take an empty dictionary


def common_chars(word, guess):
    dict = {}
    for char in word:
        if char in dict:
            dict[char] += 1
        else:
            dict[char] = 1
    # für jede guess buchstabe:
    res = ""
    count_yellow_occur = 0
    for i in range(len(guess)):

        # erstmal gucken ob richtig, an richtige stelle
        if word[i] == guess[i]:
            # wenn so dann zum resultat "gruen: c"
            res = res + '\033[92m' + guess[i] + '\033[0m'
            dict[word[i]] -= 1
        # dann checken richtig, aber falsche stelle
        elif guess[i] in word and dict[guess[i]] > 0 and count_yellow_occur < dict[guess[i]]:
            res += '\033[93m' + guess[i] + '\033[0m'
            count_yellow_occur += 1
        # sonst
        else:
            res += guess[i]
            # resultat "grau: c"
    # fertige res
    return res


# rules:
 # all words are 5 chars long
 # all guesses also have to be 5 chars long
 # 6 tries to guess the word (maybe matrix)
 # correct letters but wrong pos
 #
# count occurances for both inputs
# example "house" -> {h:1, o:1, u:1, s:1, e:1}
# example "forge" -> {f:1, o:1, r:1, g:1, e:1}
# common letters: {e:1}
def generate_word(wordFile):
    randomWord = random.choice(open(wordFile).read().split("\n"))
    return randomWord


wordFile = "5char_words.txt"
testWord = generate_word(wordFile)
# print(testWord)
word = "slbee"
lives = 6
while lives > 0:
    print("Du hast " + str(lives) + " Leben noch!")
    guess = input("Wort eingeben: ")
    if (len(guess) != 5):
        print("Das Wort besteht aus 5 Buchstaben" + "\n")
        continue
    if guess == word:
        print("Gratulation!")
        break
    status = common_chars(word, guess)
    print(status)
    lives -= 1
if lives == 0:
    print("Gesuchtes Wort: ", word)
    # check how many letters were right
print("Ende des Spiels")
