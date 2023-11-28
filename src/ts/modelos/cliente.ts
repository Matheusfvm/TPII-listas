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

    public set setNome(nome: string) { this.nome = nome }
    public set setNomeSocial(nomeSocial: string) { this.nomeSocial = nomeSocial }
    public set setDataNascimento(dataNascimento: Date) { this.dataNascimento = dataNascimento }
    public set setEndereco(endereco: Endereco) { this.endereco = endereco }
    public set setTitular(titular: Cliente) {this.titular = titular}
    public set setDependentes(dependente: Cliente) {this.dependentes.push(dependente)}
    public set setDocumentos(documento: Documento) {this.documentos.push(documento)}
    public set setTelefones(telefone: Telefone[]) {this.telefones = telefone}    
}