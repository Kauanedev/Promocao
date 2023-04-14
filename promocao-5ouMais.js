// Caso o cliente compre 5 ou mais produtos, o mais barato deles sairá de graça!

const precos = [100, 500, 100, 200, 50, 30]

let menorNumero = Math.min.apply(null, precos);
console.log(menorNumero)

soma = 0;

for (let valor of precos) {
    soma += valor
}

if (precos.length >= 5) {
    console.log(soma - menorNumero)
}
else {
    console.log(soma)
}


