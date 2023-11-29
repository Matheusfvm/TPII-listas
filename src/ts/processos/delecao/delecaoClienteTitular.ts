import Processo from "../../abstracoes/processo"
import Armazem from "../../dominio/armazem"
import Cliente from "../../modelos/cliente"

export default class DelecaoClienteTitular extends Processo {
    private clienteTitular!: Cliente
    private clienteDependente!: Cliente
    constructor(){
        super()
        this.execucao = true
    }

    public processar(): void {
        let armazem = Armazem.InstanciaUnica

        console.log('Inicializando a deleção de cliente titular...')
        let idCliente = this.entrada.receberNumero('Id do cliente titular?')
        while (this.execucao) {
            armazem.Clientes.forEach(cliente => {
                if (cliente.Id == idCliente && cliente.Titular == null) {
                    this.clienteTitular = cliente
                }
            })
            if (this.clienteTitular == null) {
                console.log('Nenhum cliente titular encontrado!')
                idCliente = this.entrada.receberNumero('Id do cliente titular?')
            } else { this.execucao = false }
        }

        let indexDoClienteTitular = armazem.Clientes.findIndex(clienteTitular => {
            return clienteTitular.Id == idCliente
        })
        if (indexDoClienteTitular != -1) {
            armazem.Clientes.splice(indexDoClienteTitular, 1)
        }

        while (this.execucao) {
            if (this.clienteTitular.Dependentes != null){
                this.clienteTitular.Dependentes.forEach(dependente => {
                    this.clienteDependente = dependente

                let indexDoClienteDependente = armazem.Clientes.findIndex(clienteDependente => {
                    return clienteDependente.Id == this.clienteDependente.Id
                })
                if (indexDoClienteDependente != -1) {
                    armazem.Clientes.splice(indexDoClienteDependente, 1)
                }
                })
            } else { this.execucao = false }
        }
    }
}