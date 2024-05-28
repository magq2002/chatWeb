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
  private newMessages = signal<number[]>([]);


  getNewMessages() {
    return this.newMessages();
  }

  setNewMessages(data: number[]) {
    this.newMessages.set(data);
  }

  sendMessage(message: string, user: number): Observable<any> {
    const payload = {
      text: message,
      user: user
    };
    return this.http.post<Message>(`${this.baseUrl}/messages`, payload)
    .pipe(
      map ( ({_id, _idChat}) => this.newMessages.set([_id, _idChat])),
      catchError( err => throwError( () => err.error.message ))
    );
  }

  getMessage(data: number[]): Observable<any> {
    const [_id, _idChat] = data;
    return this.http.get(`${this.baseUrl}/messages/${_id}/${_idChat}`);
  }

  getAllMessages(): Observable<any> {
    return this.http.get(`${ this.baseUrl }/messages/`);
  }

}
