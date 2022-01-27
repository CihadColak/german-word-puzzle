from platform import java_ver
import random
# function that takes word and guess and returns number of common chars

# Take an empty dictionary


def common_chars(word, guess):
    dict = {}
    res = ""
    yellow_occur = {}
    for char in word:
        if char in dict:
            dict[char] += 1
        else:
            dict[char] = 1

    for i in range(len(guess)):

        # erstmal gucken ob richtig, an richtige stelle
        if word[i] == guess[i]:
            # wenn so dann zum resultat "gruen: c"
            res = res + '\033[92m' + guess[i] + '\033[0m '
            dict[word[i]] -= 1

        # correct letter wrong place
        elif guess[i] in word and dict[guess[i]] > 0:
            # not dyed yet - dye; create in dict yellow_occur
            # only dye as much as in dict[letter] exists
            if guess[i] in yellow_occur:
                if dict[guess[i]] > yellow_occur[guess[i]]:
                    res += '\033[93m' + guess[i] + '\033[0m '
                    yellow_occur[guess[i]] += 1
                else:
                    res += guess[i]
            else:
                res += '\033[93m' + guess[i] + '\033[0m '
                yellow_occur[guess[i]] = 1

        else:
            res += guess[i] + " "
    res_list = res.split(" ")
    for j in range(len(res_list)-1):
        # wenn die anzahl yellow-occur > 0 und dict[buchstaben] = 0
        if len(res_list[j]) == 10:
            # and yellow_occur[guess[j]] > 0
            if dict[guess[j]] == 0 and res_list[j] == '\033[93m' + guess[j] + '\033[0m':
                # gelb zu grau
                res_list[j] = guess[j]
            else:
                res_list[j] = res_list[j]
        else:
            res_list[j]
    elp = ''
    result = elp.join(res_list)
    return result


def generate_word(wordFile):
    randomWord = random.choice(open(wordFile).read().split("\n"))
    return randomWord


wordFile = "5char_words.txt"
testWord = "Engel".lower()
print(testWord)

lives = 6
while lives > 0:
    print("Du hast " + str(lives-i) + " Leben noch!")
    guess = input("Wort eingeben: ").lower()
    if (len(guess) != 5):
        print("Das Wort besteht aus 5 Buchstaben" + "\n")
        continue
    if guess == testWord:
        print("Gratulation!")
        break
    status = common_chars(testWord, guess)
    print(status)
    lives -= 1
if lives == 0:
    print("Gesuchtes Wort: ", testWord)
    # check how many letters were right
print("Ende des Spiels")
