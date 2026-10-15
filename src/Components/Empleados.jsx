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
        <table className='table table-striped' style={{width: '80%', margin: '0 auto'}}>
          <thead>
            <tr>
              <th>ID EMPLEADO</th>
              <th>APELLIDO</th>
              <th>OFICIO</th>
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
