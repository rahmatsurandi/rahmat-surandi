class dynamicArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  Push(element) {
    this.data[this.length] = element;
    this.length++;
    return this.length;
  }
  pop() {
    if (this.length == 0) return undefined;

    const popElement = this.data[this.lengt - 1];
    delete this.data[this.lenght - 1];
    this.length--;
    return popElement;
  }
  insert(element, index) {
    if (index > this.length - 1 || index < 0) {
      return undefined;
    }
    this.length++;
    for (let i = this.length - 1; i > index; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[index] = element;
    return this.data;
  }

  remove(index) {
    if (this.length == 0) return undefined;
    if (index > this.length - 1 || index < 0) return undefined;
    const removedItem = this.data[index];
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return removedItem;
  }
}

const array = new dynamicArray();
array.Push(100);
array.Push(200);
array.Push(300);
array.Push(400);
array.Push(500);

console.log(array);
array.insert(0, 2);
console.log(array);
