import json
import random

"""
Passes in number of squares
"""
def takeInput():
	num_squares = input("Please enter number of squares: ")

	value_range = input("Please enter max value a square can have: ")

	filename = input("Please enter a file name to write to: ")

	return [int(num_squares), int(value_range), filename]

"""
Randomly select start and end squares
"""
def randomStartEndSquares(num_squares):
	start_square = random.randint(0, num_squares-1)		#randomnly choose start square
	end_squares = []					#can be multiple end squares

	if (num_squares == 25):
		num_end_squares = 1
	if (num_squares == 36):
		num_end_squares = random.randint(1,2)

	i = 0
	while (i < num_end_squares):
		square = random.randint(0, num_squares-1)
		while (square == start_square):
			square = random.randint(0, num_squares-1)

		end_squares.append(square)
		i = i + 1

	return [start_square, end_squares]


"""
Generate the JSON file
"""
def generateJsonFile(num_squares, value_range, filename):
	square_list = []
	
	[start_square, end_squares] = randomStartEndSquares(num_squares)
	
	i = 0
	while (i < num_squares):
		if (i == start_square):
			start_val = True
		else:
			start_val = False

		if i in end_squares:
			value = random.randint(0, value_range)
			if (value == 0):	#end square cant have a value of 0
				value = value + 1

			end_val = True
		else:
			value = random.randint(0, value_range)
			end_val = False

		new_square = {
			'id': i,
			'value': value,
			'start': start_val,
			'end': end_val
		}
		square_list.append(new_square)

		i = i + 1

	final_json_file = {
		'numsquares': num_squares,
		'squares': square_list,
		'total_moves': 0
	}

	with open(filename, 'w') as outfile:
		json.dump(final_json_file, outfile)

if __name__ == "__main__":
	[num_squares, value_range, filename] = takeInput()
	generateJsonFile(num_squares, value_range, filename)
