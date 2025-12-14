import { PlanetCheck } from "./PlanetCheck";

export function CreateSubsector(sectorDensity) {
  //Create an 8x10 array
  let sectorMap = Array.from({ length: 8 }, () => Array(10).fill(0));
  let sectorMapDetails = Array.from({ length: 8 }, () => Array(10).fill(0));
  let planetCount = 0;

  sectorMap.forEach((row, rowIndex) => {
    row.forEach((val, colIndex) => {
      sectorMapDetails[rowIndex][colIndex] = PlanetCheck(sectorDensity,rowIndex,colIndex, planetCount);
      if(sectorMapDetails[rowIndex][colIndex]!=null){
        sectorMap[rowIndex][colIndex] = sectorMapDetails[rowIndex][colIndex].name;
        planetCount++;
      }
    });
  });

  return [sectorMap, sectorMapDetails];
}