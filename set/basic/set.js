let mySet = new Set();

mySet.add(1);
mySet.add(2);
mySet.add(5);
mySet.add(5);
mySet.add('some text');
let o = { a: 1, b: 2 };
mySet.add(o);
mySet.add({ a: 1, b: 2 });

const has = mySet.has(o);

mySet.delete(5);

console.log(mySet.delete(o));// true
console.log(mySet.delete({ a: 1, b: 2 }));// false

for (let [key, value] of mySet.entries()) console.log(key, value);

const myArray = Array.from(mySet);

const mySet2 = new Set([1, 2, 3, 4, 5]);

// 求交集
const intersection =
    new Set([...mySet].filter(x => mySet2.has(x)));

const difference =
    new Set([...mySet].filter(x => !mySet2.has(x)));
