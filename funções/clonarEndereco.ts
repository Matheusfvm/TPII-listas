import Prototipo from "../interfaces/prototipo";
import Cliente from "../modelos/cliente";
import Endereco from "../modelos/endereco";

export default class ClonarEndereco implements Prototipo{
    public clonar(titular:Cliente):Endereco {
        let endereco = new Endereco
        endereco.rua = titular.endereco.rua
        endereco.bairro = titular.endereco.bairro
        endereco.cidade = titular.endereco.cidade
        endereco.estado = titular.endereco.estado
        endereco.pais = titular.endereco.pais
        endereco.codigoPostal = titular.endereco.codigoPostal
        return endereco
    }
}