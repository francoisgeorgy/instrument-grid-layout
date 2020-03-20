Instrument Grid Layout
======================

Map notes, scales, chords, ... on a XY grid.

Coordinates
-----------

Always column first, then row.

First column is index 0.

First row is index 0.

The cell[0, 0] is at the lower left corner.

A cell has coordinates [COL, ROW].


### Implementation

The cells is a two-dimensional array with:

- first dimension is the ROW
- second dimension is the COLUMN


    cell[row][col]
    
This allow to easily display the cells row by row instead of column by column.
    