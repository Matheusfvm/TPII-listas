import Processo from "../../abstracoes/processo"
import Armazem from "../../dominio/armazem"
import ImpressaorCliente from "../../impressores/impressorCliente"
import Impressor from "../../interfaces/impressor"
import Cliente from "../../modelos/cliente"

export default class ListagemClienteTitularDoDependente extends Processo {
    private listaClientes: Cliente[]
    private clienteDependenteEscolhido!: Cliente
    private impressor!: Impressor
    constructor() {
        super()
        this.listaClientes = Armazem.InstanciaUnica.Clientes
    }
    processar(): void {
        console.clear()
        let id = this.entrada.receberNumero('Id do cliente dependente?')
        console.log('Iniciando a listagem do titular desse dependente...')
        this.listaClientes.forEach(clienteDependente => {
            if (clienteDependente.Id == id) {
                this.clienteDependenteEscolhido = clienteDependente
            }           
        });
        this.impressor = new ImpressaorCliente(this.clienteDependenteEscolhido.Titular)
        console.log(this.impressor.imprimir())
    }
}