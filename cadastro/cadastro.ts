import Cliente from "../modelos/cliente";

export default abstract class Cadastro {
    abstract cadastrar(titular?:Cliente):any
}