import React from 'react'
import PesquisaBase from '../../componentes/PesquisaBase';
import { Link } from 'react-router-dom';

export default class PesquisaPessoa extends PesquisaBase {
   
    
    render() { 
        
        return (
             <PesquisaBase
                    definicaoTituloTela={<span>Pesquisa de pessoas</span>}
                    botoesPersonalizados={<span></span> }
                    linksPersonalizados={<span></span>}
                    camposFiltros={<span></span>}
                    tabelaResultado={
                        <div className="tabelaResultado">
                            <table  className="table table-hover">
                                <thead className="thead-light">
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Nome</th>
                                    <th scope="col">Endereço</th>
                                </tr>
                                </thead>
                                <tbody>
                                    {this.state.dados.map(dado =>
                                        <tr key={dado.id}>
                                            <td> <Link to={'/pessoas/cadastro/'+dado.id}>{dado.id}</Link> </td>  
                                            <td>{dado.nome}</td>  
                                            <td>{dado.endereco}</td>  
                                        </tr>
                                    )}
                                    
                                </tbody>    
                            </table>
                        </div>
                    }
            ></PesquisaBase>





            

        )        
    }            
  
}

