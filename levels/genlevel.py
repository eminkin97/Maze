import json
import random
from shortestpath import main

"""
Passes in number of squares
"""
def takeInput():
	num_squares = input("Please enter number of squares: ")

	value_range = input("Please enter max value a square can have: ")

	max_num_end_squares = input("Please enter max end squares a board can have: ")

	return [int(num_squares), int(value_range), int(max_num_end_squares)]

"""
Randomly select start and end squares
"""
def randomStartEndSquares(num_squares, max_num_end_squares):
	start_square = random.randint(0, num_squares-1)		#randomnly choose start square
	end_squares = []					#can be multiple end squares

	num_end_squares = random.randint(1, max_num_end_squares)

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
def generateJsonFile(num_squares, value_range, filename, max_num_end_squares):
	square_list = []
	
	[start_square, end_squares] = randomStartEndSquares(num_squares, max_num_end_squares)
	
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

	# get shortest path
	total_moves = main(square_list, num_squares)

	final_json_file = {
		'numsquares': num_squares,
		'squares': square_list,
		'total_moves': total_moves
	}

	with open(filename, 'a+') as outfile:
		json.dump(final_json_file, outfile)


"""
Control function. calls the function that generates the json files
"""
def control(num_squares, max_value, max_num_end_squares):

	i = 1
	while (i <= 50):
		generateJsonFile(num_squares, max_value, "aqua2/level" + str(i) + ".json", max_num_end_squares)
		i = i + 1
	
if __name__ == "__main__":
	[num_squares, max_value, max_num_end_squares] = takeInput()
	control(num_squares, max_value, max_num_end_squares)
