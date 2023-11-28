import Processo from "../../abstracoes/processo"
import Armazem from "../../dominio/armazem"
import ImpressaorCliente from "../../impressores/impressorCliente"
import Impressor from "../../interfaces/impressor"
import Cliente from "../../modelos/cliente"

export default class ListagemClienteUnico extends Processo {
    private listaClientes: Cliente[]
    private clienteEscolhido!: Cliente
    private impressor!: Impressor
    constructor() {
        super()
        this.listaClientes = Armazem.InstanciaUnica.Clientes
    }
    processar(): void {
        console.clear()
        let id = this.entrada.receberNumero('Id do cliente?')
        console.log('Iniciando a listagem desse cliente...')
        this.listaClientes.forEach(cliente => {
            if (cliente.Id == id) {
                this.clienteEscolhido = cliente
            }           
        });
        this.impressor = new ImpressaorCliente(this.clienteEscolhido)
        console.log(this.impressor.imprimir())
    }
}