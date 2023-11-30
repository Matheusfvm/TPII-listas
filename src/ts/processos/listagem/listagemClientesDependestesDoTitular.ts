import Processo from "../../abstracoes/processo"
import Armazem from "../../dominio/armazem"
import ImpressaorCliente from "../../impressores/impressorCliente"
import Impressor from "../../interfaces/impressor"
import Cliente from "../../modelos/cliente"

export default class ListagemClientesDependentesDoTitular extends Processo {
    private listaClientes: Cliente[]
    private listaDependente:Cliente[] = []
    private clienteTitularEscolhido!: Cliente
    private impressor!: Impressor
    constructor() {
        super()
        this.listaClientes = Armazem.InstanciaUnica.Clientes
        this.execucao = true
    }
    processar(): void {
        console.clear()
        let id = this.entrada.receberNumero('Id do cliente titular?')
        while (this.execucao) {
            this.listaClientes.forEach(cliente => {
                if (cliente.Id == id && cliente.Titular == null) {
                    this.clienteTitularEscolhido = cliente
                }
            })
            if (this.clienteTitularEscolhido == null) {
                console.log('Nenhum cliente titular encontrado!')
                this.execucao = false
            } else {
                console.log('Iniciando a listagem dos dependentes desse titular...')
                this.clienteTitularEscolhido.Dependentes.forEach(cliente => {
                    this.listaDependente.push(cliente)
                })
                this.listaDependente.forEach(clienteDependente => {
                    this.impressor = new ImpressaorCliente(clienteDependente)
                    console.log(this.impressor.imprimir())
                })
                this.execucao = false 
            }
        }         
    }
}