import React, { Component } from 'react';

// Form
import { FaPlus } from 'react-icons/fa';

import './Main.css';
import { FaTrash, FaEdit } from 'react-icons/fa';

export default class Main extends Component {
  state = {
    novaTarefa: '',
    tarefas:[
      'Fazer café',
      'Beber água',
      'Estudar',
    ]
  }

  handleChange = (e) => {
    this.setState({novaTarefa: e.target.value})
  }

  render() {
    const { novaTarefa, tarefas } = this.state;

    return (
      <div className="main">
        <h1>Lista de tarefas</h1>
        <form action="#" className="form">
          <input onChange={this.handleChange} type="text"/>
          <button type="submit">
            <FaPlus />
          </button>
        </form>

        <ul className="tarefas">
          {tarefas.map(tarefa => (
            <li key={tarefa}>{tarefa}
              <div>
                <FaEdit className='edit '/>
                <FaTrash className='delete' />
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
