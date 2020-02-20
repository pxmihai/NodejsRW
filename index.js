const list1 = [];
for (let i = 1; i <= 100; i++) {
    if (!(i % 15)) {
        list1.push('FizzBuzz');
    } else if (!(i % 5)) {
        list1.push('Buzz');
    } else if (!(i % 3)) {
        list1.push('Fizz');
    } else {
        list1.push(i);
    }
}
console.log(list1);
console.log('xxx')

'use strict';
const list2 = [...Array(100).keys()]
    .map(n => n + 1)
    .map(n => n % 15 ? n : 'FizzBuzz')
    .map(n => isNaN(n) || n % 5 ? n : 'Buzz')
    .map(n => isNaN(n) || n % 3 ? n : 'Fizz');
console.log(list2);