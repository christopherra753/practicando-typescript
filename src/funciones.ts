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






const sayHiFromFunction = (fn) =>{
  fn("Miguel")
}

sayHiFromFunction((name)=>{
  console.log(`Hola ${name}`)
})


