
// Com os arrays criados, agora vamos observar os arrays. Faça o que se pede abaixo, utilizando `console.log()`:
const onlyNumbers = [1,2,3,4,5]
const onlyStrings = ["casa", "vida", "família"]
const mixedArray = ["casa", "vida", 1, 3, false]
// - Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão);
console.log(onlyNumbers.length)
console.log(onlyStrings.length)
console.log(mixedArray.length)
// - Imprima o primeiro item do primeiro array, o segundo item do segundo array, e o terceiro item do terceiro array;
console.log(onlyNumbers[0], onlyStrings[1], mixedArray[2])
// - Verifique se um item está incluído no primeiro array e depois no terceiro array e imprima o resultado destas verificações no console.log(). 
//A primeira impressão deve retornar um booleano true e a segunda deve retornar um booleano false. 
console.log(onlyNumbers.includes(2), mixedArray.includes(2))