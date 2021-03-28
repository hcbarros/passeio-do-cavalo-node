
const validacao = require('./validar')
const arr = require('./arrays')


var objeto = arr.objeto
var matriz = arr.matrizVazia.obj

const notacao = validacao.validar()

var array = arr.array(notacao)

//process.exit(1)



setInterval(() => {

    process.stdout.write("\u001b[2J\u001b[0;0H");
    process.stdout.write('\033c');
    console.log('\033[2J');
    console.table(matriz)
}, 2000);

    