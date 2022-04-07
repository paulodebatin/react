import React, { Component } from 'react'
import CrudService from '../servicos/CrudService';

export default  class CadastroBase extends Component {

  constructor(props) {  
      super(props);  
      this.gravar = this.gravar.bind(this);
      this.novo = this.novo.bind(this);
      this.clonar = this.clonar.bind(this);
      this.novaPesquisa = this.novaPesquisa.bind(this);
      this.excluir = this.excluir.bind(this);


  }; 

  componentWillMount = () => {
    this.setState({   
      dados : {}
    })

    var id = window.location.href.split('/')[window.location.href.split('/').length - 1];
    if  (id) {
        this.editar(id);
    } else {
        this.novo();
    }
    
  }

  limparMensagem = () => {
    this.setState({   
      mensagemSucesso: "",
      mensagemErro:""
    }); 
  }


  novo = () => {
    console.log("novo");
    this.props.entidade.nome="";

    this.limparMensagem();
    this.setState({   
      dados : {},
      nome : "",
      mensagemSucesso: "Novo",
      estadoFormulario: "INSERCAO"
    }); 
  }

  gravar = () => {
    console.log("gravar")
    console.log(this.state.dados)
    console.log("props="+this.props.entidade.nome)
    this.setState({   
      mensagemSucesso : "Registro gravado com sucesso!"
    }); 
  }
  
  editar  = (id) => {
      console.log("editar");
      this.limparMensagem();  
      CrudService.get(id)
        .then(response => {
          console.log(response.data)
          
          this.setState({   
            dados : response.data,
            nome : response.data.nome,
            estadoFormulario: "EDICAO"
          }); 
          this.props.entidade.nome=response.data.nome
        })
        .catch(e => {
          console.log(e);
        });
  };

  clonar = () => {
    console.log("clonar") 
    this.limparMensagem();
    this.setState({   
      estadoFormulario: "INSERCAO",
      mensagemSucesso : "Registro clonado com sucesso!"
    }); 
    
  }

  novaPesquisa = () => {
    console.log("pesquisar") 
  } 

  excluir = () => {
    console.log("excluir") 

    this.novo();
    this.setState({   
      mensagemSucesso : "Registro excluído com sucesso!"
    }); 
  }



  render() {
    console.log("render");
    return (
      <div className="cadastro">
      
        <form>


          <div id="divMensagens">
            {
              this.state.mensagemSucesso !== '' ? (
                  <div className="alert alert-primary" role="alert" id="div_mensagemSucesso">{this.state.mensagemSucesso}</div>
              ) : ""
            } 
            {
              this.state.mensagemErro !== '' ? (
                <div className="alert alert-danger"  role="alert" id="div_mensagemErro" >{this.state.mensagemErro}</div>
              ) : ""
            } 
          </div>

          <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Confirmação</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  Confirma a exclusão do registro?
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Não</button>
                  <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={this.excluir}>Sim</button>
                </div>
              </div>
            </div>
          </div>


          <div className="form-row">
            <div className="col-md-4"><p className="h4 text-primary">{this.props.definicaoTituloTela}</p> </div>
            <div className="col-md-8" id="barraBotoesCadastro">
              <button type="button" id="btnGravar" className="btn btn-primary" onClick={this.gravar}>Gravar</button>&nbsp;
              <button type="button" id="btnNovo" className="btn btn-primary" onClick={this.novo}>Novo</button>&nbsp;

              {this.state.estadoFormulario === 'EDICAO' ? (
                 <span><button type="button" id ="btnClonar" className="btn btn-primary" onClick={this.clonar}>Clonar</button>&nbsp;</span>
              ) : "" 
              }

              <button type="button" id="btnNovaPesquisa" className="btn btn-primary" onClick={this.novaPesquisa}>Nova pesquisa</button>&nbsp;

              {this.state.estadoFormulario === 'EDICAO' ? (
                   <span><button type="button" id="btnExcluir" className="btn btn-danger" data-toggle="modal" data-target="#exampleModal"> Excluir</button>&nbsp;</span>
                ) : ""
              }

              {this.props.definicaoBotoesPersonalizados}   
            </div>   
          </div>

          <hr/>

          <div>
              {this.props.definicaoLinksPersonalizados}   
          </div>  
          {this.props.definicaoCampos}   

        </form>

      </div>
    )
  }
}

