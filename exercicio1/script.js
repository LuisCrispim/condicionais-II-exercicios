// # Exercício 1

// Crie um código que receba um número por **prompt** e verifique se esse número é divisível por 2 **ou** por 3.
    
// Faça isso:
    
// **a)** Utilizando ifs aninhados
// ```jsx
//     if (expressao) {
//        if (expressao) {

//        } else {
        
//        }
          
//     } else {
    
//         if (expressao) {

//         }
//     }
// ```
// **b)** Utilizando um operador lógico para unir duas operações relacionais
// ```jsx
//     if(expressao && expressao){
//         // utilizamos && para E 
    
//     }
    
//     if(expressao || expressao){
//         // utilizamos o II para OU
//     }
// ```


const seraDiv = +prompt("Informe um número")


function verificarNumero () {
    if(seraDiv % 2 === 0) {
        console.log(`O número ${seraDiv} é divisível por 2`)
        if(seraDiv % 3 === 0) {
            console.log(`O número ${seraDiv} é divisível por 3`)
    } else {
        console.log(`O número ${seraDiv} não é divisível por 3`) }
    } else {
        console.log(`O número ${seraDiv} não é divisível por 2`)
    }

    console.log("===================")
}

verificarNumero()

function verificarNumero2 () {
    if(seraDiv % 2 === 0 && seraDiv % 3 === 0) {
        console.log(`O número ${seraDiv} é divisível por 2 e 3`) 
    } else {
        console.log(`O número ${seraDiv} não é divisível por 2 e 3`)
    }
}

verificarNumero2()