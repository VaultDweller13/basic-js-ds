const { NotImplementedError, ListNode } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    // this.queue = [];
    this.firstNode = null;
  }

  getUnderlyingList() {
  //  return this.queue.map(node => { return {value: node.value, next: node.next} });
    return this.firstNode;
  }

  enqueue(value) {
    const node = new ListNode(value);
    // const prevNode = this.queue[this.queue.length - 1]; 
    // if (prevNode) prevNode.next = node;
    // this.queue.push(node);
    if (!this.firstNode) {
      this.firstNode = node;
    } else this.firstNode.next = node;
  }

  dequeue() {
    const value = this.firstNode.value
    this.firstNode = this.firstNode.next;
    return value;
  }
}

module.exports = {
  Queue
};