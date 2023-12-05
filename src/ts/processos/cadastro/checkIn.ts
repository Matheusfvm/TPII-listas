import Processo from "../../abstracoes/processo"
import Armazem from "../../dominio/armazem"
import { TipoHospedagem } from "../../enumeracoes/TipoHospedagem"
import MenuTipoCadastroAcomodacao from "../../menus/menuTipoCadastroAcomodacao"
import Cliente from "../../modelos/cliente"

export default class CheckIn extends Processo {
    clienteTitular!: Cliente
    hospedagemEscolhida!: TipoHospedagem
    constructor(){
        super()
        this.menu = new MenuTipoCadastroAcomodacao()
    }
    processar(): void {
        let armazem = Armazem.InstanciaUnica
        console.log('Iniciando o Check-in de um cliente...')      
        let idTitular = this.entrada.receberNumero('Id do cliente titular?')
        let listaAcomodacao = armazem.Acomodacoes      
        while (this.execucao) {
            armazem.Clientes.forEach(cliente => {
                if (cliente.Id == idTitular && cliente.Titular == null) {
                    this.clienteTitular = cliente
                }
            })
            if (this.clienteTitular == null) {
                console.log('Nenhum cliente titular encontrado!')
                idTitular = this.entrada.receberNumero('Id do cliente titular?')
            } else { this.execucao = false }
        }
        if (this.clienteTitular != null) {
            console.log('Qual o tipo de hospedagem do estabelecimento?')
            console.log('1 - Pousada')
            console.log('2 - Hotel')
            console.log('3 - Resort')
            let opcaoHospedagem = this.entrada.receberNumero('Qual a opção escolhida?')
            if (opcaoHospedagem == 1) {
                this.hospedagemEscolhida = TipoHospedagem.Pousada
            } else if ( opcaoHospedagem = 2) {
                this.hospedagemEscolhida = TipoHospedagem.Hotel
            } else {
                this.hospedagemEscolhida = TipoHospedagem.Resort
            }
            this.clienteTitular.setTipoHospedagem = this.hospedagemEscolhida
            
            this.clienteTitular.setDataInicioHospedagem = this.entrada.receberData('Data do início da acomodação?')
            this.clienteTitular.setDataFinalHospedagem = this.entrada.receberData('Data do final da acomodação?')

            this.menu.mostrar()
            this.opcao = this.entrada.receberNumero('Qual opção desejada?')
            this.clienteTitular.setAcomodacao = listaAcomodacao[this.opcao - 1]

        }
        
        console.log('Finalizando o check-in do cliente...')
    }
}