import { Injectable, inject, signal } from '@angular/core';
import { Observable, catchError, map, tap, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Message } from '../interfaces';


@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private http = inject( HttpClient );
  private readonly baseUrl: string = environment.baseUrl;
  private newMessages = signal<number>(0);


  getNewMessages() {
    return this.newMessages();
  }

  setNewMessages(_id: number) {
    this.newMessages.set(_id);
  }

  sendMessage(message: string, user: number): Observable<any> {
    const payload = {
      text: message,
      user: user
    };
    return this.http.post<Message>(`${this.baseUrl}/messages`, payload)
    .pipe(
      map ( ({_id}) => this.newMessages.set(_id)),
      catchError( err => throwError( () => err.error.message ))
    );
  }

  getMessage(id: number): Observable<any> {
    return this.http.get(`${ this.baseUrl }/messages/${id}`);
  }

  getAllMessages(): Observable<any> {
    return this.http.get(`${ this.baseUrl }/messages/`);
  }

}
