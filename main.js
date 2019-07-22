let list = [1, 2, 3, 4, 5, 5 ,5 ,5 ,3 ,2 ,5 ,4]
let persona = {
    nombre:'Calixta',
    apellido:'Perez',
    edad:'24',
    documento:''
}
/*
console.log(_.uniq(list))
console.log(_.values(persona))
console.log(_.keys(persona))
let isCompleted = !_.some(persona, _.isEmpty)
let isCompleted = Object.keys(persona).map( (e) => persona[e])

console.log(isCompleted)
console.log(moment('2019-24-03', 'YYYY-DD-MM').format('MMM Do YY'))

let fecha =  new Date()

console.log(fecha)
console.log(`${fecha.getUTCFullYear()} ${fecha.getMonth()+1}`)

*/

const segundotexto = () => console.log('luego esto')

setTimeout(() => segundotexto(), 0)

console.log('Primero esto')