import Entrada from "../entradas/entrada";
import Cliente from "../modelos/cliente";
import Documento from "../modelos/documento";
import Cadastro from "./cadastro"
import CadastroDependentes from "./cadastroDependentes";
import Endereco from "../modelos/endereco";
import Telefone from "../modelos/telefone";
import { TipoDocumento } from "../enumeracoes/tipoDocumento";


export default class CadastroCliente extends Cadastro{
    cadastrar():Cliente {
        let entrada = new Entrada
        let cliente = new Cliente        
        let endereco = new Endereco
        let telefone = new Telefone
        let documento: Documento = new Documento
        let listaDocumento: Documento[] = []
        let listaTelefone: Telefone[] = []
        let cadastroDependentes = new CadastroDependentes
        let chave = true

        cliente.nome = entrada.receberTexto("Insira o nome do cliente: ")
        cliente.nomeSocial = entrada.receberTexto("Insira o nome social, se houver: ")
        cliente.dataNascimento = entrada.receberData("Insira a data de nascimento")
        cliente.dataCadastro = entrada.receberData("Insira a data de cadastro")
        
        while(chave){
            console.log("Escolha o tipo do documento digitando o número correspondente:\n1 - CPF\n2 - RG\n3 - Passaporte")
            let opcao = entrada.receberNumero("Escolha uma opção: ")
            switch(opcao){
                case 1:
                    documento.tipo = TipoDocumento.CPF;
                    documento.numero = entrada.receberTexto("Número do Documento: ")
                    documento.dataExpedicao  = entrada.receberData("Data de emissão do documento: ")
                    listaDocumento.push(documento)
                    break;
                case 2:
                    documento.tipo = TipoDocumento.RG;
                    documento.numero = entrada.receberTexto("Número do Documento: ")
                    documento.dataExpedicao  = entrada.receberData("Data de emissão do documento: ")
                    listaDocumento.push(documento)
                    break;
                case 3:
                    documento.tipo = TipoDocumento.Passaporte
                    documento.numero = entrada.receberTexto("Número do Documento: ")
                    documento.dataExpedicao  = entrada.receberData("Data de emissão do documento: ")
                    listaDocumento.push(documento)
                    break;
                default:
                    console.log("Opção invalida")
            }
            let escolha = entrada.receberTexto("Deseja cadastrar mais documentos (responda com sim ou nao): ")
            if (escolha == "nao" || escolha == "n") {break}
        }
        cliente.documentos = listaDocumento

        endereco.pais = entrada.receberTexto("Insira o país do endereço: ")
        endereco.rua = entrada.receberTexto("Insira a rua: ")
        endereco.bairro = entrada.receberTexto("Insira o bairro: ")
        endereco.cidade = entrada.receberTexto("Insira a cidade: ")
        endereco.estado = entrada.receberTexto("Insira o estado: ")
        endereco.codigoPostal = entrada.receberTexto("Insira o código postal: ")
        cliente.endereco = endereco

        while (chave) {
            telefone.ddd = entrada.receberTexto("Insira o DDD: ")
            telefone.numero = entrada.receberTexto("Insira o número: ")
            listaTelefone.push(telefone)
            let escolha = entrada.receberTexto("Deseja cadastrar mais telefones (responda com sim ou nao): ")
            if (escolha == "nao" || escolha == "n") {break}
        }
        cliente.telefones = listaTelefone

        cliente.dependentes = cadastroDependentes.cadastrar(cliente)
        
        return cliente
    }
}