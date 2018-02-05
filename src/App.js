import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Activity from './components/Activity';
import ListWeek from './components/Listweek';
import ListDone from './components/Listdone';
import ListLate from './components/Listlate';
import Menu from './components/Menu';

class App extends Component {

  constructor(){
    super();
    this.state = {result:[]};
  }

  componentDidMount(){
    fetch('http://localhost:8000/api/listweek/')
          .then(response => response.json())
          .then(result => {
              this.setState({result:result});
          });
  }


  render() {
    return (

<div id="layout">
    <Menu/>
    <div id="main">
        <div className="header">
            <h1>Activites - To do Quest</h1>
        </div>
        <div className="content">
            <Activity/>
          <div className="ListMakeWeek">
            <div className="panel panel-default">
              <div className="panel-body">
                <div className="panel panel-default">
                  {/* Default panel contents */}
                  <div className="panel-heading">Lista de atividades para a semana!</div>
                    {/*- Table */}
                    <table className="table">
                  <tbody>
                      <tr>
                        <td>Atividade</td>
                        <td>Data</td>
                        <td>Status</td>
                      </tr>
            {
                this.state.result.map(result =>  <ListWeek result={result}/>)
            }
              </tbody>
                  </table>
              </div>
          </div>
      </div>
  </div>
            <ListDone/>
            <ListLate/>
        </div>
    </div>
</div>
    );
  }
}

export default App;
