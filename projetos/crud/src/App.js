import React from 'react'
import { Route, Switch } from 'react-router-dom'
 
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import PesquisaPessoa from './telas/pessoa/PesquisaPessoa';
import CadastroPessoa from './telas/pessoa/CadastroPessoa';


export default function App() {
  return (


    <div id="app">
      
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle"  href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Cadastros
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Pessoa</a>
                    <a className="dropdown-item" href="#">Produto</a>
                  </div>
                </li>
              </ul>
            </div>  
        </nav>

    

        <div className="mt-3">
          <Switch>
            <Route path="/pessoas/cadastro/:id" component={CadastroPessoa} />
            <Route path="/pessoas/cadastro" component={CadastroPessoa} />
            <Route path="/pessoas" component={PesquisaPessoa} />
          </Switch>
        </div>

     </div>   




  );
}


