import sys
import json
import math

class Node:
	def __init__(self, id, value, neighbors):
		self.id = id
		self.value = value	#value of the square
		self.neighbors = neighbors	#id of the neighbors

def calculate():
	print("hi")

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
"""
def createNodes(squares, num_squares):
	node_list = []
	row_column_length = math.sqrt(num_squares)

	#go through all the dicts and create the nodes
	for x in squares:
		#check for left neighbor
		if (
		new_node = Node(x["id"], x["value"],	
	

if __name__ == "__main__":
	[squares, num_squares] = readLevelData()
	createNodes()
	calculate()
