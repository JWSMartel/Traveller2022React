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

  function formatLocation(row, col) {
    return `0${row}${col === 10 ? col : `0${col}`}`;
  }

  function addRoute(currentCellLoc, neighborCellLoc) {
    routes.push({ formatRoute: `${currentCellLoc} ${neighborCellLoc}` });
  }

  function matchesTradeCodes(cell1, codes1, cell2, codes2) {
    return codes1.some(code => cell1.tradeCodes.includes(code)) && 
           codes2.some(code => cell2.tradeCodes.includes(code));
  }

  for (let row = 0; row < sec.length; row++) {
    for (let col = 0; col < sec[row].length; col++) {
      const currentCell = sec[row][col];
      if (!currentCell) {
        continue;
      }      

      // Check if current cell has a naval base
      if (currentCell.bases?.includes('Naval')) {
        for (let [dRow, dCol] of directions) {
          const neighborRow = row + dRow;
          const neighborCol = col + dCol;

          if (neighborRow >= 0 && neighborRow < sec.length && neighborCol >= 0 && neighborCol < sec[row].length) {
            const neighborCell = sec[neighborRow][neighborCol];
            if(!neighborCell){
              continue;
            }
            if (neighborCell && neighborCell.bases?.includes('Naval')) {
              addRoute(formatLocation(row, col), formatLocation(neighborRow, neighborCol));
            }
          }
        }
      }

      // Check for trade codes: Industrial or High Tech with Asteroid, Desert, Ice-Capped, or Non-Industrial
      if (matchesTradeCodes(currentCell, ['In', 'Ht'], currentCell, ['As', 'De', 'Ic', 'Ni'])) {
        for (let [dRow, dCol] of directions) {
          const neighborRow = row + dRow;
          const neighborCol = col + dCol;

          if (neighborRow >= 0 && neighborRow < sec.length && neighborCol >= 0 && neighborCol < sec[row].length) {
            const neighborCell = sec[neighborRow][neighborCol];
            if(!neighborCell){
              continue;
            }
            if (matchesTradeCodes(currentCell, ['In', 'Ht'], neighborCell, ['As', 'De', 'Ic', 'Ni'])) {
              addRoute(formatLocation(row, col), formatLocation(neighborRow, neighborCol));
            }
          }
        }
      }

      // Check for trade codes: High Pop or Rich with Agro, Garden, or Waterworld
      if (matchesTradeCodes(currentCell, ['Hi', 'Ri'], currentCell, ['Ag', 'Ga', 'Wa'])) {
        for (let [dRow, dCol] of directions) {
          const neighborRow = row + dRow;
          const neighborCol = col + dCol;

          if (neighborRow >= 0 && neighborRow < sec.length && neighborCol >= 0 && neighborCol < sec[row].length) {
            const neighborCell = sec[neighborRow][neighborCol];
            if(!neighborCell){
              continue;
            }
            if (matchesTradeCodes(currentCell, ['Hi', 'Ri'], neighborCell, ['Ag', 'Ga', 'Wa'])) {
              addRoute(formatLocation(row, col), formatLocation(neighborRow, neighborCol));
            }
          }
        }
      }
    }
  }
  return routes;
}
