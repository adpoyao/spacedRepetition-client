'use strict';

const _find = (linkedList, index) => {
  let node = linkedList.head;
  for (let i = 0; i < index; i++) {
    node = node.next;
  }
  return node;
};

export const retrieve = (linkedList, index) => {
  if (index < 0 || index >= linkedList.length) {
    throw new Error('Index Error');
  }
  const node = _find(linkedList, index);
  return node.value;
};

export const remove = (linkedList, index) => {
  if (index < 0 || index >= linkedList.length) {
    throw new Error('Index Error');
  }
  //if HEAD
  if(index === 0){
    linkedList.head = linkedList.head.next;
  }

  //if not HEAD
  else {
    let before = linkedList._find(linkedList, index - 1);
    before.next = before.next.next;
  }
  linkedList.length--;
};

export const insert = (linkedList, index, value) => {
  if (index < 0 || index > linkedList.length) {
    throw new Error('Index Error');
  }
  const newNode = {value};
  if (index === 0) {
    newNode.next = linkedList.head;
    linkedList.head = newNode;
  }
  else {
    let before = this._find(linkedList, index-1);
    newNode.next = before.next;
    before.next = newNode;
  }
  linkedList.length++;
}