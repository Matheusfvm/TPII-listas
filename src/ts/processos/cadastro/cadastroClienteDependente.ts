import Processo from "../../abstracoes/processo"
import Armazem from "../../dominio/armazem"
import Cliente from "../../modelos/cliente"
import CadastrarDocumentosCliente from "./cadastrarDocumentosCliente"
import ClonarTelefone from "./clonarTelefones"


export default class CadastroClienteDependente extends Processo {
    private clienteTitular!: Cliente
    public constructor () {
        super()
    }
    processar(): void {
        let armazem = Armazem.InstanciaUnica
        let ultimoId = armazem.Id + 1
        let chave = true
        let clonarTelefones = new ClonarTelefone

        console.log('Iniciando o cadastro de um novo dependente...')
        let idTitular = this.entrada.receberNumero('Id do cliente titular?')
        let nome = this.entrada.receberTexto('Qual o nome do novo dependente?')
        let nomeSocial = this.entrada.receberTexto('Qual o nome social do novo dependente?')
        let dataNascimento = this.entrada.receberData('Qual a data de nascimento?')
        let dataCadastro = this.entrada.receberData('Qual a data de cadastro?')
        
        let clienteDependente = new Cliente(ultimoId, nome, nomeSocial, dataNascimento, dataCadastro)
        
        while (chave) {
            armazem.Clientes.forEach(cliente => {
                if (cliente.Id == idTitular && cliente.Titular == null) {
                    this.clienteTitular = cliente
                }
            })
            if (this.clienteTitular == null) {
                console.log('Nenhum cliente titular encontrado!')
                idTitular = this.entrada.receberNumero('Id do cliente titular?')
            } else { chave = false }
        }

        this.processo = new CadastrarDocumentosCliente(clienteDependente)
        this.processo.processar()
        
        clienteDependente.setEndereco = this.clienteTitular.Endereco.clonar()
        clienteDependente.setTelefones = clonarTelefones.clonar(this.clienteTitular)

        clienteDependente.setTitular = this.clienteTitular
        this.clienteTitular.setDependentes = clienteDependente

        armazem.Clientes.push(clienteDependente)
        armazem.setId = ultimoId
    }
}