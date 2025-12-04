import { Roll } from "./Roll";

export function CreateStarport(popRoll) {
  let starRoll = Roll(2, 12);
  let starport = '';
  if (popRoll >= 10) {
    starRoll += 2;
  } else if (popRoll == 8 || popRoll == 9) {
    starRoll++;
  } else if (popRoll == 4 || popRoll == 3) {
    starRoll -= 2;
  }

  if (starRoll <= 2) {
    starport = 'X';
  } else if (starRoll >= 11) {
    starport = 'A';
  } else {
    switch (starRoll) {
      case 10:
      case 9:
        starport = 'B';
        break;
      case 8:
      case 7:
        starport = 'C';
        break;
      case 6:
      case 5:
        starport = 'D';
        break;
      case 4:
      case 3:
        starport = 'E';
        break;
    }
  }
  return starport;
}
