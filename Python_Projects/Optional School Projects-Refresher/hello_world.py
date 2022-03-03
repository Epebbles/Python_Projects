from ctypes.wintypes import HWINSTA


hw = "Hello World"
# 1. TASK: print "Hello World"
print(hw)
# 2. print "Hello Noelle!" with the name in a variable
hello = "Hello"
name = "Noelle"
print(hello, name)
print(hello + name)

# 1. TASK: print "Hello World"
#print( your code here )
# 2. print "Hello Noelle!" with the name in a variable
#name = "Noelle"
#print( your code here )	# with a comma
#print( your code here )	# with a +
# 3. print "Hello 42!" with the number in a variable
hello = ("Hello")
name = 42
print(hello, name)	# with a comma
print(hello  + str(name))	# with a +	-- this one should give us an error!
# 4. print "I love to eat sushi and pizza." with the foods in variables
fave_food1 = "sushi"
fave_food2 = "pizza"
print("I love to eat {} and {}.".format(fave_food1, fave_food2)) # with .format()
print(f"I love to eat {fave_food1} and {fave_food2}.") # with an f string
