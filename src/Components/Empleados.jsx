import React, { Component } from 'react'
import ServicesEmpleados from '../Services/ServicesEmpleados';
export default class Empleados extends Component {

  Services = new ServicesEmpleados();
  state = {
    empleados: []
  }

  loadEmpleados() {
      this.Services.getEmpleados().then(empleados => {
          this.setState({ empleados });
      });
  }

  componentDidMount() {
    this.loadEmpleados();
  }

  render() {
    return (
      <div>
        <h1>Empleados del centro</h1>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>IdEmpleado</th>
              <th>Apellido</th>
              <th>oficio</th>
            </tr>
          </thead>
          <tbody>
            {this.state.empleados.map(empleado => (
              <tr key={empleado.IdEmpleado}>
                <td>{empleado.idEmpleado}</td>
                <td>{empleado.apellido}</td>
                <td>{empleado.oficio}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}
