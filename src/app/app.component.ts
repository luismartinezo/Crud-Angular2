import { Component } from '@angular/core';
import { Empleado } from './models/empleado';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CRUD';
  empleadoArray: Empleado[] = [
    {id: 1, name: 'Luis', country: 'COLOMBIA'},
    {id: 2, name: 'Carlos', country: 'MEXICO'},
    {id: 3, name: 'Ryan', country: 'USA'}
  ];

  // Esto instancia de nuevo el modelo cada que se inicie lo coloca en blanco
selectEmpleado: Empleado = new Empleado();

addOrEdit(){

  // Agregamos un dato mas al arreglo
  this.selectEmpleado.id = this.empleadoArray.length + 1;
  // Aca el empleado que esta llenando se guarda dentro del arreglo
  this.empleadoArray.push(this.selectEmpleado);

  // Para borrar los input luego de insertar
  this.selectEmpleado = new Empleado();
}

}
