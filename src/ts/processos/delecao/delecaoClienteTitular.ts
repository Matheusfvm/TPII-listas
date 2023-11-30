import Processo from "../../abstracoes/processo"
import Armazem from "../../dominio/armazem"
import Cliente from "../../modelos/cliente"

export default class DelecaoClienteTitular extends Processo {
    private clienteTitular!: Cliente
    private listaClientesDependentes: Cliente[] = []
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
                this.execucao = false
            } else {
                let indexDoClienteTitular = armazem.Clientes.findIndex(clienteTitular => {
                    return clienteTitular == this.clienteTitular
                })

                if (indexDoClienteTitular != -1) {
                    armazem.Clientes.splice(indexDoClienteTitular, 1)
                }
                console.log('Cliente deletado com sucesso!')
                this.execucao = false
            }                
        }
    }
}