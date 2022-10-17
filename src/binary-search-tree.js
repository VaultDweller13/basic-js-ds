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
    this.rootNode = removeNode(this.rootNode, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }

      if (node.data === data) {
        // If node has no children
        if (!node.left && !node.right) {
          return null;
        }

        // If node has one child
        if (!node.left) {
          node = node.right;
          return node; 
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        // If node has two children
        let minNode = node.right;

        while(minNode.left) {
          minNode = minNode.left;
        }

        node.data = minNode.data;
        node.right = removeNode(node.right, minNode.value);

        return node;
      }

      if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        node.left = removeNode(node.left, data);
        return node;
      }
    }
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