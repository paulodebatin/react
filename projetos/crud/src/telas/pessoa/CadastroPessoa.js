import { React, Component } from 'react'
import CadastroBase from '../../componentes/CadastroBase';

export default class CadastroPessoa extends CadastroBase {

    entidade = {

    }

    render() { 
        console.log("rebder filho")
        let dados = {}
        if  (this.state && this.state.dados) {
            dados = this.state.dados       
           
        }
        
        return (

           
             <CadastroBase 
                entidade={this.entidade}
                definicaoTituloTela={<span>Cadastro de pessoas</span>}
                definicaoCampos={
                    <div className="definicacaoCampos">
                         <input value={this.entidade.nome}/>
                        <div className="form-row">
                            <div className="form-group col-md-2">
                                <label htmlFor="id">Id</label>
                                <input className="form-control" id="id" disabled={true}  value={dados.id}  name="id"/>
                            </div>
                            <div className="form-group col-md-10 required" > 
                                <label htmlFor="nome">Nome</label>
                                <input className="form-control" id="nome" value={dados.nome} placeholder="Nome" name="nome" required/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-10">
                                <label htmlFor="endereco">Endereço</label>
                                <input className="form-control" id="endereco" value={dados.endereco} placeholder="Endereço" name="endereco" />
                            </div>
                            <div className="form-group col-md-2">
                                <label htmlFor="numero">Número</label>
                                <input type="number" className="form-control" id="numero" value={dados.numero} placeholder="Número" name="numero"/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-10">
                                <label htmlFor="bairro">Bairro</label>
                                <input className="form-control" id="bairro" value={dados.bairro} placeholder="Bairro" name="bairro"/>
                            </div>
                            <div className="form-group col-md-2">
                                <label htmlFor="cep">Cep</label>
                                <input className="form-control" id="cep" value={dados.cep} placeholder="Cep" name="cep"/>
                            </div>
                        </div>



                    </div>    
                }
             >



                 
             </CadastroBase>
        )        
    }            
  
}

