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
        this.execucao = true
    }
    processar(): void {
        console.clear()
        let id = this.entrada.receberNumero('Id do cliente dependente?')
        while (this.execucao) {
            this.listaClientes.forEach(cliente => {
                if (cliente.Id == id && cliente.Titular != null) {
                    this.clienteDependenteEscolhido = cliente
                }
            })
            if (this.clienteDependenteEscolhido == null) {
                console.log('Nenhum cliente dependente encontrado!')
                this.execucao = false
            } else {
                console.log('Iniciando a listagem do titular desse dependente...')
                this.impressor = new ImpressaorCliente(this.clienteDependenteEscolhido.Titular)
                console.log(this.impressor.imprimir())
                this.execucao = false               
            }
             
        }
    }
}