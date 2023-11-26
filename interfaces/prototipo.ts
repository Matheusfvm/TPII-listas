import Cliente from "../modelos/cliente";

export default interface Prototipo {
    clonar(titular?:Cliente): any
}