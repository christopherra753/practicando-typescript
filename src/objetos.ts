
//Tipos
type HeroId = `${string}-${string}-${string}-${string}-${string}`


type Hero2 = {
  readonly id?: HeroId,
  name: string,
  age: number,
  isActive?: boolean
}

let hero2: Hero2 = {
  name: "thor",
  age: 1500
}

function createHero2(hero: Hero2): Hero2 {
  const { name, age } = hero
  return {
    id: crypto.randomUUID(),
    name,
    age,
    isActive: true
  }
}

const thor = createHero2({ name: "Thor", age: 1500 })


