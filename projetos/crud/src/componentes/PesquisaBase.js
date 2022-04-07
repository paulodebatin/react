import React, { Component } from 'react'
import CrudService from '../servicos/CrudService';


export default class PesquisaBase extends Component {

  constructor(props) {  
      super(props);  
      this.pesquisar = this.pesquisar.bind(this);
      this.novo = this.novo.bind(this);
      this.state = {
        dados: []
      }
      
  };    

  
  componentDidMount() {
    this.pesquisar();
  }

  pesquisar  = () => {
      CrudService.getAll()
        .then(response => {
          this.setState({   
            dados : response.data
          }); 
        })
        .catch(e => {
          console.log(e);
        });
  };

  novo = () => {
    console.log("novo")
    console.log(this)
  }


  render() {
    return (
      <div className="pesquisa">
        <form>
            <div className="form-row">
            <div className="col-md-4">
                <p className="h4 text-primary">{this.props.definicaoTituloTela}</p> 
            </div>
            <div className="col-md-8" id="barraBotoesPesquisa">
              <button type="button" id="btnPesquisar" className="btn btn-primary" onClick={this.pesquisar}>Pesquisar</button>&nbsp;&nbsp;
              <button type="button" id="btnNovo" className="btn btn-primary" onClick={this.novo}>Novo</button>&nbsp;&nbsp;
              {this.props.botoesPersonalizados}  
            </div> 
          </div>  
          

            <hr/>

            {this.props.linksPersonalizados}  

            <div id="camposFiltros">
                {this.props.camposFiltros}            
            </div>

            <div id="tabelaResultado">
                {this.props.tabelaResultado}            
            </div>

            <nav aria-label="Page navigation example">
              <ul className="pagination justify-content-end">
                <li className="page-item disabled">
                  <a className="page-link" href="#" tabIndex="-1">Anterior</a>
                </li>
                <li className="page-item"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item">
                  <a className="page-link" href="#">Próximo</a>
                </li>
              </ul>
            </nav>

        </form>

      </div>
    )
  }

}

