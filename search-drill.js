const BinarySearchTree = require('./BinarySearchTree')
const Queue = require('./Queue')


const arr = [3, 5, 6, 8, 11, 12, 14, 15, 17, 18]

const binarySearch = (array, value, start=0, end=array.length) => {
    //var start = start === undefined ? 0 : start;
    //var end = end === undefined ? array.length : end;

    if (start > end) {
        return -1;
    }

    const index = Math.floor((start + end) / 2);
    const item = array[index];

    console.log(start, end);
    if (item === value) {
        return index;
    }
    else if (item < value) {
        return binarySearch(array, value, index + 1, end);
    }
    else if (item > value) {
        return binarySearch(array, value, start, index - 1);
    }
};

//binarySearch(arr, 8)
/*
To find 8 we need 3 recursive calls;
1. [3, 5, 6, 8, 11, 12, 14, 15, 17, 18]
2. [3, 5, 6, 8, 11]
3. [8, 11]
4. [8]
*/

//binarySearch(arr, 16)
/*
We didn't 16 because it is not in the array.
1. [3, 5, 6, 8, 11, 12, 14, 15, 17, 18]
2. [14, 15, 17, 18]
3. [14, 15]
4. [7]
*/

const books = [
{code:'500', title:'Natural sciences and mathematics', name:'Name 1'},
{code:'510', title:'Mathematics', name:'Name 2'},
{code:'516', title:'Geometry', name:'Name 3'},
{code:'516.3', title:'Analytic geometries', name:'Name 4'},
{code:'516.37', title:'Metric differential geometries', name:'Name 5'},
{code:'516.375', title:'Finsler geometry', name:'Name 6'},
{code:'517', title:'Geometry 1', name:'Name 7'},
{code:'517.3', title:'Analytic geometries 1', name:'Name 8'},
{code:'517.37', title:'Metric differential geometries 1', name:'Name 9'},
{code:'517.375', title:'Finsler geometry 1', name:'Name 10'}
]

const binarySearchBook = (array, value, start=0, end=array.length) => {
    if (start > end || start>=array.length) {
        return 'Not found';
    }
    const index = Math.floor((start + end) / 2);
    const item = array[index];
    if (item.code === value.code && item.title === value.title) {
        return array[index].name;
    }
    else if (parseFloat(item.code) < parseFloat(value.code)) {
        return binarySearchBook(array, value, index + 1, end);
    }
    else if (parseFloat(item.code) > parseFloat(value.code)) {
        return binarySearchBook(array, value, start, index - 1);
    }
};

/*console.log(binarySearchBook(books, {code:'516.37', title:'Metric differential geometries'}));
console.log(binarySearchBook(books, {code:'517.37', title:'Metric differential geometries 1'}));
console.log(binarySearchBook(books, {code:'518.37', title:'Metric differential geometries 1'}));
*/

// 4.1) Given a binary search tree whose in-order and pre-order traversals are respectively 14 15 19 25 27 35 79 89 90 91 and 35 25 15 14 19 27 89 79 91 90. What would be its postorder traversal?

// answer would be => 14, 19, 15, 27,25,79, 90, 91, 89,35;

//4.2) The post order traversal of a binary search tree is 5 7 6 9 11 10 8. What is its pre-order traversal?

// Pre-order traversal would be => 8,6,5,7,10,9,11


const BST = new BinarySearchTree();
const array = [25, 15, 50, 10, 24, 35, 70, 4, 12, 18, 31, 44, 66, 90, 22]
array.forEach(element => {
    BST.insert(element)
});

/*
console.log(BST.inOrder());
console.log(BST.preOrder());
console.log(BST.postOrder());
*/

const BSTOfficers = new BinarySearchTree('Captain Picard','Captain Picard');
/*
const oficcers = [
  'Captain Picard',
  'Commander Riker',
  'Lt. Cmdr. Worf',
  'Lt. Cmdr. LaForge',
  'Lieutenant security-officer',
  'Commander Data',
  'Lt. Cmdr. Crusher',
  'Lieutenant Selar'
]
*/

BSTOfficers.left = new BinarySearchTree('Commander Riker', 'Commander Riker');
BSTOfficers.left.left = new BinarySearchTree('Lt. Cmdr. Worf', 'Lt. Cmdr. Worf');
BSTOfficers.left.right = new BinarySearchTree('Lt. Cmdr. LaForge', 'Lt. Cmdr. LaForge');
BSTOfficers.left.left.left = new BinarySearchTree('Lieutenant security-officer', 'Lieutenant security-officer');

BSTOfficers.right = new BinarySearchTree('Commander Data', 'Commander Data');
BSTOfficers.right.right = new BinarySearchTree('Lt. Cmdr. Crusher', 'Lt. Cmdr. Crusher');
BSTOfficers.right.right.left = new BinarySearchTree('Lieutenant Selar', 'Lieutenant Selar');




let queueCommander = new Queue();
function nextCommander(rootNode) {
  if (rootNode === null) {
    return;
  }
  let queue = new Queue();
  queue.enqueue(rootNode);
  let officers = [];

  let currentNode = true
  while (currentNode) {
    currentNode = queue.dequeue();
    if (currentNode){
      officers.push(currentNode.value)
      //console.log(currentNode.value);
      if (currentNode.left !== null) {
        queue.enqueue(currentNode.left)
      }
      if (currentNode.right !== null) {
        queue.enqueue(currentNode.right)
      }
    }
  }
  for (let i=1; i<officers.length; i++){
    console.log(`Officer ${officers[officers.length-i]} should be reemplaced by ${officers[officers.length-i-1]}`);
  }
  // Continue looping through the queue until it's empty!
}

nextCommander(BSTOfficers);

/*const display = (list) => {
  let node
  if(list.top)
    node = list.top
  if(list.first)
    node = list.first
  while (node !== null){
    console.log(node.value)
    node = node.next
  }
}*/

/*
const BFS = (node) => {
   // Create a Queue and add our initial node in it
   let q = new Queue();
   let explored = new Set();
   q.enqueue(node);

   // Mark the first node as explored explored.
   add(node);

   // We'll continue till our queue gets empty
   while (!q.isEmpty()) {
      let t = q.dequeue();

      // Log every element that comes out of the Queue
      console.log(t);

      // 1. In the edges object, we search for nodes this node is directly connected to.
      // 2. We filter out the nodes that have already been explored.
      // 3. Then we mark each unexplored node as explored and add it to the queue.
      this.edges[t]
      .filter(n => !explored.has(n))
      .forEach(n => {
         explored.add(n);
         q.enqueue(n);
      });
   }
}*/

//display(queueCommander);

//console.log(BSTOfficers);
