import Processo from "../abstracoes/processo"
import MenuTipoDelecaoCliente from "../menus/menuTipoDelecaoCliente"
import DelecaoCliente from "./delecao/delecaoCliente"

export default class TipoDelecaoClientes extends Processo {
    constructor(){
        super()
        this.menu = new MenuTipoDelecaoCliente()
    }
    
    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual opção desejada?')        
        switch (this.opcao) {
            case 1:
                this.processo = new DelecaoCliente()
                this.processo.processar()
                break;
            case 2:
                this.processo = new DelecaoCliente()
                this.processo.processar()
                break;           
            default:
                console.log('Opção não entendida :(')
        }
    }
}