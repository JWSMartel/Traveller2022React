import { FindRoutes } from "./FindRoutes";

export function RenderSubsector(subsector, subsectorDetails) {
  const flatSubsector = subsector.flat(Infinity)
                        .filter((line) => typeof line === 'string' && line.trim() !== '');
  const flatDetails = subsectorDetails
                        .flat(Infinity)
                        .filter((item) => item != null);
  

  const routes = FindRoutes(subsectorDetails);

  return ([flatSubsector, flatDetails, routes]);
}