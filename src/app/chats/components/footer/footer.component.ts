import { Component, effect, inject } from '@angular/core';
import { AudioRecordingService } from '../../services/audio-recording.service';

@Component({
  selector: 'chats-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  private audioRecordingService = inject( AudioRecordingService );
  isRecording = this.audioRecordingService.getIsRecording();
  startTime: string = '0:00';
  
  public recording = effect(() => {
    this.isRecording = this.audioRecordingService.getIsRecording();
  })

  constructor(
  ){
    this.audioRecordingService.getrecordingTime().subscribe( val => this.startTime = val);
  }

}
