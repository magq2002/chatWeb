import { Component } from '@angular/core';

@Component({
  selector: 'shared-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

activeMic:boolean =false;

toggleMic(){
  this.activeMic = !this.activeMic;
}

}
