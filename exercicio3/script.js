//códigos a serem reescritos

// a)
// if(nome === "José"){
// 	console.log("Oi, Zé!")
// } else {
// 	console.log("Olá, " + nome)
// }


// // b)
// if(idade >= 18){
// 	console.log("Pode tirar carteira de motorista!")
// } else {
// 	console.log("Ainda não pode tirar carteira de motorista!")
// }

function vericarNome (){
	const nome = prompt("Qual o seu nome?")
	nome.toLowerCase() === "josé" ? console.log("Fala, Zezé") : console.log(`Olá, ${nome}!`)
}

vericarNome()

function vericarIdade () {
	const idade = +prompt("Qual a sua idade?")
	idade >= 18 ? console.log("Pode tirar carteira carteira de moptorista!") : console.log("Ainda não pode tirar carteira de motorista")
}

vericarIdade()
