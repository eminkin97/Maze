import sys
import json
import math

class Heap:
	def __init__(self, arr):
		self.arr = arr

	def buildHeap(self):
		i = len(self.arr)//2 
		while (i >= 0):
			self.siftDown(i)
			i = i - 1

	def siftDown(self, i):
		left_child = 2 * i
		right_child = 2 * i + 1

		if (left_child >= len(self.arr)):
			#No children so can't sift down any more
			return
		elif (right_child >= len(self.arr)):
			#No right child so compare with left child and if left child is smaller than swap
			if self.arr[left_child].dist < self.arr[i].dist:
				temp = self.arr[i]
				self.arr[i] = self.arr[left_child]
				self.arr[left_child] = temp
		else:
			#both children exist
			min_of_children = min(self.arr[i].dist, self.arr[left_child].dist, self.arr[right_child].dist)

			if (min_of_children == self.arr[left_child].dist):
				#left child is the smallest
				temp = self.arr[i]
				self.arr[i] = self.arr[left_child]
				self.arr[left_child] = temp
				self.siftDown(left_child)
			elif (min_of_children == self.arr[right_child].dist):
				#right child is the smallest
				temp = self.arr[i]
				self.arr[i] = self.arr[right_child]
				self.arr[right_child] = temp
				self.siftDown(right_child)


	def printHeap(self):
		for x in self.arr:
			print("id: %d, dist: %d" % (x.id, x.dist))

class Node:
	def __init__(self, id, value, neighbors, start):
		self.id = id
		self.value = value	#value of the square
		self.neighbors = neighbors	#id of the neighbors
		self.dist = 10000
		self.start = start	#whether or not this node is start node or not

"""
Run shortest path algorithm
"""
def calculate(node_list):
	#find start node
	for x in node_list:
		if (x.start):
			start_node = x

	print(start_node.id)
	start_node.dist = 0

	#build heap first
	heap = Heap(node_list)
	heap.buildHeap()
	heap.printHeap()

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
		new_node = Node(x["id"], x["value"], determineNeighbors(x, squares, row_column_length, num_squares), x["start"])
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
