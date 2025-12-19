import { Roll } from "./Roll";

export function CreateTechLevel(starport, size, atmo, hydro, pop, gov) {
  let tech = Roll(1, 6);
  let description = '';
  switch (starport) {
    case 'A':
      tech += 6;
      break;
    case 'B':
      tech += 4;
      break;
    case 'C':
      tech += 2;
      break;
    case 'X':
      tech -= 4;
      break;
  }
  switch (size) {
    case 0:
    case 1:
      tech += 2;
      break;
    case 2:
    case 3:
    case 4:
      tech++;
      break;
  }
  if (atmo < 3) {
    tech++;
  } else {
    switch (atmo) {
      case 'A':
      case 'B':
      case 'C':
      case 'D':
      case 'E':
      case 'F':
        tech++;
        break;
    }
  }
  switch (hydro) {
    case "0-5%":
    case "86-95%":
      tech++;
      break;
    case "96-100%":
      tech += 2;
      break;
  }
  switch (pop) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 8:
      tech++;
      break;
    case 9:
      tech += 2;
      break;
    case 10:
      tech += 4;
      break;
  }
  switch (gov) {
    case 0:
    case 5:
      tech++;
      break;
    case 7:
      tech += 2;
      break;
    case 13:
    case 14:
      tech -= 2;
      break;
  }

  const techRoll = tech;

  //Communications
  if(tech<3){
    description += 'There is no telecommunication system whatsoever here except for whatever facilities the starport offers. ';
  }else if(tech>=4&&tech<=6){
    description += 'Radio and telephone communications between major cities exists but no satellite facilites. ';
  }else if(tech==7||tech==8){
    description += 'Advanced communications grids span the entire planet. ';
  }else{
    description += 'Global communication satellites are cheap and easy to deploy, making telecommunications available from anywhere on the planet. '
  }

  //Environmental Limits
  switch(atmo){
    case 0:
    case 1:
      if(tech<8){
        description += 'At this tech level, the population cannot maintain or repair their life support systems and are likely doomed. ';
      }
      break;
    case 2:
    case 3:
      if(tech<5){
        description += 'At this tech level, the population cannot maintain or repair their life support systems and are likely doomed. ';
      }
      break;
    case 4:
    case 7:
    case 9:
      if(tech<3){
        description += 'At this tech level, the population cannot maintain or repair their life support systems and are likely doomed. ';
      }
      break;
    case 10:
      if(tech<8){
        description += 'At this tech level, the population cannot maintain or repair their life support systems and are likely doomed. ';
      }
      break;
    case 11:
      if(tech<9){
        description += 'At this tech level, the population cannot maintain or repair their life support systems and are likely doomed. ';
      }
      break;
    case 12:
      if(tech<10){
        description += 'At this tech level, the population cannot maintain or repair their life support systems and are likely doomed. ';
      }
      break;
    case 13:
    case 14:
      if(tech<5){
        description += 'At this tech level, the population cannot maintain or repair their life support systems and are likely doomed. ';
      }
      break;
    case 15:
      if(tech<8){
        description += 'At this tech level, the population cannot maintain or repair their life support systems and are likely doomed. ';
      }
      break;
  }

  if(tech<=0){
    tech=0;
    description += 'No technology. They have only discovered the simplest tools and are on par with Stone Age Earth. ';
  }else if(tech>=15){
    tech='F';
    description += 'Black globe generators suggest a new direction for defensive technologies, while the development of synthetic anagathics means that human lifespan is now vastly increased. ';
  }else{
    switch(tech){
      case 1:
        description += 'Roughly on a par with Bronze or Iron Age technology. Science is mostly superstition but manufacture weapons and work metals. ';
        break;
      case 2:
        description += 'Renaissance era technology brings with it a greater understanding of chemisty, physics, biology and astronomy as well as the scientific method. ';
        break;
      case 3:
        description += 'The germ of industrial revolution and steam power. Primitive firearms dominate battlefields. Roughly comparable to the Earth in the early 19th Century. ';
        break;
      case 4:
        description += 'Industrail revolution is in full swing bringin plastics, radio, and other such inventions. Roughly comparable to the lath 19th/early 20th Century Earth. ';
        break;
      case 5:
        description += 'Widespread electrification, telecommunications, and internal combustion. Atomics and primitive computing appears. On par with mid-20th Century Earth. ';
        break;
      case 6:
        description += 'Developed fission power and more advanced computing. Advances in materialstechnology, and rocketry bring about the dawn of the space age. ';
        break;
      case 7:
        description += 'A pre-stellar society can reach orbit reliably and has telecommunications satellites. Computers and integrated circuts become ubiquitous. ';
        break;
      case 8:
        description += 'Able to reach other worlds in the same star system, although terraforming or full colonisation are not within their capacity. Permanent space habitats become possible. Fusion power is commercially viable. ';
        break;
      case 9:
        description += 'Gravity manipulation has been developed, making space travel vastly safer and faster. This research leads to development of the jump drive. This culture can colonise other worlds, although travelling to a colony is often a one-way trip. ';
        break;
      case 10:
        tech='A';
        description += 'With the advent of commonly available jump drives, nearby systems are opened up. Orbital habitats and factories become common. Interstellar travel and trade lead to an economic boom. Colonies become easily viable. ';
        break;
      case 11:
        tech='B';
        description += 'The first true artificial intelligences become possible, as computers are able to model synaptic networks. Grav-supported structures reach to the heavens. Jump-2 travel becomes possible, allowing easier travel beyond the one jump stellar mains. ';
        break;
      case 12:
        tech='C';
        description += 'Planetwide weather control revolutionises terraforming and agriculture. Portable plasma weapons and carrier-mounted fusion guns make the battlefield untenable for unarmoured Jpm-3 travel is developed. ';
        break;
      case 13:
        tech='D';
        description += 'Battle dress appears on the battlefield in response to new weapons, heralding the pinnacle of personal armour and making infantry the equivalient of less advanced armoured vehicles. Cloning of body parts becomes easy. Jump-4 travel appears. ';
        break;
      case 14:
        tech='E';
        description += 'Fusion weapons become portable. Flying cities appear Jump-5 drives are built. ';
        break;
    }
  }

  return {tech, description, techRoll};
}
