import { Component } from '@angular/core';
import { Chats } from '../../interfaces/chats';

@Component({
  selector: 'shared-side-menu-card',
  templateUrl: './side-menu-card.component.html',
  styleUrl: './side-menu-card.component.css'
})
export class SideMenuCardComponent {

  public users: Chats[] = [
    {id: 1, name: "Miguel Galvez", message:"Vamos a ir el sábado", date: "Jueves", number: 2},
    {id: 2, name: "Maryuri", message:"El otro viernes", date: "Martes", number: 1},
    {id: 3, name: "Valentina", message:"Si vio eso", date: "Miercoles", number: 4},
    {id: 4, name: "Jhon", message:"Ahorita miro", date: "Domingo", number: 2},
    {id: 5, name: "Camila", message:"Qué mas?", date: "Martes", number: 1},
    {id: 6, name: "Billy", message:"Mañana hago eso", date: "Jueves", number: 7},
    {id: 7, name: "Angular", message:"Signals al poder", date: "Jueves", number: 2},
    {id: 8, name: "Vue", message:"Svelte mi hijo", date: "Sábado", number: 3},
    {id: 9, name: "Java", message:"No se de java", date: "Viernes", number: 5},
  ]

}
