import React, { Component } from 'react';

class ListActivities extends Component {
    render(){
        return (

                      <tr>
                        <td>{this.props.result.description}</td>
                        <td>{this.props.result.date}</td>
                        <td>{this.props.result.status}</td>
                        <td><button type="button" className="btn btn-success">Concluir</button></td>
                      </tr>

        );
    }
}


export default class ListWeek extends Component {

    render(){
        return (

                      <ListActivities result={this.props.result}/>

        );
    }
}
