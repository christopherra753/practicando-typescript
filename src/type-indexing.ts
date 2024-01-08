type HeroProperties = {
  isActive: boolean,
  address: {
    planet: string,
    city: string
  }
}

const addressHero: HeroProperties["address"] = {
  city: "Madrid",
  planet: "Earth"
}


//Type from value
const address = {
  city: "Madrid",
  planet: "Earth"
}

type Address = typeof address

const addressTwitch: Address = {
  planet: "Mars",
  city: "Twitch"
}