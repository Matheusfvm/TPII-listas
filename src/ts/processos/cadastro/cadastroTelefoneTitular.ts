import Processo from "../../abstracoes/processo"
import Cliente from "../../modelos/cliente"
import Telefone from "../../modelos/telefone"

export default class CadastroTelefoneTitular extends Processo {
    private cliente: Cliente

    constructor(cliente: Cliente) {
        super()
        this.cliente = cliente
        this.execucao = true
    }

    processar(): void {
        console.clear()
        console.log('Inciando o cadastro de telefones...')
        console.log(`****************************`)       
        while (this.execucao) {
            console.log(`----------------------`)
            console.log(`| 1 - Cadastro do número de telefone`)
            console.log(`| 0 - Finalizar cadastro de telefones`)
            console.log(`----------------------`)
            this.opcao = this.entrada.receberNumero('| Qual opção desejada?')            
            switch (this.opcao) {
                case 1:
                    console.log('Coletando os dados de telefone...')
                    let ddd = this.entrada.receberTexto('Qual o ddd?')
                    let numero = this.entrada.receberTexto('Qual o número?')
                    let telefone = new Telefone(ddd, numero)
                    this.cliente.Telefones.push(telefone)
                    break
                case 0:
                    this.execucao = false
                    break
                default:
                    console.log('Opção não entendida :(')        
            }
        }
    }
}