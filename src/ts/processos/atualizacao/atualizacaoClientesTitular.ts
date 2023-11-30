import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import Cliente from "../../modelos/cliente";
import CadastrarDocumentosCliente from "../cadastro/cadastrarDocumentosCliente";
import CadastroEnderecoTitular from "../cadastro/cadastroEnderecoTitular";
import CadastroTelefoneTitular from "../cadastro/cadastroTelefoneTitular";
import ClonarTelefone from "../cadastro/clonarTelefones";

export default class AtualizacaoClienteTitular extends Processo {
    private clienteTitular!: Cliente
    constructor(){
        super()
        this.execucao = true
    }

    public processar(): void {
        let armazem = Armazem.InstanciaUnica
        let clonarTelefone = new ClonarTelefone

        console.log('Inicializando a atualização de cliente titular...')
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
                this.clienteTitular.setNome = this.entrada.receberTexto('Novo nome?')
                this.clienteTitular.setNomeSocial = this.entrada.receberTexto('Novo nome social?')
        
                this.processo = new CadastrarDocumentosCliente(this.clienteTitular)
                this.processo.processar()

                this.processo = new CadastroEnderecoTitular(this.clienteTitular)
                this.processo.processar()

                this.processo = new CadastroTelefoneTitular(this.clienteTitular)
                this.processo.processar()

                this.clienteTitular.Dependentes.forEach(dependente => {
                    dependente.setEndereco = this.clienteTitular.Endereco.clonar()
                    dependente.setTelefones = clonarTelefone.clonar(this.clienteTitular)
                })

                console.log('Finalizando a atualização do cliente titular...')
                this.execucao = false
            }
        }

        
    }
}