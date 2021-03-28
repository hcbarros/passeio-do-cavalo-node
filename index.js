
const validacao = require('./validar')
const arr = require('./arrays')

var notacao = validacao.validar()
var array = arr.getArray(notacao)

var result = []

var interval = setInterval(() => {
   
    if (typeof console._commandLineAPI !== 'undefined') {
      console.API = console._commandLineAPI
    } else if (typeof console._inspectorCommandLineAPI !== 'undefined') {
        console.API = console._inspectorCommandLineAPI
    } else if (typeof console.clear !== 'undefined') {
        console.API = console
    }
    console.API.clear()
    
    //process.stdout.write("\u001b[2J\u001b[0;0H");
    //process.stdout.write('\033c');
    
    if(array.length === 0) {
      result.map((notac) => console.log(notac))
      process.exit(1)
    }
    notacao = array.shift()
    result.push(notacao)
    var i = arr.getIndex(notacao)
    arr.print(i)

}, 1000)

