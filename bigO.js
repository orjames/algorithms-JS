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

// could pre-sort array then just have constant time lookup
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

// Calulating Time
