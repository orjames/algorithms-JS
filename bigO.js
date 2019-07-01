// Given a list of hotels,
// return the price range of hotels in a given search result

var hotels = [
  { price: 200, brand: 'Estin' },
  { price: 50, brand: 'Best Eastern' },
  { price: 175, brand: 'Radishin' }
];

function priceRange(hotelsArr) {
  let min = Infinity;
  let max = 0;
  hotelsArr.forEach(element => {
    if (element.price > max) {
      max = element.price;
    } else if (element.price < min) {
      min = element.price;
    }
  });
  return `${max} - ${min}`;
}
// big O time of N

// could pre-sort array then just have constant time lookup.
function priceRangeSort(hotelsArr) {
  hotelsArr.sort((a, b) => {
    return a.price - b.price;
  });
  console.log(hotelsArr);
  let min = hotelsArr[0].price;
  let max = hotelsArr[hotelsArr.length - 1].price;
  return `${max} - ${min}`;
}
// big O of O(1) constant time lookup

priceRange(hotels);

// MEMOIZATION
// Task 1: Write a function, times10, that takes an argument, n, and multiples n times 10
// a simple multiplication fn
const times10 = n => {
  return n * 10;
};

console.log('~~~~~~~~~~~~~~TASK 1~~~~~~~~~~~~~~');
console.log('times10 returns:', times10(9));

// Task 2: Use an object to cache the results of your times10 function.
// protip 1: Create a function that checks if the value for n has been calculated before.
// protip 2: If the value for n has not been calculated, calculate and then save the result in the cache object.

const cache = {};

const memoTimes10 = n => {
  if (n in cache) {
    console.log('fetching from cache', n);
    return cache;
  } else {
    console.log('calculating result');
    let result = times10(n);
    cache[n] = result;
    return result;
  }
};

const times10 = n => n * 10;

// Task 3: Clean up your global scope by moving your cache inside your function.
// protip: Use a closure to return a function that you can call later.

const memoizedClosureTimes10 = () => {
  let cache = {};
  return n => {
    if (n in cache) {
      console.log('fetching from cache', n);
      return cache;
    } else {
      console.log('calculating result');
      let result = times10(n);
      cache[n] = result;
      return result;
    }
  };
};

const memoClosureTimes10 = memoizedClosureTimes10();
console.log('~~~~~~~~~~~~~~TASK 3~~~~~~~~~~~~~~');
try {
  console.log('Task 3 calculated value:', memoClosureTimes10(9)); // calculated
  console.log('Task 3 cached value:', memoClosureTimes10(9)); // cached
} catch (e) {
  console.error('Task 3:', e);
}
