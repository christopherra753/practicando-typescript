
//Tipos
type Hero = {
  name: string,
  age: number
}

let hero: Hero = {
  name: "thor",
  age: 1500
}

function createHero(hero: Hero): Hero {
  const { name, age } = hero
  return { name, age }
}

createHero({ name: "Thor", age: 1500 })