import Menu from "../interfaces/menu";

export default class MenuTipoListagemClientes implements Menu {
    mostrar(): void {
        console.clear()
        console.log(`****************************`)
        console.log(`| Qual o tipo de listagem desejada? `)
        console.log(`----------------------`)
        console.log(`| 1 - Cliente Único`)
        console.log(`| 2 - Todos os titulares`)
        console.log(`| 3 - Todos os dependentes de um titular específico`)
        console.log(`| 4 - Todos os Dependentes`)
        console.log(`| 5 - Titular de um dependentes específico`)
        console.log(`----------------------`)
    }
}