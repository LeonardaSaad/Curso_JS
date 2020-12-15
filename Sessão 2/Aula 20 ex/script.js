let varA = 'A' // B
let varB = 'B' // C
let varC = 'C' // A
let A = varA

varA = varB  // B
varB = varC  // C
varC = A     // A

// Solução diferente:
//[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC)