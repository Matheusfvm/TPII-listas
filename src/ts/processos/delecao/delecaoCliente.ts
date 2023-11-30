import Processo from "../../abstracoes/processo"
import Armazem from "../../dominio/armazem"
import Cliente from "../../modelos/cliente"

export default class DelecaoCliente extends Processo {
    private clienteEscolhido!: Cliente
    constructor(){
        super()
        this.execucao = true
    }

    public processar(): void {
        let armazem = Armazem.InstanciaUnica

        console.log('Inicializando a deleção de cliente...')
        let idCliente = this.entrada.receberNumero('Id do cliente?')

        while (this.execucao) {
            armazem.Clientes.forEach(cliente => {
                if (cliente.Id == idCliente && cliente.Titular == null) {
                    this.clienteEscolhido = cliente
                }
            })
            if (this.clienteEscolhido == null) {
                console.log('Nenhum cliente encontrado!')
                this.execucao = false
            } else {
                let indexDoCliente = armazem.Clientes.findIndex(clienteTitular => {
                    return clienteTitular == this.clienteEscolhido
                })

                if (indexDoCliente != -1) {
                    armazem.Clientes.splice(indexDoCliente, 1)
                }
                console.log('Cliente deletado com sucesso!')
                this.execucao = false
            }                
        }
    }
}