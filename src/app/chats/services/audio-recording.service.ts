import { Injectable, inject, signal } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import * as recordRTC from 'recordrtc'
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

export interface RecorderBlob {
  blob: Blob,
  title: string,
}

@Injectable({
  providedIn: 'root'
})
export class AudioRecordingService {

  private http = inject( HttpClient );

  private readonly baseUrl: string = environment.baseUrl;
  private isRecording = signal<boolean>(false);

  private recorder: any;
  private startTime = 0;
  private interval = 0;
  private stream: MediaStream | null = null;

  private recordedBlob = new Subject<RecorderBlob>();
  private recordingTime = new Subject<string>();
  private recordedFailed = new Subject<string>();

  

  getIsRecording(): boolean {
    return this.isRecording();
  }

  startRecording() {
    if (!this.recorder) {
      this.isRecording.set(true);
      console.log(this.isRecording())
      this.recordingTime.next('0:00');
      navigator.mediaDevices.getUserMedia({audio: true})
      .then(stream => {
        this.stream = stream;
        this.record();
      })
      .catch( () => this.recordedFailed.next(''));
    }
  }

  private record() {
    if (this.stream) {
      this.recorder = new recordRTC.StereoAudioRecorder(this.stream, {
        type: 'audio',
        mimeType: 'audio/webm'
      });

      this.recorder.record();
    }

    this.startTimer();
  }

  private startTimer() {
    this.interval = window.setInterval(() => {
      this.startTime ++;
      this.recordingTime.next(this.timeFormat());
    }, 1000);
  }

  private timeFormat(): string {
    const minutes = Math.floor(this.startTime / 60);
    const seconds = this.startTime - ( minutes * 60 );
    return minutes + ':' + ( seconds < 10 ? '0' + seconds : seconds );
  }

  stopRecording() {
    if ( this.recorder ) {
      this.recorder.stop((blob: Blob) => {
        const title = encodeURIComponent('audio' + new Date().getTime + '.mp3');
        this.recordedBlob.next({ blob, title });
        this.stopMedia();
      }, () => {
        this.stopMedia();
        this.recordedFailed.next('');
      })
    }
  }

  private stopMedia() {
    if ( this.recorder ) {
      this.recorder = null;
      clearInterval(this.interval);
      this.startTime = 0;

      if ( this.stream ) {
        this.stream.getAudioTracks().forEach(track => track.stop());
        this.stream = null;
      }
    }
  }

  abortRecording() {
    this.isRecording.set(false);
    this.stopMedia()
  }

  getRecordedBlob(): Observable<RecorderBlob> {
    return this.recordedBlob.asObservable();
  }

  getrecordingTime(): Observable<string> {
    return this.recordingTime.asObservable();
  }

  getrecordedFailed(): Observable<string> {
    this.isRecording.set(false);
    return this.recordedFailed.asObservable();
  }

  sendAudio( recorderBlob : RecorderBlob ) {
    const url = `${this.baseUrl}/chatbot`;
    const formData = new FormData();
    formData.append('file', recorderBlob.blob, recorderBlob.title);
    
    return this.http.post(url, formData)
  }

}
