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
      g = "0.05g";
      description += "Size of Triton. ";
      break;
    case 2:
      name += "2";
      size = "3,200 km";
      g = "0.15g";
      description += "Size of Luna, or Europa. ";
      break;
    case 3:
      name += "3";
      size = "4,800 km";
      g = "0.25g";
      description += "Size of Mercury or Ganymede. ";
      break;
    case 4:
      name += "4";
      size = "6,400 km";
      g = "0.35g";
      description += "Size of Mars. ";
      break;
    case 5:
      name += "5";
      size = "8,000 km";
      g = "0.45g";
      break;
    case 6:
      name += "6";
      size = "9,600 km";
      g = "0.7g";
      break;
    case 7:
      name += "7";
      size = "11,200 km";
      g = "0.9g";
      break;
    case 8:
      name += "8";
      size = "12,800 km";
      g = "1.0g";
      description += "Size of Earth. ";
      break;
    case 9:
      name += "9";
      size = "14,400 km";
      g = "1.25g";
      break;
    case 10:
      name += "A";
      size = "16,000 km";
      g = "1.4g";
      break;
    default:
      description += "Something went wrong in createPlanetSize";
      break;
  }

  return { name, size, g, description, sizeRoll };
}
