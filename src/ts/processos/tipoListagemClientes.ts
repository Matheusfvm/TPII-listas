import Processo from "../abstracoes/processo"
import MenuTipoListagemClientes from "../menus/menuTipoListagemClientes"
import ListagemClienteTitularDoDependente from "./listagem/listagemClienteTitularDoDependente"
import ListagemClienteUnico from "./listagem/listagemClienteUnico"
import ListagemClientesDependentes from "./listagem/listagemClientesDependentes"
import listagemClientesTitulares from "./listagem/listagemClientesTitulares"
import ListagemClienteDependentesDoTitular from "./listagem/listagemDependestesDoTitular"

export default class TipoListagemClientes extends Processo {
    constructor(){
        super()
        this.menu = new MenuTipoListagemClientes()
    }
    
    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual a opção desejada?')
        switch (this.opcao) {
            case 1:
                this.processo= new ListagemClienteUnico()
                this.processo.processar()
                break;
            case 2:
                this.processo = new listagemClientesTitulares()
                this.processo.processar()
                break;
            case 3:
                this.processo = new ListagemClienteDependentesDoTitular()
                this.processo.processar()
                break
            case 4:
                this.processo = new ListagemClientesDependentes()
                this.processo.processar()
                break;
            case 5:
                this.processo = new ListagemClienteTitularDoDependente()
                this.processo.processar()
                break
            default:
                console.log('Opção não entendida... :(')
        }
    }
}