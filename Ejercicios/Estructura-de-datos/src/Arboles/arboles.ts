class TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  root: TreeNode | null;

  constructor() {
    this.root = null;
  }

  insert(value: number) {
    const newNode = new TreeNode(value);

    if (!this.root) {
      this.root = newNode;
      return;
    }

    let current = this.root;
    while (true) {
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  }
  inOrderTraversal(node: TreeNode | null): number[] {
    if (!node) return [];
    return [
      ...this.inOrderTraversal(node.left),
      node.value,
      ...this.inOrderTraversal(node.right),
    ];
  }

  preOrderTraversal(node: TreeNode | null): number[] {
    if (!node) return [];
    return [
      node.value,
      ...this.preOrderTraversal(node.left),
      ...this.preOrderTraversal(node.right),
    ];
  }

  postOrderTraversal(node: TreeNode | null): number[] {
    if (!node) return [];
    return [
      ...this.postOrderTraversal(node.left),
      ...this.postOrderTraversal(node.right),
      node.value,
    ];
  }

  countNodes(node: TreeNode | null): number {
    if (!node) return 0;
    return 1 + this.countNodes(node.left) + this.countNodes(node.right);
  }

  findMin(node: TreeNode | null): number | null {
    if (!node) return null;
    while (node.left) {
      node = node.left;
    }
    return node.value;
  }

  findMax(node: TreeNode | null): number | null {
    if (!node) return null;
    while (node.right) {
      node = node.right;
    }
    return node.value;
  }
}

const tree = new BinaryTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);

console.log("In order traversal:", tree.inOrderTraversal(tree.root));
console.log("Pre order traversal:", tree.preOrderTraversal(tree.root));
console.log("Post order traversal:", tree.postOrderTraversal(tree.root));

console.log("Numeros de nodes:", tree.countNodes(tree.root));
console.log("Min:", tree.findMin(tree.root));
console.log("Max:", tree.findMax(tree.root));
