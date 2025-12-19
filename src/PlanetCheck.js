import { CreatePlanet } from "./CreatePlanet";
import { Roll } from "./Roll";

export function PlanetCheck(sectorDensity, row, col, planetCount, sectorCol = 0, sectorRow = 0) {
  let occurrence = Roll(1, 6);
  const loc = `${sectorCol}${row}${col === 10 ? col : `${sectorRow}${col}`}`;

  switch (sectorDensity) {
    case 'Rift':
      occurrence -= 2;
      break;
    case 'Sparse':
      occurrence--;
      break;
    case 'Dense':
      occurrence++;
      break;
  }

  if (occurrence >= 4) {
    const planetLabel = loc+' Planet'+planetCount
    const world = CreatePlanet(planetLabel);
    return world;
  }

  return null;
}