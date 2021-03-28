
var read = require('readline-sync');


function validar() {

    var repete = true

    while(repete) {

      repete = false
      
      var notacao = read.question("\ninforme uma notação: ", {
          hideEchoBack: false 
      });

      notacao = notacao.toLowerCase()

      if(notacao.length !== 2) {
        console.log("\nA notação deve ter 2 caracteres!")
        repete = true
      }

      var i1 = notacao.charCodeAt(0)
      var i2 = notacao.charCodeAt(1)

      if((i1 < 97 || i1 > 104 || i2 < 49 || i2 > 56) && !repete) {
        console.log("\nA notação está incorreta!\nO primeiro caracter deve ser uma letra de 'a' a 'h'.\nO segundo caracter eh uma valor de 1 a 8")
        repete = true
      }
    }

  return notacao
}

module.exports.validar = validar