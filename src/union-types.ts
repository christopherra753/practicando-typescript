//Tipos
type HeroId2 = `${string}-${string}-${string}-${string}-${string}`
type HeroPower = 'local' | 'planetary' | 'galactic' | 'universal' | 'multiversal'

type Hero3 = {
  readonly id?: HeroId2,
  name: string,
  age: number,
  isActive?: boolean
  powerScale?: HeroPower
}

let hero3: Hero3 = {
  name: "thor",
  age: 1500
}

function createHero3(hero: Hero3): Hero3 {
  const { name, age } = hero
  return {
    id: crypto.randomUUID(),
    name,
    age,
    isActive: true
  }
}

const loki = createHero3({ name: "Loki", age: 1500 })

loki.powerScale = 'local'