import { CreateSubsector } from "./CreateSubsector";

export function CreateGalaxy() {
  /**Galaxy Map:
   * S|N|S|R
   * N|D|N|S
   * N|N|S|R
   * R|S|R|R
   * ['Rift','Sparse','Standard','Dense']
   */
  const sectorTypes = [
    ['Sparse', 'Standard', 'Sparse', 'Rift'],
    ['Standard', 'Dense', 'Standard', 'Sparse'],
    ['Standard', 'Standard', 'Sparse', 'Rift'],
    ['Rift', 'Sparse', 'Rift', 'Rift']
  ];
  const galaxyMap = sectorTypes.map((row, rowIndex) => 
    row.map((sectorType, colIndex) => 
      CreateSubsector(sectorType, rowIndex, colIndex)
    )
  );

  return galaxyMap;
}
