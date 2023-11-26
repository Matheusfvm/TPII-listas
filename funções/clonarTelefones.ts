import Prototipo from "../interfaces/prototipo";
import Cliente from "../modelos/cliente";
import Telefone from "../modelos/telefone";


export default class ClonarTelefone implements Prototipo{
    public clonar(titular:Cliente):Telefone[]{
        let listaTelefone:Telefone[] = []
        titular.telefones.forEach(telefone => {
            listaTelefone.push(telefone)
        });
        return listaTelefone
    }
}