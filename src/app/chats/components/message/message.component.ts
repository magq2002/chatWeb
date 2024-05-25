import { Component, Input, ViewChild } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'chats-message',
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent {

  private readonly audiosUrl: string = environment.audiosUrl;
  isPlaying: boolean = false;

  @Input() audioName?: string;

  getAudioUlr(){
    return `${this.audiosUrl}/${this.audioName}`
  }

  @ViewChild('audio') audioPlayer: any;
  audioDuration: string = '';

  togglePlayPause() {
    if (this.isPlaying) {
      this.audioPlayer.nativeElement.pause();
    } else {
      this.audioPlayer.nativeElement.play();
    }
  }

  onAudioEnded() {
    this.isPlaying = false;
  }

  onAudioLoaded() {
    const duration = this.audioPlayer.nativeElement.duration;
    const minutes = Math.floor(duration / 60);
    const seconds = Math.floor(duration % 60);
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');
    this.audioDuration = `${formattedMinutes}:${formattedSeconds}`;
}

}
