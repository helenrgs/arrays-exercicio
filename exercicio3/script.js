// # Exercício 3

// Agora, vamos manipular os arrays, adicionando ou removendo informações. 
//Para isso, crie **três** novos arrays, chamados `nomeDoArrayOriginalCopia`, 
const arrayOne = [1,2,3,4]
const arrayOneCopia= [1,2,3,4]
const arrayTwo= [24,34,434,43]
const arrayTwoCopia= [24,34,434,43]
const arrayThree= ["vida", "fase", "errar"]
const arrayThreeCopia= ["vida", "fase", "errar"]
//e faça o que se pede abaixo nas cópias dos arrays originais;
// - Adicione um item `number` ao início do primeiro array. Utilize `console.log()` para exibir o original e a cópia;
arrayOneCopia.unshift(5)
console.log(arrayOne, arrayOneCopia)
// - Remova o último item do segundo array. Utilize `console.log()` para exibir o original e a cópia;
arrayTwoCopia.pop()
console.log(arrayTwo, arrayTwoCopia)
// - Remova o segundo item do terceiro array. Utilize `console.log()` para exibir o original e a cópia;
arrayThreeCopia.splice(1,1)
console.log(arrayThree, arrayThreeCopia)