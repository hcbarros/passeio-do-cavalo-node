
const validacao = require('./validar')
const arr = require('./arrays')


var objeto = arr.objeto
var matriz = arr.matrizVazia.obj

const notacao = validacao.validar()
var array = arr.array(notacao)

//process.exit(1)

console.log(array)