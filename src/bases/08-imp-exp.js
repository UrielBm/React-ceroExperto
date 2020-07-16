import {heroes as heroes, owners} from './data/heroes'

console.log(owners)

const GetHeroesId=(id)=> heroes.find((heroes)=> heroes.id===id);

console.log(GetHeroesId(2))

const GetHeroesByOwners=(Owners)=> heroes.filter((heroes)=> heroes.owner===Owners);

const [,,s3]=GetHeroesByOwners('DC');
console.log([GetHeroesByOwners('DC')]);
console.log(GetHeroesByOwners('Marvel'));

console.log(s3)