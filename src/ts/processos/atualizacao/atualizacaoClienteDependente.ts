import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import MenuTipoAtualizacaoCliente from "../../menus/menuTipoAtualizacaoCliente";
import Cliente from "../../modelos/cliente";
import CadastrarDocumentosCliente from "../cadastro/cadastrarDocumentosCliente";

export default class AtualizacaoClienteDependente extends Processo {
    private clienteDependente!: Cliente
    constructor(){
        super()
        this.execucao = true
        this.menu = new MenuTipoAtualizacaoCliente
    }

    public processar(): void {
        let armazem = Armazem.InstanciaUnica

        console.log('Inicializando a atualização de cliente dependente...')
        let idCliente = this.entrada.receberNumero('Id do cliente dependente?')
        while (this.execucao) {
            armazem.Clientes.forEach(cliente => {
                if (cliente.Id == idCliente && cliente.Dependentes == null) {
                    this.clienteDependente = cliente
                }
            })
            if (this.clienteDependente == null) {
                console.log('Nenhum cliente dependente encontrado!')
                idCliente = this.entrada.receberNumero('Id do cliente dependente?')
            } else { this.execucao = false }
        }

        this.clienteDependente.setNome = this.entrada.receberTexto('Novo nome?')
        this.clienteDependente.setNomeSocial = this.entrada.receberTexto('Novo nome social?')

        this.processo = new CadastrarDocumentosCliente(this.clienteDependente)
        this.processo.processar()

        console.log('Finalizando a atualização do cliente dependente...')
    }
}