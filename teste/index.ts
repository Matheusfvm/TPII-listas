import CadastroCliente from "../cadastro/cadastroClienteTitular";
import Entrada from "../entradas/entrada";


let entrada = new Entrada
let cadastrarCliente = new CadastroCliente
let execucao = true
while(execucao){
    console.log("\n---- MENU ----")
    console.log("1 - Cadastrar Cliente\n2 - Sair\n")
    let opcao = entrada.receberNumero("Escolha uma opção: ")  
    switch(opcao){
        case 1:{
            let cliente = cadastrarCliente.cadastrar()
            console.dir(cliente, { depth: null })
            break;
        }
        case 2:{
            execucao = false
            console.log("Até a próxima.")
            break;
        }
        default:{
            console.log("Opção invalida.")
        }
    }

}