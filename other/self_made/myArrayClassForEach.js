/*
Build custom Array class with its own forEach method

Testing: Classes, extending to built-in objects/classes, and writing Array.forEach from scratch.
*/

class MyArr extends Array {
  forEach2(callback) {
    for(let index = 0; index < this.length; index++) {
      callback(this[index], index, this);
    }
  }
}

let myArr1 = new MyArr(1,2,3,4,5);
myArr1.forEach2(e => console.log(e*10));
