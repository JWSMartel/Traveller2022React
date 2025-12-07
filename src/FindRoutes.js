export function FindRoutes(sec) {
  const directions = [
    [-1, 0], // Left
    [1, 0], // Right
    [0, -1], // Up
    [0, 1], // Down
    [-1, -1], // Top-left diagonal
    [-1, 1], // Top-right diagonal
    [1, -1], // Bottom-left diagonal
    [1, 1], // Bottom-right diagonal
  ];
  const routes = [];

  for (let row = 0; row < sec.length; row++) {
    for (let col = 0; col < sec[row].length; col++) {
      const currentCell = sec[row][col];

      //Check if adjacent cells both have class A starports
      if (currentCell && currentCell.starport == 'A') {
        for (let [dRow, dCol] of directions) {
          const neighborRow = row + dRow;
          const neighborCol = col + dCol;

          if (neighborRow >= 0 && neighborRow < sec.length && neighborCol >= 0 && neighborCol < sec[row].length) {
            const neighborCell = sec[neighborRow][neighborCol];

            if (neighborCell && neighborCell.starport === currentCell.starport) {
              const currentCellLoc = `0${row}${col === 10 ? col : `0${col}`}`;
              const neighborCellLoc = `0${neighborRow}${neighborCol === 10 ? neighborCol : `0${neighborCol}`}`;
              const formatRoute = currentCellLoc+' '+neighborCellLoc;
              routes.push({formatRoute});
            }
          }
        }
      }

      //Check if adjacent cells both have naval bases

      //Check if world one has Industrial tag and world two has either asteroid, dessert, ice-capped, or non-ind

      //Check if world one has high tech tag and world two has either asteroid, dessert, ice-capped, or non-ind

      //Check if world one has high pop tag and world two has either agro, garden, or waterworld

      //Check if world one has rich tag and world two has either agro, garden, or waterworld
    }
  }
  console.log(routes);
  return routes;
}
