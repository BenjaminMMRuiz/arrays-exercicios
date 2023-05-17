//# Exercício 3

//Agora, vamos **manipular** os arrays, adicionando ou removendo informações. 
//Para isso, crie **três novos arrays**, chamados `nomeDoArrayOriginalCopia`. 
//Por exemplo, se o seu primeiro array se chama **meusNumeros**, você deve criar um array **meusNumerosCopia**, e assim por diante.
//Copie cada um dos arrays originais para sua respectiva cópia usando o método `slice()`.

//Faça o que se pede abaixo nas **cópias** dos arrays originais:

//a) Adicione um item `number` ao **início** do primeiro array. Utilize `console.log()` para exibir o original e a cópia.

//b) Remova o **último item** do segundo array. Utilize `console.log()` para exibir o original e a cópia.

//c) Remova o **segundo item** do terceiro array. Utilize `console.log()` para exibir o original e a cópia.


//**Obs:** copie os arrays criados no exercício 1 para dentro do arquivo *script.js* do exercício 3.

const nomeArrayOriginal = [5, 8, 4, 90, 7, 4, 6, 1]
const nomeArraycopia = nomeArrayOriginal.slice(0, )
const nomeArraycopia2 = nomeArrayOriginal.slice(0, )

nomeArraycopia.unshift(1)
nomeArraycopia2.pop()
nomeArraycopia2.splice(2, 1)

console.log(nomeArrayOriginal, nomeArraycopia, nomeArraycopia2)