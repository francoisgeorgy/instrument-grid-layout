// import * as React from 'react';
//
// // Delete me
// export const Thing = () => {
//   return <div>the snozzberries taste like snozzberries</div>;
// };

export type Cell = {col: number, row: number};

/*
function getCell(col, row): Cell {
    return null;
}
*/

/**
 * Return a two-dimensional array [rows][cols]
 * @param cols
 * @param rows
 * @param model
 */
export function createCells<T>(cols: number, rows: number, model: T): (Cell & T)[][]  {
    return Array.from({length: rows},
        (_, x) =>
            Array.from({length: cols},
                (_, y) => Object.assign({row: x, col: y}, model)
            )
    );
}

// export function note(col: number, row: number, scale: "major", start: number, tuning: string): number {
//     return 0;
// }

// return the number of steps
/*
export function tuneFourth(col: number, row: number, col2: number, row2: number): number {
    const dr = (row2 - row) * 5;    // tuning in fourth (5 semitones between each rows)
    const dc = col2 - col;          // 1 semitone between each column
    return dr + dc;
}
*/

export function tuneFourth(col: number, row: number): number {
    // tuning in fourth (5 semitones between each rows)
    // 1 semitone between each column
    return row*5 + col;
}


// @ts-ignore
export function setNotes(cells: any, tuning: any): void {
    // @ts-ignore
    cells.forEach((rowCells: any, row: number, _: any) => {         // rows
        // @ts-ignore
        rowCells.forEach((cell: any, col: number, __: any) => {     // cols
            // console.log('set cell', x, col, rowCells[col]);
            rowCells[col].note = tuning(col, row) + 18;
        })
    });
    console.log(cells);
}
