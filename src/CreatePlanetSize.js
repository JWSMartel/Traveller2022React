import { Roll } from "./Roll";

export function CreatePlanetSize() {
  let name = "";
  let size = "";
  let g = "";
  let description = "";

  const sizeRoll = Roll(0, 10);
  switch (sizeRoll) {
    case 0:
      name += "0";
      size = "800 km";
      g = "Negligible";
      description += "Size of an Asteroid or orbital complex. ";
      break;
    case 1:
      name += "1";
      size = "1,600 km";
      g = "0.05";
      description += "Size of Triton. ";
      break;
    case 2:
      name += "2";
      size = "3,200 km";
      g = "0.15";
      description += "Size of Luna, or Europa. ";
      break;
    case 3:
      name += "3";
      size = "4,800 km";
      g = "0.25";
      description += "Size of Mercury or Ganymede. ";
      break;
    case 4:
      name += "4";
      size = "6,400 km";
      g = "0.35";
      description += "Size of Mars. ";
      break;
    case 5:
      name += "5";
      size = "8,000 km";
      g = "0.45";
      break;
    case 6:
      name += "6";
      size = "9,600 km";
      g = "0.7";
      break;
    case 7:
      name += "7";
      size = "11,200 km";
      g = "0.9";
      break;
    case 8:
      name += "8";
      size = "12,800 km";
      g = "1.0";
      description += "Size of Earth. ";
      break;
    case 9:
      name += "9";
      size = "14,400 km";
      g = "1.25";
      break;
    case 10:
      name += "A";
      size = "16,000 km";
      g = "1.4";
      break;
    default:
      description += "Something went wrong in createPlanetSize";
      break;
  }

  return { name, size, g, description, sizeRoll };
}
