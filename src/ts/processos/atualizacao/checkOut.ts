import Processo from "../../abstracoes/processo"
import Armazem from "../../dominio/armazem"
import { TipoHospedagem } from "../../enumeracoes/TipoHospedagem"
import MenuTipoCadastroAcomodacao from "../../menus/menuTipoCadastroAcomodacao"
import Acomodacao from "../../modelos/acomodacao"
import Cliente from "../../modelos/cliente"

export default class CheckIn extends Processo {
    clienteEscolhido!: Cliente
    constructor(){
        super()
        this.menu = new MenuTipoCadastroAcomodacao()
    }
    processar(): void {
        let armazem = Armazem.InstanciaUnica
        console.log('Iniciando o Check-out de um cliente...')      
        let idTitular = this.entrada.receberNumero('Id do cliente hospedado?')      
        while (this.execucao) {
            armazem.Clientes.forEach(cliente => {
                if (cliente.Id == idTitular && cliente.Acomodacao != null) {
                    this.clienteEscolhido = cliente
                    this.clienteEscolhido.setAcomodacao = new Acomodacao()
                    this.clienteEscolhido.setDataInicioHospedagem = new Date()
                    this.clienteEscolhido.setDataFinalHospedagem = new Date()
                    this.clienteEscolhido.setTipoHospedagem = TipoHospedagem.Indefinido
                }
            })
            if (this.clienteEscolhido == null) {
                console.log('Nenhum cliente hospedado encontrado!')
                idTitular = this.entrada.receberNumero('Id do cliente hospedado?')
            } else { this.execucao = false }
        }
        console.log('Finalizando o check-out do cliente...')
    }
}