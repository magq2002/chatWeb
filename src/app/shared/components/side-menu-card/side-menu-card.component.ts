import { Component } from '@angular/core';
import { Chats } from '../../interfaces/chats';

@Component({
  selector: 'shared-side-menu-card',
  templateUrl: './side-menu-card.component.html',
  styleUrl: './side-menu-card.component.css'
})
export class SideMenuCardComponent {

  crypoBot: string = "/assets/bot-para-criptomonedas.webp";
  sportBot: string = "/assets/sport-bot.jpg";

  public users: Chats[] = [
    {id: 1, name: "Sport ChatBot", message:"Hola!, pregúntame algo...", date: "Hoy", number: 1, avatar: this.sportBot},
    {id: 2, name: "Miguel Galvez", message:"Vamos a ir el sábado", date: "Jueves", number: 2, avatar: this.crypoBot},
    {id: 3, name: "Maryuri", message:"El otro viernes", date: "Martes", number: 1, avatar: this.crypoBot},
    {id: 4, name: "Valentina", message:"Si vio eso", date: "Miercoles", number: 4, avatar: this.crypoBot},
    {id: 5, name: "Jhon", message:"Ahorita miro", date: "Domingo", number: 2, avatar: this.crypoBot},
    {id: 6, name: "Billy", message:"Mañana hago eso", date: "Jueves", number: 7, avatar: this.crypoBot},
    {id: 7, name: "Angular", message:"Signals al poder", date: "Jueves", number: 2, avatar: this.crypoBot},
    {id: 8, name: "Vue", message:"Svelte mi hijo", date: "Sábado", number: 3, avatar: this.crypoBot},
    {id: 9, name: "Java", message:"No se de java", date: "Viernes", number: 5, avatar: this.crypoBot},
  ]

}
