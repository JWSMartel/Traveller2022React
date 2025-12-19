import { FindRoutes } from "./FindRoutes";

export function RenderSubsector(subsector, subsectorDetails, sectorCol = 0, sectorRow = 0) {
  const flatSubsector = subsector.flat(Infinity)
                        .filter((line) => typeof line === 'string' && line.trim() !== '');
  const flatDetails = subsectorDetails
                        .flat(Infinity)
                        .filter((item) => item != null);  

  const routes = FindRoutes(subsectorDetails, sectorCol, sectorRow);

  return ([flatSubsector, flatDetails, routes]);
}