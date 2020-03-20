// const A = [];
//
// console.log(A);
//
// A.fill()

const offset = 42;
const A = Array.from({length: 3}, (currentValue, index) => ({
    x: index + offset
}));
console.log(A);     // [ { x: 42 }, { x: 43 }, { x: 44 } ]

const model = {n: 42, s: 'foo', bar: null};
const B = Array.from({length: 3}, (currentValue, index) => {
    return Object.assign({x: index}, model)
});
console.log(B);
// [
//     { x: 0, n: 42, s: 'foo', bar: null },
//     { x: 1, n: 42, s: 'foo', bar: null },
//     { x: 2, n: 42, s: 'foo', bar: null }
// ]


const XY = Array.from({length: 3}, (currentValue, x) =>
    Array.from({length: 2}, (currentValue, y) => {
        return Object.assign({x, y}, model)
    })
);

console.log(XY);
// [
//     [
//         { x: 0, y: 0, n: 42, s: 'foo', bar: null },
//         { x: 0, y: 1, n: 42, s: 'foo', bar: null }
//     ],
//     [
//         { x: 1, y: 0, n: 42, s: 'foo', bar: null },
//         { x: 1, y: 1, n: 42, s: 'foo', bar: null }
//     ],
//     [
//         { x: 2, y: 0, n: 42, s: 'foo', bar: null },
//         { x: 2, y: 1, n: 42, s: 'foo', bar: null }
//     ]
// ]

