from typing import List

class NumberPalindrome: 
    def __init__(self, userInput: int) -> None:
        self.userInput = userInput;

    def invertedNumber(self, number: int): 
        inverted = int("".join(list(str(number))[::-1]))
        return inverted

    def testPalindrome(self):
        sumPalindrome = self.userInput  + self.invertedNumber(self.userInput) 
        invertedSumPalindrome = self.invertedNumber(sumPalindrome)

        if(sumPalindrome == invertedSumPalindrome): 
            return True
        
        return False

    def testPalindromeArgs(self, number: int):
        sumPalindrome = number + self.invertedNumber(number)
        invertedSumPalindrome = self.invertedNumber(sumPalindrome)

        if(sumPalindrome == invertedSumPalindrome): 
            return True

        return False
    
    def generateNumberPalindrome(self):
        result: List[int] = []

        startedCounter = 10

        while(True):
            if(self.testPalindromeArgs(startedCounter)):
                result.append(startedCounter)
            
            startedCounter+=1

            if(len(result) == self.userInput): 
                break;

        return result


userInput = int(input("Digite un numero para comprobar si es un numero palindromo: "))

if "__main__" == __name__: 
    result = NumberPalindrome(userInput)
    print("Es palindromo?: ", result.testPalindrome())
    print("Generador de numeros espejos: ", result.generateNumberPalindrome())

