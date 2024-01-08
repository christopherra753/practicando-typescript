//Funciones
function saludar(name: string) {
  console.log(`Hola ${name}`)
}

saludar("Pepe")

//Esto esta mal
saludar(2)




function presentacion({ name, age }: { name: string, age: number }) {
  console.log(`Hola ${name}, tienes ${age} años`)
}

presentacion({ name: "Sebas", age: 18 })


function presentacion2(persona: { name: string, age: number }) {
  const { name, age } = persona
  console.log(`Hola ${name}, tienes ${age} años`)
}

presentacion2({ name: "Roberto", age: 15 })



const sayHi = (name: string) => {
  console.log(`Hola ${name}`)
}


const sayHiFromFunction = (fn: (name: string) => void) => {
  fn("Miguel")
}

sayHiFromFunction(sayHi)


//Arrow functions

const sumar = (a: number, b: number): number => {
  return a + b
}


//Never
function throwError(message: string): never {
  throw new Error(message)
}


//inferencia funciones anonimas segun el contexto
const avengers = ["spiderman", "hulk", "iron man"]

avengers.forEach(avenger => {
  console.log(avenger.toUpperCase())
})



