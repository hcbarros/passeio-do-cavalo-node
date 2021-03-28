
const validacao = require('./validar')
const arr = require('./arrays')

var notacao = validacao.validar()
var array = arr.getArray(notacao)


var result = []

const processar = () => {
    process.stdout.write("\u001b[2J\u001b[0;0H");
    process.stdout.write('\033c');
    console.log('\033[2J');
    if(array.length === 0) {
      result.map((notac) => console.log(notac))
      process.exit(1)
    }
    notacao = array.shift()
    result.push(notacao)
    var i = arr.getIndex(notacao)
    arr.print(i)
}


var interval = setInterval(() => {
   processar()
}, 1000);

