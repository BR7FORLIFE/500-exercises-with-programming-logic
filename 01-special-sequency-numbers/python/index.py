
from typing import List

def generateSpecialNumbers(number: int):  # type: ignore
        if(number <= 3): 
               raise Exception("El numero no puede ser igual o menor que 3!")
        
        result: List[int] = []
        total = 0

        index = 0
        oldstate = 0

        while(True): 
                if((index % 2 == 0) or (index % 3 == 0)): 
                        index+=1
                        continue
                
                result.append(index)
                oldstate = index

                if(index > 1 ): 
                        if((index + oldstate) % 2 != 0): 
                            result.append(index)
                            oldstate = index
                
                if(len(result) == number): 
                       break;
                
                index+=1

        for i in range(len(result)):  # type: ignore
            total += result[i]

        return {"result": result ,"total": total} # type: ignore


userInput = int(input("Ingrese un numero para generar los numeros especiales: "))

result = generateSpecialNumbers(userInput) #type: ignore

print("Lista: ", result["result"])
print("total: ", result["total"])
