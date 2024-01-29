/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    // this.prev = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);

    if (this.head === null) {
      this.head = newNode;
    }

    if (this.tail !== null) {
      this.tail.next = newNode;
      // newNode.prev = this.tail;
    }

    this.tail = newNode;

    this.length += 1;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      // this.head.prev = newNode;
      this.head = newNode;
    }
    this.length += 1;
  }

  /** pop(): return & remove last item. */

  pop() {
    // last item only: update tail /
    if (this.head === null) {
      throw new Error("List is already empty");
    }
    let popItem = this.tail.val;
    if (this.head.next === null) {
      this.head = null;
      this.tail = null;
    } else {
      let current = this.head;
      while (current.next !== this.tail) {
        current = current.next;
      }
      this.tail = current;
      current.next = null;
    }
    this.length -= 1;
    return popItem;
  }

  /** shift(): return & remove first item. */

  shift() {
    // update the head
    let temp = this.head.val;
    if (this.head === null) {
      throw new Error("List is already empty");
    }
    if (this.head.next === null) {
      this.tail = null;
    }
    this.head = this.head.next;
    this.length -= 1;

    return temp;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    // let i = 0;
    let current = this.head;
    // if (idx === 0) {
    //   return this.head.val;
    // }
    while (idx > 0) {
      idx--;
      current = current.next;
    }
    return current.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let current = this.head;
    while (idx > 0) {
      idx--;
      current = current.next;
    }
    current.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    let newNode = new Node(val);

    let current = this.head;
    if (idx === 0) {
      newNode.next = this.head;
      this.head = newNode;
      if (!this.tail) {
        this.tail = newNode;
      }
    } else {
      if (idx === this.length) {
        this.tail = newNode;
      }
      // to find the head before idx
      while (idx > 1) {
        idx--;
        current = current.next;
      }
      newNode.next = current.next;
      current.next = newNode;
    }

    this.length += 1;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    let current = this.head;
    let temp = this.head;
    if (!this.head) {
      throw new Error("List is empty");
    }
    if (idx === 0) {
      return this.shift();
    } else if (idx === this.length - 1) {
      return this.pop();
    } else {
      while (idx > 1) {
        idx--;
        current = current.next;
        temp = current.next;
      }
      current.next = current.next.next;
      if (!current.next) {
        this.tail = current;
      }
    }
    this.length -= 1;
    return temp.val;
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) {
      return 0;
    }
    let current = this.head;
    let sum = 0;
    while (current) {
      sum += current.val;
      current = current.next;
    }
    return sum / this.length;
  }
}

module.exports = LinkedList;


//improvements
//Add validation checks to ensure that indices provided to methods are within valid ranges.
//Consider adding a method to retrieve the length of the linked list instead of directly accessing the length property.      
