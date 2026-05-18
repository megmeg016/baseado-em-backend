const loja = "SuperMercado";
const produto = "Vassoura";
const categoria = "Limpeza";
let preco = 20.00;
let desconto = 0.10;
let precoFinal = preco - (preco * desconto);

let desconto2 = 0.20;
let precoFinal2 = preco - (preco * desconto2);

let compras = 500;
let final = compras - (compras * desconto2);

let economia = (compras - final)

console.log(`Venha conferir nosso incrível produto: ${produto}, que foi de ${preco} para ${precoFinal}! É a melhor ferramenta para sua ${categoria}.`)
console.log(`${desconto} * ${preco} = ${precoFinal}`)

console.log(`A partir de R$500,00, você tem 20% de desconto! Ao final, você vai pagar: R$${final}, economizando R$${economia}`)

