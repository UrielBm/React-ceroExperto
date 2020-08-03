import {GetHeroesId,GetHeroesByOwners} from './bases/08-imp-exp';
/*const promesa= new Promise((resolve,reject)=> {
    setTimeout(() => {
      const heroes= GetHeroesId(2);
      resolve(heroes);
      //reject('no se pudo encontrar el heroe')
    },2000);
});

promesa.then( (heroes)=>{
    console.log('heroe: ', heroes);
})
.catch(err=>console.warn(err)); */

const GetHeroesByIdAsync=(id) =>{

    return new Promise((resolve,reject)=> {
        setTimeout(() => {
          const p1= GetHeroesId(id);
          if(p1)
          {
          resolve(p1);
          }
          else{
          reject('heroe no encontrado')
          }
          //reject('no se pudo encontrar el heroe')
        },2000);
    });
}
GetHeroesByIdAsync(4).then(console.log)
.catch(console.warn);