import Processo from "../../abstracoes/processo"
import Armazem from "../../dominio/armazem"
import ImpressaorCliente from "../../impressores/impressorCliente"
import Impressor from "../../interfaces/impressor"
import Cliente from "../../modelos/cliente"

export default class ListagemClienteDependentesDoTitular extends Processo {
    private listaClientes: Cliente[]
    private clienteEscolhido!: Cliente
    private impressor!: Impressor
    constructor() {
        super()
        this.listaClientes = Armazem.InstanciaUnica.Clientes
    }
    processar(): void {
        console.clear()
        let id = this.entrada.receberNumero('Id do cliente titular?')
        console.log('Iniciando a listagem dos dependentes desse titular...')
        this.listaClientes.forEach(clienteTitular => {
            if (clienteTitular.Id == id) {
                this.clienteEscolhido = clienteTitular
            }           
        });
        let listaDependente = this.clienteEscolhido.Dependentes
        listaDependente.forEach(clienteDependente => {
            this.impressor = new ImpressaorCliente(clienteDependente)
            console.log(this.impressor.imprimir())
        })
    }
}