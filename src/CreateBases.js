import { Roll } from "./Roll";

export function CreateBases(starport, pop, tech, law) {
  let highport = Roll(2, 12);
  let bases = 'Bases present: ';
  if (tech >= 9 && tech <= 11) {
    highport++;
  } else if (tech >= 12) {
    highport += 2;
  }
  if (pop >= 9) {
    highport++;
  } else if (pop <= 6) {
    highport--;
  }
  let corsair = Roll(2, 12);
  if (law == 0) {
    corsair += 2;
  } else if (law >= 2) {
    corsair -= 2;
  }
  let military = Roll(2, 12);
  let naval = Roll(2, 12);
  let scout = Roll(2, 12);

  switch (starport) {
    case 'A':
      if (highport >= 6) {
        bases += 'Highport, ';
      }
      if (military >= 8) {
        bases += 'Military, ';
      }
      if (naval >= 8) {
        bases += 'Naval, ';
      }
      if (scout >= 10) {
        bases += 'Scout, ';
      }
      break;
    case 'B':
      if (highport >= 8) {
        bases += 'Highport, ';
      }
      if (military >= 8) {
        bases += 'Military, ';
      }
      if (naval >= 8) {
        bases += 'Naval, ';
      }
      if (scout >= 9) {
        bases += 'Scout, ';
      }
      break;
    case 'C':
      if (highport >= 10) {
        bases += 'Highport, ';
      }
      if (military >= 10) {
        bases += 'Military, ';
      }
      if (scout >= 9) {
        bases += 'Scout, ';
      }
      break;
    case 'D':
      if (highport >= 12) {
        bases += 'Highport, ';
      }
      if (scout >= 8) {
        bases += 'Scout, ';
      }
      if (corsair >= 12) {
        bases += 'Corsair, ';
      }
      break;
    case 'E':
      if (corsair >= 10) {
        bases += 'Corsair, ';
      }
      break;
    case 'X':
      if (corsair >= 10) {
        bases += 'Corsair, ';
      }
      break;
  }
  if(bases === 'Bases present: '){
    bases = '';
  }

  return bases;
}
