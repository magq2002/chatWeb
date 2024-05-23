import { Component, OnDestroy, effect, inject } from '@angular/core';
import { AudioRecordingService, RecorderBlob } from '../../services/audio-recording.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'chats-microfone',
  templateUrl: './microfone.component.html',
  styleUrl: './microfone.component.css',
})
export class MicrofoneComponent {

  private audioRecordingService = inject( AudioRecordingService );


  isRecording = this.audioRecordingService.getIsRecording();

  public recording = effect(() => {
    this.isRecording = this.audioRecordingService.getIsRecording();
  })

  activeMic: boolean = false;

  toggleMic() {
    this.activeMic = !this.activeMic;
  }

  startRecording() {
    if ( !this.isRecording ) {
      this.audioRecordingService.startRecording();
    }
  }

}
