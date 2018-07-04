import sys
import json
import math

class Node:
	def __init__(self, id, value, neighbors):
		self.id = id
		self.value = value	#value of the square
		self.neighbors = neighbors	#id of the neighbors

def calculate(node_list):
	#run shortest path algorithm

"""
reads the data from JSON file

Returns objects that represent the squares on the board
num_squares must be a square value e.g 25, 36
"""
def readLevelData():
	#open file and load data
	with open('level1.json') as f:
		data = json.load(f)

	squares = data["squares"]
	num_squares = data["numsquares"]

	return [squares, num_squares]

"""
Creates Node objects from the square dicts
and returns them
"""
def createNodes(squares, num_squares):
	node_list = []
	row_column_length = math.sqrt(num_squares)

	#go through all the dicts and create the nodes
	for x in squares:
		new_node = Node(x["id"], x["value"], determineNeighbors(x, squares, row_column_length, num_squares))
		node_list.append(new_node)

	return node_list
	

"""
This function determines if parameters square1 and square2
are neighbors on the game board given the length of the row/
column
"""
def determineNeighbors(square, squares, row_column_length, num_squares):
	neighbors = []

	#FIRST, check for left neighbor
	square2_id = getSquareById(square["id"] - 1, squares, num_squares)

	if (square2_id != -1):
		#check to see if they're in the same row
		a = square["id"] % row_column_length
		b = square2_id % row_column_length

		if (b + 1 == a):
			#they're in the same row so add to neighbors list
			neighbors.append(square2_id)

	#check for right neighbor
	square2_id = getSquareById(square["id"] + 1, squares, num_squares)

	if (square2_id != -1):
		#check to see if they're in the same row
		a = square["id"] % row_column_length
		b = square2_id % row_column_length

		if (b - 1 == a):
			#they're in the same row so add to neighbors list
			neighbors.append(square2_id)

	#check for bottom neighbor
	square2_id = getSquareById(square["id"] + row_column_length, squares, num_squares)

	if (square2_id != -1):
		neighbors.append(square2_id)

	#check for top neighbor
	square2_id = getSquareById(square["id"] - row_column_length, squares, num_squares)

	if (square2_id != -1):
		neighbors.append(square2_id)

	#return list of neighbors for the square
	return neighbors
	

"""
returns the square that has id equal to id passed in as parameter
@Returns id of square or -1 if square not found
"""
def getSquareById(id, squares, num_squares):
	if (id < 0 or id > num_squares):
		return -1

	for x in squares:
		if x["id"] == id:
			return x["id"]

	return -1
	

if __name__ == "__main__":
	[squares, num_squares] = readLevelData()
	node_list = createNodes(squares, num_squares)
	calculate(node_list)
