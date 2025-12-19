import { CreateSubsector } from "./CreateSubsector";
import { RenderSubsector } from "./RenderSubsector";

export function CreateGalaxy() {
  const sectorTypes = [
    ['Sparse', 'Standard', 'Sparse', 'Rift'],
    ['Standard', 'Dense', 'Standard', 'Sparse'],
    ['Standard', 'Standard', 'Sparse', 'Rift'],
    ['Rift', 'Sparse', 'Rift', 'Rift']
  ];
  const galaxyMap = sectorTypes.map((row, rowIndex) => 
    row.map((sectorType, colIndex) => {
      const [subsector, subsectorDetails] = CreateSubsector(sectorType, rowIndex, colIndex);
      const [flatSub, flatDet, routeList] = RenderSubsector(subsector, subsectorDetails, rowIndex, colIndex);
      return {flatSub, flatDet, routeList, sectorType};
    })
  );

  return galaxyMap;
}
