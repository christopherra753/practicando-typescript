//Tipos
type HeroId3 = `${string}-${string}-${string}-${string}-${string}`
type HeroPower = 'local' | 'planetary' | 'galactic' | 'universal' | 'multiversal'


type HeroInput = {
  name: string
  age: number
}

type HeroProperties = {
  readonly id?: HeroId3,
  isActive?: boolean
  powerScale?: HeroPower
}

type Hero4 = HeroInput & HeroProperties

let hero4: Hero4 = {
  name: "thor",
  age: 1500
}

function createHero4(hero: HeroInput): Hero4 {
  const { name, age } = hero
  return {
    id: crypto.randomUUID(),
    name,
    age,
    isActive: true
  }
}

const loki = createHero4({ name: "Loki", age: 1500 })

loki.powerScale = 'local'