export function CheckTradeCodes(size, atmo, hydro, pop, gov, law, tech) {
  let tradeCodes = '';
  let description = '';

  //Agricultural
  if (atmo >= 4 && atmo <= 9 && hydro >= 4 && hydro <= 8 && pop >= 5 && pop <= 7) {
    tradeCodes += 'Ag, ';
    description += 'Dedicated to farming and food production. Often they are divided into vast semi-feudal estates. ';
  }

  //Asteroid
  if (size == 0 && atmo == 0 && hydro == 0) {
    tradeCodes += 'As, ';
    description += 'Usually mining colonies but can also be orbital factories or colonies. ';
  }

  //Barren
  if (pop == 0 && gov == 0 && law == 0) {
    tradeCodes += 'Ba, ';
    description += 'Uncolonised an empty. ';
  }

  //Desert
  if (atmo >= 2 && atmo <= 9 && hydro == 0) {
    tradeCodes += 'De, ';
    description += 'Dry and barely habitable. ';
  }

  //Fluid Oceans
  if (atmo >= 10 && hydro >= 1) {
    tradeCodes += 'Fl, ';
    description += 'The surface liquid is something other than water, and so are incompatible with Earth-derived life. ';
  }

  //Garden
  if (size >= 6 && size <= 8 && (atmo == 5 || atmo == 6 || atmo == 9) && hydro >= 5 && hydro <= 7) {
    tradeCodes += 'Ga, ';
    description += 'Earth-like. ';
  }

  //High Pop
  if (pop >= 9) {
    tradeCodes += 'Hi, ';
    description += 'A population in the billions. ';
  }

  //High Tech
  if (tech >= 12) {
    tradeCodes += 'Ht, ';
    description += 'Among the most technologically advanced in Charted Space. ';
  }

  //Ice-Capped
  if (atmo <= 1 && hydro >= 1) {
    tradeCodes += 'Ic, ';
    description += 'Most of the surface liquid frozen in polar ice caps, and are cold and dry. ';
  }

  //Industrial
  if ((atmo <= 2 || atmo == 4 || atmo == 7 || atmo >= 9) && pop >= 9) {
    tradeCodes += 'In, ';
    description += 'Dominated by factories and cities. ';
  }

  //Low Pop
  if (pop <= 3) {
    tradeCodes += 'Lo, ';
    description += 'A population of only a few thousand or less. ';
  }

  //Low Tech
  if (pop >= 1 && tech <= 6) {
    tradeCodes += 'Lt, ';
    description += 'Preindustrial and cannot produce advanced goods. ';
  }

  //Non-Agricultural
  if (atmo <= 3 && hydro <= 3 && pop >= 6) {
    tradeCodes += 'Na, ';
    description += 'Too dry or barren to support their populations using conventional food production. ';
  }

  //Non-Industrial
  if (pop >= 4 && pop <= 6) {
    tradeCodes += 'Ni, ';
    description += 'Too low in population to maintain an extensive industrial base. ';
  }

  //Poor
  if ((atmo >= 2 && atmo <= 5) && hydro <= 3) {
    tradeCodes += 'Po, ';
    description += 'Lacking in resources, viable land, or sufficient population to be anything other than marginal colonies. ';
  }

  //Rich
  if ((atmo == 6 || atmo == 8) && (pop >= 6 && pop <= 8) && (gov >= 4 && gov <= 9)) {
    tradeCodes += "Ri, ";
    description += 'Blessed with a stable government and viable biosphere, making them economic powerhouses. ';
  }

  //Vacuum
  if (atmo == 0) {
    tradeCodes += 'Va, ';
    description += 'No atmosphere. ';
  }

  //Waterworld
  if (((atmo >= 3 && atmo <= 9) || atmo >= 13) && hydro >= 10) {
    tradeCodes += 'Wa, ';
    description += 'Almost entirely water-ocean across their surface. ';
  }

  return { tradeCodes, tsDesc: description };
}
