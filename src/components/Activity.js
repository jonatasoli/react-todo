import React, { Component } from 'react';
export default class Activity extends Component {

    render(){
        return (

          <div className="CreateTodo">
            <div className="panel panel-default">
              <div className="panel-body">
                Criar Atividade
                <div className="input-group">
                <span className="input-group-btn">
                  <button className="btn btn-default" type="button">Criar</button>
                </span>
                <input type="text" className="form-control" placeholder="Digite sua atividade aqui..."/>
                </div> {/*- /input-group */}
                <br/>
                <span className="label label-default">Data para conclusão</span>
                <input type="text" className="form-control" planceholder="Formato dd/mm/aaaa"/>
              </div>
          </div>
          </div>

        );
    }
}
