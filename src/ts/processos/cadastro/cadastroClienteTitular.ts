import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import MenuTipoCadastroAcomodacao from "../../menus/menuTipoCadastroAcomodacao";
import Cliente from "../../modelos/cliente";
import CadastrarDocumentosCliente from "./cadastrarDocumentosCliente";
import CadastroEnderecoTitular from "./cadastroEnderecoTitular";
import CadastroTelefoneTitular from "./cadastroTelefoneTitular";

export default class CadastroClienteTitular extends Processo {
    constructor(){
        super()
    }
    processar(): void {
        let armazem = Armazem.InstanciaUnica
        console.log('Iniciando o cadastro de um novo cliente...')
        let nome = this.entrada.receberTexto('Qual o nome do novo cliente?')
        let nomeSocial = this.entrada.receberTexto('Qual o nome social do novo cliente?')
        let dataNascimento = this.entrada.receberData('Qual a data de nascimento?')
        let dataCadastro = this.entrada.receberData('Qual a data de cadastro?')
        let ultimoId = armazem.Id + 1
            
        let cliente = new Cliente(ultimoId, nome, nomeSocial, dataNascimento, dataCadastro)

        this.processo = new CadastroEnderecoTitular(cliente)
        this.processo.processar()

        this.processo = new CadastrarDocumentosCliente(cliente)
        this.processo.processar()

        this.processo = new CadastroTelefoneTitular(cliente)
        this.processo.processar()

        armazem.Clientes.push(cliente)
        armazem.setId =  ultimoId            
        console.log('Finalizando o cadastro do cliente...')
    }
}