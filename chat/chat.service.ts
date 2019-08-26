import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

// Message class for displaying messages in the component
export class Message {
    constructor(public content: string, public sentBy: string, public timestamp: Date) { }
}
const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
}
@Injectable({
    providedIn: 'root'
})

export class ChatService {
    apiUrl: string = "https://polar-bayou-45040.herokuapp.com/get_data";

    constructor(private http: HttpClient) { }

    /** POST: add a new hero to the database */
    addHero(hero: Hero): Observable<Message> {
        return this.http.post<Hero>(this.apiUrl, hero, httpOptions)
            .pipe(
                catchError(this.handleError('addHero', hero))
            );
    }
}