/*Q48

Combining Arrays with Spread Operator:
Suppose you're comparing prices of two different laptop sets. USe the spread operator to combine these arrays into a single array sorted in ascending order.
Then log the result.*/
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var price1 = [35000, 20000, 10000];
var price2 = [33000, 22000, 19800];
var combinePrices = __spreadArray(__spreadArray([], price1, true), price2, true).sort(function (a, b) { return a - b; }); // .sort((a,b)=>a-b) method is use to sort in ascending order
var combinePricesNew = __spreadArray(__spreadArray([], price1, true), price2, true).sort(function (a, b) { return b - a; }); // .sort((a,b)=>b-a) method is use to sort in ascending order
console.log(combinePrices);
console.log(combinePricesNew);
