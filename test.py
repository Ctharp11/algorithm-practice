# Example 1:
def array_sort(x):
    new_list = []
    new_list_chunked = []
    
    while x:
        first_index = x[0]
        for i in x:
            if i < first_index:
                first_index = i
        
        new_list.append(first_index)
        x.remove(first_index)
    modulo = len(new_list) % 3 == 0
    if modulo:
        n = len(new_list) // 3
        for i in range(0, len(new_list), n):   
            new_list_chunked.append(new_list[i:i + n])       
    else:
        n = len(new_list) // 3
        for i in range(0, len(new_list), (n + 1)):   
            new_list_chunked.append(new_list[i:i + (n + 1)]) 

    return new_list_chunked

input = [2,1,3,4,7,5,9,6,8,13,12,11,10,0,15,16,14]
array_sort(input)

# Excersice 2:

def find_frequency(x, str):
    holder = []
    for i in str:
        if i == x:
            holder.append(i)
    return len(holder)

find_frequency("t", "this is a test")

# Excersice 3:
#This solution uses a modulus and looping to find if the integer would have a remainder after being divided by two until reaching 1. Powers of two don't have a remainder and the variable power_of_two is left at True. If a remainder is identified, power_of_two is set to False. This works for any integer because it catches 0 before the while loop, and negative numbers are caught on the return. 
def is_power_two(x):
    power_of_two = True
    while (x != 1 and x > 0):
        if (x % 2):
            power_of_two = False
        x = x // 2
    return power_of_two and (x > 0)

is_power_two(18)

