import { Component, OnDestroy, inject } from '@angular/core';
import { AudioRecordingService, RecorderBlob } from '../../services/audio-recording.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'chats-microfone',
  templateUrl: './microfone.component.html',
  styleUrl: './microfone.component.css',
})
export class MicrofoneComponent implements OnDestroy {

  blobUrl: any;
  isRecording = false;
  startTime = '0:00'
  private recorderBlob!: RecorderBlob;

  private audioRecordingService = inject( AudioRecordingService );

  constructor(
    private readonly sanitizer: DomSanitizer
  ) {
    this.getRecordedBlob();
    this.audioRecordingService.getrecordingTime().subscribe( val => this.startTime = val);
    this.audioRecordingService.getrecordedFailed().subscribe( () => this.isRecording = false);
  }

  private getRecordedBlob() {
    this.audioRecordingService.getRecordedBlob().subscribe(data => {
      this.blobUrl = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(data.blob));
      this.recorderBlob = data;
    });
  }

  activeMic: boolean = false;

  toggleMic() {
    this.activeMic = !this.activeMic;
  }

  startRecording() {
    if ( !this.isRecording ) {
      this.isRecording = true;
      this.audioRecordingService.startRecording();
    }
  }

  stopRecording() {
    if ( !this.isRecording ) {
      this.isRecording = false;
      this.audioRecordingService.stopRecording();
    }
  }

  clearBlobData() {
    this.blobUrl = null;
  }

  sendAudio() {
    const link = document.createElement('a');
    link.href = URL.createObjectURL(this.recorderBlob.blob);
    link.download = this.recorderBlob.title;
    link.click();
    link.remove();
  }

  ngOnDestroy(): void {
    if( this.isRecording ) {
      this.isRecording = false;
      this.audioRecordingService.abortRecording();
    }
  }
}
