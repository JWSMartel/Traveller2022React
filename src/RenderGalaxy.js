export function RenderGalaxy(galaxy) {
  const sectors = {};

  for(let row = 0; row<galaxy.length; row++){
    for(let col = 0; col<galaxy[row].length; col++){
      const sectorKey = `sector${row}${col}`;

      sectors[sectorKey]={
        flatSub: galaxy[row][col].flatSub,
        flatDet: galaxy[row][col].flatDet,
        routeList: galaxy[row][col].routeList,
        sectorType: galaxy[row][col].sectorType
      };
    }
  }

  return sectors;
}
