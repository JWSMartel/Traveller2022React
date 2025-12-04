import { Roll } from "./Roll";

export function CreateCulture() {
  const cultureTensRoll = Roll(1, 6);
  const cultureOnesRoll = Roll(1, 6);
  let description = '';
  let culture = '';
  switch (cultureTensRoll) {
    case 1:
      switch (cultureOnesRoll) {
        case 1:
          culture = 'Sexist';
          description += "One gender is considered subservient or inferior to the other. ";
          break;
        case 2:
          culture = 'Religious';
          description += "Culture is heavily influenced by a religion or belief system, possibly one unique to this world. ";
          break;
        case 3:
          culture = 'Artistic';
          description += "Art and culture are highly prized Aesthetic design is important in all artifacts produced onworld. ";
          break;
        case 4:
          culture = 'Ritualised';
          description += "Social interaction and trade is highly formalised Politeness and adherence to traditional forms is considered very important. ";
          break;
        case 5:
          culture = 'Conservative';
          description += "The culture resists change and outside influences. ";
          break;
        case 6:
          culture = 'Xenophopic';
          description += "The culture distrusts outsiders and alien influences Offworlders will face considerable prejudice. ";
          break;
      }
      break;
    case 2:
      switch (cultureOnesRoll) {
        case 1:
          culture = 'Taboo';
          description += "A particular topic is forbidden and cannot be discussed. Characters who unwittingly mention this topic will be ostracised. ";
          break;
        case 2:
          culture = "Deceptive";
          description += "Trickery and equivocation are considered acceptable. Honesty is a sign of weakness. ";
          break;
        case 3:
          culture = 'Liberal';
          description += "The culture welcomes change and offworld influence. Characters who bring new and strange ideas will be welcomed. ";
          break;
        case 4:
          culture = "Honourable";
          description += "One's word is one's bond in the culture. Lying is both rare and despised. ";
          break;
        case 5:
          culture = "Influenced";
          description += "The culture is heavily influenced by another, neighbouring world. If you have the details for the neighbouring world, choose a cultural quirk that this world has adopted. If not roll for one. ";
          //TODO: If adjacent to another planet, use their major culture
          break;
        case 6:
          culture = "Fusion";
          description += "The culture is heavily influenced by another, neighbouring world. If you have the details for the neighbouring world, choose a cultural quick that this world has adopted. If not, roll for one. ";
          //TODO: Neighbor detection or roll again?
          break;
      }
      break;
    case 3:
      switch (cultureOnesRoll) {
        case 1:
          culture = "Barbaric";
          description += "Physical strength and combat prowess are highly valued in the culture. Characters may be challenged to a fight, or dismissed if they seem incapable of defending themselves. Sports tend towards bloody and violent. ";
          break;
        case 2:
          culture = 'Remnant';
          description += "The culture is surviving remnant of a once-great and vibrant civilisation, clinging to its former glory. The world is filled with crumbling ruins, and every story revolves around the good old days. ";
          break;
        case 3:
          culture = 'Degenerate';
          description += "The culture is falling apart and is on the brink of war or economic collapse. Violent protests are common and the social order is decaying. ";
          break;
        case 4:
          culture = 'Progressive';
          description += "The culture is expanding and vibrant. Fortunes are being made in trade; science is forging bravely ahead. ";
          break;
        case 5:
          culture = 'Recovering';
          description += "A recent trauma, such as a plague, war, disaster or despotic regime has left scars on the culture. ";
          break;
        case 6:
          culture = 'Nexus';
          description += "Members of many different cultures and species visit here. ";
          break;
      }
      break;
    case 4:
      switch (cultureOnesRoll) {
        case 1:
          culture = 'Tourist Attraction';
          description += "Some aspect of the culture or the planet draws visitors from all over charted space. ";
          break;
        case 2:
          culture = 'Violent';
          description += "Physical conflict is common, taking the form of duels, brawls or other contests. Trial by combat is a part of their judicial system. ";
          break;
        case 3:
          culture = 'Peaceful';
          description += "Physical conflict is almost unheard-of. The culture produces few soldiers and diplomacy reigns supreme. Forceful characters will be ostracised ";
          break;
        case 4:
          culture = 'Obsessed';
          description += "Everyone is obsessed with or addicted to a substance, personality, act or item. This monomania pervades every aspect of the culture. ";
          break;
        case 5:
          culture = 'Fashion';
          description += "Fine clothing and decoration are considered vitally important in the culture. Underdressed characters have no standing here. ";
          break;
        case 6:
          culture = 'At War';
          description += "The culture is at war, either with another planet or polity, or is troubled by terrorists or rebels. ";
          break;
      }
      break;
    case 5:
      switch (cultureOnesRoll) {
        case 1:
          culture = 'Unusual Custom - Offworlders';
          description += "Space travellers hold a unique position in the culture’s mythology or beliefs, and travellers will be expected to live up to these myths. ";
          break;
        case 2:
          culture = 'Unusual Custom - Starport';
          description += "The planet’s starport is more than a commercial centre; it might be a religious temple, or be seen as highly controversial and surrounded by protestors. ";
          break;
        case 3:
          culture = 'Unusual Custom - Media';
          description += "News agencies and telecommunications channels are especially strange here. Getting accurate information may be difficult. ";
          break;
        case 4:
          culture = 'Unusual Customs - Technology';
          description += "The culture interacts with technology in an unusual way. Telecommunications might be banned, robots might have civil rights, cyborgs might be property. ";
          break;
        case 5:
          culture = 'Unusual Customs - Lifecycle';
          description += "There might be a mandatory age of termination, or anagathics might be widely used. Family units might be different, with children being raised by the state or banned in favour of cloning. ";
          break;
        case 6:
          culture = 'Unusual Customs - Social Standings';
          description += "The culture has a distinct caste system. Characters of a low social standing who do not behave appropriately will face punishment. ";
          break;
      }
      break;
    case 6:
      switch (cultureOnesRoll) {
        case 1:
          culture = 'Unusual Customs - Trade';
          description += "The culture has an odd attitude towards some aspect of commerce, which may interfere with trade at the spaceport. For example, merchants might expect a gift as part of a deal, or some goods may only be handled by certain families ";
          break;
        case 2:
          culture = 'Unusual Customs - Nobility';
          description += "Those of high social standing have a strange custom associated with them; perhaps nobles are blinded, or must live in gilded cages, or only serve for a single year before being exiled. ";
          break;
        case 3:
          culture = 'Unusual Customs - Sex';
          description += "The culture has an unusual attitude towards intercourse and reproduction. Perhaps cloning is used instead, or sex is used to seal commercial deals. ";
          break;
        case 4:
          culture = 'Unusual Customs - Eating';
          description += "Food and drink occupies an unusual place in the culture. Perhaps eating is a private affair, or banquets and formal dinners are seen as the highest form of politeness. ";
          break;
        case 5:
          culture = 'Unusual Customs - Travel';
          description += "Travellers may be distrusted or feted, or perhaps the culture frowns on those who leave their homes. ";
          break;
        case 6:
          culture = 'Unusual Custom - Conspiracy';
          description += "Something strange is going on. The government is being subverted by another group or agency. ";
          break;
      }
      break;
  }

  console.log("Culture in culture: "+culture);
  return { culture, description };
}
