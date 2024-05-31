/*Q48

Combining Arrays with Spread Operator:
Suppose you're comparing prices of two different laptop sets. USe the spread operator to combine these arrays into a single array sorted in ascending order.
Then log the result.*/

let price1 = [35000,20000,10000]
let price2 = [33000,22000,19800]

let combinePrices = [...price1,...price2].sort((a,b)=>a-b)          // .sort((a,b)=>a-b) method is use to sort in ascending order
let combinePricesNew = [...price1,...price2].sort((a,b)=>b-a)       // .sort((a,b)=>b-a) method is use to sort in ascending order
console.log(combinePrices)
console.log(combinePricesNew);


