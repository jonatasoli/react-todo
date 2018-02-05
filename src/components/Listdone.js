import React, { Component } from 'react';
export default class ListDone extends Component {

    render(){
        return (

          <div className="ListDoneWeek">
            <div className="panel panel-default">
             <div className="panel-heading">Lista de atividades Concluídas!</div>
              <div className="panel-body">
                    {/*- Table */}
                    <table className="table">
              <tbody>
                      <tr>
                        <td>Atividade</td>
                        <td>Data</td>
                        <td>Status</td>
                      </tr>
                      <tr>
                        <td>Comprar pão</td>
                        <td>05/02/2017</td>
                        <td>Concluído</td>
                      </tr>
                      <tr>
                        <td>Ir ao mercado</td>
                        <td>06/02/2017</td>
                        <td>Concluído</td>
                      </tr>
                      <tr>
                        <td>Ir ao Pet Shop</td>
                        <td>06/02/2017</td>
                        <td>Concluído</td>
                      </tr>
                      <tr>
                        <td>Happy Hour</td>
                        <td>07/02/2017</td>
                        <td>Concluído</td>
                      </tr>
                </tbody>
                    </table>
                </div>
              </div>
          </div>
        );
    }
}
