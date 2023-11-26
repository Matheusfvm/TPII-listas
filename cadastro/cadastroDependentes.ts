import Entrada from "../entradas/entrada";
import { TipoDocumento } from "../enumeracoes/tipoDocumento";
import ClonarTelefone from "../funções/clonarTelefones";
import Cliente from "../modelos/cliente";
import Documento from "../modelos/documento";
import Cadastro from "./cadastro";


export default class CadastroDependentes extends Cadastro{
    cadastrar(titular:Cliente):Cliente[] {
        let entrada = new Entrada
        let clonarTelefone = new ClonarTelefone
        let documento = new Documento
        let listaDocumento: Documento[] = []
        let dependentes:Cliente[] = []
        let chave = true
        let haDependentes = entrada.receberTexto("Há dependentes? (responda sim ou nao): ")
        if(haDependentes === 'sim' || haDependentes === 's'){
            while(true){
                let dependenteCadastrando:Cliente = new Cliente                
                dependenteCadastrando.nome = entrada.receberTexto("Inserir nome do dependente: ")
                dependenteCadastrando.nomeSocial = entrada.receberTexto("Inserir nome social do dependente, se houver: ")
                dependenteCadastrando.dataCadastro = entrada.receberData("Insira a data de cadastro do dependente: ")
                dependenteCadastrando.dataNascimento = entrada.receberData("Insira data de nascimento do dependente: ")                
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
                    let escolha = entrada.receberTexto("Deseja cadastrar mais documentos (responda com sim ou nao) :")
                    if (escolha == "nao" || escolha == "n") {break}
                }
                dependenteCadastrando.documentos = listaDocumento
                dependenteCadastrando.endereco = titular.endereco.clonar()
                dependenteCadastrando.telefones = clonarTelefone.clonar(titular)
                dependenteCadastrando.titular = titular
                dependentes.push(dependenteCadastrando)
                let continuar = entrada.receberTexto("Cadastrar mais dependentes? (responda sim ou nao)")
                if(continuar == 'nao' || continuar == 'n'){break;}
            }   
        }
        return dependentes
    }
}