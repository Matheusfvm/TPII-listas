import { TipoHospedagem } from "../enumeracoes/TipoHospedagem"
import Acomodacao from "./acomodacao"
import Documento from "./documento"
import Endereco from "./endereco"
import Telefone from "./telefone"

export default class Cliente {
    private id: number
    private nome: string
    private nomeSocial: string
    private dataNascimento: Date
    private dataCadastro: Date
    private telefones: Telefone[] = []
    private endereco!: Endereco
    private documentos: Documento[] = []
    private dependentes: Cliente[] = []
    private titular!: Cliente
    private dataInicioHospedagem!: Date
    private dataFinalHospedagem!: Date
    private tipoHospedagem!: TipoHospedagem
    private acomodacao!: Acomodacao

    constructor(id: number, nome: string, nomeSocial: string, dataNascimento: Date, dataCadastro: Date) {
        this.id = id
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.dataNascimento = dataNascimento
        this.dataCadastro = dataCadastro
    }

    public get Nome() { return this.nome }
    public get Id() { return this.id }
    public get NomeSocial() { return this.nomeSocial }
    public get DataNascimento() { return this.dataNascimento }
    public get DataCadastro() { return this.dataCadastro }
    public get Telefones() { return this.telefones }
    public get Endereco() { return this.endereco }
    public get Documentos() { return this.documentos }
    public get Dependentes() { return this.dependentes }
    public get Titular() { return this.titular }
    public get DataInicioHospedagem() { return this.dataInicioHospedagem}
    public get DataFinalHospedagem() { return this.dataFinalHospedagem}
    public get Acomodacao() { return this.acomodacao}
    public get TipoHospedagem() { return this.tipoHospedagem}

    public set setNome(nome: string) { this.nome = nome }
    public set setNomeSocial(nomeSocial: string) { this.nomeSocial = nomeSocial }
    public set setDataNascimento(dataNascimento: Date) { this.dataNascimento = dataNascimento }
    public set setEndereco(endereco: Endereco) { this.endereco = endereco }
    public set setTitular(titular: Cliente) {this.titular = titular}
    public set setDependentes(dependente: Cliente) {this.dependentes.push(dependente)}
    public set setDocumentos(documento: Documento) {this.documentos.push(documento)}
    public set setTelefones(telefone: Telefone[]) {this.telefones = telefone}
    public set setDataInicioHospedagem(data: Date) {this.dataInicioHospedagem = data}
    public set setDataFinalHospedagem(data: Date) {this.dataFinalHospedagem = data}
    public set setAcomodacao(acomodacao: Acomodacao) {this.acomodacao = acomodacao}
    public set setTipoHospedagem(hospedagem: TipoHospedagem) {this.tipoHospedagem = hospedagem}   
}