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
    this.queue = [];
  }

  getUnderlyingList() {
   return this.queue.map(node => { return {value: node.value, next: node.next} });
  }

  enqueue(value) {
    const node = new ListNode(value);
    const prevNode = this.queue[this.queue.length - 1]; 
    if (prevNode) prevNode.next = node;
    this.queue.push(node);
  }

  dequeue() {
   return this.queue.shift().value;
  }
}

module.exports = {
  Queue
};