export function CheckZoning(atmo, gov, law) {
  let flag = 0;
  if (atmo >= 10) {
    flag++;
  }
  if (gov == 0 || gov == 7 || gov == 10) {
    flag++;
  }
  if (law == 0 || law == 9) {
    flag++;
  }

  let zone;
  if (flag == 0) {
    zone = 'Green';
  } else if (flag >= 2) {
    zone = 'Red';
  } else {
    zone = 'Amber';
  }

  return zone;
}
