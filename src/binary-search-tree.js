const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    const node = new Node(data);
    let currentNode = this.rootNode;

    if (this.rootNode) {
      while(currentNode !== node) {
        if (node.data > currentNode.data) {
          traverse('right', node);
        } else traverse('left', node);
      }
    } else this.rootNode = node;

    function traverse(side, node) {
      if (!currentNode[side]) {
        currentNode[side] = node;
        currentNode = node;
      } else currentNode = currentNode[side];
    }
  }

  has(data) {
    return Boolean(this.find(data));
  }

  find(data) {
    let currentNode = this.rootNode;

    while(currentNode) {
      if (data === currentNode.data) return currentNode;

      currentNode = data > currentNode.data ? currentNode.right : currentNode.left;
    }

    return null;
  }

  remove(data) {
    // let currentNode = this.rootNode;
    // let prevNode = null;

    // while(currentNode) {
    //   if (data === currentNode.data) {
    //     // if (prevNode) {
    //     //   const leftNode = currentNode.left;
    //     //   const rightNode = currentNode.right;

    //     //   currentNode = prevNode;
    //     //   prevNode.right = rightNode;
    //     //   rightNode.left = leftNode;
    //     // }

    //     if (!currentNode.left && !currentNode.right) {

    //     }  
    //   } else {
    //     prevNode = currentNode;
    //     currentNode = data > currentNode.data ? currentNode.right : currentNode.left;
    //   }
    // }
  }

  min() {
    let currentNode = this.rootNode;
    let result = null;

    while(currentNode) {
      result = currentNode.data;
      currentNode = currentNode.left
    }

    return result;
  }

  max() {
    let currentNode = this.rootNode;
    let result = null;

    while(currentNode) {
      result = currentNode.data;
      currentNode = currentNode.right
    }

    return result;
  }
}

module.exports = {
  BinarySearchTree
};


const tree = new BinarySearchTree();

tree.add(5);
tree.add(2);
tree.add(9);
tree.add(7);
tree.add(10);
console.log(tree.root());
console.log(tree.has(12));
console.log(tree.find(9));
console.log(tree.min());
console.log(tree.max());


