//# Exercício 2

//Com os arrays criados no exercício 1, vamos fazer algumas observações. 
//Faça o que se pede abaixo, utilizando `console.log()`:

//a) Imprima a **quantidade de itens** de cada array 
//(utilize um `console.log()` para cada impressão).

//b) Imprima o **primeiro item** do primeiro array, o **segundo item** 
//do segundo array, e o **terceiro item** do terceiro array.

//c) **Verifique** se um item está incluído no primeiro array e depois no 
//terceiro array. Imprima o resultado dessas verificações no `console.log()`. 
//A primeira impressão deve retornar um booleano **true** e a segunda deve retornar um booleano **false**.

//**Obs:** copie os arrays criados no exercício 1 
//para dentro do arquivo *script.js* do exercício 2.

const arrayNumero = [2, 5, 89, 45]
const arrayString = ["tatu", "gato", "boi"]
const  arrayMix = ["Banana", 82, true]

console.log(arrayNumero.length)
console.log(arrayString.length)
console.log(arrayMix.length)

console.log(arrayNumero[0])
console.log(arrayString[1])
console.log(arrayMix[2])

console.log(arrayNumero.includes(5))
console.log(arrayString.includes(5))

