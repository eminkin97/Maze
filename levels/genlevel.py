"""
Passes in number of squares
"""
def takeInput():
	num_squares = input("Please enter number of squares: ")
	print(num_squares)

	value_range = input("Please enter max value a square can have: ")
	print(value_range)

	return [int(num_squares), int(value_range)]

"""
Generate the JSON file
"""
def generateJsonFile(num_squares, value_range):
	print("hi")

if __name__ == "__main__":
	[num_squares, value_range] = takeInput()
