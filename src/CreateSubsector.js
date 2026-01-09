import { PlanetCheck } from "./PlanetCheck";
import { Roll } from "./Roll";

export function CreateSubsector(sectorDensity, sectorCol = 0, sectorRow = 0) {
  //Create an 8x10 array
  let sectorMap = Array.from({ length: 8 }, () => Array(10).fill(0));
  let sectorMapDetails = Array.from({ length: 8 }, () => Array(10).fill(0));
  let planetCount = 0;
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

  //Make sectors
  sectorMap.forEach((row, rowIndex) => {
    row.forEach((val, colIndex) => {
      sectorMapDetails[rowIndex][colIndex] = PlanetCheck(sectorDensity,rowIndex,colIndex, planetCount, sectorCol, sectorRow);
      if(sectorMapDetails[rowIndex][colIndex]!=null){
        sectorMap[rowIndex][colIndex] = sectorMapDetails[rowIndex][colIndex].name;
        planetCount++;
      }
    });
  });

  //neighbor check here for influenced and fusion cultures
  sectorMapDetails.forEach((row, rowIndex) =>{
    row.forEach((col, colIndex)=>{
      const neighbors = [];
      let dist = 1;
      
      if(sectorMapDetails[rowIndex][colIndex]?.culture=='Influenced'||sectorMapDetails[rowIndex][colIndex]?.culture=='Fusion'){
        while(neighbors==0){
          const currentCell = sectorMapDetails[rowIndex][colIndex];
          let searching = directions.map(dir =>dir.map(value=>value*dist));
          
          for (let [dRow, dCol] of searching) {
            const neighborRow = rowIndex + dRow;
            const neighborCol = colIndex + dCol;
            
            if(neighborRow>=0&&neighborRow<sectorMapDetails.length&&neighborCol>=0&&neighborCol<sectorMapDetails[rowIndex].length){
              const neighborCell = sectorMapDetails[neighborRow][neighborCol];
              
              if(neighborCell!=null&&neighborCell.culture!='Influenced'&&neighborCell.culture!='Fusion'){
                neighbors.push(neighborCell);
              }
            }
          }
          
          if(neighbors==0){
            dist++;
          }
        }
        const neighborToBorrowFrom = neighbors[Roll(0,neighbors.length-1)];

        sectorMapDetails[rowIndex][colIndex].cultDesc += sectorMapDetails[rowIndex][colIndex].culture === 'Influenced' ? ` Influenced by ${neighborToBorrowFrom.name}: ${neighborToBorrowFrom.cultDesc}` : ` Fused with culture from ${neighborToBorrowFrom.name}: ${neighborToBorrowFrom.cultDesc}`;
        sectorMapDetails[rowIndex][colIndex].culture += ' '+neighborToBorrowFrom.culture;
      }
    })
  })

  return [sectorMap, sectorMapDetails, sectorCol, sectorRow];
}