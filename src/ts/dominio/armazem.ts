import Acomodacao from "../modelos/acomodacao";
import Cliente from "../modelos/cliente";

export default class Armazem {
    private static instanciaUnica: Armazem = new Armazem()
    private clientes: Cliente[] = []
    private id: number = 0
    private acomodacoes: Acomodacao[] = []
    private numeroAcomodacao: number = 0
    private constructor() { }
    public static get InstanciaUnica() {
        return this.instanciaUnica
    }
    public get Clientes() {
        return this.clientes
    }
    public get Id() {
        return this.id
    }
    public get Acomodacoes(){
        return this.acomodacoes
    }
    public get NumeroAcomodacao(){
        return this.numeroAcomodacao
    }

    public set setId(id: number) { this.id = id }
    public set setNumeroAcomodacao(numeroAcomodacao: number) {this.numeroAcomodacao = numeroAcomodacao}
}