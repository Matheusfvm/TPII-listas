import Processo from "../abstracoes/processo"
import MenuTipoAtualizacaoCliente from "../menus/menuTipoAtualizacaoCliente"
import AtualizacaoClienteDependente from "./atualizacao/atualizacaoClienteDependente"
import AtualizacaoClienteTitular from "./atualizacao/atualizacaoClientesTitular"

export default class TipoAtualizacaoCliente extends Processo {
    constructor() {
        super()
        this.menu = new MenuTipoAtualizacaoCliente()
    }
    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual opção desejada?')
        
        switch (this.opcao) {
            case 1:
                this.processo = new AtualizacaoClienteTitular()
                this.processo.processar()
                break
            case 2:
                this.processo = new AtualizacaoClienteDependente()
                this.processo.processar()
                break
            default:
                console.log('Opção não entendida :(')
        }
    }
}