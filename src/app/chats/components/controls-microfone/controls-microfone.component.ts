import { Component, effect, inject } from '@angular/core';
import { AudioRecordingService, RecorderBlob } from '../../services/audio-recording.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'chats-controls-microfone',
  templateUrl: './controls-microfone.component.html',
  styleUrl: './controls-microfone.component.css'
})
export class ControlsMicrofoneComponent {

  private audioRecordingService = inject( AudioRecordingService );
  isRecording = this.audioRecordingService.getIsRecording();
  private recorderBlob!: RecorderBlob;
  blobUrl: any;

  public recording = effect(() => {
    this.isRecording = this.audioRecordingService.getIsRecording();
  })

  constructor(
    private readonly sanitizer: DomSanitizer
  ){
    this.getRecordedBlob();
  }

  private getRecordedBlob() {
    this.audioRecordingService.getRecordedBlob().subscribe(data => {
      this.blobUrl = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(data.blob));
      this.recorderBlob = data;
    });
  }

  stopRecording() {
    if ( this.isRecording ) {
      this.audioRecordingService.stopRecording();
    }
  }

  clearBlobData() {
    this.blobUrl = null;
    this.audioRecordingService.abortRecording();
  }

  sendAudio() {
    this.stopRecording();
    setTimeout(() => {
      this.audioRecordingService.sendAudio(this.recorderBlob).subscribe(
        response => {

        },
        error => {

        }
      );
    }, 200);
  }

  ngOnDestroy(): void {
    if( this.isRecording ) {
      this.audioRecordingService.abortRecording();
    }
  }
}
