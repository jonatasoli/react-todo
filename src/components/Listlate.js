import React, { Component } from 'react';
export default class ListLate extends Component {

    render(){
        return (

          <div className="ListLate">
            <div className="panel panel-default">
             <div className="panel-heading">Lista de atividades atrasadas!</div>
              <div className="panel-body">
                    {/*- Table */}
                    <table className="table">
                <tbody>
                      <tr>
                        <td>Atividade</td>
                        <td>Data</td>
                        <td>Status</td>
                        <td><button type="button" className="btn btn-success">Concluir</button></td>
                      </tr>
                      <tr>
                        <td>Comprar pão</td>
                        <td>05/02/2017</td>
                        <td>Pendente</td>
                        <td><button type="button" className="btn btn-success">Concluir</button></td>
                      </tr>
                      <tr>
                        <td>Ir ao mercado</td>
                        <td>06/02/2017</td>
                        <td>Pendente</td>
                        <td><button type="button" className="btn btn-success">Concluir</button></td>
                      </tr>
                      <tr>
                        <td>Ir ao Pet Shop</td>
                        <td>06/02/2017</td>
                        <td>Pendente</td>
                        <td><button type="button" className="btn btn-success">Concluir</button></td>
                      </tr>
                      <tr>
                        <td>Happy Hour</td>
                        <td>07/02/2017</td>
                        <td>Pendente</td>
                        <td><button type="button" className="btn btn-success">Concluir</button></td>
                      </tr>
                </tbody>
                    </table>
              </div>
              </div>
          </div>

        );
    }
}
