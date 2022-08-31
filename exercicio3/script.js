const frase = `"Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair""`
const novafrase = frase.replace("verde","rosa").replace("azul","laranja")
console.log(frase)
console.log(novafrase)
console.log ("Inclui verde? " +novafrase.includes("verde")+ "\nInclui laranja? " +novafrase.includes("laranja"))
console.log (novafrase.replace("mas não deixe o gato sair","MAS NÃO DEIXE O GATO SAIR"))