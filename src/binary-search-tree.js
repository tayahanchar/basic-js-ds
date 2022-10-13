const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootItem = null;
  }

  root() {
    if(this.rootItem === null) {
      return null;
    } else {
      return this.rootItem;
    }
  }

  add(data) {
    this.rootItem = addElem(this.rootItem, data);

    function addElem(node, value) {
      if(!node) {
        return new Node(value);
      }

      if(node.data === value) {
        return node;
      }

      if(value < node.data) {
        node.left = addElem(node.left, value);
      } else {
        node.right = addElem(node.right, value);
      }

      return node;
    }
  }

  has(data) {
    return searchElem(this.rootItem, data);

    function searchElem(node, value) {
      if(!node) {
        return false;
      }

      if(value === node.data) {
        return true;
      }

      if(value < node.data) {
        return searchElem(node.left, value);
      } else {
       return searchElem(node.right, value);
      }
    }
  }

  find(data) {
    return searchElem(this.rootItem, data);

    function searchElem(node, value) {
      if(!node) {
        return null;
      }

      if(value === node.data) {
        return node;
      }

      if(value < node.data) {
        return searchElem(node.left, value);
      } else {
       return searchElem(node.right, value);
      }
    }
  }

  remove(data) {
    this.rootItem = removeElem(this.rootItem, data);

    function removeElem(node, value) {
      
      if(!node) {
        return null;
      }

      if(value < node.data) {
        node.left = removeElem(node.left, value);
        return node;
      } else if (node.data < value) {
        node.right = removeElem(node.right, value);
        return node;
      } else {
        if (!node.left && !node.right) {
          node = null;
          return null;
        }
      
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }

        let minFromRight = node.right;
        while(minFromRight.left) {
          minFromRight = minFromRight.left;
        }

        node.data = minFromRight.data;
        node.right = removeElem(node.right, minFromRight.data);
        return node;
      }
    }
  }

  min() {
    if(!this.rootItem) {
      return;
    }
    let node = this.rootItem;
    while(node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if(!this.rootItem) {
      return;
    }

    let node = this.rootItem;
    while(node.right) {
      node = node.right;
    }

    return node.data;
  }
}

class Node {
  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
  }
}

module.exports = {
  BinarySearchTree
};